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
var GetRuleCategoryDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsPathParams, _super);
    function GetRuleCategoryDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetailsPathParams.prototype, "ruleCategoryId", void 0);
    return GetRuleCategoryDetailsPathParams;
}(SpeakeasyBase));
export { GetRuleCategoryDetailsPathParams };
export var GetRuleCategoryDetails200ApplicationJsonActionEnum;
(function (GetRuleCategoryDetails200ApplicationJsonActionEnum) {
    GetRuleCategoryDetails200ApplicationJsonActionEnum["GetRuleCategoryDetails"] = "GetRuleCategoryDetails";
})(GetRuleCategoryDetails200ApplicationJsonActionEnum || (GetRuleCategoryDetails200ApplicationJsonActionEnum = {}));
var GetRuleCategoryDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetails200ApplicationJsonData, _super);
    function GetRuleCategoryDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rulesCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], GetRuleCategoryDetails200ApplicationJsonData.prototype, "rulesCategories", void 0);
    return GetRuleCategoryDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRuleCategoryDetails200ApplicationJsonData };
export var GetRuleCategoryDetails200ApplicationJsonResultEnum;
(function (GetRuleCategoryDetails200ApplicationJsonResultEnum) {
    GetRuleCategoryDetails200ApplicationJsonResultEnum["Success"] = "success";
    GetRuleCategoryDetails200ApplicationJsonResultEnum["Error"] = "error";
})(GetRuleCategoryDetails200ApplicationJsonResultEnum || (GetRuleCategoryDetails200ApplicationJsonResultEnum = {}));
var GetRuleCategoryDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetails200ApplicationJson, _super);
    function GetRuleCategoryDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetRuleCategoryDetails200ApplicationJsonData)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "result", void 0);
    return GetRuleCategoryDetails200ApplicationJson;
}(SpeakeasyBase));
export { GetRuleCategoryDetails200ApplicationJson };
var GetRuleCategoryDetailsRequest = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsRequest, _super);
    function GetRuleCategoryDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRuleCategoryDetailsPathParams)
    ], GetRuleCategoryDetailsRequest.prototype, "pathParams", void 0);
    return GetRuleCategoryDetailsRequest;
}(SpeakeasyBase));
export { GetRuleCategoryDetailsRequest };
var GetRuleCategoryDetailsResponse = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsResponse, _super);
    function GetRuleCategoryDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRuleCategoryDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRuleCategoryDetails200ApplicationJson)
    ], GetRuleCategoryDetailsResponse.prototype, "getRuleCategoryDetails200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRuleCategoryDetailsResponse.prototype, "statusCode", void 0);
    return GetRuleCategoryDetailsResponse;
}(SpeakeasyBase));
export { GetRuleCategoryDetailsResponse };
