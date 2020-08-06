import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Grid, Card, CardContent, CardActions } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
    height:'500px'
  },
  button: {
    margin: theme.spacing(1),
  },
  boton:{
      margin:'0 auto',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default function FormPizza(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    nombre:"",
    precio:'',
    descripcion:"",
    ingredientes:'',
    size:'',
    ranking:'0'
  });

  const [numero, setNumero] = React.useState({
    numero:""
  });

  const agregarNumero = (event) => {
    setNumero({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
      
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(values);
      props.addPizza(values);
  }

  return (
    <div className={classes.root}>
    <Container  maxWidth="sm">
        <Grid container alignItems="center" alignContent="center" justify="center" >
            <Grid item xs={12}>
                <Card>
                    <form className={classes.root}  autoComplete="off" onSubmit={handleSubmit}>
                        <CardContent>
                                <TextField
                                id="nombre"
                                label="Nombre"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                placeholder="Nombre de la Pizza"
                                variant="filled"
                                onChange={handleChange}
                                value={values.nombre}
                                name="nombre"
                                required
                                />
                                <TextField
                                id="descripcion"
                                label="Descripción"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                placeholder="Frase para el catalogo"
                                variant="filled"
                                onChange={handleChange}
                                value={values.descripcion}
                                name="descripcion"
                                required
                                />
                                <TextField
                                id="ingredientes"
                                label="Ingredientes"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                placeholder="Ingrediente1,ingrediente2,,,"
                                variant="filled"
                                onChange={handleChange}
                                value={values.ingredientes}
                                name="ingredientes"
                                required
                                />
                                <TextField
                                    id="precio"
                                    label="Precio"
                                    value={numero.numero}
                                    onChange={agregarNumero}
                                    style={{ margin: 8 }}
                                    name="precio"
                                    placeholder="$0"
                                    InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    }}
                                    variant="filled"
                                    required
                                />
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="size">Tamaño</InputLabel>
                                    <Select
                                    labelId="size"
                                    id="size"
                                    value={values.size}
                                    onChange={handleChange}
                                    label="Tamaño"
                                    name="size"
                                    required
                                    >
                                    <MenuItem value={"Chica"}>Chica</MenuItem>
                                    <MenuItem value={"Mediana"}>Mediana</MenuItem>
                                    <MenuItem value={"Grande"}>Grande</MenuItem>
                                    </Select>
                                </FormControl>
                        </CardContent>
                        <CardActions disableSpacing>
                            <div className={classes.boton}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<SendIcon></SendIcon>}
                                    fullWidth
                                    type="submit"
                                >
                                    Guardar
                                </Button>
                            </div>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    </Container>
    </div>
  );
}