import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Pets',
    imgPath:
      'https://www.rbsdirect.com.br/imagesrc/17988419.jpg?w=700',
  },
  {
    label: 'Cão e gato',
    imgPath:
      'https://exame.com/wp-content/uploads/2020/01/gettyimages-1168451046.jpg',
  },
  {
    label: 'Cao e gato amigos',
    imgPath:
      'https://blog.maxieduca.com.br/wp-content/uploads/2019/03/Imagem-1.jpg',
  },
  {
    label: 'Coelho',
    imgPath:
      'https://imagens.ebc.com.br/kGxSgT-16RZLkhoJRFseS_aLuzI=/1100x370/smart/https://memoria.ebc.com.br/sites/_portalebc2014/files/atoms_image/pascoa_-_coelho_fofinho_-_william_warbyl_cc.jpg',
  },
  {
    label: 'Tartaruga',
    imgPath:
      'https://meusanimais.com.br/wp-content/uploads/2018/05/Tartaruga-africana-comendo-1.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40rem',
 //  height:'20rem',
    flexGrow: 1,
    marginLeft:'auto',
    marginRight: 'auto',

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
   // backgroundColor: theme.palette.background.default,
    marginLeft:'auto',
    marginRight: 'auto',
    backgroundColor:'#B0BEC5',
  },
  rodape:{
    backgroundColor:'#B0BEC5',

  },
  img: {
   height: '20rem',
    display: 'block',
    alignItems:'center',
  
  //  maxWidth: "50rem",
    overflow: 'hidden',
    width: '100%',
  },
}));

function Imagens() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      className={classes.rodape}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Próximo
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Anterior
          </Button>
        }
      />
    </div>
  );
}

export default Imagens;
