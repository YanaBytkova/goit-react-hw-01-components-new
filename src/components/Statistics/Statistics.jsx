import css from './Statistics.module.css';


export const Statistics = ({ stats, title = false }) => {
    // const difColor = () => {
    //     function getRandomHexColor() {
    //     return `#${Math.floor(Math.random() * 16777215)
    //       .toString(16)
    //       .padStart(6, 0)}`;
    //     }
      
    //     let randomColor = getRandomHexColor();
    //     console.log("color",randomColor);
    //     }
    
    // const statsStylesFirst = {
    //     backgroundColor: difColor(),
    //   };
    //   const statsStylesSecond = {
    //     backgroundColor: difColor(),
    //   };
    //   const statsStylesThird = {
    //     backgroundColor: difColor(),
    //   };
    //   const statsStylesFourth = {
    //     backgroundColor: difColor(),
    //   };
  return (
    <div className={css.container}>
    <section className={css.statistics}>
    {title && <h2 className={css.title}>Upload stats</h2>}
  
    <ul className={css.statList}>
      <li className={css.item}>
        <span className={css.label}>.docx</span>
        <span className={css.percentage}>{stats[0].percentage}%</span>
      </li>
      <li className={css.item} >
        <span className={css.label}>.mp3</span>
        <span className={css.percentage}>{stats[2].percentage}%</span>
      </li>
      <li className={css.item} >
        <span className={css.label}>.pdf</span>
        <span className={css.percentage}>{stats[1].percentage}%</span>
      </li>
      <li className={css.item} >
        <span className={css.label}>.mp4</span>
        <span className={css.percentage}>{stats[3].percentage}%</span>
      </li>
    </ul>
  </section>
  </div>
  );
};
