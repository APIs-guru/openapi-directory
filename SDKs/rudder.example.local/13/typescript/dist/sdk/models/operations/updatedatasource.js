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
var UpdateDataSourcePathParams = /** @class */ (function (_super) {
    __extends(UpdateDataSourcePathParams, _super);
    function UpdateDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" }),
        __metadata("design:type", String)
    ], UpdateDataSourcePathParams.prototype, "datasourceId", void 0);
    return UpdateDataSourcePathParams;
}(SpeakeasyBase));
export { UpdateDataSourcePathParams };
export var UpdateDataSource200ApplicationJsonActionEnum;
(function (UpdateDataSource200ApplicationJsonActionEnum) {
    UpdateDataSource200ApplicationJsonActionEnum["UpdateDataSource"] = "updateDataSource";
})(UpdateDataSource200ApplicationJsonActionEnum || (UpdateDataSource200ApplicationJsonActionEnum = {}));
var UpdateDataSource200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateDataSource200ApplicationJsonData, _super);
    function UpdateDataSource200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], UpdateDataSource200ApplicationJsonData.prototype, "datasources", void 0);
    return UpdateDataSource200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateDataSource200ApplicationJsonData };
export var UpdateDataSource200ApplicationJsonResultEnum;
(function (UpdateDataSource200ApplicationJsonResultEnum) {
    UpdateDataSource200ApplicationJsonResultEnum["Success"] = "success";
    UpdateDataSource200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateDataSource200ApplicationJsonResultEnum || (UpdateDataSource200ApplicationJsonResultEnum = {}));
var UpdateDataSource200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDataSource200ApplicationJson, _super);
    function UpdateDataSource200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateDataSource200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateDataSource200ApplicationJsonData)
    ], UpdateDataSource200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateDataSource200ApplicationJson.prototype, "result", void 0);
    return UpdateDataSource200ApplicationJson;
}(SpeakeasyBase));
export { UpdateDataSource200ApplicationJson };
var UpdateDataSourceRequest = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequest, _super);
    function UpdateDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataSourcePathParams)
    ], UpdateDataSourceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Datasource)
    ], UpdateDataSourceRequest.prototype, "request", void 0);
    return UpdateDataSourceRequest;
}(SpeakeasyBase));
export { UpdateDataSourceRequest };
var UpdateDataSourceResponse = /** @class */ (function (_super) {
    __extends(UpdateDataSourceResponse, _super);
    function UpdateDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataSource200ApplicationJson)
    ], UpdateDataSourceResponse.prototype, "updateDataSource200ApplicationJsonObject", void 0);
    return UpdateDataSourceResponse;
}(SpeakeasyBase));
export { UpdateDataSourceResponse };
