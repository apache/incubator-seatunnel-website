import React, {useState} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from './languages.json';
import './index.less';
import systemConfiguration from '../../js/sysConfig'

export default function () {
    const [flag, setFlag] = useState(1)
    const isBrowser = useIsBrowser();

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    function changeFlag(val) {
        setFlag(val == 1 ? 2 : 1)
    }

    return (
        <div>
            <div className="main slogan">
                <div className="block">

                    <div className="banner text_center">
                        <h1 className="main_title"><span className="apache">Apache</span> <span
                            className="seatunnel">SeaTunnel</span>
                            <span className="badge">Incubating</span>
                        </h1>

                        <p className="main_slogan">{dataSource.home.banner.slogan}</p>

                        <div className="button_row center">
                            <a href="#" className="corner_button blue_fill">{dataSource.common.getStart}</a>
                            <a href={systemConfiguration.github.projectUrl} target="_blank"
                               className="corner_button blue" onMouseOver={() => changeFlag(1)} onMouseOut={() => changeFlag(2)}>
                                <img className="button_icon github1" src={useBaseUrl('/home/icons/github' + flag + '.svg')} alt="github"/>
                                <span>GitHub</span>
                            </a>
                        </div>

                        <div>
                            <div className="cover_bg"></div>
                            <div className="cover_page"/>
                        </div>

                        <div className="wave_wrapper wave_animation">
                            <div className="wave_wrapper_inner bg_top"><div className="wave wave_top"></div></div>
                            <div className="wave_wrapper_inner bg_middle"><div className="wave wave_middle"></div></div>
                            <div className="wave_wrapper_inner bg_bottom"><div className="wave wave_bottom"></div></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="main architecture">
                <div className="block">
                    <h1 className="main_subtitle text_center">{dataSource.common.architecture}</h1>
                    <div className="item_block" style={{position: 'relative'}}>
                        <p className="paragraph">{dataSource.home.architecture.desc}</p>
                        <div className="bold_dot" style={{top: '64px', left: '416px'}}></div>
                        <div className="bold_dot" style={{top: '700px', left: '240px'}}></div>

                        <div className="architecture-image">
                            <img className="button_icon github1" src={useBaseUrl('/home/processes_' + (language === 'en' ? 'en' : 'zh')  + '.svg')} alt="System Architecture"/>
                        </div>

                        <svg width="860" height="860" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="49.8" className="dotted"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="main feature">
                <div className="block">
                    <h1 className="main_subtitle text_center">{dataSource.common.coreFeatures}</h1>
                    <div className="features item_block text_center">

                        <div className="feature_item components">
                            <h3 className="item-title">{dataSource.common.components}</h3>
                            <p className="item-desc">{dataSource.home.feature.components}</p>
                        </div>

                        <div className="feature_item scalability">
                            <h3 className="item-title">{dataSource.common.scalability}</h3>
                            <p className="item-desc">{dataSource.home.feature.scalability}</p>
                        </div>

                        <div className="feature_item simplicity">
                            <h3 className="item-title">{dataSource.common.simplicity}</h3>
                            <p className="item-desc">{dataSource.home.feature.simplicity}</p>
                        </div>

                        <div className="feature_item stable">
                            <h3 className="item-title">{dataSource.common.stable}</h3>
                            <p className="item-desc">{dataSource.home.feature.stable}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
