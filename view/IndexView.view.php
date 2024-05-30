<?php
	use config\Route;

	$informacion = new Route();

	//$dependencia->redireccion('nuevo');
?>

<div class="container mt-2">
	<div class="row mt-2 justify-content-center">
		<div class="col mt-2">
			<nav class="navbar navbar-light bg-light">
				<a href="/nuevo" class="btn btn-outline-success me-2" type="button">Nuevo Producto</a>
			</nav>
		</div>
	</div>

	<div class="card">
		<div class="card-header">
			<h3 class="text-center">Inventario</h3>
		</div>
		<div class="card-body">
			<table class="table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Lote</th>
						<th>Costo</th>
						<th>Caducidad</th>
						<th>Categoria</th>
						<th>Acciones</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<?php
						if(isset($datos) && is_array($datos)){
							foreach ($datos as $data):

					?>
					<tr>
						<td><?php echo $data["nombre"]; ?></td>
						<td><?php echo $data["lote"]; ?></td>
						<td><?php echo $data["costo"]; ?></td>
						<td><?php echo $data["caducidad"]; ?></td>
						<td><?php echo $data["categoria"]; ?></td>
						<td><a href="/editarProducto/<?=$data['id_producto']?>" class="btn btn-warning">Editar</a></td>
						<td><a href="/eliminarProducto/<?=$data['id_producto']?>" class="btn btn-danger">Eliminar</a></td>
					</tr>
					<?php
							endforeach;
						} else {
							echo "<tr><td colspan='12' class='text-center'>No hay productos disponibles</td></tr>";
						}
					?>
				</tbody>
			</table>
		</div>
	</div>
</div>
