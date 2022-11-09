import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ComponentClsEnum {
    LabelComponent = "labelComponent"
,    NumberComponent = "numberComponent"
,    TextComponent = "textComponent"
,    ImageComponent = "imageComponent"
,    DateComponent = "dateComponent"
,    HlineComponent = "hlineComponent"
,    VlineComponent = "vlineComponent"
,    TableComponent = "tableComponent"
,    CompositeComponent = "compositeComponent"
,    BarcodeComponent = "barcodeComponent"
,    QrcodeComponent = "qrcodeComponent"
,    ChartComponent = "chartComponent"
,    RectangleComponent = "rectangleComponent"
,    HeaderComponent = "headerComponent"
,    FooterComponent = "footerComponent"
,    CheckboxComponent = "checkboxComponent"
,    RadioComponent = "radioComponent"
}


// Component
/** 
 * Template component definition
**/
export class Component extends SpeakeasyBase {
  @Metadata({ data: "json, name=cls" })
  cls?: ComponentClsEnum;

  @Metadata({ data: "json, name=dataIndex" })
  dataIndex?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;

  @Metadata({ data: "json, name=zindex" })
  zindex?: number;
}
