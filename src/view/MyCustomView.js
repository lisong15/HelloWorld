class MyCustomView extends React.Component {
    constructor() {
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        if (!this.props.onChangeMessage) {
            return;
        }
        this.props.onChangeMessage(event.nativeEvent.message);
    }

    render() {
        return <RCTMyCustomView {...this.props} onChange={this._onChange}/>;
    }
}
MyCustomView.propTypes = {
    /**
     * Callback that is called continuously when the user is dragging the map.
     */
    onChangeMessage: React.PropTypes.func,
};

var RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`, MyCustomView, {
    nativeOnly: {onChange: true}
});