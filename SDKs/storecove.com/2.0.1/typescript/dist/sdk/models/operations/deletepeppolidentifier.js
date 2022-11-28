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
var DeletePeppolIdentifierPathParams = /** @class */ (function (_super) {
    __extends(DeletePeppolIdentifierPathParams, _super);
    function DeletePeppolIdentifierPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" }),
        __metadata("design:type", String)
    ], DeletePeppolIdentifierPathParams.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" }),
        __metadata("design:type", Number)
    ], DeletePeppolIdentifierPathParams.prototype, "legalEntityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheme" }),
        __metadata("design:type", String)
    ], DeletePeppolIdentifierPathParams.prototype, "scheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=superscheme" }),
        __metadata("design:type", String)
    ], DeletePeppolIdentifierPathParams.prototype, "superscheme", void 0);
    return DeletePeppolIdentifierPathParams;
}(SpeakeasyBase));
export { DeletePeppolIdentifierPathParams };
var DeletePeppolIdentifierRequest = /** @class */ (function (_super) {
    __extends(DeletePeppolIdentifierRequest, _super);
    function DeletePeppolIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePeppolIdentifierPathParams)
    ], DeletePeppolIdentifierRequest.prototype, "pathParams", void 0);
    return DeletePeppolIdentifierRequest;
}(SpeakeasyBase));
export { DeletePeppolIdentifierRequest };
var DeletePeppolIdentifierResponse = /** @class */ (function (_super) {
    __extends(DeletePeppolIdentifierResponse, _super);
    function DeletePeppolIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePeppolIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePeppolIdentifierResponse.prototype, "statusCode", void 0);
    return DeletePeppolIdentifierResponse;
}(SpeakeasyBase));
export { DeletePeppolIdentifierResponse };
