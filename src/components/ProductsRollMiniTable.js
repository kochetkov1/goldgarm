import stolik_a from "../images/stolik_a.jpg";
import stolik_b from "../images/stolik_b.jpg";

import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const MyCollection = [
  {
    label: "Приставной стол Eggplant",
    imgPath: stolik_a,
  },
  {
    label: "Приставной стол Eggplant",
    imgPath: stolik_b,
  },
];

const ProductsRoll = () => {
  const CollectionSize = MyCollection.length;
  // const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div
      style={{
        marginTop: 70,
      }}
    >
      <div
        style={{
          maxWidth: 800,
          flexGrow: 1,
        }}
      >

        <Paper
          square
          elevation={0}
          style={{
            maxWidth: 800,
            width: '100%',
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: '#000',
            borderTop: '1px solid dimgray',
          }}
        >

          <Typography
            style={{
              font: "inherit",
              fontSize: 20,
              color: 'white',
              backgroundColor: '#000',
            }}
          >
            {MyCollection[index].label}
          </Typography>

        </Paper>
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: 800,
            display: "block",
            overflow: "hidden",
          }}
          alt={MyCollection[index].label}
        />

        <MobileStepper
          variant="dots"
          position="static"
          index={index}
          activeStep={index}
          steps={CollectionSize}
          style={{
            borderBottom: '1px solid dimgray',
            backgroundColor: '#000',
          }}

          backButton={
            <Button
              size="small"
              onClick={goToPreviousPicture}
              disabled={index === 0}
            >

              <KeyboardArrowLeft
                style={{
                  color: 'white',
                }}
              />

            </Button>
          }
          nextButton={
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >

              <KeyboardArrowRight
                style={{
                  color: 'white',
                }}
              />

            </Button>
          }
        />

        <Typography
          style={{
            font: "inherit",
            fontSize: 14,
            color: 'white',
            backgroundColor: '#000',
            borderBottom: '1px solid dimgray',
          }}
        >
          <p>Стильная столешница приставного стола изготовлена из натуральной термически обработанной сосны с неповторимым рисунком текстуры питонового окраса. Она непременно украсит Ваше помещение, придав ему оригинальности и эстетичности!
            Увеличенные размеры столешницы позволят комфортно разместить ноутбук стандартного размера (15,6 дюймов), а сзади ноутбука еще останется дополнительное место для блокнота и чашки кофе.</p>
          <p>Большинство прикроватных столов данного типа имеют размеры поверхности 320 х 400 мм. Мы учли пожелания наших клиентов и увеличили их до 400 х 500 мм, для максимально комфортного использования.</p>
          <p>В отличие от столешниц из ЛДСП, столешницы из натурального дерева не содержат составе формальдегидных смол, поэтому они безопасны для здоровья. А при попадании воды, они не разбухают и не вздувается, благодаря чему служат гораздо дольше, чем столешницы из склеенных опилок).
            Уникальная технология термической обработки древесины обеспечивает дополнительную твердость и устойчивость столешницы к механическим воздействиям (царапины, вмятины, сколы).</p>
          <p>Столешница пропитана премиальным немецким маслом и восковой лазурью марки BORMA, которое придает древесине влагоотталкивающие свойства, защищает от атмосферных воздействий, грибков и насекомых, а также подчеркивает ее естественный цвет и натуральную красоту.</p>
          <p>Мы позаботились и о надежности наших прикроватных столов, усилив их конструкцию дополнительными ножками (4, вместо 2). Благодаря этому увеличивается срок службы изделия и обеспечивается уверенная устойчивость, а значит и сохранность вещей, которые вы будете хранить на вашем приставном столике.</p>
        </Typography>

      </div>
    </div>
  );
};

export default ProductsRoll;