import {titulo, empleados} from './data.js'
import {convertBooleanToText, addRow} from './JrmLib.js'

h1Titulo.innerText = titulo

empleados.forEach(empleado => addRow(tableEmpleados, empleado))