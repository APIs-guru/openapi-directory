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
var SubscribeToChannelAlt1PathParams = /** @class */ (function (_super) {
    __extends(SubscribeToChannelAlt1PathParams, _super);
    function SubscribeToChannelAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], SubscribeToChannelAlt1PathParams.prototype, "channelId", void 0);
    return SubscribeToChannelAlt1PathParams;
}(SpeakeasyBase));
export { SubscribeToChannelAlt1PathParams };
var SubscribeToChannelAlt1Security = /** @class */ (function (_super) {
    __extends(SubscribeToChannelAlt1Security, _super);
    function SubscribeToChannelAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SubscribeToChannelAlt1Security.prototype, "oauth2", void 0);
    return SubscribeToChannelAlt1Security;
}(SpeakeasyBase));
export { SubscribeToChannelAlt1Security };
var SubscribeToChannelAlt1Request = /** @class */ (function (_super) {
    __extends(SubscribeToChannelAlt1Request, _super);
    function SubscribeToChannelAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeToChannelAlt1PathParams)
    ], SubscribeToChannelAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscribeToChannelAlt1Security)
    ], SubscribeToChannelAlt1Request.prototype, "security", void 0);
    return SubscribeToChannelAlt1Request;
}(SpeakeasyBase));
export { SubscribeToChannelAlt1Request };
var SubscribeToChannelAlt1Response = /** @class */ (function (_super) {
    __extends(SubscribeToChannelAlt1Response, _super);
    function SubscribeToChannelAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubscribeToChannelAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubscribeToChannelAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], SubscribeToChannelAlt1Response.prototype, "legacyError", void 0);
    return SubscribeToChannelAlt1Response;
}(SpeakeasyBase));
export { SubscribeToChannelAlt1Response };
