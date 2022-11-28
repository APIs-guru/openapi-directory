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
var RetrievedistributionlinksPathParams = /** @class */ (function (_super) {
    __extends(RetrievedistributionlinksPathParams, _super);
    function RetrievedistributionlinksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DistributionId" }),
        __metadata("design:type", String)
    ], RetrievedistributionlinksPathParams.prototype, "distributionId", void 0);
    return RetrievedistributionlinksPathParams;
}(SpeakeasyBase));
export { RetrievedistributionlinksPathParams };
var RetrievedistributionlinksQueryParams = /** @class */ (function (_super) {
    __extends(RetrievedistributionlinksQueryParams, _super);
    function RetrievedistributionlinksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=surveyId" }),
        __metadata("design:type", String)
    ], RetrievedistributionlinksQueryParams.prototype, "surveyId", void 0);
    return RetrievedistributionlinksQueryParams;
}(SpeakeasyBase));
export { RetrievedistributionlinksQueryParams };
var RetrievedistributionlinksRequest = /** @class */ (function (_super) {
    __extends(RetrievedistributionlinksRequest, _super);
    function RetrievedistributionlinksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievedistributionlinksPathParams)
    ], RetrievedistributionlinksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrievedistributionlinksQueryParams)
    ], RetrievedistributionlinksRequest.prototype, "queryParams", void 0);
    return RetrievedistributionlinksRequest;
}(SpeakeasyBase));
export { RetrievedistributionlinksRequest };
var RetrievedistributionlinksResponse = /** @class */ (function (_super) {
    __extends(RetrievedistributionlinksResponse, _super);
    function RetrievedistributionlinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrievedistributionlinksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetrieveDistributionLinksResponse)
    ], RetrievedistributionlinksResponse.prototype, "retrieveDistributionLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrievedistributionlinksResponse.prototype, "statusCode", void 0);
    return RetrievedistributionlinksResponse;
}(SpeakeasyBase));
export { RetrievedistributionlinksResponse };
