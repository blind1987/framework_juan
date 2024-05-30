
<div class="container mt-2">
	<div class="row mt-2 justify-content-center">
		<div class="col mt-2">
			<div class="card">
				<div class="card-body">
					<form action="/insertar" method="post" class="form">
						<label for="nombre" class="form-label">Nombre del producto</label>
						<input type="text" name="nombre" id="nombre" class="form-control">
						<label for="categoria">Categoria</label>
						<select name="categoria" id="categoria" class="form-select">
							<option value=""></option>
							<option value="Lacteos">Lacteos</option>
							<option value="Cocina">Cocina</option>
							<option value="Abarrotes">Abarrotes</option>
							<option value="Sanitario">Sanitario</option>
							<option value="Casa y jardin">Casa y jardin</option>
							<option value="Carnes frias">Carnes frias</option>
							<option value="Semillas">Semillas</option>
						</select>
						<label for="caducidad">Caducidad</label>
						<input type="date" name="caducidad" id="caducidad" class="form-control">
						<label for="lote">Lote</label>
						<input type="text" name="lote" id="lote" class="form-control">
						<label for="costo">Costo</label>
						<input type="number" name="costo" id="costo" class="form-control">
						<br>
						<div class="col">
							<button class="btn btn-success" style="float: right;">Ingresar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
