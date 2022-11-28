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
var GetAudioPathParams = /** @class */ (function (_super) {
    __extends(GetAudioPathParams, _super);
    function GetAudioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetAudioPathParams.prototype, "word", void 0);
    return GetAudioPathParams;
}(SpeakeasyBase));
export { GetAudioPathParams };
export var GetAudioUseCanonicalEnum;
(function (GetAudioUseCanonicalEnum) {
    GetAudioUseCanonicalEnum["False"] = "false";
    GetAudioUseCanonicalEnum["True"] = "true";
})(GetAudioUseCanonicalEnum || (GetAudioUseCanonicalEnum = {}));
var GetAudioQueryParams = /** @class */ (function (_super) {
    __extends(GetAudioQueryParams, _super);
    function GetAudioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAudioQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetAudioQueryParams.prototype, "useCanonical", void 0);
    return GetAudioQueryParams;
}(SpeakeasyBase));
export { GetAudioQueryParams };
var GetAudioRequest = /** @class */ (function (_super) {
    __extends(GetAudioRequest, _super);
    function GetAudioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAudioPathParams)
    ], GetAudioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAudioQueryParams)
    ], GetAudioRequest.prototype, "queryParams", void 0);
    return GetAudioRequest;
}(SpeakeasyBase));
export { GetAudioRequest };
var GetAudioResponse = /** @class */ (function (_super) {
    __extends(GetAudioResponse, _super);
    function GetAudioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAudioResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAudioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAudioResponse.prototype, "statusCode", void 0);
    return GetAudioResponse;
}(SpeakeasyBase));
export { GetAudioResponse };
