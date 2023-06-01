import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Bottom.css";
import img from '../../../Assets/laptop.png'
import img2 from '../../../Assets/dimensions.png'
import img3 from '../../../Assets/animation.png'

const Bottom = () => {

  const [state, setState] = useState({
    options: {
      colors: ['#1a0856', '#9a4df1'],
      chart: {
        id: 'basic-bar',
        toolbar:{
          show: true,
          tools: {
            selection: false,
            zoom: false, 
            zommin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width"10">',
            customIcons: []
          }
        },
      },

      xaxis:{
        categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
      }
    },
    series: [
      {
        name: 'Updates',
        data: [25, 33, 13, 89, 34, 20, 30]
      },
      {
        name: 'Novas Tarefas',
        data: [70, 47, 72, 45, 12, 59, 38]
      }
    ]
  })

  return (
    <div className='Bottom flex'> 

      <div className="graphDiv">
        <span className="title">Todas Atividaes (Gráfico)</span>

        <Chart
          options = {state.options}
          series = {state.series}
          type = 'area'
          width = '500'
        />
      </div>

      <div className="scheduleDiv">
        <span className="title">Próximas Tarefas</span>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Apresentação Protótipo Sujo</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">08:30</span>
        </div>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img2} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Treinamento IA</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">10:30</span>
        </div>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img3} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Realinhar estratégias</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">11:30</span>
        </div>

        <div className="btn">
          Ver todas atividades
        </div>

      </div>

    </div>
  )
}

export default Bottom