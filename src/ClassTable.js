import React from 'react';

const ClassTable = (props) => {
  const { classes } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Class Name</th>
        </tr>
        {props.classes.map((classes) => {
          return (
            <tr key={classes.index} onClick={() => console.log(classes.url)}>
              <th>{classes.name}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClassTable;
