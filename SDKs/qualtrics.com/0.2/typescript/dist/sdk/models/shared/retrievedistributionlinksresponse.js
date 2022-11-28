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
var RetrieveDistributionLinksResponseMeta = /** @class */ (function (_super) {
    __extends(RetrieveDistributionLinksResponseMeta, _super);
    function RetrieveDistributionLinksResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpStatus" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseMeta.prototype, "httpStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseMeta.prototype, "requestId", void 0);
    return RetrieveDistributionLinksResponseMeta;
}(SpeakeasyBase));
export { RetrieveDistributionLinksResponseMeta };
var RetrieveDistributionLinksResponseResultElements = /** @class */ (function (_super) {
    __extends(RetrieveDistributionLinksResponseResultElements, _super);
    function RetrieveDistributionLinksResponseResultElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactId" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exceededContactFrequency" }),
        __metadata("design:type", Boolean)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "exceededContactFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDataReference" }),
        __metadata("design:type", Object)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "externalDataReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkExpiration" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "linkExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", Object)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unsubscribed" }),
        __metadata("design:type", Boolean)
    ], RetrieveDistributionLinksResponseResultElements.prototype, "unsubscribed", void 0);
    return RetrieveDistributionLinksResponseResultElements;
}(SpeakeasyBase));
export { RetrieveDistributionLinksResponseResultElements };
var RetrieveDistributionLinksResponseResult = /** @class */ (function (_super) {
    __extends(RetrieveDistributionLinksResponseResult, _super);
    function RetrieveDistributionLinksResponseResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elements", elemType: RetrieveDistributionLinksResponseResultElements }),
        __metadata("design:type", Array)
    ], RetrieveDistributionLinksResponseResult.prototype, "elements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPage" }),
        __metadata("design:type", Object)
    ], RetrieveDistributionLinksResponseResult.prototype, "nextPage", void 0);
    return RetrieveDistributionLinksResponseResult;
}(SpeakeasyBase));
export { RetrieveDistributionLinksResponseResult };
var RetrieveDistributionLinksResponse = /** @class */ (function (_super) {
    __extends(RetrieveDistributionLinksResponse, _super);
    function RetrieveDistributionLinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RetrieveDistributionLinksResponseMeta)
    ], RetrieveDistributionLinksResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", RetrieveDistributionLinksResponseResult)
    ], RetrieveDistributionLinksResponse.prototype, "result", void 0);
    return RetrieveDistributionLinksResponse;
}(SpeakeasyBase));
export { RetrieveDistributionLinksResponse };
