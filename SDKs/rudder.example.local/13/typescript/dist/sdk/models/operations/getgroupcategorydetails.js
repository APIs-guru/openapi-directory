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
var GetGroupCategoryDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetGroupCategoryDetailsPathParams, _super);
    function GetGroupCategoryDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" }),
        __metadata("design:type", String)
    ], GetGroupCategoryDetailsPathParams.prototype, "groupCategoryId", void 0);
    return GetGroupCategoryDetailsPathParams;
}(SpeakeasyBase));
export { GetGroupCategoryDetailsPathParams };
export var GetGroupCategoryDetails200ApplicationJsonActionEnum;
(function (GetGroupCategoryDetails200ApplicationJsonActionEnum) {
    GetGroupCategoryDetails200ApplicationJsonActionEnum["GetGroupCategoryDetails"] = "GetGroupCategoryDetails";
})(GetGroupCategoryDetails200ApplicationJsonActionEnum || (GetGroupCategoryDetails200ApplicationJsonActionEnum = {}));
var GetGroupCategoryDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetGroupCategoryDetails200ApplicationJsonData, _super);
    function GetGroupCategoryDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory }),
        __metadata("design:type", Array)
    ], GetGroupCategoryDetails200ApplicationJsonData.prototype, "groupCategories", void 0);
    return GetGroupCategoryDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { GetGroupCategoryDetails200ApplicationJsonData };
export var GetGroupCategoryDetails200ApplicationJsonResultEnum;
(function (GetGroupCategoryDetails200ApplicationJsonResultEnum) {
    GetGroupCategoryDetails200ApplicationJsonResultEnum["Success"] = "success";
    GetGroupCategoryDetails200ApplicationJsonResultEnum["Error"] = "error";
})(GetGroupCategoryDetails200ApplicationJsonResultEnum || (GetGroupCategoryDetails200ApplicationJsonResultEnum = {}));
var GetGroupCategoryDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupCategoryDetails200ApplicationJson, _super);
    function GetGroupCategoryDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetGroupCategoryDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetGroupCategoryDetails200ApplicationJsonData)
    ], GetGroupCategoryDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetGroupCategoryDetails200ApplicationJson.prototype, "result", void 0);
    return GetGroupCategoryDetails200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupCategoryDetails200ApplicationJson };
var GetGroupCategoryDetailsRequest = /** @class */ (function (_super) {
    __extends(GetGroupCategoryDetailsRequest, _super);
    function GetGroupCategoryDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupCategoryDetailsPathParams)
    ], GetGroupCategoryDetailsRequest.prototype, "pathParams", void 0);
    return GetGroupCategoryDetailsRequest;
}(SpeakeasyBase));
export { GetGroupCategoryDetailsRequest };
var GetGroupCategoryDetailsResponse = /** @class */ (function (_super) {
    __extends(GetGroupCategoryDetailsResponse, _super);
    function GetGroupCategoryDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupCategoryDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupCategoryDetails200ApplicationJson)
    ], GetGroupCategoryDetailsResponse.prototype, "getGroupCategoryDetails200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupCategoryDetailsResponse.prototype, "statusCode", void 0);
    return GetGroupCategoryDetailsResponse;
}(SpeakeasyBase));
export { GetGroupCategoryDetailsResponse };
