/**
 * Tabs Component
 * Компонент табов для переключения между категориями
 * Поддерживает управление через Redux или локальное состояние
 */

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTab } from "@/store/slices/uiSlice";
import styles from "./Tabs.module.scss";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  useRedux?: boolean;
  tabGroupId?: string; // Для разных групп табов на странице
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  useRedux = true,
  tabGroupId = "default",
}) => {
  const dispatch = useAppDispatch();
  const reduxActiveTab = useAppSelector((state) => state.ui.activeTab);
  const [localActive, setLocalActive] = React.useState<string>(
    defaultTab || tabs[0]?.id
  );

  const currentActive = useRedux
    ? reduxActiveTab || defaultTab || tabs[0]?.id
    : localActive;

  const handleTabChange = (tabId: string) => {
    if (useRedux) {
      dispatch(setActiveTab(tabId));
    } else {
      setLocalActive(tabId);
    }
  };

  // Инициализация активного таба
  React.useEffect(() => {
    if (useRedux && defaultTab && !reduxActiveTab) {
      dispatch(setActiveTab(defaultTab));
    }
  }, [useRedux, defaultTab, reduxActiveTab, dispatch]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsNav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabBtn} ${
              currentActive === tab.id ? styles.active : ""
            }`}
            onClick={() => handleTabChange(tab.id)}
            data-tab={tab.id}
            data-group={tabGroupId}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabsContent}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tabPane} ${
              currentActive === tab.id ? styles.active : ""
            }`}
            id={tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
