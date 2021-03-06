import React, { Component } from 'react';
import Clock from './Clock';
import withTimer from './withTimer';
import TabSelectSimple from './TabSelector';
import Think from './ThinkingInReact';
import Mobile from '../../component/hightOrder/Mobile';
import Username from '../../component/hightOrder/Username';
import Context from './Context';
import ReactPatten from './reactPattern';
import UseDefined from '../Hooks/useDefined.js';
import UseStateDemo from '../Hooks/useStateDemo';
import UseEffect from '../Hooks/useEffect';
import UseRef from '../Hooks/useRef';
import UseReducer from '../Hooks/useReducer';
import UseContext from '../Hooks/useContext';
import SyntheticEvent from '../lifeCycle/SyntheticEvent';
import Key from '../Key/index';
import MTable from '../component/Table';
import TSelect from '../component/Select';
import Memo1 from '../Hooks/memo'
import ResilientComponents from '../danBlog/resilientComponents'
import Test from '../PanziEditor/Test.js'
class Home extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
export default Home;

// export default withTimer(Home)
