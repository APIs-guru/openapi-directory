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
var GetApiPostsSpokespersonsQueryParams = /** @class */ (function (_super) {
    __extends(GetApiPostsSpokespersonsQueryParams, _super);
    function GetApiPostsSpokespersonsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partyId" }),
        __metadata("design:type", Number)
    ], GetApiPostsSpokespersonsQueryParams.prototype, "partyId", void 0);
    return GetApiPostsSpokespersonsQueryParams;
}(SpeakeasyBase));
export { GetApiPostsSpokespersonsQueryParams };
var GetApiPostsSpokespersonsRequest = /** @class */ (function (_super) {
    __extends(GetApiPostsSpokespersonsRequest, _super);
    function GetApiPostsSpokespersonsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiPostsSpokespersonsQueryParams)
    ], GetApiPostsSpokespersonsRequest.prototype, "queryParams", void 0);
    return GetApiPostsSpokespersonsRequest;
}(SpeakeasyBase));
export { GetApiPostsSpokespersonsRequest };
var GetApiPostsSpokespersonsResponse = /** @class */ (function (_super) {
    __extends(GetApiPostsSpokespersonsResponse, _super);
    function GetApiPostsSpokespersonsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiPostsSpokespersonsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiPostsSpokespersonsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.GovernmentOppositionPostItem }),
        __metadata("design:type", Array)
    ], GetApiPostsSpokespersonsResponse.prototype, "governmentOppositionPostItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiPostsSpokespersonsResponse.prototype, "statusCode", void 0);
    return GetApiPostsSpokespersonsResponse;
}(SpeakeasyBase));
export { GetApiPostsSpokespersonsResponse };
