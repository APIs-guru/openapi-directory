import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DatasourceRunParametersScheduleTypeEnum {
    Scheduled = "scheduled",
    Notscheduled = "notscheduled"
}


// DatasourceRunParametersSchedule
/** 
 * Configure if data source should be fetch periodically
**/
export class DatasourceRunParametersSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DatasourceRunParametersScheduleTypeEnum;
}


// DatasourceRunParameters
/** 
 * Parameters to configure when the data source is fetched to update node properties.
**/
export class DatasourceRunParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=onGeneration" })
  onGeneration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onNewNode" })
  onNewNode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: DatasourceRunParametersSchedule;
}

export enum DatasourceTypeNameEnum {
    Http = "HTTP"
}


export class DatasourceTypeParametersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

export enum DatasourceTypeParametersRequestMethodEnum {
    Get = "GET",
    Post = "POST"
}

export enum DatasourceTypeParametersRequestModeNameEnum {
    ByNode = "byNode"
}


// DatasourceTypeParametersRequestMode
/** 
 * Configure the strategy used to query the HTTP data source.
**/
export class DatasourceTypeParametersRequestMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: DatasourceTypeParametersRequestModeNameEnum;
}


// DatasourceTypeParameters
/** 
 * You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
**/
export class DatasourceTypeParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkSsl" })
  checkSsl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: DatasourceTypeParametersHeaders })
  headers?: DatasourceTypeParametersHeaders[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMethod" })
  requestMethod?: DatasourceTypeParametersRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: DatasourceTypeParametersRequestMode;

  @SpeakeasyMetadata({ data: "json, name=requestTimeout" })
  requestTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// DatasourceType
/** 
 * Define and configure data source type.
**/
export class DatasourceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: DatasourceTypeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: DatasourceTypeParameters;
}


export class Datasource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=runParameters" })
  runParameters?: DatasourceRunParameters;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DatasourceType;

  @SpeakeasyMetadata({ data: "json, name=updateTimeout" })
  updateTimeout?: number;
}
