import React, {Component} from 'react';
import {Form} from 'antd';

class SatSettingForm extends Component {
    render() {
        return (
            <Form>
                <Form.Item label = 'Longitude(degrees)'>

                </Form.Item>
            </Form>
                )
    }
}

const SatSetting = Form.create({ name: "satellite-setting" })(SatSettingForm);
                //Form.create() -> function fn = Form.create()
                //Form.create()() -> fn() => Form.create()(SatSettingForm);

                //HOC: 高阶组件
                // - component as a parameter
                // - return a new component
export default SatSetting;