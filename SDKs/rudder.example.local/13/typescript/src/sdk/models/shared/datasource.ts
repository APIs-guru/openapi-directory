import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DatasourceRunParametersScheduleTypeEnum {
    Scheduled = "scheduled"
,    Notscheduled = "notscheduled"
}


// DatasourceRunParametersSchedule
/** 
 * Configure if data source should be fetch periodically
**/
export class DatasourceRunParametersSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: DatasourceRunParametersScheduleTypeEnum;
}


// DatasourceRunParameters
/** 
 * Parameters to configure when the data source is fetched to update node properties.
**/
export class DatasourceRunParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=onGeneration" })
  onGeneration?: boolean;

  @Metadata({ data: "json, name=onNewNode" })
  onNewNode?: boolean;

  @Metadata({ data: "json, name=schedule" })
  schedule?: DatasourceRunParametersSchedule;
}

export enum DatasourceTypeNameEnum {
    Http = "HTTP"
}


export class DatasourceTypeParametersHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

export enum DatasourceTypeParametersRequestMethodEnum {
    Get = "GET"
,    Post = "POST"
}

export enum DatasourceTypeParametersRequestModeNameEnum {
    ByNode = "byNode"
}


// DatasourceTypeParametersRequestMode
/** 
 * Configure the strategy used to query the HTTP data source.
**/
export class DatasourceTypeParametersRequestMode extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: DatasourceTypeParametersRequestModeNameEnum;
}


// DatasourceTypeParameters
/** 
 * You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
**/
export class DatasourceTypeParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkSsl" })
  checkSsl?: boolean;

  @Metadata({ data: "json, name=headers", elemType: shared.DatasourceTypeParametersHeaders })
  headers?: DatasourceTypeParametersHeaders[];

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=requestMethod" })
  requestMethod?: DatasourceTypeParametersRequestMethodEnum;

  @Metadata({ data: "json, name=requestMode" })
  requestMode?: DatasourceTypeParametersRequestMode;

  @Metadata({ data: "json, name=requestTimeout" })
  requestTimeout?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// DatasourceType
/** 
 * Define and configure data source type.
**/
export class DatasourceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: DatasourceTypeNameEnum;

  @Metadata({ data: "json, name=parameters" })
  parameters?: DatasourceTypeParameters;
}


export class Datasource extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=runParameters" })
  runParameters?: DatasourceRunParameters;

  @Metadata({ data: "json, name=type" })
  type?: DatasourceType;

  @Metadata({ data: "json, name=updateTimeout" })
  updateTimeout?: number;
}
