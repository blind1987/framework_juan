<?php

use config\Route;

$dependencia = new Route();

?>
<div class="container mt-2">
	<div class="row mt-2 justify-content-center">
		<div class="col mt-2">
			<div class="card">
				<div class="card-body">
					<form action="/actualizar" method="post" class="form">
						<label for="nombre" class="form-label">Nombre del producto</label>
						<input type="text" name="id" id="id" value="<?php echo $datos['id_producto']?>" hidden>
						<input type="text" name="nombre" id="nombre" class="form-control" value="<?php echo $datos['nombre']; ?>">
						<label for="categoria">Categoria</label>
						<select name="categoria" id="categoria" class="form-select">
							<option value=""></option>
							<option value="Lacteos" <?php if($datos['categoria']== 'Lacteos') echo 'selected';?>>Lacteos</option>
							<option value="Cocina" <?php if($datos['categoria']== 'Cocina') echo 'selected';?>>Cocina</option>
							<option value="Abarrotes" <?php if($datos['categoria']== 'Abarrotes') echo 'selected';?>>Abarrotes</option>
							<option value="Sanitario" <?php if($datos['categoria']== 'Sanitario') echo 'selected';?>>Sanitario</option>
							<option value="Casa y jardin" <?php if($datos['categoria']== 'Casa y jardin') echo 'selected';?>>Casa y jardin</option>
							<option value="Carnes frias" <?php if($datos['categoria']== 'Carnes frias') echo 'selected';?>>Carnes frias</option>
							<option value="Semillas" <?php if($datos['categoria']== 'Semillas') echo 'selected';?>>Semillas</option>
						</select>
						<label for="caducidad">Caducidad</label>
						<input type="date" name="caducidad" id="caducidad" class="form-control" value="<?php echo $datos['caducidad'];?>">
						<label for="lote">Lote</label>
						<input type="text" name="lote" id="lote" class="form-control" value="<?php echo $datos['lote'];?>">
						<label for="costo">Costo</label>
						<input type="number" name="costo" id="costo" class="form-control" value="<?php echo $datos['costo'];?>">
						<br>
						<div class="col">
							<button class="btn btn-warning" style="float: right;">Actualizar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
