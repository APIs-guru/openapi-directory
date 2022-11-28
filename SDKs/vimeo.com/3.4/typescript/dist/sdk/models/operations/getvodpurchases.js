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
export var GetVodPurchasesDirectionEnum;
(function (GetVodPurchasesDirectionEnum) {
    GetVodPurchasesDirectionEnum["Asc"] = "asc";
    GetVodPurchasesDirectionEnum["Desc"] = "desc";
})(GetVodPurchasesDirectionEnum || (GetVodPurchasesDirectionEnum = {}));
export var GetVodPurchasesFilterEnum;
(function (GetVodPurchasesFilterEnum) {
    GetVodPurchasesFilterEnum["All"] = "all";
    GetVodPurchasesFilterEnum["ExpiringSoon"] = "expiring_soon";
    GetVodPurchasesFilterEnum["Film"] = "film";
    GetVodPurchasesFilterEnum["Important"] = "important";
    GetVodPurchasesFilterEnum["Purchased"] = "purchased";
    GetVodPurchasesFilterEnum["Rented"] = "rented";
    GetVodPurchasesFilterEnum["Series"] = "series";
    GetVodPurchasesFilterEnum["Subscription"] = "subscription";
    GetVodPurchasesFilterEnum["Unwatched"] = "unwatched";
    GetVodPurchasesFilterEnum["Watched"] = "watched";
})(GetVodPurchasesFilterEnum || (GetVodPurchasesFilterEnum = {}));
export var GetVodPurchasesSortEnum;
(function (GetVodPurchasesSortEnum) {
    GetVodPurchasesSortEnum["Added"] = "added";
    GetVodPurchasesSortEnum["Alphabetical"] = "alphabetical";
    GetVodPurchasesSortEnum["Date"] = "date";
    GetVodPurchasesSortEnum["Name"] = "name";
    GetVodPurchasesSortEnum["PurchaseTime"] = "purchase_time";
    GetVodPurchasesSortEnum["Rating"] = "rating";
    GetVodPurchasesSortEnum["ReleaseDate"] = "release_date";
})(GetVodPurchasesSortEnum || (GetVodPurchasesSortEnum = {}));
var GetVodPurchasesQueryParams = /** @class */ (function (_super) {
    __extends(GetVodPurchasesQueryParams, _super);
    function GetVodPurchasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVodPurchasesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodPurchasesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodPurchasesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodPurchasesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodPurchasesQueryParams.prototype, "sort", void 0);
    return GetVodPurchasesQueryParams;
}(SpeakeasyBase));
export { GetVodPurchasesQueryParams };
var GetVodPurchasesSecurity = /** @class */ (function (_super) {
    __extends(GetVodPurchasesSecurity, _super);
    function GetVodPurchasesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetVodPurchasesSecurity.prototype, "oauth2", void 0);
    return GetVodPurchasesSecurity;
}(SpeakeasyBase));
export { GetVodPurchasesSecurity };
var GetVodPurchasesRequest = /** @class */ (function (_super) {
    __extends(GetVodPurchasesRequest, _super);
    function GetVodPurchasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPurchasesQueryParams)
    ], GetVodPurchasesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVodPurchasesSecurity)
    ], GetVodPurchasesRequest.prototype, "security", void 0);
    return GetVodPurchasesRequest;
}(SpeakeasyBase));
export { GetVodPurchasesRequest };
var GetVodPurchasesResponse = /** @class */ (function (_super) {
    __extends(GetVodPurchasesResponse, _super);
    function GetVodPurchasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVodPurchasesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVodPurchasesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodPurchasesResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OnDemandPage }),
        __metadata("design:type", Array)
    ], GetVodPurchasesResponse.prototype, "onDemandPages", void 0);
    return GetVodPurchasesResponse;
}(SpeakeasyBase));
export { GetVodPurchasesResponse };
