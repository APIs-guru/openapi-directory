import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Component } from "./component";

export enum TemplateDefinitionNewLayoutFormatEnum {
    A4 = "A4"
,    Letter = "letter"
,    Custom = "custom"
}


// TemplateDefinitionNewLayoutMargins
/** 
 * Page margins in units
**/
export class TemplateDefinitionNewLayoutMargins extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;
}

export enum TemplateDefinitionNewLayoutOrientationEnum {
    Portrait = "portrait"
,    Landscape = "landscape"
}

export enum TemplateDefinitionNewLayoutRepeatLayoutFormatEnum {
    A4 = "A4"
,    Letter = "letter"
,    Custom = "custom"
}


// TemplateDefinitionNewLayoutRepeatLayout
/** 
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export class TemplateDefinitionNewLayoutRepeatLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}

export enum TemplateDefinitionNewLayoutUnitEnum {
    Cm = "cm"
,    In = "in"
}


// TemplateDefinitionNewLayout
/** 
 * Defines template layout (e.g page format, margins).
**/
export class TemplateDefinitionNewLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=emptyLabels" })
  emptyLabels?: number;

  @Metadata({ data: "json, name=format" })
  format?: TemplateDefinitionNewLayoutFormatEnum;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionNewLayoutMargins;

  @Metadata({ data: "json, name=orientation" })
  orientation?: TemplateDefinitionNewLayoutOrientationEnum;

  @Metadata({ data: "json, name=repeatLayout" })
  repeatLayout?: TemplateDefinitionNewLayoutRepeatLayout;

  @Metadata({ data: "json, name=rotaion" })
  rotaion?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: TemplateDefinitionNewLayoutUnitEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinitionNewPagesMargins extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;
}


export class TemplateDefinitionNewPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=components", elemType: shared.Component })
  components?: Component[];

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionNewPagesMargins;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// TemplateDefinitionNew
/** 
 * Template configuration
**/
export class TemplateDefinitionNew extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: TemplateDefinitionNewLayout;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pages", elemType: shared.TemplateDefinitionNewPages })
  pages?: TemplateDefinitionNewPages[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
