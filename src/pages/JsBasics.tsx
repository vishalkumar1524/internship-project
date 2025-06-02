import { IonContent, IonPage } from '@ionic/react';
import React from 'react'

const JsBasics:React.FC = () => {
  const abc =20;
  const bac =abc;
  console.log("abc:",abc)
  console.log("abc value:",bac)

  if(abc===20){
        console.log("hello");
  }
  return (
<IonPage>
        <IonContent>
<div>abc: {abc}</div>
{bac ==abc&&(
    <div>
        bac:{bac}
</div>
)}
</IonContent>
</IonPage>
);
};

export default JsBasics;
