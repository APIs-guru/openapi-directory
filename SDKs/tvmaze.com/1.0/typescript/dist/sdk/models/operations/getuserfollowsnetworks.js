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
export var GetUserFollowsNetworksEmbedEnum;
(function (GetUserFollowsNetworksEmbedEnum) {
    GetUserFollowsNetworksEmbedEnum["Network"] = "network";
})(GetUserFollowsNetworksEmbedEnum || (GetUserFollowsNetworksEmbedEnum = {}));
var GetUserFollowsNetworksQueryParams = /** @class */ (function (_super) {
    __extends(GetUserFollowsNetworksQueryParams, _super);
    function GetUserFollowsNetworksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", String)
    ], GetUserFollowsNetworksQueryParams.prototype, "embed", void 0);
    return GetUserFollowsNetworksQueryParams;
}(SpeakeasyBase));
export { GetUserFollowsNetworksQueryParams };
var GetUserFollowsNetworksRequest = /** @class */ (function (_super) {
    __extends(GetUserFollowsNetworksRequest, _super);
    function GetUserFollowsNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserFollowsNetworksQueryParams)
    ], GetUserFollowsNetworksRequest.prototype, "queryParams", void 0);
    return GetUserFollowsNetworksRequest;
}(SpeakeasyBase));
export { GetUserFollowsNetworksRequest };
var GetUserFollowsNetworksResponse = /** @class */ (function (_super) {
    __extends(GetUserFollowsNetworksResponse, _super);
    function GetUserFollowsNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserFollowsNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.NetworkFollow }),
        __metadata("design:type", Array)
    ], GetUserFollowsNetworksResponse.prototype, "networkFollows", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserFollowsNetworksResponse.prototype, "statusCode", void 0);
    return GetUserFollowsNetworksResponse;
}(SpeakeasyBase));
export { GetUserFollowsNetworksResponse };
