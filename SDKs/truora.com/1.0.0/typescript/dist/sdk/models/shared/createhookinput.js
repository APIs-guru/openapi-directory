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
export var CreateHookInputEventTypeEnum;
(function (CreateHookInputEventTypeEnum) {
    CreateHookInputEventTypeEnum["All"] = "all";
    CreateHookInputEventTypeEnum["Check"] = "check";
    CreateHookInputEventTypeEnum["ContinuousCheck"] = "continuous_check";
})(CreateHookInputEventTypeEnum || (CreateHookInputEventTypeEnum = {}));
export var CreateHookInputStatusEnum;
(function (CreateHookInputStatusEnum) {
    CreateHookInputStatusEnum["Enabled"] = "enabled";
    CreateHookInputStatusEnum["Disabled"] = "disabled";
})(CreateHookInputStatusEnum || (CreateHookInputStatusEnum = {}));
export var CreateHookInputSubscriberLanguageEnum;
(function (CreateHookInputSubscriberLanguageEnum) {
    CreateHookInputSubscriberLanguageEnum["Af"] = "af";
    CreateHookInputSubscriberLanguageEnum["Ar"] = "ar";
    CreateHookInputSubscriberLanguageEnum["Ca"] = "ca";
    CreateHookInputSubscriberLanguageEnum["Cs"] = "cs";
    CreateHookInputSubscriberLanguageEnum["Da"] = "da";
    CreateHookInputSubscriberLanguageEnum["De"] = "de";
    CreateHookInputSubscriberLanguageEnum["El"] = "el";
    CreateHookInputSubscriberLanguageEnum["En"] = "en";
    CreateHookInputSubscriberLanguageEnum["Es"] = "es";
    CreateHookInputSubscriberLanguageEnum["Fi"] = "fi";
    CreateHookInputSubscriberLanguageEnum["Fr"] = "fr";
    CreateHookInputSubscriberLanguageEnum["He"] = "he";
    CreateHookInputSubscriberLanguageEnum["Hi"] = "hi";
    CreateHookInputSubscriberLanguageEnum["Hr"] = "hr";
    CreateHookInputSubscriberLanguageEnum["Hu"] = "hu";
    CreateHookInputSubscriberLanguageEnum["Id"] = "id";
    CreateHookInputSubscriberLanguageEnum["It"] = "it";
    CreateHookInputSubscriberLanguageEnum["Ja"] = "ja";
    CreateHookInputSubscriberLanguageEnum["Ko"] = "ko";
    CreateHookInputSubscriberLanguageEnum["Ms"] = "ms";
    CreateHookInputSubscriberLanguageEnum["Nb"] = "nb";
    CreateHookInputSubscriberLanguageEnum["Nl"] = "nl";
    CreateHookInputSubscriberLanguageEnum["Pl"] = "pl";
    CreateHookInputSubscriberLanguageEnum["Pt"] = "pt";
    CreateHookInputSubscriberLanguageEnum["PrBr"] = "pr-BR";
    CreateHookInputSubscriberLanguageEnum["Ro"] = "ro";
    CreateHookInputSubscriberLanguageEnum["Ru"] = "ru";
    CreateHookInputSubscriberLanguageEnum["Sv"] = "sv";
    CreateHookInputSubscriberLanguageEnum["Th"] = "th";
    CreateHookInputSubscriberLanguageEnum["Tl"] = "tl";
    CreateHookInputSubscriberLanguageEnum["Tr"] = "tr";
    CreateHookInputSubscriberLanguageEnum["Vi"] = "vi";
    CreateHookInputSubscriberLanguageEnum["Zh"] = "zh";
    CreateHookInputSubscriberLanguageEnum["ZhCn"] = "zh-CN";
    CreateHookInputSubscriberLanguageEnum["ZhHk"] = "zh-HK";
})(CreateHookInputSubscriberLanguageEnum || (CreateHookInputSubscriberLanguageEnum = {}));
export var CreateHookInputSubscriberTypeEnum;
(function (CreateHookInputSubscriberTypeEnum) {
    CreateHookInputSubscriberTypeEnum["Web"] = "web";
    CreateHookInputSubscriberTypeEnum["Email"] = "email";
})(CreateHookInputSubscriberTypeEnum || (CreateHookInputSubscriberTypeEnum = {}));
// CreateHookInput
/**
 * Creates a hook related to previous created check.
**/
var CreateHookInput = /** @class */ (function (_super) {
    __extends(CreateHookInput, _super);
    function CreateHookInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=actions;" }),
        __metadata("design:type", Array)
    ], CreateHookInput.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=event_type;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=status;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subscriber_address;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "subscriberAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subscriber_language;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "subscriberLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subscriber_name;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "subscriberName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subscriber_type;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "subscriberType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subscriber_url;" }),
        __metadata("design:type", String)
    ], CreateHookInput.prototype, "subscriberUrl", void 0);
    return CreateHookInput;
}(SpeakeasyBase));
export { CreateHookInput };
