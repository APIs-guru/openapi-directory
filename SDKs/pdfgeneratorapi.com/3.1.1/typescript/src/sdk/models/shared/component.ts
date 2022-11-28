import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ComponentClsEnum {
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


// Component
/** 
 * Template component definition
**/
export class Component extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cls" })
  cls?: ComponentClsEnum;

  @SpeakeasyMetadata({ data: "json, name=dataIndex" })
  dataIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=zindex" })
  zindex?: number;
}
