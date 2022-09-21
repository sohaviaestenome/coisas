import React from "react";
import { useForm } from "react-hook-form";
import { addCoisa } from "../../apis/coisas";
import './CreateCoisaForm.css';

export const CreateCoisaForm = (props) => {
  const { setCoisaLength, handleClose, coisaLength } = props;
  const { register, handleSubmit } = useForm();

  return (
    <form
    onSubmit={handleSubmit((data) => {
      addCoisa(data.item, data.origem, data.destino, data.quantidade).then(res => {
        setCoisaLength(coisaLength+1);
      })
      handleClose();
    })}
  >
    <div className="forms">
      <div>
        <label htmlFor="item">Item</label>
        <input placeholder="coisa" {...register("item")} />
      </div>
      <div>
        <label htmlFor="origem">Origem</label>
        <input placeholder="lisboa" {...register("origem")} />
      </div>
      <div>
        <label htmlFor="destino">Destino</label>
        <input placeholder="caldas" {...register("destino")} />
      </div>
      <div>
        <label htmlFor="quantidade">Quantidade</label>
        <input type="number" min = "1" {...register("quantidade",{
          valueAsNumber: true,
        })}/>
      </div>
    </div>
    <input type="submit" />
    </form>
  );
};