var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var DatasourceRunParametersScheduleTypeEnum;
(function (DatasourceRunParametersScheduleTypeEnum) {
    DatasourceRunParametersScheduleTypeEnum["Scheduled"] = "scheduled";
    DatasourceRunParametersScheduleTypeEnum["Notscheduled"] = "notscheduled";
})(DatasourceRunParametersScheduleTypeEnum || (DatasourceRunParametersScheduleTypeEnum = {}));
// DatasourceRunParametersSchedule
/**
 * Configure if data source should be fetch periodically
**/
var DatasourceRunParametersSchedule = /** @class */ (function (_super) {
    __extends(DatasourceRunParametersSchedule, _super);
    function DatasourceRunParametersSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DatasourceRunParametersSchedule.prototype, "type", void 0);
    return DatasourceRunParametersSchedule;
}(SpeakeasyBase));
export { DatasourceRunParametersSchedule };
// DatasourceRunParameters
/**
 * Parameters to configure when the data source is fetched to update node properties.
**/
var DatasourceRunParameters = /** @class */ (function (_super) {
    __extends(DatasourceRunParameters, _super);
    function DatasourceRunParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onGeneration" }),
        __metadata("design:type", Boolean)
    ], DatasourceRunParameters.prototype, "onGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onNewNode" }),
        __metadata("design:type", Boolean)
    ], DatasourceRunParameters.prototype, "onNewNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", DatasourceRunParametersSchedule)
    ], DatasourceRunParameters.prototype, "schedule", void 0);
    return DatasourceRunParameters;
}(SpeakeasyBase));
export { DatasourceRunParameters };
export var DatasourceTypeNameEnum;
(function (DatasourceTypeNameEnum) {
    DatasourceTypeNameEnum["Http"] = "HTTP";
})(DatasourceTypeNameEnum || (DatasourceTypeNameEnum = {}));
var DatasourceTypeParametersHeaders = /** @class */ (function (_super) {
    __extends(DatasourceTypeParametersHeaders, _super);
    function DatasourceTypeParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatasourceTypeParametersHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DatasourceTypeParametersHeaders.prototype, "value", void 0);
    return DatasourceTypeParametersHeaders;
}(SpeakeasyBase));
export { DatasourceTypeParametersHeaders };
export var DatasourceTypeParametersRequestMethodEnum;
(function (DatasourceTypeParametersRequestMethodEnum) {
    DatasourceTypeParametersRequestMethodEnum["Get"] = "GET";
    DatasourceTypeParametersRequestMethodEnum["Post"] = "POST";
})(DatasourceTypeParametersRequestMethodEnum || (DatasourceTypeParametersRequestMethodEnum = {}));
export var DatasourceTypeParametersRequestModeNameEnum;
(function (DatasourceTypeParametersRequestModeNameEnum) {
    DatasourceTypeParametersRequestModeNameEnum["ByNode"] = "byNode";
})(DatasourceTypeParametersRequestModeNameEnum || (DatasourceTypeParametersRequestModeNameEnum = {}));
// DatasourceTypeParametersRequestMode
/**
 * Configure the strategy used to query the HTTP data source.
**/
var DatasourceTypeParametersRequestMode = /** @class */ (function (_super) {
    __extends(DatasourceTypeParametersRequestMode, _super);
    function DatasourceTypeParametersRequestMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatasourceTypeParametersRequestMode.prototype, "name", void 0);
    return DatasourceTypeParametersRequestMode;
}(SpeakeasyBase));
export { DatasourceTypeParametersRequestMode };
// DatasourceTypeParameters
/**
 * You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)
**/
var DatasourceTypeParameters = /** @class */ (function (_super) {
    __extends(DatasourceTypeParameters, _super);
    function DatasourceTypeParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkSsl" }),
        __metadata("design:type", Boolean)
    ], DatasourceTypeParameters.prototype, "checkSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: DatasourceTypeParametersHeaders }),
        __metadata("design:type", Array)
    ], DatasourceTypeParameters.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], DatasourceTypeParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMethod" }),
        __metadata("design:type", String)
    ], DatasourceTypeParameters.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", DatasourceTypeParametersRequestMode)
    ], DatasourceTypeParameters.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestTimeout" }),
        __metadata("design:type", Number)
    ], DatasourceTypeParameters.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DatasourceTypeParameters.prototype, "url", void 0);
    return DatasourceTypeParameters;
}(SpeakeasyBase));
export { DatasourceTypeParameters };
// DatasourceType
/**
 * Define and configure data source type.
**/
var DatasourceType = /** @class */ (function (_super) {
    __extends(DatasourceType, _super);
    function DatasourceType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatasourceType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", DatasourceTypeParameters)
    ], DatasourceType.prototype, "parameters", void 0);
    return DatasourceType;
}(SpeakeasyBase));
export { DatasourceType };
var Datasource = /** @class */ (function (_super) {
    __extends(Datasource, _super);
    function Datasource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Datasource.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Datasource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runParameters" }),
        __metadata("design:type", DatasourceRunParameters)
    ], Datasource.prototype, "runParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", DatasourceType)
    ], Datasource.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTimeout" }),
        __metadata("design:type", Number)
    ], Datasource.prototype, "updateTimeout", void 0);
    return Datasource;
}(SpeakeasyBase));
export { Datasource };
