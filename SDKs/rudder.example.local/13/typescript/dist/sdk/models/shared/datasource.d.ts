import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DatasourceRunParametersScheduleTypeEnum {
    Scheduled = "scheduled",
    Notscheduled = "notscheduled"
}
/**
 * Configure if data source should be fetch periodically
**/
export declare class DatasourceRunParametersSchedule extends SpeakeasyBase {
    type?: DatasourceRunParametersScheduleTypeEnum;
}
/**
 * Parameters to configure when the data source is fetched to update node properties.
**/
export declare class DatasourceRunParameters extends SpeakeasyBase {
    onGeneration?: boolean;
    onNewNode?: boolean;
    schedule?: DatasourceRunParametersSchedule;
}
export declare enum DatasourceTypeNameEnum {
    Http = "HTTP"
}
export declare class DatasourceTypeParametersHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare enum DatasourceTypeParametersRequestMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare enum DatasourceTypeParametersRequestModeNameEnum {
    ByNode = "byNode"
}
/**
 * Configure the strategy used to query the HTTP data source.
**/
export declare class DatasourceTypeParametersRequestMode extends SpeakeasyBase {
    name?: DatasourceTypeParametersRequestModeNameEnum;
}
/**
 * You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
**/
export declare class DatasourceTypeParameters extends SpeakeasyBase {
    checkSsl?: boolean;
    headers?: DatasourceTypeParametersHeaders[];
    path?: string;
    requestMethod?: DatasourceTypeParametersRequestMethodEnum;
    requestMode?: DatasourceTypeParametersRequestMode;
    requestTimeout?: number;
    url?: string;
}
/**
 * Define and configure data source type.
**/
export declare class DatasourceType extends SpeakeasyBase {
    name?: DatasourceTypeNameEnum;
    parameters?: DatasourceTypeParameters;
}
export declare class Datasource extends SpeakeasyBase {
    description?: string;
    enabled?: boolean;
    id?: string;
    name?: string;
    runParameters?: DatasourceRunParameters;
    type?: DatasourceType;
    updateTimeout?: number;
}
