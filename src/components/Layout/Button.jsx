import {useNavigate} from 'react-router-dom';

function Button({ion_icon, to, alert}){
	const navigate = useNavigate()
	const text = alert?alert:'Tem certesa que deseja sair?';

	function logout(){
		if(!window.confirm(text)) return;
		localStorage.clear();
		navigate(to?to:'');
	}

	return (
		<ion-icon
			onClick={logout}
			name={ion_icon}
		></ion-icon>
	)
}

export default Button;