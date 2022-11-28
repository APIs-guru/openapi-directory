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
import * as shared from "../shared";
var GetDataSourcePathParams = /** @class */ (function (_super) {
    __extends(GetDataSourcePathParams, _super);
    function GetDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" }),
        __metadata("design:type", String)
    ], GetDataSourcePathParams.prototype, "datasourceId", void 0);
    return GetDataSourcePathParams;
}(SpeakeasyBase));
export { GetDataSourcePathParams };
export var GetDataSource200ApplicationJsonActionEnum;
(function (GetDataSource200ApplicationJsonActionEnum) {
    GetDataSource200ApplicationJsonActionEnum["GetDataSource"] = "getDataSource";
})(GetDataSource200ApplicationJsonActionEnum || (GetDataSource200ApplicationJsonActionEnum = {}));
var GetDataSource200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetDataSource200ApplicationJsonData, _super);
    function GetDataSource200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], GetDataSource200ApplicationJsonData.prototype, "datasources", void 0);
    return GetDataSource200ApplicationJsonData;
}(SpeakeasyBase));
export { GetDataSource200ApplicationJsonData };
export var GetDataSource200ApplicationJsonResultEnum;
(function (GetDataSource200ApplicationJsonResultEnum) {
    GetDataSource200ApplicationJsonResultEnum["Success"] = "success";
    GetDataSource200ApplicationJsonResultEnum["Error"] = "error";
})(GetDataSource200ApplicationJsonResultEnum || (GetDataSource200ApplicationJsonResultEnum = {}));
var GetDataSource200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataSource200ApplicationJson, _super);
    function GetDataSource200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetDataSource200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetDataSource200ApplicationJsonData)
    ], GetDataSource200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetDataSource200ApplicationJson.prototype, "result", void 0);
    return GetDataSource200ApplicationJson;
}(SpeakeasyBase));
export { GetDataSource200ApplicationJson };
var GetDataSourceRequest = /** @class */ (function (_super) {
    __extends(GetDataSourceRequest, _super);
    function GetDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataSourcePathParams)
    ], GetDataSourceRequest.prototype, "pathParams", void 0);
    return GetDataSourceRequest;
}(SpeakeasyBase));
export { GetDataSourceRequest };
var GetDataSourceResponse = /** @class */ (function (_super) {
    __extends(GetDataSourceResponse, _super);
    function GetDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataSource200ApplicationJson)
    ], GetDataSourceResponse.prototype, "getDataSource200ApplicationJsonObject", void 0);
    return GetDataSourceResponse;
}(SpeakeasyBase));
export { GetDataSourceResponse };
