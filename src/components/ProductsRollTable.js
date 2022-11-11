import stol_a from "../images/stol_a.jpg";
import stol_b from "../images/stol_b.jpg";
import stol_c from "../images/stol_c.jpg";

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
    label: "Стол Zucchini",
    imgPath: stol_a,
  },
  {
    label: "Стол Zucchini",
    imgPath: stol_b,
  },
  {
    label: "Стол Zucchini",
    imgPath: stol_c,
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
    <div>
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
            maxWidth: 1200,
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
          <p>Мощная и в тоже время стильная столешница письменного стола изготовлена из натуральной древесины с неповторимым рисунком текстуры питонового окраса. Она непременно украсит Ваше помещение, придав ему оригинальности и эстетичности!
          Стол можно многократно собирать и разбирать для комфортной транспортировки!</p>
          <p>В отличие от столешниц из ЛДСП, столешницы из натурального дерева не содержат составе формальдегидных смол, поэтому они безопасны для здоровья. А при попадании воды, они не разбухают и не вздувается, благодаря чему служат гораздо дольше, чем столешницы из склеенных опилок).
          Уникальная технология термической обработки древесины обеспечивает дополнительную твердость и устойчивость столешницы к механическим воздействиям (царапины, вмятины, сколы).</p>
          <p>Долговечность конструкции также обеспечена каркасом из профиля толщиной 2мм, надежными резьбовыми соединениями, а столешница толщиной 40мм пропитана премиальным немецким маслом и восковой лазурью марки BORMA, которое защищает древесину от атмосферных воздействий, грибков и насекомых, а также подчеркивает ее естественный цвет и натуральную красоту.</p>
        </Typography>

      </div>
    </div>
  );
};

export default ProductsRoll;