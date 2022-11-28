import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";


export enum TemplateDefinitionNewLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}


// TemplateDefinitionNewLayoutMargins
/** 
 * Page margins in units
**/
export class TemplateDefinitionNewLayoutMargins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;
}

export enum TemplateDefinitionNewLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}

export enum TemplateDefinitionNewLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}


// TemplateDefinitionNewLayoutRepeatLayout
/** 
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export class TemplateDefinitionNewLayoutRepeatLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}

export enum TemplateDefinitionNewLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}


// TemplateDefinitionNewLayout
/** 
 * Defines template layout (e.g page format, margins).
**/
export class TemplateDefinitionNewLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emptyLabels" })
  emptyLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TemplateDefinitionNewLayoutFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionNewLayoutMargins;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: TemplateDefinitionNewLayoutOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=repeatLayout" })
  repeatLayout?: TemplateDefinitionNewLayoutRepeatLayout;

  @SpeakeasyMetadata({ data: "json, name=rotaion" })
  rotaion?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: TemplateDefinitionNewLayoutUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinitionNewPagesMargins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottom" })
  bottom?: number;

  @SpeakeasyMetadata({ data: "json, name=right" })
  right?: number;
}


export class TemplateDefinitionNewPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: Component })
  components?: Component[];

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionNewPagesMargins;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// TemplateDefinitionNew
/** 
 * Template configuration
**/
export class TemplateDefinitionNew extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: TemplateDefinitionNewLayout;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: TemplateDefinitionNewPages })
  pages?: TemplateDefinitionNewPages[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
