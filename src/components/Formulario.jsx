


const Formulario = () => {
    return (
        <div className="contenedor">
<form>
<div className="campo">
<label htmlFor="ciudad">Ciudad:</label>
<input type="text" name="ciudad" id="ciudad" />
</div>
<div className="campo">
<label htmlFor="pais">País:</label>
<select name="pais" id="pais">
<option value="">-- Seleccione un país --</option>
<option value="US">Estados Unidos</option>
<option value="MX">México</option>
<option value="AR">Argentina</option>
<option value="CO">Colombia</option>
<option value="CR">Costa Rica</option>
<option value="ES">España</option>
<option value="PE">Perú</option>

</select>
</div>
<div className="contenedor">
<input type="submit" value="Buscar Clima" className="button" />
</div>  

</form>

        </div>


    )
}

export default Formulario