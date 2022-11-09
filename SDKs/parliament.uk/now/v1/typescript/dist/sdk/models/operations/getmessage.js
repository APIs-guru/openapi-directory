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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GetMessageAnnunciatorEnum;
(function (GetMessageAnnunciatorEnum) {
    GetMessageAnnunciatorEnum["CommonsMain"] = "CommonsMain";
    GetMessageAnnunciatorEnum["LordsMain"] = "LordsMain";
    GetMessageAnnunciatorEnum["Security"] = "Security";
})(GetMessageAnnunciatorEnum || (GetMessageAnnunciatorEnum = {}));
var GetMessagePathParams = /** @class */ (function (_super) {
    __extends(GetMessagePathParams, _super);
    function GetMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=annunciator" }),
        __metadata("design:type", String)
    ], GetMessagePathParams.prototype, "annunciator", void 0);
    return GetMessagePathParams;
}(SpeakeasyBase));
export { GetMessagePathParams };
var GetMessageRequest = /** @class */ (function (_super) {
    __extends(GetMessageRequest, _super);
    function GetMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMessagePathParams)
    ], GetMessageRequest.prototype, "pathParams", void 0);
    return GetMessageRequest;
}(SpeakeasyBase));
export { GetMessageRequest };
var GetMessageResponse = /** @class */ (function (_super) {
    __extends(GetMessageResponse, _super);
    function GetMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetMessageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MessageViewModel)
    ], GetMessageResponse.prototype, "messageViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMessageResponse.prototype, "statusCode", void 0);
    return GetMessageResponse;
}(SpeakeasyBase));
export { GetMessageResponse };
