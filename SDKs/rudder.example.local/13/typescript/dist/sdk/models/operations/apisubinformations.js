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
var ApiSubInformationsPathParams = /** @class */ (function (_super) {
    __extends(ApiSubInformationsPathParams, _super);
    function ApiSubInformationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sectionId" }),
        __metadata("design:type", String)
    ], ApiSubInformationsPathParams.prototype, "sectionId", void 0);
    return ApiSubInformationsPathParams;
}(SpeakeasyBase));
export { ApiSubInformationsPathParams };
export var ApiSubInformations200ApplicationJsonActionEnum;
(function (ApiSubInformations200ApplicationJsonActionEnum) {
    ApiSubInformations200ApplicationJsonActionEnum["ApiSubInformations"] = "apiSubInformations";
})(ApiSubInformations200ApplicationJsonActionEnum || (ApiSubInformations200ApplicationJsonActionEnum = {}));
var ApiSubInformations200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ApiSubInformations200ApplicationJsonData, _super);
    function ApiSubInformations200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions }),
        __metadata("design:type", Array)
    ], ApiSubInformations200ApplicationJsonData.prototype, "availableVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], ApiSubInformations200ApplicationJsonData.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], ApiSubInformations200ApplicationJsonData.prototype, "endpoints", void 0);
    return ApiSubInformations200ApplicationJsonData;
}(SpeakeasyBase));
export { ApiSubInformations200ApplicationJsonData };
export var ApiSubInformations200ApplicationJsonResultEnum;
(function (ApiSubInformations200ApplicationJsonResultEnum) {
    ApiSubInformations200ApplicationJsonResultEnum["Success"] = "success";
    ApiSubInformations200ApplicationJsonResultEnum["Error"] = "error";
})(ApiSubInformations200ApplicationJsonResultEnum || (ApiSubInformations200ApplicationJsonResultEnum = {}));
var ApiSubInformations200ApplicationJson = /** @class */ (function (_super) {
    __extends(ApiSubInformations200ApplicationJson, _super);
    function ApiSubInformations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ApiSubInformations200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ApiSubInformations200ApplicationJsonData)
    ], ApiSubInformations200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApiSubInformations200ApplicationJson.prototype, "result", void 0);
    return ApiSubInformations200ApplicationJson;
}(SpeakeasyBase));
export { ApiSubInformations200ApplicationJson };
var ApiSubInformationsRequest = /** @class */ (function (_super) {
    __extends(ApiSubInformationsRequest, _super);
    function ApiSubInformationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiSubInformationsPathParams)
    ], ApiSubInformationsRequest.prototype, "pathParams", void 0);
    return ApiSubInformationsRequest;
}(SpeakeasyBase));
export { ApiSubInformationsRequest };
var ApiSubInformationsResponse = /** @class */ (function (_super) {
    __extends(ApiSubInformationsResponse, _super);
    function ApiSubInformationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiSubInformationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiSubInformationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiSubInformations200ApplicationJson)
    ], ApiSubInformationsResponse.prototype, "apiSubInformations200ApplicationJsonObject", void 0);
    return ApiSubInformationsResponse;
}(SpeakeasyBase));
export { ApiSubInformationsResponse };
