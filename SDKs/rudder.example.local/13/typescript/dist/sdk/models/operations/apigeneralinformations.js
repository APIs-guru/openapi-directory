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
export var ApiGeneralInformations200ApplicationJsonActionEnum;
(function (ApiGeneralInformations200ApplicationJsonActionEnum) {
    ApiGeneralInformations200ApplicationJsonActionEnum["ApiGeneralInformations"] = "apiGeneralInformations";
})(ApiGeneralInformations200ApplicationJsonActionEnum || (ApiGeneralInformations200ApplicationJsonActionEnum = {}));
var ApiGeneralInformations200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ApiGeneralInformations200ApplicationJsonData, _super);
    function ApiGeneralInformations200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: shared.ApiVersions }),
        __metadata("design:type", Array)
    ], ApiGeneralInformations200ApplicationJsonData.prototype, "availableVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], ApiGeneralInformations200ApplicationJsonData.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints", elemType: shared.ApiEndpoints, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], ApiGeneralInformations200ApplicationJsonData.prototype, "endpoints", void 0);
    return ApiGeneralInformations200ApplicationJsonData;
}(SpeakeasyBase));
export { ApiGeneralInformations200ApplicationJsonData };
export var ApiGeneralInformations200ApplicationJsonResultEnum;
(function (ApiGeneralInformations200ApplicationJsonResultEnum) {
    ApiGeneralInformations200ApplicationJsonResultEnum["Success"] = "success";
    ApiGeneralInformations200ApplicationJsonResultEnum["Error"] = "error";
})(ApiGeneralInformations200ApplicationJsonResultEnum || (ApiGeneralInformations200ApplicationJsonResultEnum = {}));
var ApiGeneralInformations200ApplicationJson = /** @class */ (function (_super) {
    __extends(ApiGeneralInformations200ApplicationJson, _super);
    function ApiGeneralInformations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ApiGeneralInformations200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ApiGeneralInformations200ApplicationJsonData)
    ], ApiGeneralInformations200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApiGeneralInformations200ApplicationJson.prototype, "result", void 0);
    return ApiGeneralInformations200ApplicationJson;
}(SpeakeasyBase));
export { ApiGeneralInformations200ApplicationJson };
var ApiGeneralInformationsResponse = /** @class */ (function (_super) {
    __extends(ApiGeneralInformationsResponse, _super);
    function ApiGeneralInformationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiGeneralInformationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiGeneralInformationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiGeneralInformations200ApplicationJson)
    ], ApiGeneralInformationsResponse.prototype, "apiGeneralInformations200ApplicationJsonObject", void 0);
    return ApiGeneralInformationsResponse;
}(SpeakeasyBase));
export { ApiGeneralInformationsResponse };
