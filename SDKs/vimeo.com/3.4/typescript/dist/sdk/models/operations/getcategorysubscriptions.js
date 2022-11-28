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
var GetCategorySubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsPathParams, _super);
    function GetCategorySubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsPathParams.prototype, "userId", void 0);
    return GetCategorySubscriptionsPathParams;
}(SpeakeasyBase));
export { GetCategorySubscriptionsPathParams };
export var GetCategorySubscriptionsDirectionEnum;
(function (GetCategorySubscriptionsDirectionEnum) {
    GetCategorySubscriptionsDirectionEnum["Asc"] = "asc";
    GetCategorySubscriptionsDirectionEnum["Desc"] = "desc";
})(GetCategorySubscriptionsDirectionEnum || (GetCategorySubscriptionsDirectionEnum = {}));
export var GetCategorySubscriptionsSortEnum;
(function (GetCategorySubscriptionsSortEnum) {
    GetCategorySubscriptionsSortEnum["Alphabetical"] = "alphabetical";
    GetCategorySubscriptionsSortEnum["Date"] = "date";
    GetCategorySubscriptionsSortEnum["Name"] = "name";
})(GetCategorySubscriptionsSortEnum || (GetCategorySubscriptionsSortEnum = {}));
var GetCategorySubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsQueryParams, _super);
    function GetCategorySubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsQueryParams.prototype, "sort", void 0);
    return GetCategorySubscriptionsQueryParams;
}(SpeakeasyBase));
export { GetCategorySubscriptionsQueryParams };
var GetCategorySubscriptionsSecurity = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsSecurity, _super);
    function GetCategorySubscriptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetCategorySubscriptionsSecurity.prototype, "oauth2", void 0);
    return GetCategorySubscriptionsSecurity;
}(SpeakeasyBase));
export { GetCategorySubscriptionsSecurity };
var GetCategorySubscriptionsRequest = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsRequest, _super);
    function GetCategorySubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategorySubscriptionsPathParams)
    ], GetCategorySubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategorySubscriptionsQueryParams)
    ], GetCategorySubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCategorySubscriptionsSecurity)
    ], GetCategorySubscriptionsRequest.prototype, "security", void 0);
    return GetCategorySubscriptionsRequest;
}(SpeakeasyBase));
export { GetCategorySubscriptionsRequest };
var GetCategorySubscriptionsResponse = /** @class */ (function (_super) {
    __extends(GetCategorySubscriptionsResponse, _super);
    function GetCategorySubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCategorySubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCategorySubscriptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Category }),
        __metadata("design:type", Array)
    ], GetCategorySubscriptionsResponse.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetCategorySubscriptionsResponse.prototype, "error", void 0);
    return GetCategorySubscriptionsResponse;
}(SpeakeasyBase));
export { GetCategorySubscriptionsResponse };
