import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  simpleTextProp?: string;
}

const BaseTemplate = ({ simpleTextProp }: BaseTemplateProps) => {
  return <div className={styles.container}>{simpleTextProp}</div>;
};

export default BaseTemplate;
