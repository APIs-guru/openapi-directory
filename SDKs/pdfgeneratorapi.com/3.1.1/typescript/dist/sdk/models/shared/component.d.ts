import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ComponentClsEnum {
    LabelComponent = "labelComponent",
    NumberComponent = "numberComponent",
    TextComponent = "textComponent",
    ImageComponent = "imageComponent",
    DateComponent = "dateComponent",
    HlineComponent = "hlineComponent",
    VlineComponent = "vlineComponent",
    TableComponent = "tableComponent",
    CompositeComponent = "compositeComponent",
    BarcodeComponent = "barcodeComponent",
    QrcodeComponent = "qrcodeComponent",
    ChartComponent = "chartComponent",
    RectangleComponent = "rectangleComponent",
    HeaderComponent = "headerComponent",
    FooterComponent = "footerComponent",
    CheckboxComponent = "checkboxComponent",
    RadioComponent = "radioComponent"
}
/**
 * Template component definition
**/
export declare class Component extends SpeakeasyBase {
    cls?: ComponentClsEnum;
    dataIndex?: string;
    height?: number;
    id?: string;
    left?: number;
    top?: number;
    value?: string;
    width?: number;
    zindex?: number;
}
