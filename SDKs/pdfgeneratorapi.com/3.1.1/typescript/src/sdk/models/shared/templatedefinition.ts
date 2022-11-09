import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Component } from "./component";


// TemplateDefinitionDataSettings
/** 
 * Defines filter and sort option for root data set.
**/
export class TemplateDefinitionDataSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterBy" })
  filterBy?: Map<string, any>[];

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: Map<string, any>[];
}


// TemplateDefinitionEditor
/** 
 * Configuration preferences for the editor
**/
export class TemplateDefinitionEditor extends SpeakeasyBase {
  @Metadata({ data: "json, name=heightMultiplier" })
  heightMultiplier?: number;
}

export enum TemplateDefinitionLayoutFormatEnum {
    A4 = "A4"
,    Letter = "letter"
,    Custom = "custom"
}


// TemplateDefinitionLayoutMargins
/** 
 * Page margins in units
**/
export class TemplateDefinitionLayoutMargins extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;
}

export enum TemplateDefinitionLayoutOrientationEnum {
    Portrait = "portrait"
,    Landscape = "landscape"
}

export enum TemplateDefinitionLayoutRepeatLayoutFormatEnum {
    A4 = "A4"
,    Letter = "letter"
,    Custom = "custom"
}


// TemplateDefinitionLayoutRepeatLayout
/** 
 * Defines page size if layout is repeated on the page e.g sheet labels
**/
export class TemplateDefinitionLayoutRepeatLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: TemplateDefinitionLayoutRepeatLayoutFormatEnum;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}

export enum TemplateDefinitionLayoutUnitEnum {
    Cm = "cm"
,    In = "in"
}


// TemplateDefinitionLayout
/** 
 * Defines template layout (e.g page format, margins).
**/
export class TemplateDefinitionLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=emptyLabels" })
  emptyLabels?: number;

  @Metadata({ data: "json, name=format" })
  format?: TemplateDefinitionLayoutFormatEnum;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionLayoutMargins;

  @Metadata({ data: "json, name=orientation" })
  orientation?: TemplateDefinitionLayoutOrientationEnum;

  @Metadata({ data: "json, name=repeatLayout" })
  repeatLayout?: TemplateDefinitionLayoutRepeatLayout;

  @Metadata({ data: "json, name=rotation" })
  rotation?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: TemplateDefinitionLayoutUnitEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinitionPagesMargins extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;
}


export class TemplateDefinitionPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=components", elemType: shared.Component })
  components?: Component[];

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=margins" })
  margins?: TemplateDefinitionPagesMargins;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class TemplateDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSettings" })
  dataSettings?: TemplateDefinitionDataSettings;

  @Metadata({ data: "json, name=editor" })
  editor?: TemplateDefinitionEditor;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @Metadata({ data: "json, name=layout" })
  layout?: TemplateDefinitionLayout;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.TemplateDefinitionPages })
  pages?: TemplateDefinitionPages[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
