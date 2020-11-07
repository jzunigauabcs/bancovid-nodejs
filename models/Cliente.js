modules.exports =  class Cliente {
	constructor(nombre, apellidoPaterno, apellidoMatenro, email, password, fechaNacimiento, callePrincipal, calleSecundaria, colonia, cp, telefono) {
		this.nombre = nombre;
		this.apellidoPaterno = apellidoPaterno;
		this.apellidoMaterno = apellidoMaterno;
		this.email = email;
		this.password = password;
		this.fechaNacimiento = fechaNacimiento;
		this.callePrincipal = callePrincipal;
		this.calleSecundaria = calleSecundaria;
		this.colonia = colonia;
		this.cp = cp;
		this.telefono = telefono;
	}
}
