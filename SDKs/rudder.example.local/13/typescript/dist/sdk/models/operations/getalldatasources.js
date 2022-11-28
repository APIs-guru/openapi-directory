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
export var GetAllDataSources200ApplicationJsonActionEnum;
(function (GetAllDataSources200ApplicationJsonActionEnum) {
    GetAllDataSources200ApplicationJsonActionEnum["GetAllDataSources"] = "getAllDataSources";
})(GetAllDataSources200ApplicationJsonActionEnum || (GetAllDataSources200ApplicationJsonActionEnum = {}));
var GetAllDataSources200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAllDataSources200ApplicationJsonData, _super);
    function GetAllDataSources200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], GetAllDataSources200ApplicationJsonData.prototype, "datasources", void 0);
    return GetAllDataSources200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAllDataSources200ApplicationJsonData };
export var GetAllDataSources200ApplicationJsonResultEnum;
(function (GetAllDataSources200ApplicationJsonResultEnum) {
    GetAllDataSources200ApplicationJsonResultEnum["Success"] = "success";
    GetAllDataSources200ApplicationJsonResultEnum["Error"] = "error";
})(GetAllDataSources200ApplicationJsonResultEnum || (GetAllDataSources200ApplicationJsonResultEnum = {}));
var GetAllDataSources200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllDataSources200ApplicationJson, _super);
    function GetAllDataSources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetAllDataSources200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAllDataSources200ApplicationJsonData)
    ], GetAllDataSources200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetAllDataSources200ApplicationJson.prototype, "result", void 0);
    return GetAllDataSources200ApplicationJson;
}(SpeakeasyBase));
export { GetAllDataSources200ApplicationJson };
var GetAllDataSourcesResponse = /** @class */ (function (_super) {
    __extends(GetAllDataSourcesResponse, _super);
    function GetAllDataSourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllDataSourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllDataSourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllDataSources200ApplicationJson)
    ], GetAllDataSourcesResponse.prototype, "getAllDataSources200ApplicationJsonObject", void 0);
    return GetAllDataSourcesResponse;
}(SpeakeasyBase));
export { GetAllDataSourcesResponse };
