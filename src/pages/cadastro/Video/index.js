import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({});
  // prettier-ignore
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event)=>{
        event.preventDefault();
        console.log('Video cadastrado')
      }}
      >
        <FormField
          label="Título do Video"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
