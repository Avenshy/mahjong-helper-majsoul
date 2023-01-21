// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20230121.3
// @description  majsoul for mahjong-helper
// @author       Avenshy
// @iconURL      https://www.maj-soul.com/homepage/character/1/yiji_0.png
// @homepageURL  https://github.com/Avenshy/mahjong-helper-majsoul
// @supportURL   https://github.com/Avenshy/mahjong-helper-majsoul/issues
// @match        https://game.maj-soul.com/1/
// @match        https://game.maj-soul.net/1/
// @match        https://game.mahjongsoul.com/
// @match        https://game.mahjongsoul.com/index.html
// @match        https://mahjongsoul.game.yo-star.com/
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @license      GPL-3.0
// ==/UserScript==

let API_URL = 'https://localhost:12121/'

! function mahjong_helper_majsoul() {
    try {
        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionLockTile play data:" + JSON["stringify"](B));
                        var V = B.seat;
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var W = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z'),
                            Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)];
                        if (B["operation"] && Laya["timer"].once(500, this, function () {
                            Q["ActionOperation"].play(B["operation"]);
                        }), void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])), Q["DesktopMgr"].Inst["setScores"](B["scores"]), 0 == B["lock_state"] ? Z["RevealFailed"](W) : 1 == B["lock_state"] && Z["PlaySound"]("act_locktile"), 3 == B["lock_state"]) {
                            Z["PlaySound"]("act_unveil");
                            var S = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])];
                            S["RevealFailed"](W),
                                Q["DesktopMgr"].Inst["onRevealStateChange"](Q["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            Q["DesktopMgr"].Inst["onRevealStateChange"](V, !1);
                        Q["DesktopMgr"].Inst["ActionRunComplete"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionLockTile fastplay data:" + JSON["stringify"](B) + " usetime:" + V);
                        var W = B.seat;
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var Z = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z'),
                            S = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                        if (B["operation"] && -1 != V && Laya["timer"].once(500, this, function () {
                            Q["ActionOperation"].play(B["operation"], V);
                        }), void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])), Q["DesktopMgr"].Inst["setScores"](B["scores"]), 0 == B["lock_state"] && S["RevealFailed"](Z, !1), 3 == B["lock_state"]) {
                            var v = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])];
                            v["RevealFailed"](Z, !1),
                                Q["DesktopMgr"].Inst["onRevealStateChange"](Q["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            Q["DesktopMgr"].Inst["onRevealStateChange"](W, !1);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1);
                    },
                    V["record"] = function (B, V) {
                        if (void 0 === V && (V = 0), app.Log.log("ActionLockTile record data:" + JSON["stringify"](B)), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var W = 0; W < B["operations"]["length"]; W++)
                                Q["ActionOperation"].ob(B["operations"][W], V, 450);
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                        var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](B.seat)],
                            S = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z');
                        if (0 == B["lock_state"] ? Z["RevealFailed"](S) : 1 == B["lock_state"] && Z["PlaySound"]("act_locktile"), 3 == B["lock_state"]) {
                            Z["PlaySound"]("act_unveil");
                            var v = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])];
                            v["RevealFailed"](S),
                                Q["DesktopMgr"].Inst["onRevealStateChange"](Q["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            Q["DesktopMgr"].Inst["onRevealStateChange"](B.seat, !1);
                        return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            1000;
                    },
                    V["fastrecord"] = function (B, V) {
                        if (void 0 === V && (V = -1), app.Log.log("ActionLockTile record data:" + JSON["stringify"](B)), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operations"])
                            for (var W = 0; W < B["operations"]["length"]; W++)
                                Q["ActionOperation"].ob(B["operations"][W], V, 450);
                        Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](B.seat)],
                            S = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z');
                        if (0 == B["lock_state"] && Z["RevealFailed"](S, !1), 3 == B["lock_state"]) {
                            var v = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])];
                            v["RevealFailed"](S, !1),
                                Q["DesktopMgr"].Inst["onRevealStateChange"](Q["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            Q["DesktopMgr"].Inst["onRevealStateChange"](B.seat, !1);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionLockTile"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            Q["PAIMODEL_HEIGHT"] = "0.043225" * 0.94,
                Q["PAIMODEL_WIDTH"] = "0.032775" * 0.94,
                Q["PAIMODEL_THICKNESS"] = "0.0235" * 0.95 * 0.94,
                Q["PAI_COUNT"] = 136;
            var B;
            !function (Q) {
                Q[Q.NULL = 0] = "NULL",
                    Q[Q.AUTH = 1] = "AUTH",
                    Q[Q["SYNCING"] = 2] = "SYNCING",
                    Q[Q["READY"] = 3] = "READY";
            }
                (B = Q["ELink_State"] || (Q["ELink_State"] = {}));
            var V;
            !function (Q) {
                Q[Q["Liqi4"] = 0] = "Liqi4",
                    Q[Q["Liqi3"] = 1] = "Liqi3";
            }
                (V = Q["ERuleMode"] || (Q["ERuleMode"] = {}));
            var W;
            !function (Q) {
                Q[Q.play = 0] = "play",
                    Q[Q["paipu"] = 1] = "paipu",
                    Q[Q["live_broadcast"] = 2] = "live_broadcast";
            }
                (W = Q["EMJMode"] || (Q["EMJMode"] = {}));
            var Z = function (Z) {
                function S() {
                    var B = Z.call(this) || this;
                    return B["rule_mode"] = V["Liqi4"],
                        B.mode = W.play,
                        B["active"] = !1,
                        B["game_config"] = null,
                        B.seat = 0,
                        B.dora = [],
                        B["xuezhan"] = !1,
                        B["anpai"] = !1,
                        B["last_anpai_score"] = 0,
                        B["players"] = null,
                        B["mainrole"] = null,
                        B["num_left_show"] = new Array(),
                        B["container_other"] = null,
                        B["plane_chang"] = null,
                        B["plane_ju"] = null,
                        B["container_other_reveal"] = null,
                        B["plane_chang_reveal"] = null,
                        B["plane_ju_reveal"] = null,
                        B["num_left_show_reveal"] = new Array(),
                        B["score_reveal"] = new Array(),
                        B["trans_container_effect"] = null,
                        B["effect_pai_canchi"] = null,
                        B["effect_dora3D"] = null,
                        B["effect_dora3D_touying"] = null,
                        B["effect_doraPlane"] = null,
                        B["effect_shadow"] = null,
                        B["effect_shadow_touming"] = null,
                        B["effect_recommend"] = null,
                        B["auto_hule"] = !1,
                        B["auto_nofulu"] = !1,
                        B["auto_moqie"] = !1,
                        B["auto_liqi"] = !0,
                        B["emoji_switch"] = !1,
                        B["duringReconnect"] = !1,
                        B["gameing"] = !1,
                        B["lastpai_seat"] = 0,
                        B["lastqipai"] = null,
                        B["oplist"] = [],
                        B["liqi_select"] = [],
                        B["operation_showing"] = !1,
                        B["myaccountid"] = 0,
                        B["player_datas"] = [],
                        B["player_effects"] = [],
                        B["mjp_res_name"] = '',
                        B["last_gang"] = 0,
                        B["gameEndResult"] = null,
                        B["levelchangeinfo"] = null,
                        B["activity_reward"] = null,
                        B["rewardinfo"] = null,
                        B["choosed_pai"] = null,
                        B["muyu_info"] = null,
                        B["muyu_effect"] = null,
                        B["actionList"] = [],
                        B["action_index"] = 0,
                        B["current_step"] = 0,
                        B["actionMap"] = null,
                        B["tingpais"] = [],
                        B["record_show_hand"] = !1,
                        B["record_show_paopai"] = !1,
                        B["record_show_anim"] = !0,
                        B["ptchange"] = 0,
                        B["waiting_lingshang_deal_tile"] = !1,
                        B.md5 = '',
                        B["paipu_config"] = 0,
                        B["ai_level"] = 1,
                        B["timestoped"] = !1,
                        B["handles_after_timerun"] = [],
                        B["doactioncd"] = 0,
                        B["dochain_fast"] = !1,
                        B["action_running"] = !1,
                        B["hangupCount"] = 0,
                        B["state_cache"] = {},
                        B["mind_voice_seat"] = -1,
                        B["mind_voice_type"] = '',
                        B["during_playing_mind_voice"] = !1,
                        S.Inst = B,
                        B["actionMap"] = {},
                        B["actionMap"]["ActionMJStart"] = new Laya["Handler"](B, function (Q) {
                            Q.msg;
                            return app.Log.log("ActionMJStart begin"),
                                B["ClearOperationShow"](),
                                GameMgr.Inst["EnterMJ"](),
                                uiscript["UI_FightBegin"].show(Laya["Handler"]["create"](B, function () {
                                    uiscript["UI_Loading"].Inst["close"](),
                                        B["ActionRunComplete"]();
                                })),
                                2000;
                        }, null, !1),
                        B["actionMap"]["ActionNewRound"] = new Laya["Handler"](B, function (V) {
                            app.Log.log("ActionNewRound begin");
                            var W = V.msg,
                                Z = V.fast;
                            if (B["ClearOperationShow"](), uiscript["UI_Loading"].Inst["close"](), GameMgr.Inst["EnterMJ"](), Z)
                                return uiscript["UI_FightBegin"].hide(), Q["ActionNewRound"]["fastplay"](W, -1), 0;
                            var S = uiscript["UI_FightBegin"].hide();
                            return Laya["timer"].once(S + 200, B, function () {
                                Q["ActionNewRound"].play(W);
                            }),
                                W.al && (S += 1300),
                                B["is_jiuchao_mode"]() && (S += 150),
                                S + 200 + 1200 + 400;
                        }, null, !1),
                        B["actionMap"]["ActionNewCard"] = new Laya["Handler"](B, function (V) {
                            app.Log.log("ActionNewCard begin");
                            var W = V.msg,
                                Z = V.fast;
                            return B["ClearOperationShow"](),
                                uiscript["UI_Loading"].Inst["close"](),
                                GameMgr.Inst["EnterMJ"](),
                                Z ? (Q["ActionNewCard"]["fastplay"](W, -1), 0) : Q["ActionNewCard"].play(W);
                        }, null, !1),
                        B["actionMap"]["ActionDiscardTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionDiscardTile"]["fastplay"](W, -1), 0) : (Q["ActionDiscardTile"].play(W), Laya["timer"].once(500, B, B["ActionRunComplete"]), 500);
                        }, null, !1),
                        B["actionMap"]["ActionDealTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionDealTile"]["fastplay"](W, -1), 0) : (Q["ActionDealTile"].play(W), 500);
                        }, null, !1),
                        B["actionMap"]["ActionChiPengGang"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionChiPengGang"]["fastplay"](W, -1), 0) : (Q["ActionChiPengGang"].play(W), 1100);
                        }, null, !1),
                        B["actionMap"]["ActionAnGangAddGang"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionAnGangAddGang"]["fastplay"](W, -1), 0) : (Q["ActionAnGangAddGang"].play(W), 1100);
                        }, null, !1),
                        B["actionMap"]["ActionHule"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg;
                            return Q["ActionHule"].play(W),
                                5000;
                        }, null, !1),
                        B["actionMap"]["ActionHuleXueZhanMid"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg;
                            return Q["ActionHuleXueZhanMid"].play(W),
                                1000;
                        }, null, !1),
                        B["actionMap"]["ActionHuleXueZhanEnd"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg;
                            return Q["ActionHuleXueZhanEnd"].play(W),
                                1000;
                        }, null, !1),
                        B["actionMap"]["ActionNoTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg;
                            return Q["ActionNoTile"].play(W),
                                5000;
                        }, null, !1),
                        B["actionMap"]["ActionLiuJu"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg;
                            return Q["ActionLiuJu"].play(W),
                                5000;
                        }, null, !1),
                        B["actionMap"]["ActionBaBei"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionBabei"]["fastplay"](W, -1), 0) : (Q["ActionBabei"].play(W), 1000);
                        }, null, !1),
                        B["actionMap"]["ActionChangeTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionChangeTile"]["fastplay"](W, -1), 0) : (Q["ActionChangeTile"].play(W), 3000);
                        }, null, !1),
                        B["actionMap"]["ActionSelectGap"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionSelectGap"]["fastplay"](W, -1), 0) : (Q["ActionSelectGap"].play(W), 800);
                        }, null, !1),
                        B["actionMap"]["ActionGangResult"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionGangResult"]["fastplay"](W, -1), 0) : (Q["ActionGangResult"].play(W), 1000);
                        }, null, !1),
                        B["actionMap"]["ActionGangResultEnd"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionGangResultEnd"]["fastplay"](W, -1), 0) : (Q["ActionGangResultEnd"].play(W), 2000);
                        }, null, !1),
                        B["actionMap"]["ActionRevealTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionRevealTile"]["fastplay"](W, -1), 0) : (Q["ActionRevealTile"].play(W), Laya["timer"].once(500, B, B["ActionRunComplete"]), 500);
                        }, null, !1),
                        B["actionMap"]["ActionLockTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionLockTile"]["fastplay"](W, -1), 0) : (Q["ActionLockTile"].play(W), 1000);
                        }, null, !1),
                        B["actionMap"]["ActionUnveilTile"] = new Laya["Handler"](B, function (V) {
                            B["ClearOperationShow"]();
                            var W = V.msg,
                                Z = V.fast;
                            return Z ? (Q["ActionUnveilTile"]["fastplay"](W, -1), 0) : (Q["ActionUnveilTile"].play(W), 1000);
                        }, null, !1),
                        B["actionMap"]["ActionFillAwaitingTiles"] = new Laya["Handler"](B, function (B) {
                            app.Log.log("ActionFillAwaitingTiles begin");
                            var V = B.msg,
                                W = B.fast;
                            return W ? (Q["ActionFillAwaitingTiles"]["fastplay"](V, -1), 0) : Q["ActionFillAwaitingTiles"].play(V);
                        }, null, !1),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameEndResult", Laya["Handler"]["create"](B, function (Q) {
                            B["gameEndResult"] = Q["result"],
                                uiscript["UI_Hangup_Warn"].Inst["enable"] && uiscript["UI_Hangup_Warn"].Inst["close"](),
                                B.mode == W.play && (uiscript["UI_Activity"]["need_check_activity"] = !0),
                                Laya["timer"].once(10000, B, function () {
                                    game["MJNetMgr"].Inst["Close"]();
                                });
                        })),
                        app["NetAgent"]["AddListener2MJ"]("ActionPrototype", Laya["Handler"]["create"](B, function (Q) {
                            if (app.Log.log("Receive Action: " + JSON["stringify"](Q)), B["duringReconnect"])
                                B["actionList"].push(Q);
                            else if (B["actionList"]["length"] > 0)
                                B["actionList"].push(Q);
                            else {
                                B["actionList"].push(Q);
                                var V = B["doactioncd"] - Laya["timer"]["currTimer"];
                                0 > V && (V = 0),
                                    B["StartChainAction"](V);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameTerminate", Laya["Handler"]["create"](B, function (V) {
                            app.Log.log("NotifyGameTerminate:" + JSON["stringify"](V)),
                                Q["AudioMgr"]["StopMusic"](),
                                "user-manual-terminate" != V["reason"] && uiscript["UI_SecondConfirm"].Inst["show_only_confirm"](game["Tools"]["strOfLocalization"](2227), Laya["Handler"]["create"](B, function () {
                                    B["Reset"](),
                                        game["Scene_MJ"].Inst["GameEnd"]();
                                })),
                                uiscript["UI_VoteProgress"].Inst["enable"] && uiscript["UI_VoteProgress"].Inst["close"]();
                        })),
                        Q["ModelAnimationController"]["init_data"](),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGamePause", Laya["Handler"]["create"](B, function (Q) {
                            app.Log.log("NotifyGamePause:" + JSON["stringify"](Q));
                            var V = Q["paused"];
                            B["setGameStop"](V);
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameFinishReward", Laya["Handler"]["create"](B, function (Q) {
                            app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](Q)),
                                B["levelchangeinfo"] = Q["level_change"],
                                B["rewardinfo"] = Q;
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyActivityReward", Laya["Handler"]["create"](B, function (Q) {
                            app.Log.log("NotifyActivityReward: " + JSON["stringify"](Q)),
                                B["activity_reward"] = Q;
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyActivityPoint", Laya["Handler"]["create"](B, function (Q) {
                            for (var B = Q["activity_points"], V = 0; V < B["length"]; V++) {
                                var W = B[V];
                                W["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = W["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyLeaderboardPoint", Laya["Handler"]["create"](B, function (Q) {
                            for (var B = Q["leaderboard_points"], V = 0; V < B["length"]; V++) {
                                var W = B[V];
                                W["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = W["point"]);
                            }
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyGameFinishRewardV2", Laya["Handler"]["create"](B, function (Q) {
                            app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](Q)),
                                B["levelchangeinfo"] = Q["level_change"],
                                B["rewardinfo"] = Q;
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyActivityRewardV2", Laya["Handler"]["create"](B, function (Q) {
                            app.Log.log("NotifyActivityReward: " + JSON["stringify"](Q)),
                                B["activity_reward"] = Q;
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyActivityPointV2", Laya["Handler"]["create"](B, function (Q) {
                            for (var B = Q["activity_points"], V = 0; V < B["length"]; V++) {
                                var W = B[V];
                                W["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = W["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                            }
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyLeaderboardPointV2", Laya["Handler"]["create"](B, function (Q) {
                            for (var B = Q["leaderboard_points"], V = 0; V < B["length"]; V++) {
                                var W = B[V];
                                W["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = W["point"]);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("PlayerLeaving", Laya["Handler"]["create"](B, function (Q) {
                            Q && Q.seat == B.seat && uiscript["UI_Hangup_Warn"].Inst.show();
                        })),
                        B;
                }
                return __extends(S, Z),
                    S["is_yuren_type"] = function (Q) {
                        if (void 0 === Q && (Q = !1), Q) {
                            var B = new Date();
                            this["_is_yuren_type"] = 3 == B["getMonth"]() && 1 == B["getDate"]();
                        }
                        return this["_is_yuren_type"];
                    },
                    Object["defineProperty"](S["prototype"], "round_id", {
                        get: function () {
                            return this["index_change"] + '-' + this["index_ju"] + '-' + this["index_ben"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](S["prototype"], "main_role_character_info", {
                        get: function () {
                            return this["player_datas"][this.seat]["character"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](S["prototype"], "player_count", {
                        get: function () {
                            return this["rule_mode"] == V["Liqi3"] ? 3 : 4;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    S["prototype"]["seat2LocalPosition"] = function (Q) {
                        if (this["rule_mode"] == V["Liqi3"]) {
                            for (var B = this.seat, W = 0; 4 > W; W++) {
                                if (Q == B)
                                    return W;
                                B++,
                                    B >= 3 && (B = -1);
                            }
                            return 0;
                        }
                        return (Q - this.seat + 4) % 4;
                    },
                    S["prototype"]["localPosition2Seat"] = function (Q) {
                        if (this["rule_mode"] == V["Liqi3"]) {
                            for (var B = this.seat, W = 0; Q > W; W++)
                                B++, B >= 3 && (B = -1);
                            return B;
                        }
                        return (this.seat + Q) % 4;
                    },
                    S["prototype"]["getPlayerName"] = function (Q) {
                        var B = this["player_datas"][Q]["account_id"];
                        if (this.mode == W["paipu"] && uiscript["UI_Replay"].Inst["hide_name"]) {
                            var V = this["seat2LocalPosition"](Q);
                            switch (V) {
                                case 0:
                                    return {
                                        account_id: B,
                                        nickname: game["Tools"]["strOfLocalization"](3076),
                                        verified: 0
                                    };
                                case 1:
                                    return {
                                        account_id: B,
                                        nickname: game["Tools"]["strOfLocalization"](3073),
                                        verified: 0
                                    };
                                case 2:
                                    return {
                                        account_id: B,
                                        nickname: game["Tools"]["strOfLocalization"](3074),
                                        verified: 0
                                    };
                                case 3:
                                    return {
                                        account_id: B,
                                        nickname: game["Tools"]["strOfLocalization"](3075),
                                        verified: 0
                                    };
                            }
                            return {
                                account_id: B,
                                nickname: '',
                                verified: 0
                            };
                        }
                        var Z = this["player_datas"][Q]["nickname"];
                        return B && !game["Tools"]["is_same_zone"](GameMgr.Inst["account_id"], B) && (GameMgr.Inst["nickname_replace_enable"] && GameMgr.Inst["nickname_replace_lst"]["length"] > 0 ? GameMgr.Inst["nickname_replace_table"][B] ? Z = GameMgr.Inst["nickname_replace_table"][B] : (Z = GameMgr.Inst["nickname_replace_lst"][Math["floor"](Math["random"]() * GameMgr.Inst["nickname_replace_lst"]["length"])], GameMgr.Inst["nickname_replace_table"][B] = Z) : null != app["Taboo"].test(Z) && (Z = game["Tools"]["strOfLocalization"](3060))), {
                            account_id: B,
                            nickname: Z,
                            verified: this["player_datas"][Q]["verified"]
                        };
                    },
                    Object["defineProperty"](S["prototype"], "showingPaopai", {
                        get: function () {
                            return this.mode != W.play;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    S["prototype"]["is_dora3_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["dora3_mode"] ? !0 : !1;
                    },
                    S["prototype"]["is_peipai_open_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["begin_open_mode"] ? !0 : !1;
                    },
                    S["prototype"]["is_muyu_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["muyu_mode"] ? !0 : !1;
                    },
                    S["prototype"]["is_open_hand"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["open_hand"] ? !0 : !1;
                    },
                    S["prototype"]["is_shilian_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"]["shilian"] ? !0 : !1;
                    },
                    S["prototype"]["is_xiuluo_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["xuezhandaodi"] ? !0 : !1;
                    },
                    S["prototype"]["is_jiuchao_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["jiuchao_mode"] ? !0 : !1;
                    },
                    S["prototype"]["is_reveal_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["reveal_discard"] ? !0 : !1;
                    },
                    S["prototype"]["is_hesu_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].hesu ? !0 : !1;
                    },
                    S["prototype"]["is_huansanzhang_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["huansanzhang"] ? !0 : !1;
                    },
                    S["prototype"]["is_chuanma_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["chuanma"] ? !0 : !1;
                    },
                    S["prototype"]["is_jjc_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].jjc ? !0 : !1;
                    },
                    S["prototype"]["is_top_match"] = function () {
                        var Q = 0;
                        if (this["game_config"] && this["game_config"].meta && (Q = this["game_config"].meta["mode_id"]), (15 == Q || 16 == Q || 25 == Q || 26 == Q) && this["player_datas"]) {
                            for (var B = 0, W = this["player_datas"]; B < W["length"]; B++) {
                                var Z = W[B],
                                    S = this["rule_mode"] == V["Liqi4"] ? Z["level"].id : Z["level3"].id;
                                if (6 != cfg["level_definition"]["level_definition"].get(S)["primary_level"])
                                    return !1;
                            }
                            return !0;
                        }
                        return !1;
                    },
                    S["prototype"]["ActionRunComplete"] = function () {
                        this["action_running"] = !1;
                    },
                    S["prototype"]["StartChainAction"] = function (Q) {
                        this["doactioncd"] = Laya["timer"]["currTimer"] + Q,
                            Laya["timer"]["frameLoop"](1, this, this["DoChainAction"]);
                    },
                    S["prototype"]["DoChainAction"] = function () {
                        var Q = this;
                        if (this["action_index"] >= this["actionList"]["length"])
                            this["action_index"] = 0, this["actionList"] = [], this["dochain_fast"] = !1, Laya["timer"]["clear"](this, this["DoChainAction"]), this["duringReconnect"] && (app.Log.log("finishSyncGame0"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { }), this["duringReconnect"] = !1);
                        else {
                            if (!this["dochain_fast"]) {
                                if (this["action_running"])
                                    return;
                                if (Laya["timer"]["currTimer"] <= this["doactioncd"] - Laya["timer"]["delta"])
                                    return;
                                Laya["timer"]["clear"](this, this["DoChainAction"]);
                            }
                            this["action_index"] == this["actionList"]["length"] - 1 && this["duringReconnect"] && (this["duringReconnect"] = !1, app.Log.log("finishSyncGame1"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { })),
                                this["dochain_fast"] ? this["action_index"] + 2 < this["actionList"]["length"] ? this["DoMJAction"](this["actionList"][this["action_index"]++], !0) : (this["dochain_fast"] = !1, this["DoMJAction"](this["actionList"][this["action_index"]++], !1)) : (this["dochain_fast"] = !1, this["action_index"] + 4 < this["actionList"]["length"] && (this["dochain_fast"] = !0), this["dochain_fast"] ? Laya["timer"].once(800, this, function () {
                                    for (var B = Q["actionList"]["length"] - 1; B >= Q["action_index"]; B--)
                                        if ("ActionNewRound" == Q["actionList"][B].name) {
                                            Q["action_index"] = B;
                                            break;
                                        }
                                    Q["DoMJAction"](Q["actionList"][Q["action_index"]++], !0);
                                }) : this["DoMJAction"](this["actionList"][this["action_index"]++], !1));
                        }
                    },
                    S["EnDecode"] = function (Q) {
                        for (var B = [132, 94, 78, 66, 57, 162, 31, 96, 28], V = 0; V < Q["byteLength"]; V++) {
                            var W = (23 ^ Q["byteLength"]) + 5 * V + B[V % B["length"]] & 255;
                            Q[V] ^= W;
                        }
                        return Q;
                    },
                    S["prototype"]["DoMJAction"] = function (Q, B) {
                        var V = this;
                        if (this["active"]) {
                            var W = net["ProtobufManager"]["lookupType"]("lq." + Q.name);
                            if (!W)
                                throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + Q.name);
                            var Z = Q.step,
                                v = W["decode"](S["EnDecode"](Q.data));
                            if (app.Log.log("DoMJAction step:" + Z + ' [' + Q.name + "]:  " + JSON["stringify"](v) + " fast:" + B), Z > 1 && Z != this["current_step"] + 1)
                                return app.Log.log("step 不对 强制触发全数据重连 step:" + Z + " current_step:" + this["current_step"]), this["trySyncGame"](), void 0;
                            var i = 0;
                            if (this["current_step"] = Z, this["actionMap"]["hasOwnProperty"](Q.name))
                                try {
                                    B || (this["action_running"] = !0),
                                        i = this["actionMap"][Q.name]["runWith"]({
                                            msg: v,
                                            fast: B
                                        });
                                } catch (x) {
                                    var l = {};
                                    return l["error"] = x["message"],
                                        l["stack"] = x["stack"],
                                        l["method"] = "DoMJAction",
                                        l.name = Q.name,
                                        l.data = Q,
                                        l.step = Z,
                                        GameMgr.Inst["onFatalError"](l),
                                        void 0;
                                }
                            else
                                app.Log["Error"]("没有监听操作：" + Q.name);
                            B ? this["DoChainAction"]() : Laya["timer"]["frameOnce"](1, this, function () {
                                V["StartChainAction"](i);
                            });
                        }
                    },
                    S["prototype"]["_load"] = function (B) {
                        this["desktop3D"] = B,
                            this["desktop3D"]["getChildByName"]("all")["active"] = !1;
                        var V = this["desktop3D"]["getChildByName"]("poss");
                        this["players"] = new Array(),
                            this["mainrole"] = V["getChildByName"]("man_1")["addComponent"](Q["ViewPlayer_Me"]),
                            this["mainrole"]["InitMe"](this, 0, game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands"), V),
                            this["players"].push(this["mainrole"]);
                        for (var W = 2; 4 >= W; W++) {
                            var Z = V["getChildByName"]("man_" + W)["addComponent"](Q["ViewPlayer_Other"]);
                            Z.Init(this, W - 1, V),
                                this["players"].push(Z);
                        }
                        var S = this["desktop3D"]["getChildByName"]("other"),
                            v = S["getChildByName"]("left");
                        this["num_left_show"].push(v["getChildByName"]('0')),
                            this["num_left_show"].push(v["getChildByName"]('1'));
                        var i = S["getChildByName"]("chang");
                        this["container_other"] = S,
                            this["plane_chang"] = i["getChildByName"]("chang"),
                            this["plane_ju"] = i["getChildByName"]('ju'),
                            this["container_other"] = S,
                            this["container_other_reveal"] = this["desktop3D"]["getChildByName"]("other_reveal");
                        var x = this["container_other_reveal"]["getChildByName"]("left");
                        this["num_left_show_reveal"].push(x["getChildByName"]('0')),
                            this["num_left_show_reveal"].push(x["getChildByName"]('1'));
                        var l = this["container_other_reveal"]["getChildByName"]("chang");
                        if (this["plane_chang_reveal"] = l["getChildByName"]("chang"), this["plane_ju_reveal"] = l["getChildByName"]('ju'), 'kr' == GameMgr["client_language"]) {
                            var m = "scene/Assets/Resource/table/tablemid/",
                                s = this["plane_chang_reveal"]["meshRender"]["material"];
                            s["albedoTexture"] = Laya["Loader"]["getRes"](m + "chang_kr.png"),
                                s = l["getChildByName"]("juzi")["meshRender"]["material"],
                                s["albedoTexture"] = Laya["Loader"]["getRes"](m + "chang_kr.png"),
                                s = x["getChildByName"]("left")["meshRender"]["material"],
                                s["albedoTexture"] = Laya["Loader"]["getRes"](m + "left_kr.png"),
                                s = this["plane_chang"]["meshRender"]["material"],
                                s["albedoTexture"] = Laya["Loader"]["getRes"](m + "chang_kr.png"),
                                s = i["getChildByName"]("juzi")["meshRender"]["material"],
                                s["albedoTexture"] = Laya["Loader"]["getRes"](m + "chang_kr.png"),
                                s = v["getChildByName"]("left")["meshRender"]["material"],
                                s["albedoTexture"] = Laya["Loader"]["getRes"](m + "left_kr.png");
                        }
                        for (var f = this["container_other_reveal"]["getChildByName"]("score"), W = 0; 6 > W; W++)
                            this["score_reveal"].push(f["getChildAt"](W));
                        this["SetLeftPaiShow"](0),
                            this["SetChangJuShow"](0, 0, 0),
                            this["trans_container_effect"] = this["desktop3D"]["getChildByName"]("effect"),
                            this["effect_dora3D"] = this["trans_container_effect"]["getChildByName"]("effect_dora"),
                            this["effect_dora3D_touying"] = this["trans_container_effect"]["getChildByName"]("effect_touming_dora");
                        var z = this["effect_dora3D"]["getChildAt"](0)["meshRender"]["material"];
                        z["disableLight"](),
                            this["effect_shadow"] = this["trans_container_effect"]["getChildByName"]("effect_shadow"),
                            this["effect_shadow_touming"] = this["trans_container_effect"]["getChildByName"]("effect_shadow_touming"),
                            this["effect_dora3D"]["active"] = !0,
                            this["effect_shadow"]["active"] = !0,
                            this["effect_shadow_touming"]["active"] = !0,
                            this["effect_dora3D_touying"]["active"] = !0,
                            this["effect_doraPlane"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_dora"),
                            this["effect_recommend"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_recommend"),
                            this["effect_doraPlane"]["active"] = !1,
                            this["effect_recommend"]["active"] = !1;
                        var C = this["effect_recommend"]["getChildAt"](0)["meshRender"]["material"],
                            T = "myres2/mjp/recommend.png";
                        "chs" != GameMgr["client_language"] && (T = GameMgr["client_language"] + '/' + T),
                            Laya["loader"]["getRes"](T) && (C["diffuseTexture"] = Laya["loader"]["getRes"](T));
                    },
                    S["prototype"]["initRoom"] = function (B, Z, v, i, x) {
                        var l = this;
                        uiscript["UI_Rpg"]["needShow"] = !1,
                            uiscript["UI_WaitingRoom"].Inst["resetData"](),
                            GameMgr.Inst["in_hesu"] = !1,
                            this["game_config"] = B,
                            this["rule_mode"] = V["Liqi4"],
                            B.mode.mode && (this["rule_mode"] = B.mode.mode < 10 ? V["Liqi4"] : V["Liqi3"]),
                            this["xuezhan"] = !1,
                            B.mode && B.mode["detail_rule"] && (this["xuezhan"] = !!B.mode["detail_rule"]["xuezhandaodi"]),
                            B.mode && B.mode["detail_rule"] && (this["field_spell"] = B.mode["detail_rule"]["field_spell_mode"]),
                            B.mode && B.mode["detail_rule"] && B.mode["detail_rule"]["reveal_discard"] ? (this["container_other"]["active"] = !1, this["container_other_reveal"]["active"] = !0, this["anpai"] = !0) : (this["anpai"] = !1, this["container_other"]["active"] = !0, this["container_other_reveal"]["active"] = !1),
                            this.mode = i,
                            this.seat = -1,
                            this["player_datas"] = Z,
                            this["gameEndResult"] = null,
                            this["levelchangeinfo"] = null,
                            this["activity_reward"] = null,
                            this["rewardinfo"] = null,
                            this["active"] = !0,
                            this["ptchange"] = 0,
                            this["timestoped"] = !1,
                            this["action_running"] = !1,
                            this["hangupCount"] = 0,
                            this["handles_after_timerun"] = [],
                            this["muyu_info"] = null,
                            this["muyu_effect"] && (this["muyu_effect"]["destroy"](), this["muyu_effect"] = null),
                            uiscript["UI_GameStop"].Inst["close"](),
                            uiscript["UI_Replay"].Inst["hide_name"] = !1,
                            this.mode == W["paipu"] ? (this["record_show_hand"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_hand"), this["record_show_paopai"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_paopai"), this["record_show_anim"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_anim")) : (this["record_show_anim"] = !0, this["record_show_hand"] = this["record_show_paopai"] = !1),
                            this.mode == W.play ? (uiscript["UI_Invite"].Inst["enable"] = !1, 4 == B["category"] && (GameMgr.Inst["custom_match_id"] = B.meta["contest_uid"])) : uiscript["UI_Invite"].Inst["enable"] = !0,
                            this["myaccountid"] = v;
                        for (var m = {}, s = 0; s < Z["length"]; s++)
                            for (var f = cfg["item_definition"].skin.get(Z[s]["avatar_id"]), z = cfg["item_definition"]["character"].get(f["character_id"]), C = cfg["voice"]["sound"]["getGroup"](z["sound"]), T = 0; T < C["length"]; T++)
                                if (Z[s]["character"] && 2 == C[T]["category"] && C[T]["level_limit"] <= Z[s]["character"]["level"]) {
                                    var t = C[T].path + Q["AudioMgr"]["suffix"];
                                    m["hasOwnProperty"](t) || (m[t] = 1);
                                }
                        for (var w in m)
                            Laya["loader"].load(w, null, null, null, 3);
                        for (var s = 0; s < this["player_datas"]["length"]; s++)
                            this["player_datas"][s]["account_id"] == v && (this.seat = s);
                        if (GameMgr["sakiLimited"])
                            for (var s = 0; s < this["player_datas"]["length"]; s++)
                                if (this["player_datas"][s]["account_id"] != GameMgr.Inst["account_id"]) {
                                    game["GameUtility"]["char_limited"](this["player_datas"][s]["character"]["charid"]) && (this["player_datas"][s]["character"]["charid"] = game["GameUtility"]["get_default_ai_character"](), this["player_datas"][s]["character"].skin = game["GameUtility"]["get_default_ai_skin"](), this["player_datas"][s]["avatar_id"] = game["GameUtility"]["get_default_ai_skin"]());
                                    var h = this["player_datas"][s]["views"];
                                    if (h)
                                        for (var T = h["length"] - 1; T >= 0; T--) {
                                            var G = h[T]["item_id"];
                                            G && 1 == cfg["item_definition"].item.get(G)["collaboration"] && h["splice"](T, 1);
                                        }
                                }
                        if (-1 == this.seat) {
                            if (this.mode == W.play)
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2228)), app.Log["Error"](JSON["stringify"](Z)), void 0;
                            this.seat = 0;
                        }
                        if (this["emoji_switch"] = !1, B.mode && B.mode["game_setting"] && (this["emoji_switch"] = !!B.mode["game_setting"]["emoji_switch"]), uiscript["UI_Replay"].Inst["enable"] = this.mode == W["paipu"], uiscript["UI_Ob_Replay"].Inst["enable"] = !1, S["bianjietishi"] = !0, i == W.play) {
                            if (B.mode && B.mode["detail_rule"]) {
                                var g = B.mode["detail_rule"];
                                null != g["bianjietishi"] && (S["bianjietishi"] = g["bianjietishi"]);
                            }
                            if (2 == B["category"] && B.meta) {
                                var r = cfg["desktop"]["matchmode"].get(B.meta["mode_id"]);
                                r && 6 == r.room && (S["bianjietishi"] = !1);
                            }
                            uiscript["UI_MJTask_Progress"]["record"]();
                        }
                        this["mjp_res_name"] = game["GameUtility"]["get_view_res_name"](game["EView"].mjp),
                            this["player_effects"] = [];
                        for (var j = game["EView"]["liqibang"], X = game["EView"]["lobby_bg"], s = 0; s < this["player_datas"]["length"]; s++) {
                            for (var d = this["player_datas"][s]["character"], y = {}, p = j; X >= p; p++) {
                                var E = game["GameUtility"]["get_view_default_item_id"](p);
                                y[p] = E;
                            }
                            if (d) {
                                var h = this["player_datas"][s]["views"],
                                    O = cfg["item_definition"]["character"].get(d["charid"]);
                                if (O && (y[game["EView"]["hand_model"]] = O.hand), h)
                                    for (var T = 0; T < h["length"]; T++) {
                                        var b = h[T].slot,
                                            G = h[T]["item_id"];
                                        G && (y[b] = G);
                                    }
                            } else
                                this["player_datas"][s]["character"] = {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                };
                            this["player_effects"].push(y);
                        }
                        uiscript["UI_DesktopInfo"].Inst["initRoom"](),
                            uiscript["UI_DesktopInfo"].Inst["refreshSeat"](),
                            uiscript["UI_Hangup_Warn"].Inst["enable"] = !1,
                            uiscript["UI_TingPai"].Inst["enable"] = !0,
                            uiscript["UI_HuanSanZhange"].Inst["enable"] = !1,
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst["enable"] = !1,
                            uiscript["UI_Dingque"].Inst["enable"] = !1,
                            this["index_change"] = 0,
                            this["index_ju"] = 0,
                            this["index_ben"] = 0,
                            this["index_player"] = 0,
                            this["index_chuanma_ju"] = 0,
                            this["gameing"] = !0,
                            this["left_tile_count"] = 69,
                            this["duringReconnect"] = !1,
                            this["current_step"] = 0,
                            this["action_index"] = 0,
                            this["dochain_fast"] = !1,
                            this["actionList"] = [],
                            this["setAutoHule"](!1),
                            this["setAutoMoQie"](!1),
                            this["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            this["SetChangJuShow"](this["index_change"], this["index_ju"], this["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](this["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1);
                        for (var s = 0; 4 > s; s++)
                            this["players"][s]["onInitRoom"](this["localPosition2Seat"](s)), this["players"][s]["SetScore"](0, 0), this["players"][s]["trans_ind"]["active"] = !1, this["players"][s]["RefreshDir"]();
                        if (this["RefreshPaiLeft"](), uiscript["UI_GameEnd"].Inst["forceclose"](), uiscript["UI_RankChange"].Inst["close"](), uiscript["UI_MJReward"].Inst["close"](), Laya["timer"]["frameOnce"](6, this, function () {
                            l["Reset"](),
                                app.Log.log("场景init结束：" + Laya.Stat["currentMemorySize"] / 1024 / 1024 + " MB"),
                                x && x.run();
                        }), this["state_cache"] = {}, uiscript["UI_Activity"]["activity_is_running"](uiscript["UI_Activity_DuanWu_Point"]["activity_id"]) && (this["state_cache"]["duanwu_point"] = uiscript["UI_Activity_DuanWu_Point"]["point"], this["state_cache"]["duanwu_rank"] = uiscript["UI_Activity_DuanWu_Rank"]["point"]), this["is_muyu_mode"]()) {
                            var M = "scene/effect_muyu_" + GameMgr["client_language"] + ".lh";
                            this["muyu_effect"] = new game["EffectBase"](M),
                                this["muyu_effect"].root["active"] = !1,
                                this["trans_container_effect"]["addChild"](this["muyu_effect"].root);
                        }
                    },
                    S["prototype"]["changeMainbody"] = function (Q) {
                        if (this.mode != W.play && this["gameing"]) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({ 'change_seat_to': Q }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'change_seat_to': Q }));
                                }
                            }));
                            this.seat = Q,
                                uiscript["UI_DesktopInfo"].Inst["refreshSeat"](!0);
                            for (var B = 0; 4 > B; B++)
                                this["players"][B]["onInitRoom"](this["localPosition2Seat"](B)), this["players"][B]["trans_ind"]["active"] = !1, this["players"][B]["RefreshDir"]();
                            this["Reset"](),
                                this.mode == W["paipu"] && uiscript["UI_Replay"].Inst["onChangeMainBody"](),
                                this.mode == W["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["onChangeMainbody"](),
                                this.mode == W["live_broadcast"] && uiscript["UI_Live_Broadcast1"].Inst["onChangeMainbody"]();
                        }
                    },
                    S["prototype"]["trySyncGame"] = function () {
                        var Q = this;
                        this["Reset"](),
                            this["duringReconnect"] = !0,
                            this["hangupCount"] = 0,
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                round_id: this["round_id"],
                                step: 0
                            }, function (B, V) {
                                B || V["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", B, V), game["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame2] " + JSON["stringify"](V)), V["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2229)), game["Scene_MJ"].Inst["GameEnd"]()) : (Q["fetchLinks"](), Q["Reset"](), Q["duringReconnect"] = !0, Q["syncGameByStep"](V["game_restore"])));
                            });
                    },
                    S["prototype"]["syncGameByStep"] = function (B) {
                        var V = this,
                            W = !1;
                        if (this["timestoped"] = !1, this["handles_after_timerun"] = [], this["action_running"] = !1, uiscript["UI_GameStop"].Inst["close"](), this["hangupCount"] = 0, uiscript["UI_Hangup_Warn"].Inst["enable"] = !1, B && 5 === B["game_state"] && (this["timestoped"] = !0), GameMgr.Inst["EnterMJ"](), B && B["actions"] && B["actions"]["length"] > 0) {
                            var actions = [];
                            for (var idx = 0; idx < a.actions.length; idx++) {
                                var rawAction = B.actions[idx];
                                var action = net.ProtobufManager.lookupType("lq." + rawAction.name).decode(rawAction.data);
                                actions.push({
                                    name: rawAction.name,
                                    data: action
                                });
                            }
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'sync_game_actions': actions
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'sync_game_actions': actions
                                    }));
                                }
                            }));
                            this["actionList"] = [];
                            var Z = -1;
                            null != B["passed_waiting_time"] && void 0 != B["passed_waiting_time"] && (Z = 1000 * B["passed_waiting_time"]);
                            for (var v = 0; v < B["actions"]["length"]; v++) {
                                var i = B["actions"][v],
                                    x = v == B["actions"]["length"] - 1 ? Z : -1,
                                    l = net["ProtobufManager"]["lookupType"]("lq." + i.name);
                                if (!l)
                                    throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + i.name);
                                var m = l["decode"](i.data);
                                this["current_step"] = i.step;
                                try {
                                    switch (i.name) {
                                        case "ActionNewRound":
                                            Q["ActionNewRound"]["fastplay"](m, x);
                                            break;
                                        case "ActionChangeTile":
                                            Q["ActionChangeTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionDiscardTile":
                                            Q["ActionDiscardTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionDealTile":
                                            Q["ActionDealTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionChiPengGang":
                                            Q["ActionChiPengGang"]["fastplay"](m, x);
                                            break;
                                        case "ActionAnGangAddGang":
                                            Q["ActionAnGangAddGang"]["fastplay"](m, x);
                                            break;
                                        case "ActionHule":
                                            Q["ActionHule"]["fastplay"](m, x),
                                                W = !0;
                                            break;
                                        case "ActionHuleXueZhanMid":
                                            Q["ActionHuleXueZhanMid"]["fastplay"](m, x),
                                                W = !0;
                                            break;
                                        case "ActionHuleXueZhanEnd":
                                            Q["ActionHuleXueZhanEnd"]["fastplay"](m, x),
                                                W = !0;
                                            break;
                                        case "ActionLiuJu":
                                            Q["ActionLiuJu"]["fastplay"](m, x),
                                                W = !0;
                                            break;
                                        case "ActionNoTile":
                                            Q["ActionNoTile"]["fastplay"](m, x),
                                                W = !0;
                                            break;
                                        case "ActionBaBei":
                                            Q["ActionBabei"]["fastplay"](m, x);
                                            break;
                                        case "ActionSelectGap":
                                            Q["ActionSelectGap"]["fastplay"](m, x);
                                            break;
                                        case "ActionGangResult":
                                            Q["ActionGangResult"]["fastplay"](m, x);
                                            break;
                                        case "ActionGangResultEnd":
                                            Q["ActionGangResultEnd"]["fastplay"](m, x);
                                            break;
                                        case "ActionLockTile":
                                            Q["ActionLockTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionRevealTile":
                                            Q["ActionRevealTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionUnveilTile":
                                            Q["ActionUnveilTile"]["fastplay"](m, x);
                                            break;
                                        case "ActionNewCard":
                                            Q["ActionNewCard"]["fastplay"](m, x);
                                            break;
                                        case "ActionFillAwaitingTiles":
                                            Q["ActionFillAwaitingTiles"]["fastplay"](m, x);
                                    }
                                } catch (s) {
                                    var f = {};
                                    f["error"] = s["message"],
                                        f["stack"] = s["stack"],
                                        f["method"] = "syncGameByStep",
                                        f.name = i.name,
                                        f.data = i,
                                        f.step = v,
                                        GameMgr.Inst["onFatalError"](f);
                                    break;
                                }
                            }
                            Laya["timer"].once(1000, this, function () {
                                V["duringReconnect"] = !1,
                                    uiscript["UI_Loading"].Inst["close"](),
                                    W || Q["BgmListMgr"]["PlayMJBgm"](),
                                    V["DoChainAction"]();
                            });
                        } else
                            this["duringReconnect"] = !1, this["timestoped"] ? this["handles_after_timerun"].push(Laya["Handler"]["create"](this, function () {
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                            })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                        app.Log.log("finishSyncGame11"),
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { }),
                            S.Inst["fetchLinks"](),
                            this["timestoped"] && uiscript["UI_GameStop"].Inst.show();
                    },
                    S["prototype"]["setGameStop"] = function (Q) {
                        if (Q != this["timestoped"])
                            if (this["timestoped"] = Q, this["timestoped"])
                                this["handles_after_timerun"] = [], uiscript["UI_GameStop"].Inst.show();
                            else {
                                if (uiscript["UI_GameStop"].Inst["close"](), this["handles_after_timerun"])
                                    for (var B = 0; B < this["handles_after_timerun"]["length"]; B++)
                                        this["handles_after_timerun"][B].run();
                                this["handles_after_timerun"] = [],
                                    this["hangupCount"] = 0;
                            }
                    },
                    S["prototype"]["CreatePai3D"] = function (Q) {
                        var B = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("mjp")["getChildByName"](Q["touming"] ? "touming" : Q["toString"]())["clone"](),
                            V = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("maque_outline")["clone"](),
                            W = B,
                            Z = (new caps["BaseMaterial"](caps["Cartoon"]["filename"]), "scene/Assets/Resource/mjpai/");
                        if (Q["touming"]) {
                            var v = new caps["Material_TouMingPai"](caps["TouMingPai"]["filename"]),
                                i = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (i += "en_kr/"),
                                i += S["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                v["setTexture"](caps["TouMingPai"]["TEXTURE"], Laya["loader"]["getRes"](i)),
                                W["meshRender"]["sharedMaterial"] = v;
                        } else {
                            var x = new caps["BaseMaterial"](caps["Cartoon"]["filename"]),
                                l = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (l += "en_kr/"),
                                l += this["mjp_res_name"] + "/mjp.png",
                                x["setTexture"](caps["Cartoon"]["TEXTURE"], Laya["loader"]["getRes"](l)),
                                x["setNumber"](caps["Cartoon"]["SPLIT"], 0.4),
                                x["setColor"](caps["Cartoon"]["COLOR_LIGHT"], new Laya["Vector3"](1, 1, 1)),
                                x["setColor"](caps["Cartoon"]["COLOR_UNLIGHT"], new Laya["Vector3"](0.788, 0.788, "0.8235")),
                                x["setColor"](caps["Cartoon"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                W["meshRender"]["sharedMaterial"] = x;
                        }
                        var m = V;
                        B["addChild"](m),
                            m["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0),
                            m["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                            m["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                        var s = m,
                            f = new caps["Material_Outline"](caps["Outline"]["filename"]);
                        f["renderQueue"] = 2999,
                            f["setColor"](caps["Outline"]["OUTLINE_COLOR"], new Laya["Vector3"](0.165, 0.192, 0.204)),
                            f["setNumber"](caps["Outline"]["OUTLINE_ALPHA"], 0.6),
                            f["setNumber"](caps["Outline"]["OUTLINE"], "0.0012"),
                            s["meshRender"]["sharedMaterial"] = f;
                        var z = new Laya["Sprite3D"]();
                        if (z.name = "effect", z["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0), z["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1), z["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0), B["addChild"](z), Q["touming"]) {
                            var C = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("touming")["clone"]();
                            C.name = "touming",
                                B["addChild"](C),
                                C["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0.00001),
                                C["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                                C["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                            var T = new caps["Material_TwoSided"](caps["TwoSided"]["filename"]),
                                t = 0;
                            switch (Q.type) {
                                case mjcore["E_MJPai"].m:
                                    t = 0;
                                    break;
                                case mjcore["E_MJPai"].p:
                                    t = 10;
                                    break;
                                case mjcore["E_MJPai"].s:
                                    t = 20;
                                    break;
                                default:
                                    t = 29;
                            }
                            Q.dora || (t += Q["index"]);
                            var w = (6 + t % 7 * 104) / 1024,
                                h = (6 + 144 * Math["floor"](t / 7)) / 1024,
                                Z = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (Z += "en_kr/"),
                                Z += S["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                T["setTexture"](caps["TwoSided"]["TEXTURE"], Laya["loader"]["getRes"](Z)),
                                T["setColor"](caps["TwoSided"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                T["setNumber"](caps["TwoSided"]["OFFSET_X"], w),
                                T["setNumber"](caps["TwoSided"]["OFFSET_Y"], h),
                                T["renderQueue"] = 3000,
                                C["getChildByName"]("twosided")["meshRender"]["sharedMaterial"] = T,
                                C["getChildByName"]("touying")["getChildByName"]("pai")["meshRender"]["sharedMaterial"] = T,
                                C["getChildByName"]("touying")["getChildByName"]('bg')["meshRender"]["sharedMaterial"]["renderQueue"] = 2998;
                        }
                        return B;
                    },
                    S["prototype"]["RefreshPlayerIndicator"] = function () {
                        for (var Q = 0; 4 > Q; Q++)
                            this["players"][Q]["trans_ind"]["active"] = Q == this["seat2LocalPosition"](this["index_player"]), this["players"][Q]["RefreshScore"](this["mainrole"]["score"]);
                    },
                    S["prototype"]["setAutoHule"] = function (Q) {
                        this["auto_hule"] = Q,
                            this["_PendingAuto"](!0);
                    },
                    S["prototype"]["setAutoNoFulu"] = function (Q) {
                        this["auto_nofulu"] = Q,
                            this["_PendingAuto"](!0);
                    },
                    S["prototype"]["setAutoMoQie"] = function (Q) {
                        this["auto_moqie"] = Q,
                            this["_PendingAuto"](!0);
                    },
                    S["prototype"]["setAutoLiPai"] = function (Q) {
                        this["auto_liqi"] = Q,
                            Q && this["gameing"] && this["mainrole"] && this["mainrole"]["LiPai"](!1, !1, !0);
                    },
                    S["prototype"]["setScoreDelta"] = function (Q) {
                        for (var B = 1; 4 > B; B++)
                            this["players"][B]["duringShowDetla"] = Q, this["players"][B]["RefreshScore"](this["mainrole"]["score"]);
                    },
                    S["prototype"]["SetChangJuShow"] = function (Q, B, V) {
                        if (this["is_chuanma_mode"]()) {
                            var W = new Laya["Vector4"]("0.1666", 1, 0, 0);
                            'en' == GameMgr["client_language"] && (W = new Laya["Vector4"](1, 0.2, 0, -0.8)),
                                this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = W;
                            var Z = new Laya["Vector4"](0.1, 1, 0.1 * V, 0);
                            this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = Z;
                        } else {
                            var W = new Laya["Vector4"](0.166, 1, 0.166 + Q % 4 * 0.166, 0);
                            'en' == GameMgr["client_language"] && (W = new Laya["Vector4"](1, 0.2, 0, 0.2 * (Q % 4 - 3))),
                                this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = W,
                                this["plane_chang_reveal"]["meshRender"]["material"]["tilingOffset"] = W;
                            var Z = new Laya["Vector4"](0.1, 1, 0.1 * B, 0);
                            this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = Z,
                                this["plane_ju_reveal"]["meshRender"]["material"]["tilingOffset"] = Z;
                        }
                    },
                    S["prototype"]["SetLeftPaiShow"] = function (Q) {
                        Q >= 100 ? Q = 99 : 0 > Q && (Q = 0);
                        for (var B = [Q % 10, Math["floor"](Q / 10)], V = 0; V < B["length"]; V++) {
                            var W = new Laya["Vector4"](0.1, 1, 0.1 * B[V], 0);
                            this["num_left_show"][V]["meshRender"]["material"]["tilingOffset"] = W,
                                this["num_left_show_reveal"][V]["meshRender"]["material"]["tilingOffset"] = W;
                        }
                    },
                    S["prototype"]["RefreshPaiLeft"] = function () {
                        this["SetLeftPaiShow"](this["left_tile_count"]);
                    },
                    S["prototype"]["Reset"] = function () {
                        app.Log.log("DesktopMgr.Reset"),
                            this["operation_showing"] = !1,
                            this["oplist"] = [],
                            Laya["timer"]["clearAll"](Q["ActionAnGangAddGang"]),
                            Laya["timer"]["clearAll"](Q["ActionChiPengGang"]),
                            Laya["timer"]["clearAll"](Q["ActionDealTile"]),
                            Laya["timer"]["clearAll"](Q["ActionDiscardTile"]),
                            Laya["timer"]["clearAll"](Q["ActionHule"]),
                            Laya["timer"]["clearAll"](Q["ActionHuleXueZhanEnd"]),
                            Laya["timer"]["clearAll"](Q["ActionHuleXueZhanMid"]),
                            Laya["timer"]["clearAll"](Q["ActionLiqi"]),
                            Laya["timer"]["clearAll"](Q["ActionLiuJu"]),
                            Laya["timer"]["clearAll"](Q["ActionNewRound"]),
                            Laya["timer"]["clearAll"](Q["ActionNoTile"]),
                            Laya["timer"]["clearAll"](Q["ActionOperation"]),
                            Laya["timer"]["clearAll"](Q["ActionChangeTile"]),
                            Laya["timer"]["clearAll"](Q["ActionSelectGap"]),
                            Laya["timer"]["clearAll"](Q["ActionGangResult"]),
                            Laya["timer"]["clearAll"](Q["ActionGangResultEnd"]),
                            Laya["timer"]["clearAll"](Q["ActionRevealTile"]),
                            Laya["timer"]["clearAll"](Q["ActionUnveilTile"]),
                            Laya["timer"]["clearAll"](Q["ActionLockTile"]),
                            Laya["timer"]["clearAll"](Q["ActionNewCard"]),
                            Laya["timer"]["clearAll"](Q["ActionFillAwaitingTiles"]),
                            Laya["timer"]["clearAll"](this),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                        for (var B = 0; 4 > B; B++)
                            this["players"][B]["Reset"]();
                        this["tingpais"] = [[], [], [], []],
                            this.md5 = '',
                            this["current_step"] = -1,
                            this["muyu_info"] = null,
                            this["muyu_effect"] && (this["muyu_effect"].root["active"] = !1, Laya["timer"]["clearAll"](this["muyu_effect"])),
                            this["mind_voice_seat"] = -1,
                            this["mind_voice_type"] = '',
                            this["during_playing_mind_voice"] = !1;
                    },
                    S["prototype"]["setScores"] = function (B) {
                        for (var V = 0; V < B["length"]; V++)
                            this["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["SetScore"](B[V], B[this.seat]);
                    },
                    S["prototype"]["_PendingAuto"] = function (B) {
                        if (void 0 === B && (B = !1), null == this["oplist"] || 0 == this["oplist"]["length"])
                            return !1;
                        try {
                            var V = !1,
                                W = !1,
                                Z = !1,
                                S = !1,
                                v = !1,
                                i = !1,
                                x = !1,
                                l = !1,
                                m = this["operation_showing"];
                            this["operation_showing"] = !0;
                            var s = null,
                                f = 0;
                            this["liqi_select"] = [];
                            for (var z = !0, C = 0; C < this["oplist"]["length"]; C++) {
                                var T = this["oplist"][C],
                                    t = T.type;
                                switch (t) {
                                    case mjcore["E_PlayOperation"].eat:
                                    case mjcore["E_PlayOperation"].peng:
                                    case mjcore["E_PlayOperation"]["ming_gang"]:
                                    case mjcore["E_PlayOperation"].rong:
                                    case mjcore["E_PlayOperation"]["unveil"]:
                                        V = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["an_gang"]:
                                    case mjcore["E_PlayOperation"]["add_gang"]:
                                    case mjcore["E_PlayOperation"].liqi:
                                    case mjcore["E_PlayOperation"].zimo:
                                    case mjcore["E_PlayOperation"]["babei"]:
                                    case mjcore["E_PlayOperation"]["revealliqi"]:
                                    case mjcore["E_PlayOperation"]["reveal"]:
                                    case mjcore["E_PlayOperation"]["locktile"]:
                                        W = !0;
                                    case mjcore["E_PlayOperation"]["jiuzhongjiupai"]:
                                        W = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["huansanzhang"]:
                                        Z = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["dingque"]:
                                        S = !0,
                                            f = T["gap_type"];
                                        break;
                                    case mjcore["E_PlayOperation"]["selecttile"]:
                                        v = !0;
                                }
                                if (t == mjcore["E_PlayOperation"]["dapai"])
                                    l = !0, s = this["oplist"][C]["combination"];
                                else if (t == mjcore["E_PlayOperation"].liqi) {
                                    l = !0,
                                        this["liqi_select"] = [];
                                    for (var w = 0; w < this["oplist"][C]["combination"]["length"]; w++)
                                        this["liqi_select"].push(mjcore["MJPai"]["Create"](this["oplist"][C]["combination"][w]));
                                } else
                                    t == mjcore["E_PlayOperation"].rong ? i = !0 : t == mjcore["E_PlayOperation"].zimo ? x = !0 : t == mjcore["E_PlayOperation"]["huansanzhang"] && (B || Q["DesktopMgr"].Inst["mainrole"]["setHuanSanZhangDefaultTile"](T["change_tiles"], T["change_tile_states"]));
                                t != mjcore["E_PlayOperation"]["dapai"] && t != mjcore["E_PlayOperation"]["reveal"] && (z = !1);
                            }
                            var h = this["auto_hule"],
                                G = this["auto_nofulu"],
                                g = this["auto_moqie"];
                            if (this["anpai"] && z && g) {
                                if (this["mainrole"]["trans_liqi"]["active"])
                                    return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        cancel_operation: !0
                                    }, function () { }), void 0;
                                if (null != this["mainrole"]["last_tile"])
                                    return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                            }
                            if (h && (i || x))
                                return Laya["timer"].once(800, this, function () {
                                    i ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        type: mjcore["E_PlayOperation"].rong,
                                        index: 0
                                    }, function () { }) : x && app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                        type: mjcore["E_PlayOperation"].zimo,
                                        index: 0
                                    }, function () { });
                                }), this["ClearOperationShow"](), !1;
                            if (S)
                                uiscript["UI_Dingque"].Inst.show(f);
                            else if (Z)
                                B || uiscript["UI_HuanSanZhange"].Inst.show();
                            else if (V) {
                                if (G && !i && !x)
                                    return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        cancel_operation: !0
                                    }, function () { }), this["ClearOperationShow"](), !1;
                                m || uiscript["UIMgr"].Inst["ShowChipenghu"](this["oplist"]);
                            } else if (W && (m || uiscript["UIMgr"].Inst["ShowLiqiZimo"](this["oplist"])), l) {
                                if (g && !uiscript["UI_LiQiZiMo"].Inst["enable"] && null != this["mainrole"]["last_tile"])
                                    return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                                if (!m && (this["mainrole"]["can_discard"] = !0, s && s["length"] > 0)) {
                                    for (var r = [], C = 0; C < s["length"]; C++)
                                        r.push(mjcore["MJPai"]["Create"](s[C]));
                                    this["mainrole"]["ChiTiSelect"](r);
                                }
                            } else
                                this["mainrole"]["can_discard"] = !1;
                            if (v) {
                                if (g)
                                    return uiscript["UI_Astrology"].Inst["selectTile"](0), !1;
                                m || uiscript["UI_Astrology"].Inst["showSelections"]();
                            }
                        } catch (j) {
                            var X = {};
                            X["error"] = j["message"],
                                X["stack"] = j["stack"],
                                X["method"] = "_PendingAuto",
                                X.name = "DesktopMgr",
                                GameMgr.Inst["onFatalError"](X);
                        }
                        return !0;
                    },
                    S["prototype"]["OperationTimeOut"] = function () {
                        if (null != this["oplist"] && 0 != this["oplist"]["length"]) {
                            {
                                var Q = !1,
                                    B = !1,
                                    V = !1,
                                    W = !1,
                                    Z = !1;
                                this["operation_showing"];
                            }
                            this["operation_showing"] = !0;
                            for (var S = null, v = 0; v < this["oplist"]["length"]; v++) {
                                switch (this["oplist"][v].type) {
                                    case mjcore["E_PlayOperation"].eat:
                                    case mjcore["E_PlayOperation"].peng:
                                    case mjcore["E_PlayOperation"]["ming_gang"]:
                                    case mjcore["E_PlayOperation"].rong:
                                        Q = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["an_gang"]:
                                    case mjcore["E_PlayOperation"]["add_gang"]:
                                    case mjcore["E_PlayOperation"].liqi:
                                    case mjcore["E_PlayOperation"].zimo:
                                    case mjcore["E_PlayOperation"]["babei"]:
                                        B = !0;
                                }
                                (this["oplist"][v].type == mjcore["E_PlayOperation"]["dapai"] || this["oplist"][v].type == mjcore["E_PlayOperation"].liqi) && (Z = !0, this["oplist"][v].type == mjcore["E_PlayOperation"]["dapai"] && (S = this["oplist"][v]["combination"])),
                                    this["oplist"][v].type == mjcore["E_PlayOperation"].rong && (V = !0),
                                    this["oplist"][v].type == mjcore["E_PlayOperation"].zimo && (W = !0);
                            }
                            if (Q)
                                V ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                    type: mjcore["E_PlayOperation"].rong,
                                    index: 0,
                                    timeuse: 1000000
                                }, function () { }) : app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                    cancel_operation: !0,
                                    timeuse: 1000000
                                }, function () { }), this["ClearOperationShow"]();
                            else if (W)
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    type: mjcore["E_PlayOperation"].zimo,
                                    index: 0,
                                    timeuse: 1000000
                                }, function () { });
                            else if (Z)
                                if (this["mainrole"]["during_liqi"]) {
                                    for (var i = -1, v = 0; v < this["mainrole"].hand["length"]; v++)
                                        if (this["mainrole"].hand[v]["valid"]) {
                                            i = v;
                                            break;
                                        }
                                    this["Action_LiQi"](this["mainrole"].hand[i].val, this["mainrole"].hand[i] === this["mainrole"]["last_tile"], this["mainrole"].hand[i]["is_open"]);
                                } else {
                                    var x = null,
                                        l = !1,
                                        m = !1;
                                    if (null == x && this["mainrole"]["last_tile"] && this["mainrole"]["last_tile"]["valid"] && (x = this["mainrole"]["last_tile"].val, l = !0, m = this["mainrole"]["last_tile"]["is_open"]), null == x)
                                        for (var v = this["mainrole"].hand["length"] - 1; v >= 0; v--)
                                            if (this["mainrole"].hand[v]["valid"]) {
                                                x = this["mainrole"].hand[v].val,
                                                    l = !1,
                                                    m = this["mainrole"].hand[v]["is_open"];
                                                break;
                                            }
                                    this["Action_QiPai"](x, l, !0, m);
                                }
                            else
                                B && (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    cancel_operation: !0,
                                    timeuse: 1000000
                                }, function () { }), this["ClearOperationShow"]());
                        }
                    },
                    S["prototype"]["WhenDoOperation"] = function () {
                        this["hangupCount"] = 0,
                            this["ClearOperationShow"]();
                    },
                    S["prototype"]["ClearOperationShow"] = function () {
                        this["operation_showing"] = !1,
                            this["oplist"] = [],
                            uiscript["UI_Huleshow"].Inst["enable"] = !1,
                            uiscript["UIMgr"].Inst["CloseLiuJu"](),
                            uiscript["UIMgr"].Inst["CloseWin"](),
                            uiscript["UIMgr"].Inst["CloseChipenghu"](),
                            uiscript["UIMgr"].Inst["CloseLiqiZimo"](),
                            uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1,
                            Laya["timer"]["clearAll"](Q["ActionOperation"]),
                            uiscript["UI_ScoreChange"].Inst["enable"] = !1,
                            this["mainrole"]["can_discard"] = !1,
                            uiscript["UI_DesktopInfo"].Inst["closeCountDown"]();
                    },
                    S["prototype"]["WhenLiqiInfo"] = function (Q) {
                        var B = this;
                        Q && Laya["timer"].once(300, this, function () {
                            var V = Q.seat,
                                W = Q["score"];
                            B["players"][B["seat2LocalPosition"](V)]["ShowLiqi"](),
                                B["players"][B["seat2LocalPosition"](V)]["SetScore"](W, B["mainrole"]["score"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](Q["liqibang"]);
                        });
                    },
                    S["prototype"]["WhenDoras"] = function (B, V) {
                        var W = this;
                        if (!(null == B || void 0 == B || 0 == B["length"] || B["length"] <= this.dora["length"]) && B) {
                            for (var Z = 0; Z < B["length"]; Z++)
                                this.dora["length"] > Z ? this.dora[Z] = mjcore["MJPai"]["Create"](B[Z]) : this.dora.push(mjcore["MJPai"]["Create"](B[Z])), uiscript["UI_DesktopInfo"].Inst["setDora"](Z, this.dora[Z]);
                            Laya["timer"]["frameOnce"](1, this, function () {
                                for (var Q = 0; 4 > Q; Q++)
                                    W["players"][Q]["OnDoraRefresh"]();
                            }),
                                V || Q["AudioMgr"]["PlayAudio"](215);
                        }
                    },
                    S["prototype"]["Action_QiPai"] = function (Q, B, V, W) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["dapai"],
                            tile: Q["toString"](),
                            moqie: B,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: W ? 1 : 0
                        }, function (Q) {
                            Q ? app.Log["Error"]("Action_QiPai 失败") : app.Log.info("Action_QiPai 成功");
                        }),
                            V ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                    },
                    S["prototype"]["Action_AnPai"] = function (Q, B, V, W) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["reveal"],
                            tile: Q["toString"](),
                            moqie: B,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: W ? 1 : 0
                        }, function (Q) {
                            Q ? app.Log["Error"]("Action_AnPai 失败") : app.Log.info("Action_AnPai 成功");
                        }),
                            V ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                    },
                    S["prototype"]["Action_LiQi"] = function (Q, B, V) {
                        if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                            return !1;
                        for (var W = !1, Z = 0; Z < this["liqi_select"]["length"]; Z++)
                            if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][Z], Q)) {
                                W = !0;
                                break;
                            }
                        return W ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"].liqi,
                            tile: Q["toString"](),
                            moqie: B,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: V ? 1 : 0
                        }, function (Q) {
                            Q ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                        }), this["WhenDoOperation"](), !0) : !1;
                    },
                    S["prototype"]["Action_AnPaiLiQi"] = function (Q, B, V) {
                        if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                            return !1;
                        for (var W = !1, Z = 0; Z < this["liqi_select"]["length"]; Z++)
                            if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][Z], Q)) {
                                W = !0;
                                break;
                            }
                        return W ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["revealliqi"],
                            tile: Q["toString"](),
                            moqie: B,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: V ? 1 : 0
                        }, function (Q) {
                            Q ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                        }), this["WhenDoOperation"](), !0) : !1;
                    },
                    S["prototype"]["Action_HuanSanZhange"] = function (Q, B) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["huansanzhang"],
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_states: B,
                            change_tiles: Q
                        }, function (Q) {
                            Q ? app.Log["Error"]("Action_HuanSanZhange 失败") : app.Log.info("Action_HuanSanZhange 成功");
                        }),
                            this["WhenDoOperation"]();
                    },
                    S["prototype"]["SetLastQiPai"] = function (Q, B) {
                        this["lastqipai"] = B,
                            this["lastpai_seat"] = Q,
                            this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                    },
                    S["prototype"]["ShowHuleEffect"] = function (B, V, W, Z, S) {
                        var v = this;
                        if (void 0 === S && (S = 0), null != B) {
                            V.y = 0;
                            var i = "scene/effect_hupai_default.lh",
                                x = 213;
                            if (W) {
                                var l = cfg["item_definition"].view.get(W);
                                l && (i = "scene/" + l["res_name"] + ".lh", x = l["audio_id"]);
                            }
                            var m = new game["EffectBase"](i);
                            if (this["trans_container_effect"]["addChild"](m.root), m.root["transform"]["position"] = V, m.root["active"] = !0, "scene/ron_hl.lh" == i) {
                                var s = this["seat2LocalPosition"](Z);
                                m.root["transform"]["localRotationEuler"] = 0 == s ? new Laya["Vector3"](0, 0, 0) : 1 == s ? new Laya["Vector3"](0, 90, 0) : 2 == s ? new Laya["Vector3"](0, 180, 0) : new Laya["Vector3"](0, 270, 0);
                            } else if ("scene/effect_hupai_yanhua.lh" == i)
                                Laya["timer"].once(600, this, function () {
                                    var Q = new game["EffectBase"]("scene/effect_hupai_yanhua_bang.lh");
                                    v["desktop3D"]["addChild"](Q.root),
                                        Q.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                        Q.root["active"] = !0,
                                        Laya["timer"].once(2000, v, function () {
                                            Q["destroy"]();
                                        });
                                });
                            else if ("scene/ron_22chunjie.lh" == i) {
                                var f = new game["EffectBase"]("scene/ron_22chunjie_hongdi.lh");
                                this["desktop3D"]["addChild"](f.root),
                                    f["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                        for (var Q = game["Tools"]["GetNodeByNameInChildren"](f.root, "hongdi"), B = 0, V = Q["_childs"]; B < V["length"]; B++) {
                                            var W = V[B];
                                            W["particleRender"]["material"]["renderQueue"] = 3001;
                                        }
                                    })),
                                    f.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                    f.root["active"] = !0,
                                    Laya["timer"].once(3000, this, function () {
                                        f["destroy"]();
                                    });
                            }
                            var z = !1,
                                C = B["model"]["parent"],
                                T = B["model"]["transform"]["rotation"]["clone"](),
                                t = B["model"]["transform"]["worldMatrix"]["clone"]();
                            m["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                if (!z) {
                                    Q["AudioMgr"]["PlayAudio"](x);
                                    var V = game["Tools"]["GetNodeByNameInChildren"](m.root, "pai");
                                    V && 1 == S && (V["destroyChildren"](), V["addChild"](B["model"]), B["ResetAllTimer"] && B["ResetAllTimer"](), B["model"]["transform"]["rotation"] = T["clone"](), B["model"]["transform"]["worldMatrix"] = t["clone"](), Laya["timer"].once(1800, v, function () {
                                        z || (C["addChild"](B["model"]), B["model"]["transform"]["rotation"] = T["clone"](), B["model"]["transform"]["worldMatrix"] = t["clone"]());
                                    }));
                                    var W = game["Tools"]["GetNodeByNameInChildren"](m.root, "pai_anim");
                                    !W || 1 != S && 0 != S || (W["destroyChildren"](), W["addChild"](B["model"]), B["ResetAllTimer"] && B["ResetAllTimer"](), B["model"]["transform"]["rotation"] = T["clone"](), B["model"]["transform"]["worldMatrix"] = t["clone"](), Laya["timer"].once(1800, v, function () {
                                        z || (C["addChild"](B["model"]), B["model"]["transform"]["rotation"] = T["clone"](), B["model"]["transform"]["worldMatrix"] = t["clone"]());
                                    })),
                                        v["setSpecialHuleEffect"](i, m, B);
                                }
                            }));
                            var w = 2000;
                            "scene/ron_xiyuansi.lh" == i || "scene/ron_beiyuan.lh" == i ? w = 4600 : "scene/ron_22chunjie.lh" == i ? w = 3000 : "scene/ron_2211saki.lh" == i && (w = 3000),
                                Laya["timer"].once(w, this, function () {
                                    z = !0,
                                        B && B["model"] && B["model"]["transform"] && ("scene/ron_xiyuansi.lh" == i && (B["model"]["getChildAt"](0)["getChildAt"](0) ? (B["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, B["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001) : B["model"]["meshRender"] && (B["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, B["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001)), C["addChild"](B["model"]), B["model"]["transform"]["rotation"] = T["clone"](), B["model"]["transform"]["worldMatrix"] = t["clone"]()),
                                        m["destroy"]();
                                });
                        }
                    },
                    S["prototype"]["setSpecialHuleEffect"] = function (Q, B, V) {
                        if ("scene/ron_akagi.lh" == Q) {
                            var W = game["Tools"]["GetNodeByNameInChildren"](B.root, "heidi");
                            W["transform"]["position"] = new Laya["Vector3"](0, 0.101, 0.718);
                        }
                        if ("scene/ron_22summer.lh" == Q) {
                            var Z = game["Tools"]["GetNodeByNameInChildren"](B.root, "ya02");
                            Z["meshRender"]["material"]["depthWrite"] = !0,
                                Z["meshRender"]["material"]["depthTest"] = 0,
                                Z["meshRender"]["material"]["renderQueue"] = 3005,
                                Z["meshRender"]["material"]["disableLight"]();
                        }
                        if ("scene/ron_beiyuan.lh" == Q) {
                            var S = game["Tools"]["GetNodeByNameInChildren"](B.root, "global");
                            S["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                S["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                            var v = game["Tools"]["GetNodeByNameInChildren"](B.root, "plane1X1");
                            v["meshRender"]["material"]["disableLight"](),
                                v["meshRender"]["material"]["renderQueue"] = 3002;
                            var i = game["Tools"]["GetNodeByNameInChildren"](B.root, "shiziguang02");
                            i["particleRender"]["material"]["depthTest"] = 0,
                                i["particleRender"]["material"]["renderQueue"] = 3003;
                            for (var x = 0; x < i["_childs"]["length"]; x++)
                                i["getChildAt"](x)["particleRender"]["material"]["depthTest"] = 0, i["getChildAt"](x)["particleRender"]["material"]["renderQueue"] = 3003;
                            var l = game["Tools"]["GetNodeByNameInChildren"](B.root, "suipian");
                            l["particleRender"]["material"]["depthTest"] = 0,
                                l["particleRender"]["material"]["renderQueue"] = 3003,
                                l = game["Tools"]["GetNodeByNameInChildren"](B.root, "xuehua01"),
                                l["particleRender"]["material"]["depthTest"] = 0,
                                l["particleRender"]["material"]["renderQueue"] = 3003,
                                l = game["Tools"]["GetNodeByNameInChildren"](B.root, "xuehua02"),
                                l["particleRender"]["material"]["depthTest"] = 0,
                                l["particleRender"]["material"]["renderQueue"] = 3003,
                                l = game["Tools"]["GetNodeByNameInChildren"](B.root, "suipian01"),
                                l["particleRender"]["material"]["depthTest"] = 0,
                                l["particleRender"]["material"]["renderQueue"] = 3003;
                        }
                        if ("scene/ron_xiyuansi.lh" == Q) {
                            Laya["timer"].once(1800, this, function () {
                                V["model"]["getChildAt"](0)["getChildAt"](0) ? (V["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, V["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004) : V["model"]["meshRender"] && (V["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, V["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004);
                            });
                            var v = game["Tools"]["GetNodeByNameInChildren"](B.root, "plane1X1");
                            v["meshRender"]["material"]["disableLight"](),
                                v["meshRender"]["material"]["renderQueue"] = 3002;
                            var m = game["LoadMgr"]["getResImage"]("extendRes/charactor/xiyuansiyiyu_0/full.png");
                            m && m["active"](),
                                v["meshRender"]["material"]["diffuseTexture"] = Laya["Texture2D"].load(game["LoadMgr"]["getResImageSkin"]("extendRes/charactor/xiyuansiyiyu_0/full.png"));
                            for (var s = game["Tools"]["GetNodeByNameInChildren"](B.root, "lizi"), x = 0; x < s["numChildren"]; x++)
                                s["getChildAt"](x)["particleRender"]["material"]["renderQueue"] = 3002, s["getChildAt"](x)["particleRender"]["material"]["depthTest"] = 0;
                            var S = game["Tools"]["GetNodeByNameInChildren"](B.root, "global");
                            S["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                S["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                            for (var x = 0; 3 > x; x++)
                                S["getChildByName"]("heidi01")["getChildAt"](x)["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var x = 0; 3 > x; x++)
                                S["getChildByName"]("daoguang")["getChildByName"]("lizi")["getChildAt"](x)["particleRender"]["material"]["renderQueue"] = 3002;
                            S["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var x = 0; 4 > x; x++)
                                S["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["getChildAt"](x)["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var x = 4; 8 > x; x++) {
                                var f = S["getChildByName"]("quxian_amin01")["getChildAt"](x)["meshRender"]["material"];
                                f["renderQueue"] = 3002,
                                    f["disableLight"]();
                            }
                        }
                    },
                    S["prototype"]["ShowChiPengEffect"] = function () {
                        var B = this;
                        if (this["lastqipai"]["model"] && this["lastqipai"]["model"]["transform"]) {
                            this["effect_pai_canchi"] || (this["effect_pai_canchi"] = new game["EffectBase"]("scene/" + game["GameUtility"]["get_view_res_name"](game["EView"]["mingpai_zhishi"]) + ".lh"), this["trans_container_effect"]["addChild"](this["effect_pai_canchi"].root), this["effect_pai_canchi"].root["active"] = !0),
                                this["effect_pai_canchi"].root["transform"]["worldMatrix"] = this["lastqipai"]["model"]["transform"]["worldMatrix"]["clone"]();
                            var V = this["effect_pai_canchi"],
                                W = this["lastqipai"];
                            if (this["lastqipai"]["revealState"] == Q["ERevealState"]["reveal"]) {
                                var Z = this["effect_pai_canchi"].root["transform"]["localPosition"]["clone"]();
                                Z.y -= Q["PAIMODEL_THICKNESS"],
                                    this["effect_pai_canchi"].root["transform"]["localPosition"] = Z;
                            }
                            Laya["timer"]["frameLoop"](1, this["effect_pai_canchi"], function () {
                                if (W["model"]["activeInHierarchy"] && W["model"]["active"] && W["model"]["parent"]["active"]) {
                                    if (V.root["transform"]["worldMatrix"] = W["model"]["transform"]["worldMatrix"]["clone"](), W["revealState"] == Q["ERevealState"]["reveal"]) {
                                        var Z = V.root["transform"]["localPosition"]["clone"]();
                                        Z.y -= Q["PAIMODEL_THICKNESS"],
                                            V.root["transform"]["localPosition"] = Z;
                                    }
                                    B["effect_pai_canchi"].root["active"] = !0;
                                } else
                                    B["effect_pai_canchi"].root["active"] = !1;
                            });
                        }
                    },
                    S["prototype"]["CloseChiPngEffect"] = function () {
                        this["effect_pai_canchi"] && (Laya["timer"]["clearAll"](this["effect_pai_canchi"]), this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                    },
                    S["prototype"]["setChoosedPai"] = function (Q) {
                        var B = !1;
                        if (B || !Q || this["choosed_pai"] || (B = !0), B || Q || !this["choosed_pai"] || (B = !0), !B && Q && this["choosed_pai"] && 0 != mjcore["MJPai"]["Distance"](this["choosed_pai"], Q) && (B = !0), B && (this["choosed_pai"] = Q ? Q["Clone"]() : null, S["bianjietishi"])) {
                            for (var V = 0; 4 > V; V++)
                                this["players"][V]["OnChoosePai"]();
                            uiscript["UI_TingPai"].Inst["onChooseTile"](Q);
                        }
                    },
                    S["prototype"]["setTingpai"] = function (B, V) {
                        for (var W = !1, Z = [], S = 0; S < V["length"]; S++)
                            Z.push(mjcore["MJPai"]["Create"](V[S].tile));
                        this["tingpais"][B]["length"] != Z["length"] && (W = !0);
                        for (var S = 0; S < Z["length"] && !W; S++)
                            0 != mjcore["MJPai"]["Distance"](Z[S], this["tingpais"][B][S]) && (W = !0);
                        if (W) {
                            this["tingpais"][B] = Z;
                            for (var S = 0; S < Q["DesktopMgr"].Inst["players"]["length"]; S++) {
                                var v = this["localPosition2Seat"](S);
                                if (!(0 > v)) {
                                    for (var i = 0; i < Q["DesktopMgr"].Inst["players"][S]["container_qipai"].pais["length"]; i++) {
                                        var x = Q["DesktopMgr"].Inst["players"][S]["container_qipai"].pais[i];
                                        x["ispaopai"] = this["isPaoPai"](x.val),
                                            x["OnChoosedPai"]();
                                    }
                                    for (var i = 0; i < Q["DesktopMgr"].Inst["players"][S]["container_ming"].pais["length"]; i++) {
                                        var x = Q["DesktopMgr"].Inst["players"][S]["container_ming"].pais[i];
                                        x["ispaopai"] = this["isPaoPai"](x.val),
                                            x["OnChoosedPai"]();
                                    }
                                    for (var i = 0; i < Q["DesktopMgr"].Inst["players"][S]["container_babei"].pais["length"]; i++) {
                                        var x = Q["DesktopMgr"].Inst["players"][S]["container_babei"].pais[i];
                                        x["ispaopai"] = this["isPaoPai"](x.val),
                                            x["OnChoosedPai"]();
                                    }
                                    var x = Q["DesktopMgr"].Inst["players"][S]["container_qipai"]["last_pai"];
                                    if (x && (x["ispaopai"] = this["isPaoPai"](x.val), x["OnChoosedPai"]()), 0 == S)
                                        for (var l = Q["DesktopMgr"].Inst["players"][S], i = 0; i < l.hand["length"]; i++) {
                                            var x = l.hand[i];
                                            x["ispaopai"] = this["isPaoPai"](x.val),
                                                x["OnChoosedPai"]();
                                        }
                                    else
                                        for (var l = Q["DesktopMgr"].Inst["players"][S], i = 0; i < l.hand["length"]; i++) {
                                            var x = l.hand[i]["pai3D"];
                                            x["ispaopai"] = this["record_show_hand"] || x["is_open"] ? this["isPaoPai"](x.val) : !1,
                                                x["OnChoosedPai"]();
                                        }
                                }
                            }
                        }
                    },
                    S["prototype"]["isPaoPai"] = function (Q) {
                        if (!this["record_show_paopai"])
                            return !1;
                        for (var B = 0; B < this["tingpais"]["length"]; B++)
                            for (var V = 0; V < this["tingpais"][B]["length"]; V++)
                                if (0 == mjcore["MJPai"]["Distance"](this["tingpais"][B][V], Q))
                                    return !0;
                        return !1;
                    },
                    S["prototype"]["getPaiLeft"] = function (B) {
                        for (var V = 0, W = 0; 4 > W; W++) {
                            for (var Z = this["players"][W], S = 0; S < Z["container_babei"].pais["length"]; S++)
                                0 == mjcore["MJPai"]["Distance"](Z["container_babei"].pais[S].val, B) && V++;
                            for (var S = 0; S < Z["container_ming"].pais["length"]; S++)
                                0 == mjcore["MJPai"]["Distance"](Z["container_ming"].pais[S].val, B) && V++;
                            for (var S = 0; S < Z["container_qipai"].pais["length"]; S++)
                                Z["container_qipai"].pais[S]["revealState"] != Q["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](Z["container_qipai"].pais[S].val, B) && V++;
                            Z["container_qipai"]["last_pai"] && Z["container_qipai"]["last_pai"]["revealState"] != Q["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](Z["container_qipai"]["last_pai"].val, B) && V++,
                                Z["pai_xuezhan_mid_zimo"] && 0 == mjcore["MJPai"]["Distance"](Z["pai_xuezhan_mid_zimo"], B) && V++;
                        }
                        for (var W = 0; W < this["mainrole"].hand["length"]; W++)
                            0 == mjcore["MJPai"]["Distance"](this["mainrole"].hand[W].val, B) && V++;
                        for (var W = 0; W < this.dora["length"]; W++)
                            this.dora[W] && 0 == mjcore["MJPai"]["Distance"](this.dora[W], B) && V++;
                        var v = 4 - V;
                        return 0 > v ? 0 : v > 4 ? 4 : v;
                    },
                    S["prototype"]["get_gang_count"] = function () {
                        for (var Q = 0, B = 0; B < this["players"]["length"]; B++) {
                            var V = this["localPosition2Seat"](B);
                            if (V >= 0)
                                for (var W = this["players"][B]["container_ming"]["mings"], Z = 0; Z < W["length"]; Z++)
                                    (W[Z].type == mjcore["E_Ming"]["gang_an"] || W[Z].type == mjcore["E_Ming"]["gang_ming"]) && Q++;
                        }
                        return Q;
                    },
                    S["prototype"]["get_babei_count"] = function () {
                        for (var Q = 0, B = 0; B < this["players"]["length"]; B++) {
                            var V = this["localPosition2Seat"](B);
                            V >= 0 && (Q += this["players"][B]["container_babei"].pais["length"]);
                        }
                        return Q;
                    },
                    S["prototype"]["fetchLinks"] = function () {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "fetchGamePlayerState", {}, function (Q, B) {
                            if (Q || B["error"])
                                uiscript["UIMgr"].Inst["showNetReqError"]("fetchGamePlayerState", Q, B);
                            else {
                                app.Log.log(JSON["stringify"](B)),
                                    S["player_link_state"] = [];
                                for (var V = 0; V < B["state_list"]["length"]; V++)
                                    S["player_link_state"].push(B["state_list"][V]);
                                uiscript["UI_DesktopInfo"].Inst["refreshLinks"]();
                            }
                        });
                    },
                    S["prototype"]["onShowHandChange"] = function (Q) {
                        if (this["record_show_hand"] = Q, Laya["LocalStorage"]["setItem"]("record_show_hand", Q ? '1' : '0'), this["gameing"])
                            for (var B = 1; 4 > B; B++)
                                this["players"][B]["onShowHandChange"](Q);
                    },
                    S["prototype"]["onShowPaopaiChange"] = function (B) {
                        if (this["record_show_paopai"] = B, Laya["LocalStorage"]["setItem"]("record_show_paopai", B ? '1' : '0'), this["gameing"]) {
                            this["mainrole"]["onShowPaopaiChange"]();
                            for (var V = 1; 4 > V; V++)
                                this["players"][V]["onShowPaopaiChange"]();
                            for (var V = 0; V < Q["DesktopMgr"].Inst["players"]["length"]; V++) {
                                var W = this["localPosition2Seat"](V);
                                if (!(0 > W)) {
                                    for (var Z = 0; Z < Q["DesktopMgr"].Inst["players"][V]["container_qipai"].pais["length"]; Z++) {
                                        var S = Q["DesktopMgr"].Inst["players"][V]["container_qipai"].pais[Z];
                                        S["ispaopai"] = this["isPaoPai"](S.val),
                                            S["OnChoosedPai"]();
                                    }
                                    for (var Z = 0; Z < Q["DesktopMgr"].Inst["players"][V]["container_ming"].pais["length"]; Z++) {
                                        var S = Q["DesktopMgr"].Inst["players"][V]["container_ming"].pais[Z];
                                        S["ispaopai"] = this["isPaoPai"](S.val),
                                            S["OnChoosedPai"]();
                                    }
                                    for (var Z = 0; Z < Q["DesktopMgr"].Inst["players"][V]["container_babei"].pais["length"]; Z++) {
                                        var S = Q["DesktopMgr"].Inst["players"][V]["container_babei"].pais[Z];
                                        S["ispaopai"] = this["isPaoPai"](S.val),
                                            S["OnChoosedPai"]();
                                    }
                                    var S = Q["DesktopMgr"].Inst["players"][V]["container_qipai"]["last_pai"];
                                    S && (S["ispaopai"] = this["isPaoPai"](S.val), S["OnChoosedPai"]());
                                }
                            }
                        }
                    },
                    S["prototype"]["onRoundEnd"] = function (B, V) {
                        var W = Q["DesktopMgr"].Inst["seat2LocalPosition"](B);
                        this["players"][W]["OnRoundEnd"](V);
                    },
                    S["prototype"]["onMuyuChange"] = function (B, V) {
                        var W = this;
                        if (void 0 === V && (V = !0), this["is_muyu_mode"]()) {
                            var Z = !1;
                            if (this["muyu_info"] && this["muyu_info"].id == B.id || (Z = !0), this["muyu_effect"] && !this["muyu_effect"]["destroyed"])
                                if (V) {
                                    if (Z) {
                                        var S,
                                            v;
                                        if (this["muyu_info"] ? (S = this["muyu_effect"]["clone"](), this["muyu_effect"].root["parent"]["addChild"](S.root), v = this["muyu_effect"], this["muyu_effect"] = S) : S = this["muyu_effect"], this["muyu_info"]) {
                                            v["effect_root"]["getChildByName"]("muyu_chuxian")["active"] = !1;
                                            var i = v["effect_root"]["getChildByName"]("muyu_xiaoshi");
                                            i["active"] = !0;
                                            var x = i["getChildByName"]("mianpian")["getChildByName"]("shuzi"),
                                                l = x["meshRender"]["material"];
                                            l["renderQueue"] = 3001,
                                                l["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png"),
                                                Laya["timer"].once(1000, null, function () {
                                                    v["destroy"]();
                                                });
                                        }
                                        S["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                            var V = W["seat2LocalPosition"](B.seat);
                                            S.root["transform"]["worldMatrix"] = W["players"][V]["trans_muyu"]["transform"]["worldMatrix"],
                                                S.root["transform"]["rotation"] = W["players"][V]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                                S.root["active"] = !0,
                                                S["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                            var Z = S["effect_root"]["getChildByName"]("muyu_chuxian");
                                            Z["active"] = !0,
                                                Z["getChildByName"]("baodian")["active"] = !0;
                                            var v = Z["getChildByName"]("mianpian");
                                            v["active"] = !0,
                                                v["getChildByName"]("shuzi_anim")["active"] = !1;
                                            var i = v["getChildByName"]("shuzi");
                                            i["active"] = !0;
                                            var x = i["meshRender"]["material"];
                                            x["renderQueue"] = 3001,
                                                x["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + B["count"] + ".png"),
                                                Q["AudioMgr"]["PlayAudio"](246);
                                        })),
                                            this["muyu_info"] = B;
                                    } else if (B["count"] != this["muyu_info"]["count"]) {
                                        var m = this["muyu_effect"]["effect_root"];
                                        m["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                        var s = m["getChildByName"]("muyu_chuxian"),
                                            f = s["getChildByName"]("mianpian");
                                        f["getChildByName"]("shuzi_anim")["active"] = !1;
                                        var z = f["getChildByName"]("shuzi"),
                                            C = f["getChildByName"]("shuzi_anim"),
                                            T = C["getChildByName"]("shuzi_up"),
                                            t = C["getChildByName"]("shuzi_down");
                                        Laya["timer"]["clearAll"](z),
                                            z["active"] = !1;
                                        var w = z["meshRender"]["material"];
                                        w["renderQueue"] = 3001,
                                            w["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + B["count"] + ".png");
                                        var h = T["meshRender"]["material"];
                                        h["renderQueue"] = 3001,
                                            h["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png");
                                        var G = t["meshRender"]["material"];
                                        G["renderQueue"] = 3002,
                                            G["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + B["count"] + ".png"),
                                            t["active"] = !1,
                                            C["active"] = !0,
                                            this["muyu_info"] = B,
                                            Laya["timer"].once(210, z, function () {
                                                z["active"] = !0,
                                                    C["active"] = !1;
                                            });
                                    }
                                } else {
                                    this["muyu_info"] = B;
                                    var g = this["seat2LocalPosition"](this["muyu_info"].seat);
                                    this["muyu_effect"].root["active"] = !0,
                                        this["muyu_effect"].root["transform"]["worldMatrix"] = this["players"][g]["trans_muyu"]["transform"]["worldMatrix"],
                                        this["muyu_effect"].root["transform"]["rotation"] = this["players"][g]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                        this["muyu_effect"].root["active"] = !0,
                                        this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                    var s = this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_chuxian");
                                    s["active"] = !0,
                                        s["getChildByName"]("baodian")["active"] = !1;
                                    var f = s["getChildByName"]("mianpian");
                                    f["active"] = !0,
                                        f["getChildByName"]("shuzi_anim")["active"] = !1;
                                    var x = f["getChildByName"]("shuzi");
                                    x["active"] = !0;
                                    var l = x["meshRender"]["material"];
                                    l["renderQueue"] = 3001,
                                        l["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + B["count"] + ".png");
                                }
                        }
                    },
                    S["prototype"]["getMindVoicePriority"] = function (Q) {
                        switch (Q) {
                            case "ingame_yiman":
                                return 100;
                            case "ingame_beiman":
                                return 90;
                            case "ingame_lianda":
                                return 50;
                            case "ingame_baopai":
                                return 30;
                            case "ingame_remain10":
                                return 20;
                        }
                        return 0;
                    },
                    S["prototype"]["addMindVoice"] = function (Q, B) {
                        (!this["mind_voice_type"] || this["getMindVoicePriority"](this["mind_voice_type"]) < this["getMindVoicePriority"](B)) && (this["mind_voice_seat"] = Q, this["mind_voice_type"] = B);
                    },
                    S["prototype"]["playMindVoice"] = function () {
                        var B = this;
                        S["bianjietishi"] && (this["gameing"] && (this.mode == W.play || this.mode == W["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"]) && this["mind_voice_type"] && !this["during_playing_mind_voice"] && (this["during_playing_mind_voice"] = !0, Q["AudioMgr"]["PlayCharactorSound_Teshu"](this["player_datas"][this["mind_voice_seat"]]["character"], this["mind_voice_type"], Laya["Handler"]["create"](this, function () {
                            B["during_playing_mind_voice"] = !1;
                        }))), this["mind_voice_type"] = null, this["mind_voice_seat"] = -1);
                    },
                    S["prototype"]["clearMindVoice"] = function () {
                        this["mind_voice_type"] = null,
                            this["mind_voice_seat"] = -1;
                    },
                    S["prototype"]["getLastActionNames"] = function (Q) {
                        for (var B = [], V = this["actionList"]["length"], W = Math.max(V - Q, this["action_index"]); V > W; W++)
                            B.push(this["actionList"][W].name);
                        return B;
                    },
                    S["prototype"]["isLastPaiMingPai"] = function () {
                        for (var Q = 0; Q < this["players"]["length"]; Q++)
                            for (var B = 0; B < this["players"][Q]["container_ming"].pais["length"]; B++)
                                if (this["lastqipai"] == this["players"][Q]["container_ming"].pais[B])
                                    return !0;
                        return !1;
                    },
                    S["prototype"]["setRevealScore"] = function (Q, B) {
                        if (this["anpai"]) {
                            var V = (1000 * Q)["toString"]();
                            if (0 == Q)
                                for (var W = 0; W < this["score_reveal"]["length"]; W++)
                                    if (2 == W) {
                                        this["score_reveal"][W]["active"] = !0;
                                        var Z = new Laya["Vector4"]();
                                        Z.z = 0,
                                            Z.w = -0.9,
                                            Z.x = 1,
                                            Z.y = 0.1,
                                            this["score_reveal"][W]["meshRender"]["material"]["tilingOffset"] = Z;
                                    } else
                                        this["score_reveal"][W]["active"] = !1;
                            else
                                for (var S = this["last_anpai_score"]["toString"](), W = 0; W < this["score_reveal"]["length"]; W++)
                                    if (W < V["length"]) {
                                        var v = W < S["length"] ? Number(S[W]) : 0;
                                        B ? this["show_reveal_score_anim"](W, v, Number(V[W])) : this["show_reveal_score_anim"](W, Number(V[W]), Number(V[W]));
                                    } else
                                        this["score_reveal"][W]["active"] = !1;
                            this["last_anpai_score"] = 1000 * Q;
                        }
                    },
                    S["prototype"]["show_reveal_score_anim"] = function (B, V, W) {
                        var Z = this,
                            S = 24,
                            v = 40,
                            i = 3,
                            x = 0.2,
                            l = 0.8,
                            m = 2000,
                            s = W - V;
                        if (this["score_reveal"][B]["active"] = !0, V == W) {
                            var f = new Laya["Vector4"](),
                                z = V / 10;
                            return z > 0.9 && (z -= 1),
                                f.w = - (0.9 - z),
                                f.z = 0,
                                f.x = 1,
                                f.y = 0.1,
                                this["score_reveal"][B]["meshRender"]["material"]["tilingOffset"] = f,
                                void 0;
                        }
                        s += 10,
                            0 >= s && (s += 10);
                        var C = 0,
                            T = Laya["timer"]["currTimer"],
                            t = Laya["timer"]["currTimer"],
                            w = 0,
                            h = !1,
                            G = 0,
                            g = function () {
                                var W = Laya["timer"]["currTimer"] - T;
                                G % 9 == 0 && Q["AudioMgr"]["PlayAudio"](222),
                                    G++,
                                    Laya["timer"]["currTimer"] - t > m ? (w = s, Laya["timer"]["clear"](Z, g)) : (s / 2 > w && S > C ? C += v * W / 1000 : w >= s / 2 && l > s - w && (C -= v * W / 1000, C = Math.max(i, C)), h ? (w -= C * W / 1000, s > w && (w = s, Laya["timer"]["clear"](Z, g))) : (w += C * W / 1000, w > s + x && (h = !0)));
                                var f = new Laya["Vector4"](),
                                    z = (w + V) / 10;
                                z > 0.9 && (z -= 1),
                                    f.w = - (0.9 - z),
                                    f.z = 0,
                                    f.x = 1,
                                    f.y = 0.1,
                                    Z["score_reveal"][B]["meshRender"]["material"]["tilingOffset"] = f,
                                    T = Laya["timer"]["currTimer"];
                            };
                        Laya["timer"]["frameLoop"](1, this, g);
                    },
                    S["prototype"]["onRevealStateChange"] = function (Q, B) {
                        this["players"][this["seat2LocalPosition"](Q)]["trans_reveal"]["active"] = B;
                    },
                    S["prototype"]["is_field_spell_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["field_spell_mode"] ? !0 : !1;
                    },
                    S["prototype"]["is_field_spell_extra_dora"] = function () {
                        if (!this["is_field_spell_mode"]() || !this["field_spell"])
                            return !1;
                        var Q = Math["floor"](this["field_spell"] / 100) % 100;
                        return 3 == Q;
                    },
                    S["prototype"]["is_zhanxing_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["zhanxing"] ? !0 : !1;
                    },
                    S.Inst = null,
                    S["player_link_state"] = [B.NULL, B.NULL, B.NULL, B.NULL],
                    S["click_prefer"] = 0,
                    S["double_click_pass"] = 0,
                    S["en_mjp"] = !1,
                    S["bianjietishi"] = !0,
                    S["_is_yuren_type"] = !1,
                    S;
            }
                (Laya["Script"]);
            Q["DesktopMgr"] = Z;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this;
                        app.Log.log("ActionLiuJu play data:" + JSON["stringify"](B)),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                        var W = 0;
                        if (B.liqi ? (W = 1000, Q["ActionLiqi"].play(B.liqi)) : W = 500, B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), B.type == mjcore["E_LiuJu"]["sanjiahule"]) {
                            Q["BgmListMgr"]["stopBgm"]();
                            var Z = B.seat;
                            Laya["timer"].once(W, this, function () {
                                for (var B = [], V = 0; 4 > V; V++)
                                    Q["DesktopMgr"].Inst["localPosition2Seat"](V) != Z && B.push(V);
                                uiscript["UI_Huleshow"].Inst["showRong"](B);
                            }),
                                W += 1500,
                                Laya["timer"].once(W, this, function () {
                                    for (var V = 0; V < B["allplayertiles"]["length"]; V++)
                                        if (V != Z) {
                                            for (var W = B["allplayertiles"][V]["split"]('|'), S = [], v = 0; v < W["length"]; v++)
                                                S.push(mjcore["MJPai"]["Create"](W[v]));
                                            S = S.sort(mjcore["MJPai"]["Distance"]),
                                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["Huangpai"](!0, S, !1);
                                        }
                                }),
                                W += 1000,
                                Laya["timer"].once(W, this, function () {
                                    V["showEnd"](B),
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                        } else
                            Laya["timer"].once(W, this, function () {
                                if (Q["BgmListMgr"]["stopBgm"](), B["hules_history"])
                                    for (var W = 0, Z = B["hules_history"]; W < Z["length"]; W++) {
                                        var S = Z[W],
                                            v = Q["DesktopMgr"].Inst["seat2LocalPosition"](S.seat);
                                        Q["DesktopMgr"].Inst["players"][v]["onXuezhanEnd"](S.hand, !1);
                                    }
                                var i = 500;
                                if (B.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                                    for (var v = B.seat, x = B["tiles"], l = [], m = 0; m < x["length"]; m++)
                                        l.push(mjcore["MJPai"]["Create"](x[m]));
                                    l = l.sort(mjcore["MJPai"]["Distance"]),
                                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](v)]["Huangpai"](!0, l, !1);
                                }
                                if (B.type == mjcore["E_LiuJu"]["sijializhi"] && B["allplayertiles"] && B["allplayertiles"]["length"] > 0) {
                                    for (var s = 0; s < B["allplayertiles"]["length"]; s++) {
                                        for (var f = B["allplayertiles"][s]["split"]('|'), l = [], m = 0; m < f["length"]; m++)
                                            l.push(mjcore["MJPai"]["Create"](f[m]));
                                        l = l.sort(mjcore["MJPai"]["Distance"]),
                                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](s)]["Huangpai"](!0, l, !1);
                                    }
                                    i = 1000;
                                }
                                Laya["timer"].once(i, V, function () {
                                    V["showEnd"](B),
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionLiuJu fastplay data:" + JSON["stringify"](B)),
                            Q["BgmListMgr"]["stopBgm"](),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1);
                        if (B.liqi && Q["ActionLiqi"]["fastplay"](B.liqi, 0), B.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                            for (var V = B.seat, W = B["tiles"], Z = [], S = 0; S < W["length"]; S++)
                                Z.push(mjcore["MJPai"]["Create"](W[S]));
                            Z = Z.sort(mjcore["MJPai"]["Distance"]),
                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["Huangpai"](!0, Z, !0);
                        }
                        if (B.type == mjcore["E_LiuJu"]["sanjiahule"])
                            for (var V = B.seat, v = 0; v < B["allplayertiles"]["length"]; v++)
                                if (v != V) {
                                    for (var i = B["allplayertiles"][v]["split"]('|'), Z = [], S = 0; S < i["length"]; S++)
                                        Z.push(mjcore["MJPai"]["Create"](i[S]));
                                    Z = Z.sort(mjcore["MJPai"]["Distance"]),
                                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](v)]["Huangpai"](!0, Z, !1);
                                }
                        this["showEnd"](B);
                    },
                    V["record"] = function (Q) {
                        return app.Log.log("ActionLiuJu record data:" + JSON["stringify"](Q)),
                            this.play(Q),
                            4000;
                    },
                    V["fastrecord"] = function (B) {
                        Q["BgmListMgr"]["stopBgm"](),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            this["showEnd"](B);
                    },
                    V["showEnd"] = function (B) {
                        var V = null;
                        Q["DesktopMgr"].Inst["xuezhan"] && B["hules_history"] && B["hules_history"]["length"] > 0 && (V = Laya["Handler"]["create"](this, function () {
                            uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                        })),
                            uiscript["UIMgr"].Inst["ShowLiuJu"](B, V);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionLiuJu"] = B;
        }
            (view || (view = {}));


        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionUnveilTile play data:" + JSON["stringify"](B)),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                        var V = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](B.seat)];
                        V["PlaySound"]("act_unveil"),
                            B["operation"] && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            Q["DesktopMgr"].Inst["ActionRunComplete"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                    },
                    V["fastplay"] = function (B) {
                        Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            B["operation"] && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1);
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                        var W = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](B.seat)];
                        if (W["PlaySound"]("act_unveil"), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var Z = 0; Z < B["operations"]["length"]; Z++)
                                Q["ActionOperation"].ob(B["operations"][Z], V, 450);
                        return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            500;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](B.seat)];
                        if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var W = 0; W < B["operations"]["length"]; W++)
                                Q["ActionOperation"].ob(B["operations"][W], V, 450);
                        if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var W = 0; W < B["operations"]["length"]; W++)
                                Q["ActionOperation"].ob(B["operations"][W], V, 450);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionUnveilTile"] = B;
        }
            (view || (view = {}));


        !function (Q) {
            var B = function () {
                function B(Q) {
                    var B = this;
                    this["rounds"] = [],
                        this["locking"] = !1,
                        this["enable"] = !1,
                        this.me = Q,
                        this.me["visible"] = !1,
                        this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                        this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                        this["btn_up"] = this.me["getChildByName"]('up'),
                        this["btn_down"] = this.me["getChildByName"]("down"),
                        this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || B["scrollview"]["scrollDelta"](-100);
                        }, null, !1),
                        this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || B["scrollview"]["scrollDelta"](100);
                        }, null, !1),
                        this["scrollview"].me.on("ratechange", this, function () {
                            B["btn_up"]["visible"] = B["scrollview"].rate > 0,
                                B["btn_down"]["visible"] = B["scrollview"]["need_scroll"] && B["scrollview"].rate < 1;
                        }),
                        this["enable"] = !1;
                }
                return B["prototype"].show = function (B) {
                    var V = this;
                    this["enable"] = !0,
                        this["locking"] = !0,
                        this.me["visible"] = !0,
                        this["scrollview"]["reset"](),
                        this["rounds"] = B;
                    for (var W = 0, Z = 0; Z < B["length"]; Z++) {
                        var S = this["caluH"](B[Z]);
                        W += S,
                            this["scrollview"]["addItem"](1, S);
                    }
                    Q["UIBase"]["anim_alpha_in"](this.me, {
                        y: 30
                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                        V["locking"] = !1;
                    })),
                        this["btn_up"]["visible"] = !1,
                        this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                },
                    B["prototype"]["close"] = function () {
                        var B = this;
                        this["enable"] = !1,
                            this["locking"] = !0,
                            Q["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1,
                                    B.me["visible"] = !1;
                            }));
                    },
                    B["prototype"]["caluH"] = function (Q) {
                        var B = Q["actions"][Q["actions"]["length"] - 1];
                        if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        if (view["DesktopMgr"].Inst["xuezhan"] && B.data["hules_history"] && B.data["hules_history"]["length"] > 0)
                            return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        if ("RecordNoTile" == B.name) {
                            for (var V = B.data, W = [], Z = 0; Z < view["DesktopMgr"].Inst["player_count"]; Z++)
                                W.push({
                                    old_score: V["scores"][0]["old_scores"][Z],
                                    delta: 0
                                });
                            for (var Z = 0; Z < V["scores"]["length"]; Z++)
                                for (var S = 0; S < view["DesktopMgr"].Inst["player_count"]; S++)
                                    W[S]["delta"] += V["scores"][Z]["delta_scores"][S];
                            for (var v = [], Z = 0; Z < W["length"]; Z++)
                                W[Z]["delta"] > 0 && v.push(Z);
                            var i = 120 + (0 == v["length"] ? 0 : 40 * (v["length"] - 1));
                            return i;
                        }
                        return "RecordLiuJu" == B.name ? 120 : B.data["hules"][0].zimo ? 120 : 180 + 40 * (B.data["hules"]["length"] - 1);
                    },
                    B["prototype"]["renderInfo"] = function (Q) {
                        for (var B = this, V = Q["index"], W = Q["container"], Z = this["rounds"][V], v = 0; v < Z["actions"]["length"]; v++)
                            if ("RecordNewRound" == Z["actions"][v].name) {
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    W["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                        W["getChildByName"]("container_title")["getChildByName"]('ju').text = (Z["actions"][v].data["ju_count"] + 1)["toString"](),
                                        W["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                        W["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                    for (var i = 0, x = W["getChildByName"]("container_title"), l = [3, 3, 0], m = 0; 3 > m; m++) {
                                        var s = x["getChildAt"](m);
                                        i += s["textField"]["textWidth"] * s["scaleX"],
                                            i += l[m];
                                    }
                                    for (var f = x["width"] / 2 - i / 2, z = 0; 3 > z; z++) {
                                        var s = x["getChildAt"](z);
                                        s.x = f,
                                            f += s["textField"]["textWidth"] * s["scaleX"] + l[z],
                                            s.y = "haolong" == s.font ? 34 : 31;
                                    }
                                    break;
                                }
                                var C = void 0;
                                C = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                    W["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !0,
                                    W["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !0,
                                    W["getChildByName"]("container_title")["getChildByName"]("chang").text = C[Z["actions"][v].data["chang"] % 4],
                                    W["getChildByName"]("container_title")["getChildByName"]('ju').text = (Z["actions"][v].data.ju + 1)["toString"](),
                                    W["getChildByName"]("container_title")["getChildByName"]("ben").text = Z["actions"][v].data.ben["toString"]();
                                for (var i = 0, x = W["getChildByName"]("container_title"), l = [3, 3, 50, 3, 0], T = 0; T < x["numChildren"]; T++) {
                                    var s = x["getChildAt"](T);
                                    i += s["textField"]["textWidth"] * s["scaleX"],
                                        i += l[T];
                                }
                                for (var f = x["width"] / 2 - i / 2, t = 0; t < x["numChildren"]; t++) {
                                    var s = x["getChildAt"](t);
                                    s.x = f,
                                        f += s["textField"]["textWidth"] * s["scaleX"] + l[t],
                                        s.y = "haolong" == s.font ? 34 : 31;
                                }
                                break;
                            }
                        var w = Z["actions"][Z["actions"]["length"] - 1],
                            h = w.data,
                            G = W,
                            g = W["getChildByName"]("line"),
                            r = W["getChildByName"]("liuju"),
                            j = W["getChildByName"]("win"),
                            X = W["getChildByName"]("lose");
                        g["visible"] = !1,
                            r["visible"] = !1,
                            j["visible"] = !1,
                            X["visible"] = !1;
                        var d = !0;
                        if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                            for (var y = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                y.push(0);
                            for (var p = !1, E = 0, O = Z["actions"]; E < O["length"]; E++) {
                                var b = O[E];
                                if (("RecordHuleXueZhanEnd" == b.name || "RecordNoTile" == b.name) && (p = b.data["hules_history"] && b.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == b.name || "RecordHuleXueZhanEnd" == b.name) {
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y[v] += b.data["delta_scores"][v];
                                    p = !0;
                                } else if ("RecordNoTile" == b.name) {
                                    for (var v = 0; v < b.data["scores"]["length"]; v++)
                                        if (b.data["scores"][v]["delta_scores"] && b.data["scores"][v]["delta_scores"]["length"] > 0)
                                            for (var M = 0; M < view["DesktopMgr"].Inst["player_count"]; M++)
                                                y[M] += b.data["scores"][v]["delta_scores"][M];
                                } else if ("RecordGangResult" == b.name || "RecordGangResultEnd" == b.name)
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y[v] += b.data["gang_infos"]["delta_scores"][v];
                            }
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (p = !0), G["height"] = p ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, p) {
                                d = !1,
                                    j["visible"] = !0;
                                var U = j["getChildByName"]("info");
                                U["visible"] = !0,
                                    U.text = game["Tools"]["strOfLocalization"](3257),
                                    U = X["getChildByName"]("chong"),
                                    U["visible"] = !1;
                                for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++) {
                                    var k = j["getChildByName"]("player"),
                                        L = k["getChildAt"](v);
                                    L["visible"] = !0,
                                        L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](v)["nickname"],
                                        L["getChildByName"]("point").text = y[v] >= 0 ? '+' + y[v]["toString"]() : y[v]["toString"]();
                                }
                                for (var R = j["getChildByName"]("player"), v = view["DesktopMgr"].Inst["player_count"]; v < R["numChildren"]; v++)
                                    R["getChildAt"](v)["visible"] = !1;
                            } else;
                        }
                        if ("RecordNoTile" == w.name) {
                            if (d) {
                                for (var o = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                    o.push({
                                        old_score: h["scores"][0]["old_scores"][v],
                                        delta: 0
                                    });
                                for (var v = 0; v < h["scores"]["length"]; v++)
                                    for (var M = 0; M < view["DesktopMgr"].Inst["player_count"]; M++)
                                        o[M]["delta"] += h["scores"][v]["delta_scores"][M];
                                for (var q = [], v = 0; v < o["length"]; v++)
                                    o[v]["delta"] > 0 && q.push(v);
                                if (G["height"] = 120 + (0 == q["length"] ? 0 : 40 * (q["length"] - 1)), h["liujumanguan"]) {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2170),
                                        U["color"] = "#8d8fac";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        v < q["length"] ? (L["visible"] = !0, L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](q[v])["nickname"], L["getChildByName"]("point").text = o[q[v]]["delta"] > 0 ? '+' + o[q[v]]["delta"]["toString"]() : o[q[v]]["delta"]["toString"]()) : L["visible"] = !1;
                                    }
                                } else if (j["visible"] = !0, j["getChildByName"]("info").text = '', r["visible"] = !0, r.text = game["Tools"]["strOfLocalization"](2171), h["scores"])
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        v < q["length"] ? (L["visible"] = !0, L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](q[v])["nickname"], L["getChildByName"]("point").text = o[q[v]]["delta"] > 0 ? '+' + o[q[v]]["delta"]["toString"]() : o[q[v]]["delta"]["toString"]()) : L["visible"] = !1;
                                    }
                            }
                        } else if ("RecordLiuJu" == w.name && d) {
                            var K = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                            r["visible"] = !0,
                                r.text = K[h.type],
                                G["height"] = 120;
                        } else if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            if (w.data["hules"][0].zimo) {
                                j["visible"] = !0;
                                var U = j["getChildByName"]("info");
                                U.text = game["Tools"]["strOfLocalization"](2177),
                                    U["color"] = "#ea3694";
                                for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                    var L = R["getChildAt"](v);
                                    if (0 == v) {
                                        L["visible"] = !0;
                                        var e = h["hules"][0].seat;
                                        L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                        var I = h["delta_scores"][e];
                                        L["getChildByName"]("point").text = (I > 0 ? '+' : '') + I["toString"]();
                                    } else
                                        L["visible"] = !1;
                                }
                                G["height"] = 120;
                            } else {
                                j["visible"] = !0;
                                var U = j["getChildByName"]("info");
                                U.text = game["Tools"]["strOfLocalization"](2178),
                                    U["color"] = "#ef3538";
                                for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                    var L = R["getChildAt"](v);
                                    if (v < h["hules"]["length"]) {
                                        L["visible"] = !0;
                                        var e = h["hules"][v].seat;
                                        L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                        var I = h["delta_scores"][e];
                                        L["getChildByName"]("point").text = I > 0 ? '+' + I["toString"]() : I["toString"]();
                                    } else
                                        L["visible"] = !1;
                                }
                                g["visible"] = !0,
                                    g.y = 80 + 40 * h["hules"]["length"],
                                    X["visible"] = !0,
                                    X.y = 83 + 40 * h["hules"]["length"];
                                var U = X["getChildByName"]("chong");
                                U["visible"] = !0;
                                for (var R = X["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                    var L = R["getChildAt"](v);
                                    if (0 == v) {
                                        L["visible"] = !0;
                                        for (var e = 0, M = 0; M < h["delta_scores"]["length"]; M++)
                                            (h["delta_scores"][M] < h["delta_scores"][e] || h["baopai"] > 0 && h["delta_scores"][M] == h["delta_scores"][e] && h["baopai"] - 1 == e) && (e = M);
                                        L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                        var I = h["delta_scores"][e];
                                        L["getChildByName"]("point").text = I["toString"]();
                                    } else
                                        L["visible"] = !1;
                                }
                                G["height"] = 180 + 40 * (w.data["hules"]["length"] - 1);
                            }
                        G["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || (S.Inst["jumpRound"](V), B["close"]());
                        }, null, !1),
                            W["getChildByName"]('bg')["height"] = W["height"] - 4;
                    },
                    B;
            }
                (),
                V = function () {
                    function B(Q) {
                        var B = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = Q,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                B["locking"] || B["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                B["locking"] || B["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function () {
                                B["btn_up"]["visible"] = B["scrollview"].rate > 0,
                                    B["btn_down"]["visible"] = B["scrollview"]["need_scroll"] && B["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return B["prototype"].show = function (B, V) {
                        var W = this;
                        this["enable"] = !0,
                            this["locking"] = !0,
                            this["have0"] = V,
                            this.me["visible"] = !0,
                            this["scrollview"]["reset"](),
                            this["scrollview"]["addItem"](B + (V ? 1 : 0)),
                            Q["UIBase"]["anim_alpha_in"](this.me, {
                                y: 30
                            }, 100, 0, Laya["Handler"]["create"](this, function () {
                                W["locking"] = !1;
                            })),
                            this["btn_up"]["visible"] = !1,
                            this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                    },
                        B["prototype"]["close"] = function () {
                            var B = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Q["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function () {
                                    B["locking"] = !1,
                                        B.me["visible"] = !1;
                                }));
                        },
                        B["prototype"]["renderInfo"] = function (Q) {
                            var B = this,
                                V = Q["index"],
                                W = Q["container"];
                            W["getChildByName"]("num").text = (V + (this["have0"] ? 0 : 1))["toString"](),
                                W["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    B["locking"] || (S.Inst["jumpXun"](V + (B["have0"] ? 0 : 1)), B["close"]());
                                }, null, !1);
                            var Z = W,
                                v = [];
                            'en' == GameMgr["client_language"] ? (v.push(Z["getChildByName"]("xun")), v.push(Z["getChildByName"]("num"))) : (v.push(Z["getChildByName"]("num")), v.push(Z["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](v, 115, [10]);
                            for (var i = 1; i < Z["numChildren"]; i++) {
                                var x = Z["getChildAt"](i);
                                x.y = "haolong" == x.font ? 42 : 39;
                            }
                        },
                        B;
                }
                    (),
                W = function () {
                    function B(B) {
                        var V = this;
                        this.me = B,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["switch"]();
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_choosed_show_hand"]["visible"] = !V["_choosed_show_hand"]["visible"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](V["_choosed_show_hand"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_choosed_show_paopai"]["visible"] = !V["_choosed_show_paopai"]["visible"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](V["_choosed_show_paopai"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_anim"] = this.me["getChildByName"]("btn_anim")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_anim")["clickHandler"] = new Laya["Handler"](this, function () {
                                V["_choosed_show_anim"]["visible"] = !V["_choosed_show_anim"]["visible"],
                                    view["DesktopMgr"].Inst["record_show_anim"] = V["_choosed_show_anim"]["visible"],
                                    Laya["LocalStorage"]["setItem"]("record_show_anim", view["DesktopMgr"].Inst["record_show_anim"] ? '1' : '0');
                            }),
                            this["_choosed_hide_name"] = this.me["getChildByName"]("btn_hidename")["getChildByName"]("choosed"),
                            this["_btn_hide_name"] = this.me["getChildByName"]("btn_hidename"),
                            this["_btn_hide_name"]["clickHandler"] = new Laya["Handler"](this, function () {
                                V["_choosed_hide_name"]["visible"] = !V["_choosed_hide_name"]["visible"],
                                    Q["UI_Replay"].Inst["hide_name"] = !V["_choosed_hide_name"]["visible"],
                                    Q["UI_DesktopInfo"].Inst["refreshNames"]();
                            }),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return B["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this.me.x = -258,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = view["DesktopMgr"].Inst["record_show_hand"],
                            this["_choosed_show_paopai"]["visible"] = view["DesktopMgr"].Inst["record_show_paopai"],
                            this["_choosed_show_anim"]["visible"] = view["DesktopMgr"].Inst["record_show_anim"],
                            2 & view["DesktopMgr"].Inst["paipu_config"] ? (this["_choosed_hide_name"]["visible"] = !1, Q["UI_Replay"].Inst["hide_name"] = !0, game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !0)) : (this["_choosed_hide_name"]["visible"] = !S.Inst["hide_name"], game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !1));
                    },
                        B["prototype"]["switch"] = function () {
                            var Q = this,
                                B = -258;
                            this.me.x < -100 && (B = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: B
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    Q["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        B;
                }
                    (),
                Z = function () {
                    function B(B) {
                        var V = this;
                        this["tiles"] = [],
                            this["container_input"] = null,
                            this["tile_count"] = 0,
                            this["gray_filter"] = null,
                            this["dora_filter"] = null,
                            this["lidora_filter"] = null,
                            this["tou_infos"] = [],
                            this["noinfo"] = !0,
                            this["locking"] = !1,
                            this["enable"] = !1,
                            this.me = B,
                            this.root = B["getChildByName"]("root"),
                            this["content"] = this.root["getChildByName"]("content"),
                            this["content"]["vScrollBarSkin"] = '';
                        var W = this["content"]["getChildByName"]("tile_templete");
                        W["visible"] = !1;
                        for (var Z = 0; 100 > Z; Z++) {
                            var S = W["scriptMap"]["capsui.UICopy"]["getNodeClone"]();
                            S["visible"] = !1,
                                this["tiles"].push(S);
                        }
                        this["container_input"] = this["content"]["getChildByName"]("input"),
                            this["gray_filter"] = new Laya["ColorFilter"]([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this["dora_filter"] = new Laya["ColorFilter"]([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this["lidora_filter"] = new Laya["ColorFilter"]([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this["container_input"]["getChildByName"]("btn_what")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["locking"] || Q["UI_Info_MD5"].Inst.show();
                            }, null, !1);
                    }
                    return B["prototype"]["setTiles"] = function (Q) {
                        var B = Q["indexOf"]('t'),
                            V = 0;
                        for (this["tou_infos"] = []; -1 != B;)
                            this["tou_infos"].push(Math["floor"]((B - V) / 2) - 1), V++, B = Q["indexOf"]('t', B + 1);
                        var W = Q["replace"](/t/g, '');
                        this["tile_count"] = Math["floor"](W["length"] / 2);
                        for (var Z = "myres2/mjp/" + GameMgr.Inst["touming_mjp_view"] + "/ui/", S = "myres2/mjp/" + GameMgr.Inst["mjp_view"] + "/ui/", v = 0, i = 0; 2 * i + 1 < W["length"]; i++)
                            this["tou_infos"]["length"] > v && i == this["tou_infos"][v] ? (v++, this["tiles"][i].skin = game["Tools"]["localUISrc"](Z + W["charAt"](2 * i) + W["charAt"](2 * i + 1) + ".png")) : this["tiles"][i].skin = game["Tools"]["localUISrc"](S + W["charAt"](2 * i) + W["charAt"](2 * i + 1) + ".png"), this["tiles"][i]["visible"] = !0;
                        for (var i = this["tile_count"]; i < this["tiles"]["length"]; i++)
                            this["tiles"][i]["visible"] = !1;
                        this["noinfo"] = !1,
                            this["container_input"]["getChildByName"]("txtinput").text = Q;
                    },
                        B["prototype"]["refresh"] = function () {
                            this.me["visible"] && (this["noinfo"] || this["setInfo"]());
                        },
                        B["prototype"]["setInfo"] = function () {
                            if (!this["noinfo"]) {
                                var B = view["DesktopMgr"].Inst["left_tile_count"],
                                    V = view["DesktopMgr"].Inst.dora["length"];
                                view["DesktopMgr"].Inst["is_zhanxing_mode"]() && (B -= Q["UI_Astrology"].Inst["getTileCount"]());
                                var W = view["DesktopMgr"].Inst["get_gang_count"](),
                                    Z = view["DesktopMgr"].Inst["get_babei_count"](),
                                    S = W + Z;
                                S > 0 && view["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] && S--;
                                var v = 14;
                                view["DesktopMgr"].Inst["is_chuanma_mode"]() && (S = 0, v = 0);
                                var i = this["tile_count"] - S - v;
                                0 > i && (i = 0);
                                for (var x = this["tiles"][0]["width"], l = this["tiles"][0]["height"] + 10, m = 0; i > m; m++) {
                                    var s = 0;
                                    view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? s = m % 12 * x + 5 * Math["floor"](m % 12 / 3) : s += 2 + m % 12 * x + 5 * Math["floor"](m % 12 / 4),
                                        this["tiles"][m].x = s,
                                        this["tiles"][m].y = Math["floor"](m / 12) * l,
                                        this["tiles"][m]["filters"] = B >= i - m ? [] : [this["gray_filter"]];
                                }
                                for (var f = Math.ceil(i / 12) * l + 20, m = i; m < this["tile_count"]; m++) {
                                    var z = this["tiles"][m];
                                    z.x = (m - i) % 12 * x,
                                        z.y = Math["floor"]((m - i) / 12) * l + f,
                                        z["filters"] = [];
                                }
                                for (var C = view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? 8 : 4, m = 0; V > m; m++)
                                    this["tiles"][this["tile_count"] - C - 1 - 2 * m]["filters"] = [this["dora_filter"]], this["tiles"][this["tile_count"] - C - 2 - 2 * m]["filters"] = [this["lidora_filter"]];
                                for (var m = 0; S > m; m++)
                                    this["tiles"][this["tile_count"] - 1 - m]["filters"] = [this["gray_filter"]];
                                f += Math.ceil((this["tile_count"] - i) / 12) * l,
                                    this["container_input"].y = f + 80,
                                    this["content"]["refresh"]();
                            }
                        },
                        B["prototype"]["setNoInfo"] = function () {
                            this["noinfo"] = !0;
                        },
                        B["prototype"].show = function () {
                            var B = this;
                            if (!this["locking"]) {
                                if (this["noinfo"])
                                    return Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2179)), void 0;
                                this["locking"] = !0,
                                    this.me["visible"] = !0,
                                    this["refresh"](),
                                    Q["UIBase"]["anim_alpha_in"](this.me, {
                                        y: 30
                                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                                        B["locking"] = !1;
                                    }));
                            }
                        },
                        B["prototype"]["close"] = function () {
                            var B = this;
                            this["locking"] || (this["locking"] = !0, Q["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1,
                                    B.me["visible"] = !1;
                            })));
                        },
                        B;
                }
                    (),
                S = function (S) {
                    function v() {
                        var Q = S.call(this, new ui.mj["replayUI"]()) || this;
                        return Q["label_chang"] = null,
                            Q["label_ju"] = null,
                            Q["label_xun"] = null,
                            Q["img_play"] = null,
                            Q["img_stop"] = null,
                            Q["btn_preround"] = null,
                            Q["btn_nextround"] = null,
                            Q["page_chang"] = null,
                            Q["page_xun"] = null,
                            Q["btn_change_score"] = null,
                            Q["paipuconfig"] = null,
                            Q["page_paishan"] = null,
                            Q["pop_collectinput"] = null,
                            Q.data = null,
                            Q["gameResult"] = null,
                            Q["rounds"] = [],
                            Q["round_index"] = 0,
                            Q["action_index"] = 0,
                            Q["locking_time"] = 0,
                            Q["_auto_play"] = !1,
                            Q["hide_name"] = !1,
                            v.Inst = Q,
                            Q;
                    }
                    return __extends(v, S),
                        Object["defineProperty"](v["prototype"], "auto_play", {
                            get: function () {
                                return this["_auto_play"];
                            },
                            set: function (Q) {
                                this["_auto_play"] = Q,
                                    this["img_play"]["visible"] = !Q,
                                    this["img_stop"]["visible"] = Q;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        v["prototype"]["onCreate"] = function () {
                            var S = this,
                                v = this.me["getChildByName"]("root")["getChildByName"]("round");
                            v["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                S["page_chang"]["locking"] || (S["auto_play"] && (S["auto_play"] = !1), S["page_xun"]["enable"] && S["page_xun"]["close"](), S["page_paishan"].me["visible"] && S["page_paishan"]["close"](), S["page_chang"]["enable"] ? S["page_chang"]["close"]() : S["page_chang"].show(S["rounds"]));
                            }, null, !1),
                                this["label_chang"] = v["getChildByName"]("chang"),
                                this["label_ju"] = v["getChildByName"]('ju');
                            var i = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            'kr' == GameMgr["client_language"] && (i["getChildAt"](0)["width"] = 142, i["getChildAt"](0).x -= 1),
                                this["label_xun"] = i["getChildByName"]("xun"),
                                i["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["page_xun"]["locking"] || (S["auto_play"] && (S["auto_play"] = !1), S["page_chang"]["enable"] && S["page_chang"]["close"](), S["page_paishan"].me["visible"] && S["page_paishan"]["close"](), S["page_xun"]["enable"] ? S["page_xun"]["close"]() : S["page_xun"].show(S["rounds"][S["round_index"]].xun["length"], 0 != S["rounds"][S["round_index"]].xun[0]));
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("paishan")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["page_paishan"]["locking"] || (S["auto_play"] && (S["auto_play"] = !1), S["page_chang"]["enable"] && S["page_chang"]["close"](), S["page_xun"]["enable"] && S["page_xun"]["close"](), S["page_paishan"].me["visible"] ? S["page_paishan"]["close"]() : S["page_paishan"].show());
                                }, null, !1),
                                this["page_chang"] = new B(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new V(this.me["getChildByName"]("info_xun")),
                                this["page_paishan"] = new Z(this.me["getChildByName"]("info_paishan")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["auto_play"] = !S["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    return S["locking_time"] > Laya["timer"]["currTimer"] ? (S["auto_play"] && (S["auto_play"] = !1), void 0) : (S["nextStep"](),
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify({ 'record_click_action': "nextStep" }),
                                            onload: function (msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'record_click_action': "nextStep" }));
                                            }
                                        })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause"),
                                this["btn_change_score"] = this.me["getChildByName"]("btn_change_score"),
                                this["btn_change_score"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["UI_DesktopInfo"].Inst["onBtnShowScoreDelta"]();
                                }, null, !1),
                                this["paipuconfig"] = new W(this.me["getChildByName"]("config")),
                                this["pop_collectinput"] = new Q["UI_Pop_CollectInput"](this.me["getChildByName"]("pop_collect"));
                        },
                        v["prototype"]["onEnable"] = function () {
                            this["paipuconfig"]["reset"](),
                                Q["UI_ReplayWheel"].Inst["enable"] = !0;
                        },
                        v["prototype"]["onDisable"] = function () {
                            Q["UI_ReplayWheel"].Inst["enable"] = !1;
                        },
                        v["prototype"]["_isRoundEnd"] = function (Q) {
                            return "RecordNoTile" == Q || "RecordLiuJu" == Q || "RecordHule" == Q || "RecordHuleXueZhanEnd" == Q || "RecordGangResultEnd" == Q;
                        },
                        v["prototype"]["initData"] = function (Q) {
                            this.data = Q;
                            var B = Q.game,
                                V = Q["record"],
                                W = null,
                                Z = 0;
                            if (this["rounds"] = [], B["actions"] && B["actions"]["length"] > 0) {
                                var actions = [];
                                for (var S = 0; S < B["actions"]["length"]; S++) {
                                    var v = B["actions"][S];
                                    if (1 == v.type) {
                                        Z += v["result"]["length"];
                                        var i = net["MessageWrapper"]["decodeMessage"](v["result"]),
                                            x = i["$type"].name,
                                            l = {
                                                name: x,
                                                data: i
                                            };
                                        actions.push(l);
                                        null == W && (W = {
                                            xun: [],
                                            actions: []
                                        }),
                                            W["actions"].push(l),
                                            this["_isRoundEnd"](x) && (this["pengding_xun"](W), this["rounds"].push(W), W = null);
                                    }
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_actions': actions
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_actions': actions
                                        }));
                                    }
                                }));
                            } else
                                for (var S = 0; S < B["records"]["length"]; S++) {
                                    Z += B["records"][S]["length"];
                                    var i = net["MessageWrapper"]["decodeMessage"](B["records"][S]),
                                        x = i["$type"].name,
                                        l = {
                                            name: x,
                                            data: i
                                        };
                                    null == W && (W = {
                                        xun: [],
                                        actions: []
                                    }),
                                        W["actions"].push(l),
                                        this["_isRoundEnd"](x) && (this["pengding_xun"](W), this["rounds"].push(W), W = null);
                                }
                            null != W && app.Log["Error"]("最后一份牌谱没有结束"),
                                this["gameResult"] = V,
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var m = [];
                            'en' != GameMgr["client_language"] ? (m.push(this["label_xun"]["parent"]["getChildByName"]("xun")), m.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (m.push(this["label_xun"]["parent"]["getChildByName"]("turn")), m.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](m, 80, [5]),
                                app.Log.log("牌谱大小：" + Z + 'B');
                        },
                        v["prototype"]["reset"] = function () {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["page_paishan"].me["visible"] && (this["page_paishan"].me["visible"] = !1);
                        },
                        v["prototype"]["onBack"] = function () {
                            this["locking_time"] = 0,
                                this["enable"] = !0,
                                this["_jumpStep"](this["round_index"], this["rounds"][this["round_index"]]["actions"]["length"] - 2);
                        },
                        v["prototype"]["pengding_xun"] = function (Q) {
                            Q.xun = [];
                            for (var B = view["DesktopMgr"].Inst.seat, V = !1, W = 0; W < Q["actions"]["length"]; W++) {
                                var Z = Q["actions"][W];
                                "RecordNewRound" == Z.name ? Z.data.ju == B && (V = !0, Q.xun.push(W)) : "RecordDealTile" == Z.name || "RecordChiPengGang" == Z.name || "RecordHuleXueZhanMid" == Z.name ? Z.data.seat == B && (V || (V = !0, Q.xun.push(W))) : ("RecordDiscardTile" == Z.name || "RecordRevealTile" == Z.name || "RecordAnGangAddGang" == Z.name || "RecordBaBei" == Z.name) && (V = !1);
                            }
                        },
                        v["prototype"]["get_currentxun"] = function () {
                            var Q = this["rounds"][this["round_index"]];
                            if (0 == Q.xun["length"])
                                return 1;
                            for (var B = Q.xun["length"], V = 0; V < Q.xun["length"]; V++)
                                if (this["action_index"] < Q.xun[V]) {
                                    B = V;
                                    break;
                                }
                            return 0 > B && (B = 0),
                                B;
                        },
                        v["prototype"]["nextStep"] = function (B, V) {
                            if (void 0 === B && (B = !1), void 0 === V && (V = !1), !(!B && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] > this["rounds"]["length"])) {
                                if (this["round_index"] == this["rounds"]["length"] && (this["round_index"] = -1), this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1) {
                                    if (this["round_index"] + 1 >= this["rounds"]["length"])
                                        return view["DesktopMgr"].Inst["gameEndResult"] = this["gameResult"]["result"], this["enable"] = !1, Q["UIMgr"].Inst["ShowGameEnd"](), this["action_index"]--, void 0;
                                    this["round_index"]++,
                                        this["action_index"] = 0;
                                } else
                                    this["action_index"]++;
                                if (this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name)) {
                                    var W = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    W != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](W)]["RecordLiPai"](0, !B && view["DesktopMgr"].Inst["record_show_anim"] && !(view["DesktopMgr"].Inst["is_jiuchao_mode"]() || view["DesktopMgr"].Inst["is_open_hand"]() || view["DesktopMgr"].Inst["record_show_hand"]));
                                }
                                var Z = this["rounds"][this["round_index"]]["actions"][this["action_index"]];
                                view["DesktopMgr"].Inst["record_show_anim"] || this["_isRoundEnd"](Z.name) ? this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](Z) : (this["doFastRecord"](Z), this["locking_time"] = Laya["timer"]["currTimer"] + (V ? 200 : 0)),
                                    "RecordNewCard" == Z.name && this["nextStep"](!0),
                                    this["_refreshBarshow"]();
                            }
                        },
                        v["prototype"]["_refreshBarshow"] = function () {
                            var Q = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? Q = "Round" : Q += '第', this["label_chang"].text = Q, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '东';
                                            break;
                                        case 1:
                                            Q += '南';
                                            break;
                                        case 2:
                                            Q += '西';
                                            break;
                                        case 3:
                                            Q += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '東';
                                            break;
                                        case 1:
                                            Q += '南';
                                            break;
                                        case 2:
                                            Q += '西';
                                            break;
                                        case 3:
                                            Q += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '동';
                                            break;
                                        case 1:
                                            Q += '남';
                                            break;
                                        case 2:
                                            Q += '서';
                                            break;
                                        case 3:
                                            Q += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += "East";
                                            break;
                                        case 1:
                                            Q += "South";
                                            break;
                                        case 2:
                                            Q += "West";
                                            break;
                                        case 3:
                                            Q += "North";
                                    }
                                this["label_chang"].text = Q,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var B = function (Q, B) {
                                for (var V = 0, W = 1; W < Q["numChildren"]; W++) {
                                    1 != W && (V += 3);
                                    var Z = Q["getChildAt"](W);
                                    V += Z["textField"]["textWidth"] * Z["scaleX"];
                                }
                                for (var S = Q["width"] / 2 - V / 2, W = 1; W < Q["numChildren"]; W++) {
                                    var Z = Q["getChildAt"](W);
                                    Z.x = S,
                                        S += Z["textField"]["textWidth"] * Z["scaleX"] + 3,
                                        Z.y = "haolong" == Z.font ? B + 3 : B;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var V = [];
                            'en' != GameMgr["client_language"] ? (V.push(this["label_xun"]["parent"]["getChildByName"]("xun")), V.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (V.push(this["label_xun"]["parent"]["getChildByName"]("turn")), V.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](V, 80, [5]),
                                B(this["label_chang"]["parent"], 40);
                        },
                        v["prototype"]["_get_autoplay_delay"] = function (Q) {
                            switch (Q.name) {
                                case "RecordNewCard":
                                    return 0;
                                case "RecordNewRound":
                                    return 0;
                                case "RecordChangeTile":
                                    return 500;
                                case "RecordDiscardTile":
                                    return 500;
                                case "RecordDealTile":
                                    return 500;
                                case "RecordChiPengGang":
                                    return 500;
                                case "RecordAnGangAddGang":
                                    return 200;
                                case "RecordBaBei":
                                    return 200;
                                case "RecordHuleXueZhanMid":
                                    return 500;
                                case "RecordRevealTile":
                                    return 500;
                                case "RecordUnveilTile":
                                    return 500;
                                case "RecordLockTile":
                                    return 1000;
                            }
                            return 0;
                        },
                        v["prototype"]["doRecord"] = function (Q) {
                            try {
                                var B = 0;
                                switch (Q.name) {
                                    case "RecordNewRound":
                                        B = view["ActionNewRound"]["record"](Q.data);
                                        break;
                                    case "RecordChangeTile":
                                        B = view["ActionChangeTile"]["record"](Q.data);
                                        break;
                                    case "RecordSelectGap":
                                        B = view["ActionSelectGap"]["record"](Q.data);
                                        break;
                                    case "RecordDiscardTile":
                                        B = view["ActionDiscardTile"]["record"](Q.data);
                                        break;
                                    case "RecordDealTile":
                                        B = view["ActionDealTile"]["record"](Q.data);
                                        break;
                                    case "RecordChiPengGang":
                                        B = view["ActionChiPengGang"]["record"](Q.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        B = view["ActionAnGangAddGang"]["record"](Q.data);
                                        break;
                                    case "RecordBaBei":
                                        B = view["ActionBabei"]["record"](Q.data);
                                        break;
                                    case "RecordHule":
                                        B = view["ActionHule"]["record"](Q.data);
                                        break;
                                    case "RecordLiuJu":
                                        B = view["ActionLiuJu"]["record"](Q.data);
                                        break;
                                    case "RecordNoTile":
                                        B = view["ActionNoTile"]["record"](Q.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        B = view["ActionHuleXueZhanMid"]["record"](Q.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        B = view["ActionHuleXueZhanEnd"]["record"](Q.data);
                                        break;
                                    case "RecordGangResult":
                                        B = view["ActionGangResult"]["record"](Q.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        B = view["ActionGangResultEnd"]["record"](Q.data);
                                        break;
                                    case "RecordRevealTile":
                                        B = view["ActionRevealTile"]["record"](Q.data);
                                        break;
                                    case "RecordLockTile":
                                        B = view["ActionLockTile"]["record"](Q.data);
                                        break;
                                    case "RecordUnveilTile":
                                        B = view["ActionUnveilTile"]["record"](Q.data);
                                        break;
                                    case "RecordNewCard":
                                        B = view["ActionNewCard"]["record"](Q.data);
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        B = view["ActionFillAwaitingTiles"]["record"](Q.data);
                                }
                                return this["auto_play"] && (B += this["_get_autoplay_delay"](Q)),
                                    ("RecordNewRound" == Q.name || "RecordDealTile" == Q.name || view["DesktopMgr"].Inst["is_zhanxing_mode"]() && "RecordDiscardTile" == Q.name || "RecordFillAwaitingTiles" == Q.name) && this["page_paishan"]["refresh"](),
                                    B;
                            } catch (V) {
                                var W = {};
                                return W["error"] = V["message"],
                                    W["stack"] = V["stack"],
                                    W["method"] = "ui_replay doRecord",
                                    W.name = Q.name,
                                    W.data = Q.data,
                                    GameMgr.Inst["onFatalError"](W),
                                    1000000;
                            }
                        },
                        v["prototype"]["doFastRecord"] = function (Q) {
                            try {
                                switch (Q.name) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordGangResult":
                                        view["ActionGangResult"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        view["ActionGangResultEnd"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordNewCard":
                                        view["ActionNewCard"]["fastrecord"](Q.data);
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        view["ActionFillAwaitingTiles"]["fastrecord"](Q.data);
                                }
                                ("RecordNewRound" == Q.name || "RecordDealTile" == Q.name || view["DesktopMgr"].Inst["is_zhanxing_mode"]() && "RecordDiscardTile" == Q.name || "RecordFillAwaitingTiles" == Q.name) && this["page_paishan"]["refresh"]();
                            } catch (B) {
                                var V = {};
                                return V["error"] = B["message"],
                                    V["stack"] = B["stack"],
                                    V["method"] = "ui_replay doRecord",
                                    V.name = Q.name,
                                    V.data = Q.data,
                                    GameMgr.Inst["onFatalError"](V),
                                    1000000;
                            }
                            return 0;
                        },
                        v["prototype"]["update"] = function () {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](!1, !0),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        v["prototype"]["jumpToLastRoundXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var Q = this["rounds"][this["round_index"]],
                                B = Q["actions"]["length"] - 3;
                            1 > B && (B = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': B - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': B - 1
                                        }));
                                    }
                                }));
                            this["_jumpStep"](this["round_index"], B);
                        },
                        v["prototype"]["nextXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                if (this["action_index"] == Q["actions"]["length"] - 1)
                                    return this["nextStep"](), void 0;
                                var B = 0;
                                if (0 == Q.xun["length"])
                                    B = Q["actions"]["length"] - 1;
                                else if (Q.xun[0] > this["action_index"])
                                    B = Q.xun[0];
                                else {
                                    var V = this["get_currentxun"]();
                                    B = V == Q.xun["length"] ? Q["actions"]["length"] - 1 : Q.xun[V];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': B - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': B - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], B);
                            }
                        },
                        v["prototype"]["preXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == Q["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var B = 0;
                                if (0 == Q.xun["length"])
                                    B = 0;
                                else if (Q.xun[0] > this["action_index"])
                                    B = 0;
                                else {
                                    var V = this["get_currentxun"]() - 1;
                                    B = 0 == V ? 0 : Q.xun[V - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': B - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': B - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], B);
                            }
                        },
                        v["prototype"]["preStep"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == Q["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0)
                            }
                        },
                        v["prototype"]["nextRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        v["prototype"]["preRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        v["prototype"]["jumpRound"] = function (Q) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > Q || Q >= this["rounds"]["length"] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Q
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': Q
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](Q, 0), void 0);
                        },
                        v["prototype"]["jumpXun"] = function (Q) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var B = this["rounds"][this["round_index"]],
                                    V = 0;
                                V = 0 == B.xun["length"] ? 0 : 0 == Q ? 0 : B.xun[Q - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': V - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': V - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], V);
                            }
                        },
                        v["prototype"]["onWheelClick"] = function () {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this["nextStep"](), void 0);
                        },
                        v["prototype"]["onChangeMainBody"] = function () {
                            var Q = this["round_index"],
                                B = this["action_index"];
                            this["initData"](this.data),
                                this["reset"](),
                                Q >= this["rounds"]["length"] || 0 > Q || this["_jumpStep"](Q, B);
                        },
                        v["prototype"]["_jumpStep"] = function (Q, B) {
                            var V = this["rounds"][Q];
                            this["round_index"] = Q,
                                V["actions"][B] && V["actions"][B + 1] && "RecordNewCard" == V["actions"][B].name && B++;
                            for (var W = 0; B > W; W++) {
                                if (W > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][W - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][W - 1].name)) {
                                    var Z = this["rounds"][this["round_index"]]["actions"][W - 1].data.seat;
                                    Z != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](V["actions"][W]);
                            }
                            if (B == V["actions"]["length"] - 1)
                                this["action_index"] = B - 1, this["nextStep"]();
                            else {
                                if (B > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name)) {
                                    var Z = this["rounds"][this["round_index"]]["actions"][B - 1].data.seat;
                                    Z != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](V["actions"][B]),
                                    this["action_index"] = B,
                                    this["_refreshBarshow"]();
                            }
                        },
                        v["prototype"]["_lipai_all"] = function () {
                            for (var Q = 1; Q < view["DesktopMgr"].Inst["players"]["length"]; Q++)
                                view["DesktopMgr"].Inst["players"][Q]["RecordLiPai"](0);
                        },
                        v.Inst = null,
                        v;
                }
                    (Q["UIBase"]);
            Q["UI_Replay"] = S;
        }
            (uiscript || (uiscript = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this,
                            W = Q["DesktopMgr"].Inst.mode == Q["EMJMode"].play || Q["DesktopMgr"].Inst["record_show_anim"];
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            void 0 != B["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"]),
                            Laya["timer"].once(100, this, function () {
                                var Z = B["hules"],
                                    S = 0;
                                if (Z[0].zimo) {
                                    var v = Z[0].seat;
                                    Q["DesktopMgr"].Inst["setTingpai"](v, []),
                                        W && uiscript["UI_Huleshow"].Inst["showZimo"]([Q["DesktopMgr"].Inst["seat2LocalPosition"](v)]),
                                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                        S += W ? 1200 : 200,
                                        Laya["timer"].once(S, V, function () {
                                            var B = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](v)];
                                            B["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](Z[0]["hu_tile"]), !1);
                                        });
                                } else {
                                    for (var i = 0, x = -1, l = [], m = 0; m < Z["length"]; m++) {
                                        var s = Z[m].seat;
                                        Q["DesktopMgr"].Inst["setTingpai"](s, []),
                                            l.push(Q["DesktopMgr"].Inst["seat2LocalPosition"](s)),
                                            -1 == x && (x = s);
                                    }
                                    x >= 0 && (i = Q["DesktopMgr"].Inst["player_effects"][x][game["EView"]["hupai_effect"]]),
                                        W && uiscript["UI_Huleshow"].Inst["showRong"](l),
                                        S += W ? 1200 : 200,
                                        Laya["timer"].once(S, V, function () {
                                            for (var B = 0; B < Z["length"]; B++) {
                                                var V = Z[B].seat;
                                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](Z[B]["hu_tile"]), !1);
                                            }
                                            Q["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                Q["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                Q["DesktopMgr"].Inst["ShowHuleEffect"](Q["DesktopMgr"].Inst["lastqipai"], Q["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], i, Q["DesktopMgr"].Inst["lastpai_seat"], Q["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                        });
                                }
                                S += 2000,
                                    Laya["timer"].once(S, V, function () {
                                        for (var W = 0, S = Q["DesktopMgr"].Inst["players"]; W < S["length"]; W++) {
                                            var v = S[W];
                                            v["hideLiqi"]();
                                        }
                                        B.liqi ? Laya["timer"].once(2500, V, function () {
                                            Q["ActionLiqi"].play(B.liqi);
                                        }) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0);
                                        for (var i = [], x = 0; x < B["delta_scores"]["length"]; x++) {
                                            var l = {
                                                title_id: 0,
                                                score: 0,
                                                delta: 0
                                            };
                                            if (B["delta_scores"][x] > 0) {
                                                x == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                                    uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_7", -1),
                                                    l["delta"] = B["delta_scores"][x];
                                                for (var m = 0, s = Z; m < s["length"]; m++) {
                                                    var f = s[m];
                                                    if (f.seat == x) {
                                                        l["title_id"] = f["title_id"];
                                                        break;
                                                    }
                                                }
                                            } else
                                                B["delta_scores"][x] < 0 && (l["delta"] = B["delta_scores"][x], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_8", -1));
                                            l["score"] = B["old_scores"][x],
                                                i.push(l);
                                        }
                                        Laya["timer"].once(200, V, function () {
                                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                                        }),
                                            uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](i);
                                    }),
                                    S += 3000,
                                    Laya["timer"].once(S, V, function () {
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](B)),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var V = B["hules"];
                        if (void 0 != B["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"]), V[0].zimo) {
                            var W = V[0].seat;
                            Q["DesktopMgr"].Inst["setTingpai"](W, []);
                            var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                            Z["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](V[0]["hu_tile"]), !0),
                                W == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                        } else {
                            for (var W = -1, S = [], v = 0; v < V["length"]; v++) {
                                var i = V[v].seat;
                                W == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                    Q["DesktopMgr"].Inst["setTingpai"](i, []),
                                    S.push(Q["DesktopMgr"].Inst["seat2LocalPosition"](i)),
                                    -1 == W && (W = i);
                            }
                            for (var v = 0; v < V["length"]; v++) {
                                var i = V[v].seat;
                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](i)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](V[v]["hu_tile"]), !0);
                            }
                            Q["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                Q["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"]();
                        }
                        for (var x = 0, l = Q["DesktopMgr"].Inst["players"]; x < l["length"]; x++) {
                            var Z = l[x];
                            Z["hideLiqi"]();
                        }
                        B.liqi ? Q["ActionLiqi"]["fastplay"](B.liqi, 0) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                    },
                    V["record"] = function (Q) {
                        return this.play(Q),
                            6000;
                    },
                    V["fastrecord"] = function (B) {
                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            this["fastplay"](B, 1000);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionHuleXueZhanMid"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        for (var V = 0, W = B["gang_infos"], Z = !1, S = [], v = 0; v < W["delta_scores"]["length"]; v++) {
                            var i = {
                                title_id: 0,
                                score: 0,
                                delta: 0
                            };
                            W["delta_scores"][v] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](v, "emoji_7", -1), i["delta"] = W["delta_scores"][v], Z = !0) : W["delta_scores"][v] < 0 && (i["delta"] = W["delta_scores"][v], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](v, "emoji_8", -1), Z = !0),
                                i["score"] = W["old_scores"][v],
                                S.push(i);
                        }
                        Z && (Laya["timer"].once(200, this, function () {
                            Q["DesktopMgr"].Inst["setScores"](W["scores"]);
                        }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](S), V += 2000),
                            Q["DesktopMgr"].Inst["mainrole"]["revertAllPais"](),
                            Laya["timer"].once(V, this, function () {
                                Q["DesktopMgr"].Inst["ActionRunComplete"]();
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](B));
                        var V = B["gang_infos"];
                        Q["DesktopMgr"].Inst["setScores"](V["scores"]);
                    },
                    V["record"] = function (Q) {
                        return this.play(Q),
                            2000;
                    },
                    V["fastrecord"] = function (Q) {
                        this["fastplay"](Q, 1000);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionGangResult"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionRevealTile play data:" + JSON["stringify"](B));
                        var V = B.seat,
                            W = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z'),
                            Z = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]);
                        if (Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["AddQiPai"](W, Z, B["moqie"], !0, V == Q["DesktopMgr"].Inst.seat ? Q["ERevealState"].self : Q["ERevealState"]["reveal"]), Z) {
                            B["is_wliqi"] ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["PlaySound"]("act_drich_anpai") : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["PlaySound"]("act_rich_anpai");
                            var S = Q["DesktopMgr"].Inst["player_effects"][V][game["EView"]["lizhi_bgm"]];
                            if (S && 0 != S) {
                                var v = cfg["item_definition"].item.get(S)["sargs"][0];
                                Q["AudioMgr"]["lizhiMuted"] ? Q["AudioMgr"]["PlayLiqiBgm"](v, 300, !0) : (Q["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function () {
                                    Q["DesktopMgr"].Inst["gameing"] && (Q["BgmListMgr"]["PlayMJBgm"]('', !0), Q["AudioMgr"]["PlayLiqiBgm"](v, 300, !0));
                                }));
                            }
                        }
                        V == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](W, !1, !1, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["onDiscardTile"](B["moqie"], B.tile, !1, !1),
                            B["operation"] && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !1),
                            Laya["timer"].once(500, this, function () {
                                Z ? Q["DesktopMgr"].Inst["clearMindVoice"]() : Q["DesktopMgr"].Inst["playMindVoice"]();
                            }),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            Q["DesktopMgr"].Inst["onRevealStateChange"](V, !0);
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionRevealTile fastplay data:" + JSON["stringify"](B) + " usetime:" + V);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z'),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]);
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"], !1, W == Q["DesktopMgr"].Inst.seat ? Q["ERevealState"].self : Q["ERevealState"]["reveal"]),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, !1, !0, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["onDiscardTile"](B["moqie"], B.tile, !1, !0),
                            B["operation"] && -1 != V && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"], V);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !0),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1),
                            Q["DesktopMgr"].Inst["onRevealStateChange"](W, !0);
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionRevealTile record data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]),
                            v = Q["DesktopMgr"].Inst["record_show_hand"] || W == Q["DesktopMgr"].Inst.seat ? Q["ERevealState"].self : Q["ERevealState"]["reveal"];
                        if (Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"], !0, v), S && (B["is_wliqi"] ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["PlaySound"]("act_drich_anpai") : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["PlaySound"]("act_rich_anpai"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](W, "emoji_9", 2000)), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, !1, !1, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordDiscardTile"](Z, B["moqie"], !1, !1), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        return Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            Q["DesktopMgr"].Inst["onRevealStateChange"](W, !0),
                            1000;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionRevealTile fastrecord data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile ? B.tile : '5z'),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]),
                            v = Q["DesktopMgr"].Inst["record_show_hand"] || W == Q["DesktopMgr"].Inst.seat ? Q["ERevealState"].self : Q["ERevealState"]["reveal"];
                        if (Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"], !1, v), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, !1, !0, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordDiscardTile"](Z, B["moqie"], !1, !0), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1),
                            Q["DesktopMgr"].Inst["onRevealStateChange"](W, !0);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionRevealTile"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this;
                        app.Log.log("ActionChangeTile play data:" + JSON["stringify"](B));
                        for (var W = function (V) {
                            var W = Q["DesktopMgr"].Inst["players"][V],
                                S = [];
                            if (0 == V) {
                                W["onHuanSanZhang_Remove"](B["out_tiles"], B["out_tile_states"], !1);
                                for (var v = 0; 3 > v; v++)
                                    S.push(mjcore["MJPai"]["Create"](B["out_tiles"][v]));
                            } else {
                                W["onHuanSanZhang_Remove"]();
                                for (var v = 0; 3 > v; v++)
                                    S.push(mjcore["MJPai"]["Create"]('5z'));
                            }
                            W["ShowHuanSanZhang"](S, B["change_type"]),
                                Laya["timer"].once(2500, Z, function () {
                                    0 == V ? W["onHuanSanZhang_Add"](B["in_tiles"], B["in_tile_states"], !1) : W["onHuanSanZhang_Add"]();
                                });
                        }, Z = this, S = 0; S < Q["DesktopMgr"].Inst["players"]["length"]; S++)W(S);
                        uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(B["change_type"]),
                            Laya["timer"].once(2500, this, function () {
                                Q["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                    Laya["timer"].once(200, V, function () {
                                        if (B["doras"] && B["doras"]["length"] > 0)
                                            for (var V = 0; V < B["doras"]["length"]; V++)
                                                Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][V])), uiscript["UI_DesktopInfo"].Inst["setDora"](V, Q["DesktopMgr"].Inst.dora[V]);
                                        for (var V = 0; 4 > V; V++)
                                            Q["DesktopMgr"].Inst["players"][V]["OnDoraRefresh"]();
                                        if (Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                                            var W = {
                                                tingpais: B["tingpais0"],
                                                operation: B["operation"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData0"](W);
                                        } else {
                                            var W = {
                                                tingpais: B["tingpais1"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData1"](W, !1);
                                        }
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                    }),
                                    void 0 != B["operation"] && Q["ActionOperation"].play(B["operation"]);
                            });
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](B));
                        for (var W = 0; W < Q["DesktopMgr"].Inst["players"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][W];
                            0 == W ? (Z["onHuanSanZhang_Remove"](B["out_tiles"], B["out_tile_states"], !0), Z["onHuanSanZhang_Add"](B["in_tiles"], B["in_tile_states"], !0)) : (Z["onHuanSanZhang_Add"](), Z["onHuanSanZhang_Remove"]());
                        }
                        if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), B["doras"] && B["doras"]["length"] > 0)
                            for (var W = 0; W < B["doras"]["length"]; W++)
                                Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][W])), uiscript["UI_DesktopInfo"].Inst["setDora"](W, Q["DesktopMgr"].Inst.dora[W]);
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["OnDoraRefresh"]();
                        if (Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                            var S = {
                                tingpais: B["tingpais0"],
                                operation: B["operation"]
                            };
                            uiscript["UI_TingPai"].Inst["setData0"](S);
                        } else {
                            var S = {
                                tingpais: B["tingpais1"]
                            };
                            uiscript["UI_TingPai"].Inst["setData1"](S, !1);
                        }
                        B["operation"] && -1 != V && Laya["timer"].once(100, this, function () {
                            Q["ActionOperation"].play(B["operation"], V + 100);
                        });
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionChangeTile record data:" + JSON["stringify"](B));
                        for (var W = function (V) {
                            var W = Q["DesktopMgr"].Inst["players"][V],
                                S = B["change_tile_infos"][Q["DesktopMgr"].Inst["localPosition2Seat"](V)];
                            0 == V ? W["onHuanSanZhang_Remove"](S["out_tiles"], S["out_tile_states"], !1) : W["recordHuanSanZhang_Remove"](S["out_tiles"], S["out_tile_states"]);
                            for (var v = [], i = 0; 3 > i; i++)
                                v.push(mjcore["MJPai"]["Create"](S["out_tiles"][i]));
                            W["ShowHuanSanZhang"](v, B["change_type"]),
                                Laya["timer"].once(2500, Z, function () {
                                    0 == V ? W["onHuanSanZhang_Add"](S["in_tiles"], S["in_tile_states"], !1) : W["recordHuanSanZhang_Add"](S["in_tiles"], S["in_tile_states"]);
                                });
                        }, Z = this, S = 0; S < Q["DesktopMgr"].Inst["players"]["length"]; S++)W(S);
                        return uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(B["change_type"]),
                            Laya["timer"].once(2500, this, function () {
                                if (Q["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    var W = B["operations"][Q["DesktopMgr"].Inst["localPosition2Seat"](Q["DesktopMgr"].Inst.seat)];
                                    Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && W && Q["ActionOperation"].ob(W, V, 1000);
                                } else {
                                    if (B["doras"] && B["doras"]["length"] > 0)
                                        for (var Z = 0; Z < B["doras"]["length"]; Z++)
                                            Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][Z])), uiscript["UI_DesktopInfo"].Inst["setDora"](Z, Q["DesktopMgr"].Inst.dora[Z]);
                                    else
                                        B.dora && '' != B.dora && (Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Q["DesktopMgr"].Inst.dora[0]));
                                    for (var Z = 0; 4 > Z; Z++)
                                        Q["DesktopMgr"].Inst["players"][Z]["OnDoraRefresh"]();
                                    if (B["tingpai"])
                                        for (var Z = 0; Z < B["tingpai"]["length"]; Z++)
                                            B["tingpai"][Z].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][Z].seat, B["tingpai"][Z]["tingpais1"]);
                                    Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                                }
                            }),
                            3000;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1);
                        for (var W = 0; W < Q["DesktopMgr"].Inst["players"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][W],
                                S = B["change_tile_infos"][Q["DesktopMgr"].Inst["localPosition2Seat"](W)];
                            0 == W ? (Z["onHuanSanZhang_Remove"](S["out_tiles"], S["out_tile_states"], !0), Z["onHuanSanZhang_Add"](S["in_tiles"], S["in_tile_states"], !0)) : (Z["recordHuanSanZhang_Remove"](S["out_tiles"], S["out_tile_states"]), Z["recordHuanSanZhang_Add"](S["in_tiles"], S["in_tile_states"]));
                        }
                        if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), B["doras"] && B["doras"]["length"] > 0)
                            for (var W = 0; W < B["doras"]["length"]; W++)
                                Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][W])), uiscript["UI_DesktopInfo"].Inst["setDora"](W, Q["DesktopMgr"].Inst.dora[W]);
                        else
                            B.dora && '' != B.dora && (Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Q["DesktopMgr"].Inst.dora[0]));
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["OnDoraRefresh"]();
                        if (B["tingpai"])
                            for (var W = 0; W < B["tingpai"]["length"]; W++)
                                B["tingpai"][W].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][W].seat, B["tingpai"][W]["tingpais1"]);
                        Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionChangeTile"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this;
                        app.Log.log("ActionSelectGap play data:" + JSON["stringify"](B));
                        for (var W = 0; W < B["gap_types"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                            Z["SetGapType"](B["gap_types"][W]);
                        }
                        uiscript["UI_DesktopInfo"].Inst["setGapType"](B["gap_types"], !0),
                            uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                            Laya["timer"].once(500, this, function () {
                                Q["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                    Laya["timer"].once(200, V, function () {
                                        if (Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                                            var V = {
                                                tingpais: B["tingpais0"],
                                                operation: B["operation"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData0"](V);
                                        } else {
                                            var V = {
                                                tingpais: B["tingpais1"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData1"](V, !1);
                                        }
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                    }),
                                    void 0 != B["operation"] && Q["ActionOperation"].play(B["operation"]);
                            });
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](B));
                        for (var W = 0; W < B["gap_types"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                            Z["SetGapType"](B["gap_types"][W]);
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["setGapType"](B["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                            var S = {
                                tingpais: B["tingpais0"],
                                operation: B["operation"]
                            };
                            uiscript["UI_TingPai"].Inst["setData0"](S);
                        } else {
                            var S = {
                                tingpais: B["tingpais1"]
                            };
                            uiscript["UI_TingPai"].Inst["setData1"](S, !1);
                        }
                        B["operation"] && -1 != V && Laya["timer"].once(100, this, function () {
                            Q["ActionOperation"].play(B["operation"], V + 100);
                        });
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionChangeTile record data:" + JSON["stringify"](B));
                        for (var W = 0; W < B["gap_types"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                            Z["SetGapType"](B["gap_types"][W]);
                        }
                        return uiscript["UI_DesktopInfo"].Inst["setGapType"](B["gap_types"], !0),
                            uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                            Laya["timer"].once(500, this, function () {
                                if (B["tingpai"])
                                    for (var W = 0; W < B["tingpai"]["length"]; W++)
                                        B["tingpai"][W].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][W].seat, B["tingpai"][W]["tingpais1"]);
                                Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                            }),
                            1300;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1);
                        for (var W = 0; W < B["gap_types"]["length"]; W++) {
                            var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)];
                            Z["SetGapType"](B["gap_types"][W]);
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["setGapType"](B["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), B["tingpai"])
                            for (var W = 0; W < B["tingpai"]["length"]; W++)
                                B["tingpai"][W].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][W].seat, B["tingpai"][W]["tingpais1"]);
                        Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionSelectGap"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionLiqi play data:" + JSON["stringify"](B)),
                            Laya["timer"].once(300, this, function () {
                                var V = B.seat,
                                    W = B["score"],
                                    Z = Q["DesktopMgr"].Inst["seat2LocalPosition"](V);
                                B["failed"] ? Q["DesktopMgr"].Inst["players"][Z]["ShowLiqiFailed"]() : Q["DesktopMgr"].Inst["players"][Z]["ShowLiqi"](),
                                    Q["DesktopMgr"].Inst["players"][Z]["SetScore"](W, Q["DesktopMgr"].Inst["mainrole"]["score"]),
                                    uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionLiqi fastplay data:" + JSON["stringify"](B));
                        var V = B.seat,
                            W = B["score"],
                            Z = Q["DesktopMgr"].Inst["seat2LocalPosition"](V);
                        B["failed"] ? Q["DesktopMgr"].Inst["players"][Z]["ShowLiqiFailed"](!1) : Q["DesktopMgr"].Inst["players"][Z]["ShowLiqi"](!1),
                            Q["DesktopMgr"].Inst["players"][Z]["SetScore"](W, Q["DesktopMgr"].Inst["mainrole"]["score"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"], !1);
                    },
                    V["record"] = function (Q) {
                        return app.Log.log("ActionLiqi record data:" + JSON["stringify"](Q)),
                            this.play(Q),
                            0;
                    },
                    V["fastrecord"] = function (Q) {
                        app.Log.log("ActionLiqi fastrecord data:" + JSON["stringify"](Q)),
                            this["fastplay"](Q, 0);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionLiqi"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function () {
                function Q(B) {
                    this.me = B,
                        Q["scene_entrance"] = "chs" != GameMgr["client_language"] ? "scene/entrance_" + GameMgr["client_language"] + ".ls" : "scene/entrance.ls";
                }
                return Q["prototype"].show = function () {
                    this["scene"] = Laya["loader"]["getRes"](Q["scene_entrance"]),
                        this.me["addChild"](this["scene"]),
                        this["scene"]["visible"] = !0;
                },
                    Q["prototype"]["close"] = function () {
                        Laya["timer"]["clearAll"](this),
                            this["scene"]["visible"] = !1,
                            this["scene"]["destroy"](!0);
                    },
                    Q["scene_entrance"] = '',
                    Q;
            }
                (),
                V = function () {
                    function Q(Q) {
                        this.me = Q,
                            this["round"] = this.me["getChildByName"]("round"),
                            this.word = this.me["getChildByName"]("word"),
                            this.icon = this.me["getChildByName"]("icon"),
                            this.me["visible"] = !1;
                    }
                    return Q["prototype"].show = function (Q) {
                        var B = this;
                        if (!this.me["visible"]) {
                            this.me["visible"] = !0;
                            var V = Laya["timer"]["currTimer"];
                            if (Laya["timer"]["frameLoop"](1, this, function () {
                                B["round"]["rotation"] = (Laya["timer"]["currTimer"] - V) / 2000 * 360;
                            }), this.word.text = game["Tools"]["strOfLocalization"](2053), 0 == Q)
                                this.icon["visible"] = !1, this.word.y = 150;
                            else
                                switch (this.icon["visible"] = !0, this.word.y = 195, Q) {
                                    case 1:
                                    case 4:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weixin.png");
                                        break;
                                    case 2:
                                    case 5:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weibo.png");
                                        break;
                                    case 3:
                                    case 6:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/QQ.png");
                                        break;
                                    case 7:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/yostar.png");
                                        break;
                                    case 8:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/google.png");
                                        break;
                                    case 9:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                        break;
                                    case 10:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/tiwtter.png");
                                        break;
                                    case 13:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                        break;
                                    default:
                                        this.icon["visible"] = !1,
                                            this.word.y = 150;
                                }
                        }
                    },
                        Q["prototype"]["close"] = function () {
                            Laya["timer"]["clearAll"](this),
                                this.me["visible"] = !1;
                        },
                        Q;
                }
                    (),
                W = function () {
                    function B(B) {
                        var V = this;
                        this["saveflag"] = !0,
                            this["locking"] = !1,
                            this["last_mail_time"] = -1,
                            this.me = B,
                            this.me["visible"] = !1,
                            this.root = this.me["getChildByName"]("jpenroot"),
                            this.root["getChildByName"]("btn_close")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["locking"] || V["close"]();
                            }, null, !1),
                            this["input_account"] = this.root["getChildByName"]("container_mail")["getChildByName"]("txtinput"),
                            this["label_account_no"] = this.root["getChildByName"]("container_mail")["getChildByName"]('no'),
                            this["input_account"].on("input", this, function () {
                                V["label_account_no"]["visible"] && (V["label_account_no"]["visible"] = !1),
                                    '' != V["input_code"].text && '' != V["input_account"].text && game["Tools"]["setGrayDisable"](V["btn_regist"], !1);
                            }),
                            this["input_code"] = this.root["getChildByName"]("container_yanzhengma")["getChildByName"]("txtinput"),
                            this["input_code"].on("input", this, function () {
                                '' != V["input_code"].text && '' != V["input_account"].text && game["Tools"]["setGrayDisable"](V["btn_regist"], !1);
                            }),
                            this["btn_getcode"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("btn"),
                            this["btn_getcode"]["clickHandler"] = new Laya["Handler"](this, function () {
                                var Q = V["input_account"].text,
                                    B = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";
                                B.test(Q) ? (Yo["request"]({
                                    account: Q,
                                    lang: 'jp' == GameMgr["client_type"] ? 'ja' : 'kr' == GameMgr["client_type"] || 'kr' == GameMgr["client_language"] ? 'kr' : 'en'
                                }).then(function (Q) {
                                    Q ? 0 === Q["result"] ? S.Inst["showInfo"](game["Tools"]["strOfLocalization"](2688)) : "50003" === Q["result"] ? S.Inst["showError"](game["Tools"]["strOfLocalization"](2684)) : "50004" === Q["result"] ? S.Inst["showError"](game["Tools"]["strOfLocalization"](2685)) : S.Inst["showError"](game["Tools"]["strOfLocalization"](2683)) : S.Inst["showError"](game["Tools"]["strOfLocalization"](2683));
                                }), V["last_mail_time"] = Laya["timer"]["currTimer"], V["refresh_code_state"]()) : V["label_account_no"]["visible"] = !0;
                            }),
                            this["btn_regist"] = this.root["getChildByName"]("btn_enter"),
                            this["btn_regist"]["clickHandler"] = new Laya["Handler"](this, function () {
                                if (!V["locking"]) {
                                    app.Log.log("btn mail login");
                                    var Q = S.Inst["login_index"],
                                        B = V["input_account"].text;
                                    Yo["submit"]({
                                        account: V["input_account"].text,
                                        code: V["input_code"].text
                                    }).then(function (V) {
                                        Q == S.Inst["login_index"] && (V ? (app.Log.log("mail login submit result:" + V["result"]), 0 === V["result"] ? (game["LocalStorage"]["setItem"]("mail_account", B), S["onSocioBack"](7, V["token"], V.uid)) : "50016" === V["result"] ? (S.Inst["showError"](game["Tools"]["strOfLocalization"](2686)), S.Inst["showContainerLogin"]()) : "50009" === V["result"] ? (S.Inst["showError"](game["Tools"]["strOfLocalization"](2687)), S.Inst["showContainerLogin"]()) : (S.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), S.Inst["showContainerLogin"]())) : (app.Log.log("mail login submit result: no"), S.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), S.Inst["showContainerLogin"]()));
                                    }),
                                        1 == V["saveflag"] ? (game["LocalStorage"]["setItem"]("useremail", V["input_account"].text), game["LocalStorage"]["setItem"]("saveflag", "true")) : (game["LocalStorage"]["setItem"]("useremail", ''), game["LocalStorage"]["setItem"]("saveflag", "false")),
                                        V["close"](),
                                        S.Inst["showLoginLoading"](7);
                                }
                            }),
                            this["label_info"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("label");
                        var W = this.root["getChildByName"]("checkxieyi");
                        this["checkbox"] = W["getChildByName"]("checkbox"),
                            W["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                V["checkbox"]["visible"] = !V["checkbox"]["visible"],
                                    V["btn_regist"]["visible"] = V["checkbox"]["visible"] && V["age_checkbox"]["visible"];
                            });
                        var Z;
                        if ('jp' == GameMgr["client_type"] ? (W["getChildByName"]('en')["visible"] = !1, W["getChildByName"]('kr')["visible"] = !1, Z = W["getChildByName"]('jp')) : 'kr' == GameMgr["client_language"] ? (W["getChildByName"]('jp')["visible"] = !1, W["getChildByName"]('en')["visible"] = !1, Z = W["getChildByName"]('kr')) : (W["getChildByName"]('jp')["visible"] = !1, W["getChildByName"]('kr')["visible"] = !1, Z = W["getChildByName"]('en')), W["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                            V["checkbox"]["visible"] = !V["checkbox"]["visible"],
                                V["btn_regist"]["visible"] = 'kr' == GameMgr["client_type"] ? V["checkbox"]["visible"] && V["age_checkbox"]["visible"] : V["checkbox"]["visible"];
                        }), Z["getChildByName"]("guize")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            'jp' == GameMgr["client_type"] ? Q["UI_User_Xieyi_enjp"].Inst.show("docs/jp_liyongguiyue.txt") : 'en' == GameMgr["client_type"] ? Q["UI_User_Xieyi_enjp"].Inst.show("docs/term_of_service.txt") : 'kr' == GameMgr["client_type"] && Q["UI_User_Xieyi_enjp"].Inst.show("docs/kr_liyongguiyue.txt");
                        }, null, !1), Z["getChildByName"]("yinsi")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            'jp' == GameMgr["client_type"] ? Q["UI_User_Xieyi_enjp"].Inst.show("docs/jp_yinsixieyi.txt") : 'en' == GameMgr["client_type"] ? Q["UI_User_Xieyi_enjp"].Inst.show("docs/privacy_policy.txt") : 'kr' == GameMgr["client_type"] && Q["UI_User_Xieyi_enjp"].Inst.show("docs/kr_yinsixieyi.txt");
                        }, null, !1), this.age = this.root["getChildByName"]("age"), this["age_checkbox"] = this.age["getChildByName"]("checkbox"), this.age["visible"] = 'kr' == GameMgr["client_type"], 'kr' == GameMgr["client_type"]) {
                            this.age["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                V["age_checkbox"]["visible"] = !V["age_checkbox"]["visible"],
                                    V["btn_regist"]["visible"] = V["checkbox"]["visible"] && V["age_checkbox"]["visible"];
                            });
                            var v = this.root["getChildByName"]('bg');
                            v["getChildAt"](0)["height"] += 30,
                                v["getChildAt"](1)["height"] += 30,
                                this["btn_regist"].y += 30;
                        }
                    }
                    return B["prototype"]["onchangecheck"] = function (Q) {
                        this["checkbox"]["visible"] = Q,
                            this["btn_regist"]["visible"] = Q,
                            this.root["getChildByName"]("checkxieyi")["visible"] = Q;
                    },
                        B["prototype"].show = function () {
                            var B = this;
                            this["locking"] = !0,
                                this.me["visible"] = !0,
                                Q["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function () {
                                    B["locking"] = !1;
                                })),
                                this["input_account"].text = '',
                                this["label_account_no"]["visible"] = !1,
                                this["input_code"].text = '',
                                this["checkbox"]["visible"] = !0,
                                this["age_checkbox"]["visible"] = !0,
                                this["btn_regist"]["visible"] = !0;
                            var V = game["LocalStorage"]["getItem"]("saveflag"),
                                W = game["LocalStorage"]["getItem"]("useremail");
                            "true" == V && (this["input_account"].text = W, app.Log.log(W)),
                                game["Tools"]["setGrayDisable"](this["btn_regist"], !0),
                                Laya["timer"]["clearAll"](this),
                                this["refresh_code_state"](),
                                Laya["timer"].loop(100, this, function () {
                                    B["refresh_code_state"]();
                                });
                        },
                        B["prototype"]["refresh_code_state"] = function () {
                            var Q = 100000000;
                            game["Tools"]["setGrayDisable"](this["btn_getcode"], !0),
                                this["last_mail_time"] > 0 && (Q = Laya["timer"]["currTimer"] - this["last_mail_time"]),
                                60000 > Q ? (this["label_info"]["underline"] = !1, Q = Math.ceil((60000 - Q) / 1000), this["label_info"].text = game["Tools"]["strOfLocalization"](2682, [Q["toString"]()]), this["label_info"]["underline"] = !1, game["Tools"]["setGrayDisable"](this["btn_getcode"], !0)) : (this["label_info"].text = game["Tools"]["strOfLocalization"](2720), this["label_info"]["underline"] = !0, game["Tools"]["setGrayDisable"](this["btn_getcode"], !1));
                        },
                        B["prototype"]["close"] = function () {
                            var B = this;
                            this["locking"] = !0,
                                Q["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function () {
                                    B["locking"] = !1,
                                        B.me["visible"] = !1,
                                        Laya["timer"]["clearAll"](B);
                                }));
                        },
                        B;
                }
                    (),
                Z = function () {
                    function B(B) {
                        this["start_time"] = Laya["timer"]["currTimer"],
                            this.data = null,
                            this.me = B,
                            this.info = this.me["getChildByName"]("info"),
                            this["label_time"] = this.me["getChildByName"]("time"),
                            this.img = this.me["getChildByName"]("img"),
                            this.me["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                Q["UI_Entrance_Choose_Route"].Inst.show();
                            });
                    }
                    return B["prototype"]["onEnable"] = function () {
                        var Q = this;
                        Laya["timer"]["clearAll"](this),
                            this["update_data"](),
                            Laya["timer"].loop(100, this, function () {
                                Q["update_data"]();
                            }),
                            Laya["timer"]["frameLoop"](1, this, function () {
                                Q["refresh"]();
                            });
                    },
                        B["prototype"]["update"] = function () {
                            this["update_data"]();
                        },
                        B["prototype"]["update_data"] = function () {
                            var Q = game["LobbyNetMgr"].Inst["GetLinkInfos"](),
                                B = game["LobbyNetMgr"].Inst["choosed_index"];
                            this.data = Q[B],
                                this.info.text = game["Tools"]["strOfLocalization"](3150) + (B + 1)["toString"]();
                        },
                        B["prototype"]["refresh"] = function () {
                            var Q = this.data,
                                B = Q["delay"];
                            Q["connect"] == game["EConnectState"]["connecting"] ? (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"].text = 1 > B ? '--' : Math["floor"](B / 2) + 'ms', this["label_time"]["fontSize"] = 30, this["label_time"]["color"] = Q["delay"] < 300 ? "#32dd5b" : Q["delay"] < 800 ? "#ffe154" : "#e03737") : Q["connect"] == game["EConnectState"]["tryconnect"] ? (this.img["visible"] = !0, this["label_time"]["visible"] = !1, this.img.skin = Q["fetch"] == game["EFetchState"]["success"] ? game["Tools"]["localUISrc"]("myres/entrance/connecting.png") : game["Tools"]["localUISrc"]("myres/entrance/fetching.png"), this.img["rotation"] = 0.5 * (Laya["timer"]["currTimer"] - this["start_time"])) : (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"]["fontSize"] = 25, this["label_time"]["color"] = "#7e818b", this["label_time"].text = Q["in_maintenance"] ? game["Tools"]["strOfLocalization"](3149) : Q["fetch"] == game["EFetchState"]["error"] ? game["Tools"]["strOfLocalization"](3147) : game["Tools"]["strOfLocalization"](3148));
                        },
                        B["prototype"]["onClose"] = function () {
                            Laya["timer"]["clearAll"](this);
                        },
                        B;
                }
                    (),
                S = function (S) {
                    function v() {
                        var Q = S.call(this, new ui["entrance"]["entranceUI"]()) || this;
                        return Q["scene"] = null,
                            Q["login_type_tabs"] = [],
                            Q["txt_account"] = null,
                            Q["txt_password"] = null,
                            Q["btn_login_cd"] = 0,
                            Q["login_loading"] = null,
                            Q["route_info"] = null,
                            Q["btn_add2desktop"] = null,
                            Q["container_language"] = null,
                            Q["label_language"] = null,
                            Q["page_maillogin"] = null,
                            Q["container_extendInfo"] = null,
                            Q["xieyiflag"] = 0,
                            Q["login_index"] = 0,
                            Q["login_type_tab_index"] = -1,
                            Q["login_account_input_info"] = {},
                            v.Inst = Q,
                            Q;
                    }
                    return __extends(v, S),
                        v["trySocio"] = function (B) {
                            var V = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                W = -1;
                            V && '' != V && (W = parseInt(V));
                            var Z = !0;
                            if (W === B)
                                if (B >= 1 && 6 >= B) {
                                    var S = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    S && '' != S && (Z = !1, this["onSocioBack"](B, S, null));
                                } else if (7 == B);
                                else if (B >= 8 && 10 >= B) {
                                    var v = game["LocalStorage"]["getItem"]("yostar_token");
                                    v || (v = '');
                                    var i = game["LocalStorage"]["getItem"]("yostar_uid");
                                    i || (i = ''),
                                        '' != v && '' != i && (Z = !1, this["onSocioBack"](B, v, i));
                                }
                            if (Z)
                                if (GameMgr["inConch"]) {
                                    var x = Laya["PlatformClass"]["createClass"]("layaair.majsoul.mjmgr");
                                    1 == B ? x.call("wxLogin") : 2 == B ? x.call("weiboLogin") : 3 == B && x.call("qqLogin");
                                } else if (GameMgr["iniOSWebview"]) {
                                    var l = '';
                                    switch (B) {
                                        case 1:
                                            l = "wxLogin";
                                            break;
                                        case 2:
                                            l = "wbLogin";
                                            break;
                                        case 3:
                                            l = "qqLogin";
                                    }
                                    if (l) {
                                        var m = this,
                                            s = function (Q) {
                                                m["onSocioBack"](B + 3, Q, null);
                                            };
                                        Laya["Browser"]["window"]["wkbridge"]["callNative"](l, '', s);
                                    }
                                } else {
                                    var f = window["location"].href;
                                    if (-1 != f["indexOf"]('?') && (f = f["split"]('?')[0]), 1 == B) {
                                        var z = "https://open.weixin.qq.com/connect/qrconnect?";
                                        z += "appid=wx2a0c2449cab74448",
                                            z += "&response_type=code",
                                            z += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0?xdsfdl=1-" + f),
                                            z += "&scope=snsapi_login",
                                            Laya["Browser"]["window"]["location"].href = z;
                                    } else if (2 == B) {
                                        var z = "https://api.weibo.com/oauth2/authorize?";
                                        z += "client_id=399644784",
                                            z += "&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-" + f,
                                            Laya["Browser"]["window"]["location"].href = z;
                                    } else if (3 == B) {
                                        var z = "https://graph.qq.com/oauth2.0/authorize?";
                                        z += "response_type=code",
                                            z += "&client_id=101480027",
                                            z += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0"),
                                            z += GameMgr.Inst["link_url"]["indexOf"]("majsoul.com/1") >= 0 ? "&state=xdsfdl4" : "&state=xdsfdl3",
                                            Laya["Browser"]["window"]["location"].href = z;
                                    } else if (7 == B)
                                        this.Inst && this.Inst["showMailLogin"]();
                                    else if (8 == B) {
                                        var C = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        C += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            C += "/yo_google.html",
                                            'kr' == GameMgr["client_type"] ? Yo["googleKrAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            }) : 'jp' == GameMgr["client_type"] ? Yo["googleJaAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            }) : Yo["googleAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            });
                                    } else if (9 == B) {
                                        var C = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        C += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            C += "/yo_facebook.html",
                                            'kr' == GameMgr["client_type"] ? Yo["facebookKrAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            }) : Yo["facebookAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            });
                                    } else if (10 == B) {
                                        var C = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        C += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            C += "/yo_tiwtter.html",
                                            'jp' == GameMgr["client_type"] ? Yo["twitterJaAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            }) : 'kr' == GameMgr["client_type"] ? Yo["twitterKrAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            }) : Yo["twitterAuth"]({
                                                redirect_uri: C,
                                                openNewWindow: !1
                                            });
                                    } else if (13 == B) {
                                        var T = function () {
                                            Laya["LocalStorage"]["setItem"]("fblogin", '1');
                                            var Q = "https://www.facebook.com/dialog/oauth?";
                                            Q += "client_id=511764882872601",
                                                Q += "&redirect_uri=" + encodeURI(GameMgr.Inst["link_url"]),
                                                Q += "&response_type=token",
                                                Laya["Browser"]["window"]["location"].href = Q;
                                        };
                                        void 0 != window.FB && null != window.FB ? window.FB["getLoginStatus"](function (B) {
                                            B && "connected" == B["status"] ? Q["UI_Entrance"]["onSocioBack"](13, B["authResponse"]["accessToken"], null) : T();
                                        }) : T();
                                    } else
                                        14 == B && game["DmmSDK"]["login"]();
                                }
                        },
                        v["onSocioBack"] = function (Q, B, V) {
                            app.Log.log("!!!!!!!!!!!!!!! " + Q + ' ' + B),
                                this.Inst && this.Inst["_onSocioBack"](Q, B, V);
                        },
                        v["prototype"]["onCreate"] = function () {
                            var S = this,
                                i = this.me["getChildByName"]("root");
                            this["container_login"] = this.me["getChildByName"]("root")["getChildByName"]("container_login");
                            var x = function (Q) {
                                var B = {
                                    container: Q,
                                    input: Q["getChildByName"]("txtinput"),
                                    lb: Q["getChildByName"]('lb')
                                };
                                return B["input"].text = '',
                                    B.lb["visible"] = !0,
                                    B["input"].on("focus", S, function () {
                                        B.lb["visible"] = !1;
                                    }),
                                    B["input"].on("blur", S, function () {
                                        B.lb["visible"] = !B["input"].text || '' == B["input"].text;
                                    }),
                                    B["input"].on("input", S, function () { }),
                                    B;
                            },
                                l = this["container_login"]["getChildByName"]("chs");
                            this["route_info"] = new Z(l["getChildByName"]("img_lb")),
                                this["txt_account"] = x(l["getChildByName"]("container_account")),
                                this["txt_password"] = x(l["getChildByName"]("container_mima")),
                                this["txt_account"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function (Q) {
                                    Q["keyCode"] === Laya["Keyboard"]["ENTER"] && S["_btn_login"]();
                                }),
                                this["txt_password"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function (Q) {
                                    Q["keyCode"] === Laya["Keyboard"]["ENTER"] && S["_btn_login"]();
                                }),
                                this["login_type_tabs"] = [];
                            for (var m = function (Q) {
                                var B = l["getChildByName"]("container_tabs")["getChildByName"]("tab" + Q);
                                s["login_type_tabs"].push({
                                    btn: B,
                                    word: B["getChildByName"]("word"),
                                    choosen: B["getChildByName"]("chosen")
                                }),
                                    s["login_type_tabs"][Q].btn["clickHandler"] = new Laya["Handler"](s, function () {
                                        S["login_type_tab_index"] != Q && S["change_chs_login_tab"](Q);
                                    });
                            }, s = this, f = 0; 2 > f; f++)
                                m(f);
                            this["container_extendInfo"] = i["getChildByName"]("extendinfo"),
                                this["container_extendInfo"]["visible"] = !1,
                                l["getChildByName"]("btn_regist")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["UI_Entrance_Mail_Regist"].Inst.show();
                                }, null, !1),
                                l["getChildByName"]("btn_forgetpassword")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["UI_Entrance_Reset_Password"].Inst.show();
                                }, null, !1),
                                l["getChildByName"]("btn_find_account")["clickHandler"] = new Laya["Handler"](this, function () {
                                    Laya["Browser"]["window"]["location"].href = game["Tools"]["getFinalUrl"]("https://www.maj-soul.com/find-account/");
                                }),
                                l["getChildByName"]("btn_find_account")["visible"] = "chs" == GameMgr["client_type"],
                                this["btn_add2desktop"] = this.me["getChildByName"]("root")["getChildByName"]("btn_add2desktop"),
                                this["btn_add2desktop"]["visible"] = (Laya["Browser"]["onAndriod"] || Laya["Browser"]["onAndroid"] || Laya["Browser"]["onIOS"]) && !GameMgr["inConch"] && !GameMgr["inConch"],
                                this["btn_add2desktop"]["clickHandler"] = new Laya["Handler"](this, function () {
                                    Q["UI_Add2Desktop"].Inst && Q["UI_Add2Desktop"].Inst.show();
                                }),
                                l["getChildByName"]("btn_enter")["clickHandler"] = Laya["Handler"]["create"](this, this["_btn_login"], null, !1),
                                this["login_loading"] = new V(i["getChildByName"]("loading_login")),
                                this["page_maillogin"] = new W(this.me["getChildByName"]("mail_login")),
                                this["scene"] = new B(this.me["getChildByName"]("scene")),
                                this["container_social"] = this["container_login"]["getChildByName"]("social"),
                                this["social_btns"] = [];
                            for (var f = 0; 4 > f; f++)
                                this["social_btns"].push(this["container_social"]["getChildByName"]("btn" + f)), this["social_btns"][f]["visible"] = !1;
                            var z = 55,
                                C = 395,
                                T = [];
                            "chs" == GameMgr["client_type"] && (T = [{
                                img: "myres/entrance/weibo.png",
                                type: 2
                            }, {
                                img: "myres/entrance/QQ.png",
                                type: 3
                            }, {
                                img: "myres/entrance/weixin.png",
                                type: 1
                            }
                            ]),
                                "chs_t" == GameMgr["client_type"] && (T = [{
                                    img: "myres/entrance/facebook.png",
                                    type: 13
                                }
                                ]),
                                'jp' == GameMgr["client_type"] && (T = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }
                                ]),
                                ('en' == GameMgr["client_type"] || 'kr' == GameMgr["client_type"]) && (T = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/facebook.png",
                                    type: 9
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }
                                ]);
                            for (var t = function (Q) {
                                var B = w["social_btns"][Q];
                                Q < T["length"] ? (B["visible"] = !0, B["getChildAt"](0).skin = game["Tools"]["localUISrc"](T[Q].img), B["clickHandler"] = new Laya["Handler"](w, function () {
                                    v["trySocio"](T[Q].type);
                                }), B.x = 1 == T["length"] ? (C - z) / 2 + 50 : (C - z) * Q / (T["length"] - 1) + z) : B["visible"] = !1;
                            }, w = this, f = 0; f < this["social_btns"]["length"]; f++)
                                t(f);
                            2 == T["length"] && (this["social_btns"][0].x = 1 * (C - z) / 3 + z, this["social_btns"][1].x = 2 * (C - z) / 3 + z),
                                this.me["getChildByName"]("infos")["visible"] = "chs" == GameMgr["client_type"],
                                this.me["getChildByName"]("root")["getChildByName"]("loading_login")["getChildByName"]("btn_cancel")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["login_loading"].me["visible"] && (game["LobbyNetMgr"].Inst["Close"](), Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), S["showContainerLogin"](), S["btn_login_cd"] = Laya["timer"]["currTimer"] + 500, Laya["timer"].once(500, S, function () {
                                        game["LobbyNetMgr"].Inst["OpenConnect"](null);
                                    }));
                                }, null, !1);
                            var h = this.me["getChildByName"]("root")["getChildByName"]("container_login")["getChildByName"]("dmm");
                            h["getChildByName"]("btn_enter")["clickHandler"] = new Laya["Handler"](this, function () {
                                v["trySocio"](14);
                            });
                            var G = h["getChildByName"]("checksave"),
                                g = G["getChildByName"]("checkbox");
                            g["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                G["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                    g["visible"] = !g["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", g["visible"] ? "true" : "false");
                                });
                            var r = i["getChildByName"]("btn_kefu");
                            r["visible"] = "chs_t" == GameMgr["client_type"] || 'kr' == GameMgr["client_type"],
                                r["clickHandler"] = new Laya["Handler"](this, function () {
                                    if ('kr' == GameMgr["client_type"])
                                        return Q["UI_User_Xieyi_enjp"].Inst.show("docs/contact_us_kr_1.txt"), void 0;
                                    game["Tools"]["setGrayDisable"](r, !0),
                                        Laya["timer"].once(1000, null, function () {
                                            game["Tools"]["setGrayDisable"](r, !1);
                                        });
                                    var B = "https://ykf-webchat.7moor.com/wapchat.html?";
                                    B += "fromUrl=" + game["Tools"]["getFinalUrl"]("https://www.maj-soul.com"),
                                        B += "&urlTitle=网页",
                                        "chs" == GameMgr["client_language"] ? (B += "&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68", B += "&language=ZHCN") : (B += "&accessId=4184be70-95b1-11ea-b027-616616b0ded6", B += "&language=EN");
                                    var V = {};
                                    V["登陆状态"] = "未登录",
                                        B += "&customField=" + JSON["stringify"](V),
                                        game["Tools"]["open_new_window"](B);
                                }),
                                this["container_language"] = this.me["getChildByName"]("container_language");
                            var j = this["container_language"]["getChildByName"]("btn");
                            this["label_language"] = j["getChildByName"]("info"),
                                j["clickHandler"] = new Laya["Handler"](this, function () {
                                    Q["UI_Entrance_Change_Language"].Inst.show();
                                });
                        },
                        v["prototype"]["ModelJpEn"] = function () {
                            function Q(Q) {
                                1 == Q && v["trySocio"](7);
                            }
                            var B = this["container_login"]["getChildByName"]("jpen"),
                                V = B["getChildByName"]("btn_enter");
                            V["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                Q(!0);
                            }, null, !1);
                            var W = B["getChildByName"]("checksave"),
                                Z = W["getChildByName"]("checkbox");
                            Z["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                W["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                    Z["visible"] = !Z["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", Z["visible"] ? "true" : "false");
                                });
                        },
                        v["prototype"].show = function () {
                            var Q = this;
                            GameMgr.Inst["postNewInfo2Server"]("enter_entrance", {
                                load_time: Date.now() - GameMgr.Inst["last_load_start_time"]
                            }),
                                GameMgr["inDmm"] ? (this["container_social"]["visible"] = !1, this["container_login"]["getChildByName"]("dmm")["visible"] = !0, this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !1) : (this["container_social"]["visible"] = !0, this["container_login"]["getChildByName"]("dmm")["visible"] = !1, "chs" == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? (this["container_social"].x = 40, this["container_social"].y = 475, this["container_login"]["getChildByName"]("chs")["visible"] = !0, this["container_login"]["getChildByName"]("jpen")["visible"] = !1, this["route_info"]["onEnable"]()) : (this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !0, this["ModelJpEn"]())),
                                -1 != GameMgr.Inst["beinvited_roomid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2054) + ':' + GameMgr.Inst["beinvited_roomid"]) : '' != GameMgr.Inst["outsee_paipuid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2055)) : this["container_extendInfo"]["visible"] = !1;
                            var B = this["login_index"];
                            if (!GameMgr.Inst["in_emergence"] && GameMgr.Inst["fb_login_info"] && "connected" == GameMgr.Inst["fb_login_info"]["status"])
                                this["showLoginLoading"](13), Laya["timer"].once(500, this, function () {
                                    if (B == Q["login_index"]) {
                                        var V = GameMgr.Inst["fb_login_info"]["authResponse"];
                                        Q["_loginby_sociocode"](B, 13, V["accessToken"]);
                                    }
                                });
                            else if (GameMgr.Inst["in_emergence"] || '1' != Laya["LocalStorage"]["getItem"]("fblogin")) {
                                this.me["getChildByName"]("root")["getChildByName"]("version").text = game["ResourceVersion"]["version"];
                                var V = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                    W = Laya["LocalStorage"]["getItem"]("ssssoooodd");
                                W || (W = '');
                                var Z = -1;
                                if (V && '' != V && (Z = parseInt(V)), GameMgr.Inst["in_emergence"] && (Z = -1), app.Log.log("sociotype:" + Z), 0 > Z || Z > 14)
                                    this["showContainerLogin"]();
                                else if (0 == Z)
                                    '' != W ? (this["showLoginLoading"](0), Laya["timer"].once(600, this, function () {
                                        B == Q["login_index"] && Q["_try_socio_check"](B, Z, W);
                                    })) : this["showContainerLogin"]();
                                else if (Z >= 1 && 6 >= Z) {
                                    var S = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    S || (S = ''),
                                        '' != S || '' != W ? (this["showLoginLoading"](Z), Laya["timer"].once(500, this, function () {
                                            B == Q["login_index"] && (S && '' != S ? Q["_loginby_sociocode"](B, Z, S) : Q["_try_socio_check"](B, Z, W));
                                        })) : this["showContainerLogin"]();
                                } else if (Z >= 7 && 10 >= Z && "chs" != GameMgr["client_type"] && "chs_t" != GameMgr["client_type"] && Yo && Yo["login"]) {
                                    var v = game["LocalStorage"]["getItem"]("yostar_token");
                                    v || (v = '');
                                    var i = game["LocalStorage"]["getItem"]("yostar_uid");
                                    i || (i = ''),
                                        '' != i && '' != v ? (this["showLoginLoading"](Z), Laya["timer"].once(500, this, function () {
                                            B == Q["login_index"] && Q["_login_2_yostar"](B, Z, v, i);
                                        })) : this["showContainerLogin"]();
                                } else if (13 == Z || 14 == Z) {
                                    var x = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    x || (x = ''),
                                        '' != x || '' != W ? (this["showLoginLoading"](Z), Laya["timer"].once(500, this, function () {
                                            B == Q["login_index"] && (x && '' != x ? Q["_loginby_sociocode"](B, Z, x) : Q["_try_socio_check"](B, Z, W));
                                        })) : this["showContainerLogin"]();
                                } else
                                    this["showContainerLogin"]();
                            } else {
                                this["showLoginLoading"](13);
                                var l = Laya["timer"]["currTimer"],
                                    m = this,
                                    s = function () {
                                        if (null != window.FB && void 0 != window.FB) {
                                            if (FB["getLoginStatus"](function (Q) {
                                                GameMgr.Inst["fb_login_info"] = Q;
                                            }), B != m["login_index"])
                                                return;
                                            var Q = GameMgr.Inst["fb_login_info"]["authResponse"];
                                            m["_loginby_sociocode"](B, 13, Q["accessToken"]),
                                                Laya["timer"]["clear"](m, s);
                                        } else
                                            Laya["timer"]["currTimer"] > l + 5000 && Laya["timer"]["clear"](m, s);
                                    };
                                Laya["LocalStorage"]["setItem"]("fblogin", '0'),
                                    Laya["timer"]["frameLoop"](1, m, s);
                            }
                            if ("chs_t" == GameMgr["client_type"] || 'en' == GameMgr["client_type"])
                                switch (this["container_language"]["visible"] = !0, GameMgr["client_language"]) {
                                    case "chs":
                                        this["label_language"].text = "中文(简体)";
                                        break;
                                    case "chs_t":
                                        this["label_language"].text = "中文(繁體)";
                                        break;
                                    case 'jp':
                                        this["label_language"].text = "日本語";
                                        break;
                                    case 'en':
                                        this["label_language"].text = "English";
                                        break;
                                    case 'kr':
                                        this["label_language"].text = game["Tools"]["strOfLocalization"](3615);
                                        break;
                                    default:
                                        this["label_language"].text = '';
                                }
                            else
                                this["container_language"]["visible"] = !1;
                            this["scene"].show(),
                                this["enable"] = !0;
                        },
                        v["prototype"]["_onSocioBack"] = function (Q, B, V) {
                            var W = this,
                                Z = this["login_index"];
                            this["showLoginLoading"](Q),
                                Laya["timer"].once(500, this, function () {
                                    Z == W["login_index"] && (B && '' != B ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : Q["toString"]()), V ? W["_login_2_yostar"](Z, Q, B, V) : (Laya["LocalStorage"]["setItem"]("_pre_code", B), W["_loginby_sociocode"](Z, Q, B))) : W["showContainerLogin"]());
                                });
                        },
                        v["prototype"]["showContainerLogin"] = function () {
                            if (-1 == this["login_type_tab_index"]) {
                                var Q = game["LocalStorage"]["getItem"]("login_type_tab"),
                                    B = game["LocalStorage"]["getItem"]("account"),
                                    V = game["LocalStorage"]["getItem"]("password");
                                if (this["login_account_input_info"] = {}, B && V && '' != B && '' != V) {
                                    var W = 0;
                                    Q && '' != Q && (W = parseInt(Q)),
                                        this["login_account_input_info"][W] = {
                                            account: B,
                                            password: V
                                        },
                                        this["change_chs_login_tab"](W);
                                } else
                                    this["change_chs_login_tab"](0);
                            } else
                                this["change_chs_login_tab"](this["login_type_tab_index"]);
                            this["container_login"]["visible"] = !0,
                                this["login_loading"]["close"](),
                                this["login_index"]++;
                        },
                        v["prototype"]["showLoginLoading"] = function (Q) {
                            this["container_login"]["visible"] = !1,
                                this["login_loading"].show(Q);
                        },
                        v["prototype"]["change_chs_login_tab"] = function (Q) {
                            this["login_type_tab_index"] >= 0 && (this["login_account_input_info"][this["login_type_tab_index"]] = {
                                account: this["txt_account"]["input"].text,
                                password: this["txt_password"]["input"].text
                            }),
                                Q || (Q = 0),
                                this["login_type_tab_index"] = Q;
                            for (var B = 0; B < this["login_type_tabs"]["length"]; B++)
                                this["login_type_tabs"][B].word["color"] = B == Q ? "#446fdb" : "#84827b", this["login_type_tabs"][B]["choosen"]["visible"] = B == Q;
                            switch (Q) {
                                case 0:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3138),
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                                    break;
                                case 1:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3132),
                                        this["txt_account"]["input"]["restrict"] = "0-9",
                                        this["txt_account"]["input"]["maxChars"] = 11;
                                    break;
                                default:
                                case 0:
                                    this["txt_account"].lb.text = '',
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                            }
                            var V = this["login_account_input_info"][Q],
                                W = '',
                                Z = '';
                            V && (W = V["account"], Z = V["password"]),
                                W && '' != W ? (this["txt_account"]["input"].text = W, this["txt_account"].lb["visible"] = !1) : (this["txt_account"]["input"].text = '', this["txt_account"].lb["visible"] = !0),
                                Z && '' != Z ? (this["txt_password"]["input"].text = Z, this["txt_password"].lb["visible"] = !1) : (this["txt_password"]["input"].text = '', this["txt_password"].lb["visible"] = !0);
                        },
                        v["prototype"]["_btn_login"] = function () {
                            var B = this;
                            if (!this["showEmergency"]()) {
                                var V = this["txt_account"]["input"].text,
                                    W = this["txt_password"]["input"].text;
                                if (!V || '' == V)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2056)), void 0;
                                if (!W || '' == W)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2057)), void 0;
                                if (!(Laya["timer"]["currTimer"] < this["btn_login_cd"])) {
                                    if (this["multiLogin"]())
                                        return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), void 0;
                                    this["btn_login_cd"] = Laya["timer"]["currTimer"] + 1000,
                                        this["showLoginLoading"](0);
                                    var Z = this["login_index"];
                                    game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (S) {
                                        Laya["timer"].once(800, B, function () {
                                            Z == B["login_index"] && (S.open ? v.Inst["_try_login_account"](Z, V, W) : (S["maintenance"] ? Q["UI_Entrance_Maintenance"].Inst.show(S["maintenance"]) : B["showInfo"](S.info), B["showContainerLogin"](), B["btn_login_cd"] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        v["prototype"]["_try_regist_account"] = function (Q, B, V, W) {
                            var Z = this;
                            this["showEmergency"]() || app["NetAgent"]["sendReq2Lobby"]("Lobby", "signup", {
                                account: Q,
                                password: GameMgr["encodeP"](V),
                                code: B,
                                type: W,
                                device: GameMgr.Inst["get_device_info"](),
                                client_version_string: GameMgr.Inst["getClientVersion"]()
                            }, function (B, S) {
                                if (B)
                                    Z["showError"](game["Tools"]["strOfLocalization"](2059), B), app.Log["Error"](B["message"]);
                                else if (S["error"])
                                    Z["showError"](game["Tools"]["strOfLocalization"](2060), S["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](S)]));
                                else {
                                    var v = W - 1;
                                    Z["login_account_input_info"][v] = {
                                        account: Q,
                                        password: V
                                    },
                                        Z["change_chs_login_tab"](v),
                                        Z["_try_login_account"](Z["login_index"], Q, V);
                                }
                            });
                        },
                        v["prototype"]["_try_login_account"] = function (B, V, W) {
                            var Z = this;
                            if (B == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                var S = GameMgr.Inst["get_device_info"](),
                                    v = game["Tools"]["get_platform_currency"]();
                                game["LocalStorage"]["setItem"]("account", V),
                                    game["LocalStorage"]["setItem"]("password", W),
                                    game["LocalStorage"]["setItem"]("login_type_tab", this["login_type_tab_index"]["toString"]()),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "login", {
                                        account: V,
                                        password: GameMgr["encodeP"](W),
                                        reconnect: !1,
                                        device: S,
                                        random_key: GameMgr["device_id"],
                                        client_version: {
                                            resource: game["ResourceVersion"]["version"]
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: v,
                                        type: this["login_type_tab_index"],
                                        client_version_string: GameMgr.Inst["getClientVersion"]()
                                    }, function (S, v) {
                                        if (B == Z["login_index"])
                                            if (Z["btn_login_cd"] = 0, S)
                                                Z["showError"](game["Tools"]["strOfLocalization"](2061), S), Z["showContainerLogin"]();
                                            else if (v["error"]) {
                                                if (156 == v["error"].code)
                                                    return Q["UI_Entrance_Mail_Regist"].Inst["enable"] && (Q["UI_Entrance_Mail_Regist"].Inst["close"](), Z["showLoginLoading"](0)), Z["onLoginQueueError"](Laya["Handler"]["create"](Z, function () {
                                                        Z["_try_login_account"](Z["login_index"], V, W);
                                                    })), void 0;
                                                503 == v["error"].code ? Z["onLoginErrorProhibition"](v["error"]) : Z["showError"]('', v["error"].code),
                                                    Z["showContainerLogin"]();
                                            } else
                                                Laya["LocalStorage"]["setItem"]("_pre_sociotype", '0'), game["LocalStorage"]["setItem"]("account", V), game["LocalStorage"]["setItem"]("password", W), game["LocalStorage"]["setItem"]("login_type_tab", Z["login_type_tab_index"]["toString"]()), GameMgr.Inst["account"] = V, GameMgr.Inst["password"] = W, GameMgr.Inst["sociotype"] = 0, GameMgr["country"] = v["country"], GameMgr.Inst["account_id"] = v["account_id"], GameMgr.Inst["account_data"] = v["account"], Q["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](Z, function () {
                                                    Q["UI_User_Xieyi_enjp"]["needCheckVersion"] ? Q["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](Z, function () {
                                                        Z["_onLoginSuccess"](0, v);
                                                    })) : Z["_onLoginSuccess"](0, v);
                                                }));
                                    });
                            }
                        },
                        v["prototype"]["_login_2_yostar"] = function (B, V, W, Z) {
                            var S = this;
                            if (!this["showEmergency"]() && B == this["login_index"]) {
                                app.Log.log("login_2_yostar sociotype:" + V + " token:" + W + " uid:" + Z);
                                var v = this,
                                    i = function (B, V) {
                                        switch (void 0 === V && (V = 0), V = Math["floor"](V / 1000), B) {
                                            case 1:
                                                v["showError"](game["Tools"]["strOfLocalization"](2677));
                                                break;
                                            case 2:
                                                v["showError"](game["Tools"]["strOfLocalization"](2678));
                                                break;
                                            case 3:
                                                v["showError"](game["Tools"]["strOfLocalization"](2679));
                                                break;
                                            case 4:
                                                v["showError"](game["Tools"]["strOfLocalization"](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr["client_type"] ? (Q["UI_Entrance_Account_Deleted"].Inst["setYoInfo"](Z, W), Q["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"](8026, [game["Tools"]["time2YearMounthDate"](V, '-') + ' ' + game["Tools"]["time2HourMinute"](V)]))) : v["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](V, '-') + ' ' + game["Tools"]["time2HourMinute"](V)]));
                                                break;
                                            default:
                                                v["showError"](game["Tools"]["strOfLocalization"](2676));
                                        }
                                        Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                            v["showContainerLogin"]();
                                    };
                                Yo["login"] && Yo["login"]({
                                    uid: Z,
                                    token: W
                                }).then(function (x) {
                                    B == S["login_index"] && (x ? (app.Log.log("yo login data.result:" + x["result"]), 0 == x["result"] ? 'kr' == GameMgr["client_type"] && 1 != x["kr_kmc_status"] ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), v["showContainerLogin"](), Q["UI_ShiMingRenZheng_KR"].Inst.show(game["Tools"]["strOfLocalization"](2 == x["kr_kmc_status"] ? 8043 : 8044), Laya["Handler"]["create"](S, function () {
                                        Yo["kmcStart"]({
                                            accessToken: x["accessToken"]
                                        }).then(function () { });
                                    }))) : (game["LocalStorage"]["setItem"]("yostar_token", W), game["LocalStorage"]["setItem"]("yostar_uid", Z), GameMgr.Inst["yostar_accessToken"] = x["accessToken"], GameMgr.Inst["yostar_uid"] = Z, GameMgr.Inst["yostar_login_info"] = x, v["_loginby_sociocode"](B, V, x["accessToken"], Z)) : i(x["result"], x["reborn_before_ms"])) : (app.Log.log("yo login data.result: no"), i(-1)));
                                });
                            }
                        },
                        v["prototype"]["_loginby_sociocode"] = function (B, V, W, Z) {
                            var S = this;
                            if (void 0 === Z && (Z = ''), !this["showEmergency"]() && B == this["login_index"]) {
                                if (app.Log.log("_loginby_sociocode0 sociotype:" + V + ", code:" + W + ", uid:" + Z), !game["LobbyNetMgr"].Inst.isOK)
                                    return game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (v) {
                                        B == S["login_index"] && (v.open ? S["_loginby_sociocode"](B, V, W, Z) : (v["maintenance"] ? Q["UI_Entrance_Maintenance"].Inst.show(v["maintenance"]) : S["showInfo"](v.info), S["showContainerLogin"]()));
                                    })), void 0;
                                Laya["LocalStorage"]["setItem"]("_pre_code", ''),
                                    Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                    app.Log.log("_loginby_sociocode1 sociotype" + V + " code:" + W + " uid:" + Z);
                                var v = {
                                    type: V,
                                    code: W
                                };
                                Z && (v.uid = Z),
                                    v["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Auth", v, function (Q, W) {
                                        B == S["login_index"] && (Q ? (app.Log.log("oauth2Auth err:" + Q), S["showError"](game["Tools"]["strOfLocalization"](2059), Q), app.Log["Error"](Q["message"]), S["showContainerLogin"]()) : (app.Log.log("oauth2Auth res: " + JSON["stringify"](W)), W["error"] ? (S["showError"](game["Tools"]["strOfLocalization"](2062), W["error"].code), S["showContainerLogin"]()) : S["_try_socio_check"](B, V, W["access_token"])));
                                    });
                            }
                        },
                        v["prototype"]["_try_socio_check"] = function (B, V, W) {
                            var Z = this;
                            if (!this["showEmergency"]() && B == this["login_index"])
                                return this["multiLogin"]() ? (this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0) : game["LobbyNetMgr"].Inst.isOK ? (Laya["timer"].once(800, this, function () {
                                    B == Z["login_index"] && (app.Log.log("_try_socio_check sociotype" + V + " access_token:" + W), app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Check", {
                                        type: V,
                                        access_token: W
                                    }, function (Q, S) {
                                        B == Z["login_index"] && (Q ? (Z["showError"](game["Tools"]["strOfLocalization"](2059), Q), app.Log["Error"](Q["message"]), Z["showContainerLogin"]()) : (app.Log.log("oauth2Check res: " + JSON["stringify"](S)), S["error"] ? (Z["showError"](game["Tools"]["strOfLocalization"](2062), S["error"].code), Z["showContainerLogin"]()) : S["has_account"] ? Z["_try_login_socio"](B, V, W) : Z["_try_regist_socio"](B, V, W)));
                                    }));
                                }), void 0) : (game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (S) {
                                    B == Z["login_index"] && (S.open ? Z["_try_socio_check"](B, V, W) : (S["maintenance"] ? Q["UI_Entrance_Maintenance"].Inst.show(S["maintenance"]) : Z["showInfo"](S.info), Z["showContainerLogin"]()));
                                })), void 0);
                        },
                        v["prototype"]["_try_regist_socio"] = function (Q, B, V) {
                            var W = this;
                            if (!this["showEmergency"]() && Q == this["login_index"]) {
                                app.Log.log("_try_regist_socio sociotype" + B + " access_token:" + V);
                                var Z = Laya["LocalStorage"]["getItem"]("__ad_s");
                                Z && (GameMgr.Inst["_ad_str"] = Z);
                                var S = {};
                                S.type = B,
                                    S["access_token"] = V,
                                    S["device"] = GameMgr.Inst["get_device_info"](),
                                    GameMgr.Inst["_ad_str"] && (S["advertise_str"] = GameMgr.Inst["_ad_str"]),
                                    7 == B && (S["email"] = game["LocalStorage"]["getItem"]("mail_account")),
                                    S["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Signup", S, function (Z, S) {
                                        Q == W["login_index"] && (Z ? (app.Log.log("oauth2Signup err:" + Z), W["showError"](game["Tools"]["strOfLocalization"](2059), Z), app.Log["Error"](Z["message"]), W["showContainerLogin"]()) : (app.Log.log("oauth2Signup res: " + JSON["stringify"](S)), S["error"] ? (W["showError"](game["Tools"]["strOfLocalization"](2060), S["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](S)])), W["showContainerLogin"]()) : (app["PlayerBehaviorStatistic"]["fb_trace_force"](app["EBehaviorType"]["CompleteRegistration"]), app["PlayerBehaviorStatistic"]["google_trace_force"](app["EBehaviorType"]["G_Role_create"]), app["PlayerBehaviorStatistic"]["tw_trace_force"](app["EBehaviorType"]["TW_Signup"]), W["_try_login_socio"](Q, B, V))));
                                    });
                            }
                        },
                        v["prototype"]["_try_login_socio"] = function (B, V, W) {
                            var Z = this;
                            if (B == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showError"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                app.Log.log("_try_login_socio sociotype" + V + " access_token:" + W);
                                var S = GameMgr.Inst["get_device_info"](),
                                    v = game["Tools"]["get_platform_currency"]();
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Login", {
                                    type: V,
                                    access_token: W,
                                    reconnect: !1,
                                    device: S,
                                    random_key: GameMgr["device_id"],
                                    client_version: {
                                        resource: game["ResourceVersion"]["version"]
                                    },
                                    currency_platforms: v,
                                    client_version_string: GameMgr.Inst["getClientVersion"]()
                                }, function (S, v) {
                                    B == Z["login_index"] && (Z["btn_login_cd"] = 0, S ? (app.Log.log("oauth2Login err:" + S), Z["showError"](game["Tools"]["strOfLocalization"](2061), S), Z["showContainerLogin"]()) : (app.Log.log("oauth2Login res: " + JSON["stringify"](v)), v["error"] ? (156 == v["error"].code ? Z["onLoginQueueError"](Laya["Handler"]["create"](Z, function () {
                                        Z["_try_login_socio"](Z["login_index"], V, W);
                                    })) : 503 == v["error"].code ? Z["onLoginErrorProhibition"](v["error"]) : Z["showError"]('', v["error"].code), Z["showContainerLogin"]()) : (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : V["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", W), GameMgr.Inst["sociotype"] = V, GameMgr.Inst["access_token"] = W, GameMgr["country"] = v["country"], GameMgr.Inst["account_id"] = v["account_id"], GameMgr.Inst["account_data"] = v["account"], Q["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](Z, function () {
                                        Q["UI_User_Xieyi_enjp"]["needCheckVersion"] ? Q["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](Z, function () {
                                            Z["_onLoginSuccess"](V, v);
                                        })) : Z["_onLoginSuccess"](V, v);
                                    })))));
                                });
                            }
                        },
                        v["prototype"]["_onLoginPengdingPhone"] = function () { },
                        v["prototype"]["_onLoginSuccess"] = function (B, V, W) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(V),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                }
                            }));
                            var Z = this;
                            if (void 0 === W && (W = !1), app.Log.log("登陆：" + JSON["stringify"](V)), GameMgr.Inst["account_id"] = V["account_id"], GameMgr.Inst["account_data"] = V["account"], Q["UI_ShiMingRenZheng"]["renzhenged"] = V["is_id_card_authed"], GameMgr.Inst["account_numerical_resource"] = {}, V["account"]["platform_diamond"])
                                for (var S = V["account"]["platform_diamond"], v = 0; v < S["length"]; v++)
                                    GameMgr.Inst["account_numerical_resource"][S[v].id] = S[v]["count"];
                            if (V["account"]["skin_ticket"] && (GameMgr.Inst["account_numerical_resource"]["100004"] = V["account"]["skin_ticket"]), V["account"]["platform_skin_ticket"])
                                for (var i = V["account"]["platform_skin_ticket"], v = 0; v < i["length"]; v++)
                                    GameMgr.Inst["account_numerical_resource"][i[v].id] = i[v]["count"];
                            GameMgr.Inst["account_refresh_time"] = Laya["timer"]["currTimer"],
                                V["game_info"] && (GameMgr.Inst["ingame"] = !0, GameMgr.Inst["mj_server_location"] = V["game_info"]["location"], GameMgr.Inst["mj_game_token"] = V["game_info"]["connect_token"], GameMgr.Inst["mj_game_uuid"] = V["game_info"]["game_uuid"]),
                                V["access_token"] && (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : B["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", V["access_token"]), GameMgr.Inst["sociotype"] = B, GameMgr.Inst["access_token"] = V["access_token"]);
                            var x = this,
                                l = function () {
                                    GameMgr.Inst["onLoadStart"]("login"),
                                        Laya["LocalStorage"]["removeItem"]("__ad_s"),
                                        Q["UI_Loading"].Inst.show("load_lobby"),
                                        x["enable"] = !1,
                                        x["scene"]["close"](),
                                        Q["UI_Entrance_Mail_Regist"].Inst["close"](),
                                        x["login_loading"]["close"](),
                                        Q["UIMgr"].Inst["openLobbyUI"](Laya["Handler"]["create"](x, function () {
                                            GameMgr.Inst["afterLogin"](),
                                                x["route_info"]["onClose"](),
                                                GameMgr.Inst["account_data"]["anti_addiction"] && Q["UIMgr"].Inst["ShowPreventAddiction"](),
                                                x["destroy"](),
                                                x["disposeRes"](),
                                                Q["UI_Add2Desktop"].Inst && (Q["UI_Add2Desktop"].Inst["destroy"](), Q["UI_Add2Desktop"].Inst = null);
                                        }), Laya["Handler"]["create"](x, function (B) {
                                            return Q["UI_Loading"].Inst["setProgressVal"](0.2 * B);
                                        }, null, !1));
                                },
                                m = Laya["Handler"]["create"](this, function () {
                                    0 != GameMgr.Inst["account_data"]["frozen_state"] ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchRefundOrder", {}, function (B, V) {
                                        B ? (app.Log.log("fetchRefundOrder err:" + B), Z["showError"](game["Tools"]["strOfLocalization"](2061), B), Z["showContainerLogin"]()) : (Q["UI_Refund"]["orders"] = V["orders"], Q["UI_Refund"]["clear_deadline"] = V["clear_deadline"], Q["UI_Refund"]["message"] = V["message"], l());
                                    }) : l();
                                });
                            if (Q["UI_Loading"]["Loading_Images"] = [], GameMgr.Inst["account_data"]["loading_image"])
                                for (var s = 0, f = GameMgr.Inst["account_data"]["loading_image"]; s < f["length"]; s++) {
                                    var z = f[s];
                                    Q["UI_Loading"]["Loading_Images"].push(z);
                                }
                            Q["UI_Loading"]["loadNextCG"](),
                                "chs" != GameMgr["client_type"] || V["account"]["phone_verify"] ? m.run() : (Q["UI_Entrance_Mail_Regist"].Inst["close"](), this["login_loading"]["close"](), this["container_login"]["visible"] = !1, Q["UI_Bind_Phone1"].Inst.show(!0, Laya["Handler"]["create"](this, function () {
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchPhoneLoginBind", {}, function (B, V) {
                                        B || V["error"] ? Z["showError"](B, V["error"]) : 0 == V["phone_login"] ? Q["UI_Create_Phone_Account"].Inst.show(m) : Q["UI_Canot_Create_Phone_Account"].Inst.show(m);
                                    });
                                })));
                        },
                        v["prototype"]["showMailLogin"] = function () {
                            this["page_maillogin"].show();
                        },
                        v["prototype"]["showInfo"] = function (B) {
                            var V = '';
                            B && (V += B),
                                Q["UI_Entrance_Error"].Inst.show(V, 0, !1);
                        },
                        v["prototype"]["showError"] = function (B, V, W) {
                            void 0 === V && (V = -1),
                                void 0 === W && (W = '');
                            var Z = '';
                            B && (Z += B),
                                -1 != V && (Z["length"] > 0 && (Z += ','), Z += cfg.info["error"].get(V) ? cfg.info["error"].get(V)[GameMgr["client_language"]] : game["Tools"]["strOfLocalization"](2063)),
                                W && (Z += ", info:" + W),
                                Q["UI_Entrance_Error"].Inst.show(Z, V, !1);
                        },
                        v["prototype"]["updateServer"] = function () {
                            this["route_info"]["update"]();
                        },
                        v["prototype"]["multiLogin"] = function () {
                            var Q = Laya["LocalStorage"]["getItem"]("dolllt");
                            return Q && '' != Q ? game["Tools"]["currentTime"] < parseFloat(Q) + 1.5 && parseFloat(Q) < game["Tools"]["currentTime"] + 1800 : !1;
                        },
                        v["prototype"]["disposeRes"] = function () {
                            Laya["Loader"]["clearTextureRes"]("res/atlas/" + game["Tools"]["localUISrc"]("myres/entrance.atlas"));
                            var Q = '';
                            Q = "chs" != GameMgr["client_language"] ? "scene/Assets/Resource/entrance/icon_color_" + GameMgr["client_language"] + ".png" : "scene/Assets/Resource/entrance/icon_color.png";
                            var B = [];
                            B.push(Q),
                                B.push("scene/Assets/Resource/entrance/Materials/icon_color.lmat"),
                                B.push("scene/Assets/Resource/entrance/Materials/blackmask.lmat");
                            for (var V = 0; V < B["length"]; V++) {
                                var W = Laya["loader"]["getRes"](B[V]);
                                W && W["dispose"](!0);
                            }
                        },
                        v["prototype"]["showEmergency"] = function () {
                            return GameMgr.Inst["in_emergence"] && this["showInfo"](GameMgr.Inst["emergence_notice"]),
                                GameMgr.Inst["in_emergence"];
                        },
                        v["prototype"]["onLoginErrorProhibition"] = function (B) {
                            var V = 0;
                            B["u32_params"] && B["u32_params"]["length"] >= 1 && (V = B["u32_params"][0]),
                                6 == V ? 'kr' == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? Q["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"]('kr' == GameMgr["client_type"] ? 8026 : 8035, [game["Tools"]["time2YearMounthDate"](B["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](B["u32_params"][1], "chs_t" == GameMgr["client_type"])])) : this["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](B["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](B["u32_params"][1])])) : Q["UI_Entrance_Prohibition"].Inst.show(B);
                        },
                        v["prototype"]["onLoginQueueError"] = function (B) {
                            var V = this;
                            this["queue_finish_handler"] = Laya["Handler"]["create"](this, this["onLoginQueueFinished"]),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyLoginQueueFinished", this["queue_finish_handler"]),
                                this["retry_handler"] = B,
                                this["page_maillogin"]["locking"] = !0,
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchQueueInfo", {}, function (B, W) {
                                    V["page_maillogin"]["locking"] = !1,
                                        B || W["error"] ? (V["onCancelQueue"](), B ? Q["UI_Entrance_Error"].Inst.show(game["Tools"]["strOfLocalization"](3766), 0, !1) : V["showError"](B, W["error"])) : V["retry_handler"] && Q["UI_Entrance_Queue"].Inst.show(W["remain"], W.rank);
                                });
                        },
                        v["prototype"]["onCancelQueue"] = function () {
                            this["retry_handler"] = null,
                                game["LobbyNetMgr"].Inst["Close"](),
                                this["btn_login_cd"] = Laya["timer"]["currTimer"] + 500,
                                Laya["timer"].once(500, this, function () {
                                    game["LobbyNetMgr"].Inst["OpenConnect"](null);
                                }),
                                this["onLoginQueueFinished"]();
                        },
                        v["prototype"]["onLoginQueueFinished"] = function () {
                            var B = this;
                            this["showContainerLogin"](),
                                app["NetAgent"]["RemoveListener2Lobby"]("NotifyLoginQueueFinished", this["queue_finish_handler"]),
                                Q["UI_Entrance_Queue"].Inst["enable"] && Q["UI_Entrance_Queue"].Inst["close"](),
                                this["retry_handler"] && Laya["timer"].once(200, this, function () {
                                    B["retry_handler"] && (B["retry_handler"].run(), B["retry_handler"] = null);
                                });
                        },
                        v.Inst = null,
                        v;
                }
                    (Q["UIBase"]);
            Q["UI_Entrance"] = S;
        }
            (uiscript || (uiscript = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionBabei play data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var V = B.seat,
                            W = mjcore["MJPai"]["Create"]('4z');
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["AddBabei"](W, B["moqie"], !0),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["PlaySound"]("act_babei");
                        var Z = !1;
                        B["tile_state"] && B["tile_state"] > 0 && (Z = !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                            V == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["onBabei"](W, Z, !1) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["onBabei"](B["moqie"], Z, !1),
                            B["operation"] && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !1),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionBabei fastplay data:" + JSON["stringify"](B) + " usetime:" + V),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"]('4z');
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddBabei"](Z, B["moqie"], !1);
                        var S = !1;
                        B["tile_state"] && B["tile_state"] > 0 && (S = !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["onBabei"](Z, S, !0) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["onBabei"](B["moqie"], S, !0),
                            B["operation"] && -1 != V && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"], V);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !0),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionBabei record data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"]('4z');
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddBabei"](Z, B["moqie"], !0),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["PlaySound"]("act_babei");
                        var S = !1;
                        if (B["tile_state"] && B["tile_state"] > 0 && (S = !0), B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["onBabei"](Z, S, !1) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordBabei"](Z, B["moqie"], S, !1), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var v = 0; v < B["operations"]["length"]; v++)
                                Q["ActionOperation"].ob(B["operations"][v], V, 450);
                        return Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            1000;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionBabei fastrecord data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"]('4z');
                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddBabei"](Z, B["moqie"], !1);
                        var S = !1;
                        if (B["tile_state"] && B["tile_state"] > 0 && (S = !0), B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["onBabei"](Z, S, !0) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordBabei"](Z, B["moqie"], S, !0), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operations"])
                            for (var v = 0; v < B["operations"]["length"]; v++)
                                Q["ActionOperation"].ob(B["operations"][v], V, 450);
                        Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionBabei"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this,
                            W = Q["DesktopMgr"].Inst.mode == Q["EMJMode"].play || Q["DesktopMgr"].Inst["record_show_anim"];
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            Q["BgmListMgr"]["stopBgm"]();
                        var Z = !1;
                        Laya["timer"].once(100, this, function () {
                            var S = B["hules"],
                                v = 0;
                            if (S[0].zimo) {
                                for (var i = S[0].seat, x = [], l = 0; l < S[0].hand["length"]; l++)
                                    x.push(mjcore["MJPai"]["Create"](S[0].hand[l]));
                                if (x = x.sort(mjcore["MJPai"]["Distance"]), uiscript["UI_Huleshow"].Inst["showZimo"]([Q["DesktopMgr"].Inst["seat2LocalPosition"](i)]), B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), v += 1400, W && (S[0]["title"] && '' != S[0]["title"] || S[0]["title_id"]) && (Laya["timer"].once(v, V, function () {
                                    uiscript["UI_HuCutIn"].show(Q["DesktopMgr"].Inst["player_datas"][i]["avatar_id"]),
                                        Z = !0;
                                }), v += 2000), Laya["timer"].once(v, V, function () {
                                    i == Q["DesktopMgr"].Inst.seat && Q["DesktopMgr"].Inst["mainrole"]["HulePrepare"](x, S[0]["hu_tile"], S[0].zimo),
                                        Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](i)].Hule(x, mjcore["MJPai"]["Create"](S[0]["hu_tile"]), S[0].zimo);
                                }), W) {
                                    var m = 0,
                                        s = S[0].seat;
                                    s >= 0 && (m = Q["DesktopMgr"].Inst["player_effects"][s][game["EView"]["hupai_effect"]]),
                                        v += "305215" == m || "305219" == m ? 5000 : "308021" == m ? 3800 : "305217" == m ? 3800 : 2800;
                                } else
                                    v += 500;
                                i == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                            } else {
                                if (Laya["timer"].once(v, V, function () {
                                    for (var B = [], V = 0; V < S["length"]; V++)
                                        B.push(Q["DesktopMgr"].Inst["seat2LocalPosition"](S[V].seat));
                                    uiscript["UI_Huleshow"].Inst["showRong"](B);
                                }), v += 1500, W) for (var f = function (B) {
                                    var W = S[B].seat;
                                    (S[B]["title"] && '' != S[B]["title"] || S[B]["title_id"]) && (Laya["timer"].once(v, V, function () {
                                        uiscript["UI_HuCutIn"].show(Q["DesktopMgr"].Inst["player_datas"][W]["avatar_id"]),
                                            Z = !0;
                                    }), v += 2000);
                                }, l = 0; l < S["length"]; l++)
                                        f(l);
                                for (var l = 0; l < S["length"]; l++) {
                                    var z = S[l].seat;
                                    if (z == Q["DesktopMgr"].Inst.seat) {
                                        for (var C = [], T = 0; T < S[l].hand["length"]; T++)
                                            C.push(mjcore["MJPai"]["Create"](S[l].hand[T]));
                                        C = C.sort(mjcore["MJPai"]["Distance"]),
                                            Q["DesktopMgr"].Inst["mainrole"]["HulePrepare"](C, S[l]["hu_tile"], S[l].zimo);
                                    }
                                }
                                if (Laya["timer"].once(v, V, function () {
                                    if (W) {
                                        var B = 0,
                                            V = S[0].seat;
                                        V >= 0 && (B = Q["DesktopMgr"].Inst["player_effects"][V][game["EView"]["hupai_effect"]]),
                                            Q["DesktopMgr"].Inst["ShowHuleEffect"](Q["DesktopMgr"].Inst["lastqipai"], Q["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], B, Q["DesktopMgr"].Inst["lastpai_seat"], Q["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                    }
                                    for (var Z = 0; Z < S["length"]; Z++) {
                                        for (var v = [], i = 0; i < S[Z].hand["length"]; i++)
                                            v.push(mjcore["MJPai"]["Create"](S[Z].hand[i]));
                                        v = v.sort(mjcore["MJPai"]["Distance"]),
                                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](S[Z].seat)].Hule(v, mjcore["MJPai"]["Create"](S[Z]["hu_tile"]), S[Z].zimo),
                                            S[Z].seat == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                    }
                                }), W) {
                                    var m = 0,
                                        z = S[0].seat;
                                    z >= 0 && (m = Q["DesktopMgr"].Inst["player_effects"][z][game["EView"]["hupai_effect"]]),
                                        v += "305215" == m || "305219" == m ? 4200 : "308021" == m ? 3000 : "305217" == m ? 3000 : 2000;
                                }
                                else
                                    v += 600;
                            }
                            for (var l = 0; l < B["delta_scores"]["length"]; l++)
                                B["delta_scores"][l] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](l, "emoji_7", -1), Q["DesktopMgr"].Inst["onRoundEnd"](l, 1)) : B["delta_scores"][l] < 0 && (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](l, "emoji_8", -1), Q["DesktopMgr"].Inst["onRoundEnd"](l, 0));
                            Laya["timer"].once(v, V, function () {
                                uiscript["UIMgr"].Inst["ShowWin"](B, !1),
                                    Q["DesktopMgr"].Inst["ActionRunComplete"]();
                            });
                        });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](B)),
                            Q["BgmListMgr"]["stopBgm"](),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                    },
                    V["record"] = function (Q) {
                        return this.play(Q),
                            100000;
                    },
                    V["fastrecord"] = function (B) {
                        Q["BgmListMgr"]["stopBgm"](),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionHule"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this;
                        app.Log.log("ActionNewRound play data:" + JSON["stringify"](B)),
                            Q["BgmListMgr"]["PlayMJBgm"](),
                            Q["DesktopMgr"].Inst["index_change"] = B["chang"],
                            Q["DesktopMgr"].Inst["index_chuanma_ju"] = B["ju_count"],
                            Q["DesktopMgr"].Inst["index_ju"] = B.ju,
                            Q["DesktopMgr"].Inst["index_ben"] = B.ben,
                            Q["DesktopMgr"].Inst["index_player"] = B.ju,
                            Q["DesktopMgr"].Inst["gameing"] = !0,
                            Q["DesktopMgr"].Inst["left_tile_count"] = 69,
                            Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi4"] ? Q["DesktopMgr"].Inst["left_tile_count"] = 69 : Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi3"] && (Q["DesktopMgr"].Inst["left_tile_count"] = 50),
                            B["left_tile_count"] && (Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"]),
                            Q["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            Q["DesktopMgr"].Inst["setAutoHule"](!1),
                            Q["DesktopMgr"].Inst["setAutoMoQie"](!1),
                            Q["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            uiscript["UI_TingPai"].Inst["reset"](),
                            Q["DesktopMgr"].Inst["SetChangJuShow"](Q["DesktopMgr"].Inst["index_change"], Q["DesktopMgr"].Inst["index_ju"], Q["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](Q["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["Reset"](), Q["DesktopMgr"].Inst["players"][W]["setSeat"](Q["DesktopMgr"].Inst["localPosition2Seat"](W));
                        Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            Q["DesktopMgr"].Inst.md5 = B.md5,
                            Q["DesktopMgr"].Inst["choosed_pai"] = null,
                            Q["DesktopMgr"].Inst.dora = [];
                        var Z = 0;
                        0 == Q["DesktopMgr"].Inst["index_change"] && 0 == Q["DesktopMgr"].Inst["index_ju"] && 0 == Q["DesktopMgr"].Inst["index_ben"] && (Q["DesktopMgr"].Inst["is_dora3_mode"]() && !Q["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openDora3BeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_peipai_open_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openPeipaiOpenBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openMuyuOpenBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_shilian_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openShilianOpenBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_xiuluo_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openXiuluoOpenBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_top_match"]() && (uiscript["UI_DesktopInfo"].Inst["openTopMatchOpenBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_jiuchao_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openJiuChaoBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_reveal_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openAnPaiBeginEffect"](), Z = 1300), Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openZhanxingBeginEffect"](), Z = 1300)),
                            Q["DesktopMgr"].Inst["is_chuanma_mode"]() && 0 == Q["DesktopMgr"].Inst["index_chuanma_ju"] && (uiscript["UI_DesktopInfo"].Inst["openChuanmaBeginEffect"](), Z = 1300);
                        var S = !1;
                        void 0 != B.al && null != B.al && (S = B.al),
                            S && (uiscript["UI_AL"].Show(), Z = 1300),
                            Laya["timer"].once(Z, this, function () {
                                for (var W = [], Z = 0; Z < B["tiles"]["length"]; Z++)
                                    W.push(mjcore["MJPai"]["Create"](B["tiles"][Z]));
                                var S = [],
                                    v = [];
                                if (B["opens"])
                                    for (var Z = 0; Z < B["opens"]["length"]; Z++)
                                        if (B["opens"][Z].seat == Q["DesktopMgr"].Inst.seat) {
                                            S = B["opens"][Z]["tiles"],
                                                v = B["opens"][Z]["count"];
                                            break;
                                        }
                                Q["DesktopMgr"].Inst["mainrole"]["NewGame"](W, S, v, !1),
                                    B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0);
                                for (var Z = 1; 4 > Z; Z++) {
                                    var i = Q["DesktopMgr"].Inst["localPosition2Seat"](Z);
                                    if (-1 != i) {
                                        var x = [],
                                            l = [];
                                        if (B["opens"])
                                            for (var m = 0; m < B["opens"]["length"]; m++)
                                                if (B["opens"][m].seat == i) {
                                                    x = B["opens"][m]["tiles"],
                                                        l = B["opens"][m]["count"];
                                                    break;
                                                }
                                        Q["DesktopMgr"].Inst["players"][Z]["NewGame"](13 + (i == Q["DesktopMgr"].Inst["index_ju"] ? 1 : 0), x, l, !1, '');
                                    }
                                }
                                Q["DesktopMgr"].Inst["is_huansanzhang_mode"]() ? Laya["timer"].once(1500, V, function () {
                                    Q["DesktopMgr"].Inst["ActionRunComplete"](),
                                        Q["ActionOperation"].play(B["operation"]);
                                }) : (Q["DesktopMgr"].Inst["is_dora3_mode"]() && Laya["timer"].once(1000, V, function () {
                                    uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"]();
                                }), Laya["timer"].once(1200, V, function () {
                                    if (B["doras"] && B["doras"]["length"] > 0)
                                        for (var V = 0; V < B["doras"]["length"]; V++)
                                            Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][V])), uiscript["UI_DesktopInfo"].Inst["setDora"](V, Q["DesktopMgr"].Inst.dora[V]);
                                    for (var V = 0; 4 > V; V++)
                                        Q["DesktopMgr"].Inst["players"][V]["OnDoraRefresh"]();
                                    if (Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                                        var W = {
                                            tingpais: B["tingpais0"],
                                            operation: B["operation"]
                                        };
                                        uiscript["UI_TingPai"].Inst["setData0"](W);
                                    } else {
                                        var W = {
                                            tingpais: B["tingpais1"]
                                        };
                                        uiscript["UI_TingPai"].Inst["setData1"](W, !1);
                                    }
                                    Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                }), void 0 != B["operation"] && Laya["timer"].once(1000, V, function () {
                                    Q["ActionOperation"].play(B["operation"]);
                                }));
                            }),
                            Q["DesktopMgr"].Inst["fetchLinks"]();
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](B) + " usetime:" + V),
                            Q["DesktopMgr"].Inst["index_change"] = B["chang"],
                            Q["DesktopMgr"].Inst["index_ju"] = B.ju,
                            Q["DesktopMgr"].Inst["index_ben"] = B.ben,
                            Q["DesktopMgr"].Inst["index_player"] = B.ju,
                            Q["DesktopMgr"].Inst["index_chuanma_ju"] = B["ju_count"],
                            Q["DesktopMgr"].Inst["gameing"] = !0,
                            Q["DesktopMgr"].Inst["left_tile_count"] = 69,
                            Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi4"] ? Q["DesktopMgr"].Inst["left_tile_count"] = 69 : Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi3"] && (Q["DesktopMgr"].Inst["left_tile_count"] = 50),
                            B["left_tile_count"] && (Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"]),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            Q["DesktopMgr"].Inst["setAutoHule"](!1),
                            Q["DesktopMgr"].Inst["setAutoMoQie"](!1),
                            Q["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            uiscript["UI_TingPai"].Inst["reset"](),
                            Q["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                            Q["DesktopMgr"].Inst["SetChangJuShow"](Q["DesktopMgr"].Inst["index_change"], Q["DesktopMgr"].Inst["index_ju"], Q["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](Q["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1);
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["Reset"](), Q["DesktopMgr"].Inst["players"][W]["setSeat"](Q["DesktopMgr"].Inst["localPosition2Seat"](W));
                        Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            Q["DesktopMgr"].Inst.md5 = B.md5,
                            Q["DesktopMgr"].Inst["choosed_pai"] = null,
                            Q["DesktopMgr"].Inst.dora = [];
                        for (var Z = [], W = 0; W < B["tiles"]["length"]; W++)
                            Z.push(mjcore["MJPai"]["Create"](B["tiles"][W]));
                        var S = [],
                            v = [];
                        if (B["opens"])
                            for (var W = 0; W < B["opens"]["length"]; W++)
                                if (B["opens"][W].seat == Q["DesktopMgr"].Inst.seat) {
                                    S = B["opens"][W]["tiles"],
                                        v = B["opens"][W]["count"];
                                    break;
                                }
                        Q["DesktopMgr"].Inst["mainrole"]["NewGame"](Z, S, v, !0);
                        for (var W = 1; 4 > W; W++) {
                            var i = Q["DesktopMgr"].Inst["localPosition2Seat"](W);
                            if (-1 != i) {
                                var x = [],
                                    l = [];
                                if (B["opens"])
                                    for (var m = 0; m < B["opens"]["length"]; m++)
                                        if (B["opens"][m].seat == i) {
                                            x = B["opens"][m]["tiles"],
                                                l = B["opens"][m]["count"];
                                            break;
                                        }
                                Q["DesktopMgr"].Inst["players"][W]["NewGame"](13 + (i == Q["DesktopMgr"].Inst["index_ju"] ? 1 : 0), x, l, !0, '');
                            }
                        }
                        if (Q["DesktopMgr"].Inst["is_chuanma_mode"]())
                            B["operation"] && -1 != V && Laya["timer"].once(100, this, function () {
                                Q["ActionOperation"].play(B["operation"], V + 100);
                            });
                        else if (Q["DesktopMgr"].Inst["is_huansanzhang_mode"]())
                            B["operation"] && -1 != V && Laya["timer"].once(100, this, function () {
                                Q["ActionOperation"].play(B["operation"], V + 100);
                            });
                        else {
                            if (B["doras"] && B["doras"]["length"] > 0)
                                for (var W = 0; W < B["doras"]["length"]; W++)
                                    Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][W])), uiscript["UI_DesktopInfo"].Inst["setDora"](W, Q["DesktopMgr"].Inst.dora[W]);
                            for (var W = 0; 4 > W; W++)
                                Q["DesktopMgr"].Inst["players"][W]["OnDoraRefresh"]();
                            if (Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat) {
                                var s = {
                                    tingpais: B["tingpais0"],
                                    operation: B["operation"]
                                };
                                uiscript["UI_TingPai"].Inst["setData0"](s);
                            } else {
                                var s = {
                                    tingpais: B["tingpais1"]
                                };
                                uiscript["UI_TingPai"].Inst["setData1"](s, !0);
                            }
                            B["operation"] && -1 != V && Laya["timer"].once(100, this, function () {
                                Q["ActionOperation"].play(B["operation"], V + 100);
                            });
                        }
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionNewRound record data:" + JSON["stringify"](B)),
                            Q["DesktopMgr"].Inst["ClearOperationShow"](),
                            Q["BgmListMgr"]["PlayMJBgm"](),
                            Q["DesktopMgr"].Inst["index_change"] = B["chang"],
                            Q["DesktopMgr"].Inst["index_ju"] = B.ju,
                            Q["DesktopMgr"].Inst["index_ben"] = B.ben,
                            Q["DesktopMgr"].Inst["index_player"] = B.ju,
                            Q["DesktopMgr"].Inst["index_chuanma_ju"] = B["ju_count"],
                            Q["DesktopMgr"].Inst["gameing"] = !0,
                            Q["DesktopMgr"].Inst["left_tile_count"] = 69,
                            Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi4"] ? Q["DesktopMgr"].Inst["left_tile_count"] = 69 : Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi3"] && (Q["DesktopMgr"].Inst["left_tile_count"] = 50),
                            B["left_tile_count"] && (Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"]),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            Q["DesktopMgr"].Inst["tingpais"] = [[], [], [], []],
                            uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            Q["DesktopMgr"].Inst["SetChangJuShow"](Q["DesktopMgr"].Inst["index_change"], Q["DesktopMgr"].Inst["index_ju"], Q["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](Q["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["setSeat"](Q["DesktopMgr"].Inst["localPosition2Seat"](W));
                        Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            Q["DesktopMgr"].Inst["choosed_pai"] = null,
                            Q["DesktopMgr"].Inst.dora = [],
                            Q["AudioMgr"]["PlayAudio"](216);
                        for (var W = 0; 4 > W; W++) {
                            var Z = [],
                                S = "tiles" + W["toString"]();
                            if (B[S] && B[S]["length"] > 0) {
                                for (var v = 0; v < B[S]["length"]; v++)
                                    Z.push(mjcore["MJPai"]["Create"](B[S][v]));
                                var i = [],
                                    x = [];
                                if (B["opens"])
                                    for (var v = 0; v < B["opens"]["length"]; v++)
                                        if (B["opens"][v].seat == W) {
                                            i = B["opens"][v]["tiles"],
                                                x = B["opens"][v]["count"];
                                            break;
                                        }
                                W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](Z, i, x) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["RecordNewGame"](Z, i, x);
                            }
                        }
                        if (Q["DesktopMgr"].Inst["setScores"](B["scores"]), Q["DesktopMgr"].Inst.md5 = B.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), Q["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                            var l = B["operations"][Q["DesktopMgr"].Inst["localPosition2Seat"](Q["DesktopMgr"].Inst.seat)];
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && l && Q["ActionOperation"].ob(l, V, 1000);
                        } else {
                            if (B["doras"] && B["doras"]["length"] > 0)
                                for (var W = 0; W < B["doras"]["length"]; W++)
                                    Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][W])), uiscript["UI_DesktopInfo"].Inst["setDora"](W, Q["DesktopMgr"].Inst.dora[W]);
                            else
                                B.dora && '' != B.dora && (Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Q["DesktopMgr"].Inst.dora[0]));
                            for (var W = 0; 4 > W; W++)
                                Q["DesktopMgr"].Inst["players"][W]["OnDoraRefresh"]();
                            if (B["tingpai"])
                                for (var W = 0; W < B["tingpai"]["length"]; W++)
                                    B["tingpai"][W].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][W].seat, B["tingpai"][W]["tingpais1"]);
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                        }
                        return B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["paipu"] && (B["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](B["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                            300;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionNewRound fastrecord data:" + JSON["stringify"](B)),
                            Q["BgmListMgr"]["PlayMJBgm"](),
                            Q["DesktopMgr"].Inst["ClearOperationShow"](),
                            Q["DesktopMgr"].Inst["index_change"] = B["chang"],
                            Q["DesktopMgr"].Inst["index_ju"] = B.ju,
                            Q["DesktopMgr"].Inst["index_ben"] = B.ben,
                            Q["DesktopMgr"].Inst["index_player"] = B.ju,
                            Q["DesktopMgr"].Inst["index_chuanma_ju"] = B["ju_count"],
                            Q["DesktopMgr"].Inst["gameing"] = !0,
                            Q["DesktopMgr"].Inst["left_tile_count"] = 69,
                            Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi4"] ? Q["DesktopMgr"].Inst["left_tile_count"] = 69 : Q["DesktopMgr"].Inst["rule_mode"] == Q["ERuleMode"]["Liqi3"] && (Q["DesktopMgr"].Inst["left_tile_count"] = 50),
                            B["left_tile_count"] && (Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"]),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            Q["DesktopMgr"].Inst["tingpais"] = [[], [], [], []],
                            uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            Q["DesktopMgr"].Inst["SetChangJuShow"](Q["DesktopMgr"].Inst["index_change"], Q["DesktopMgr"].Inst["index_ju"], Q["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](Q["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                        for (var W = 0; 4 > W; W++)
                            Q["DesktopMgr"].Inst["players"][W]["setSeat"](Q["DesktopMgr"].Inst["localPosition2Seat"](W));
                        Q["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](Q["DesktopMgr"].Inst["index_ju"] == Q["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["choosed_pai"] = null,
                            Q["DesktopMgr"].Inst.dora = [];
                        for (var W = 0; 4 > W; W++) {
                            var Z = [],
                                S = "tiles" + W["toString"]();
                            if (B[S] && B[S]["length"] > 0) {
                                for (var v = 0; v < B[S]["length"]; v++)
                                    Z.push(mjcore["MJPai"]["Create"](B[S][v]));
                                var i = [],
                                    x = [];
                                if (B["opens"])
                                    for (var v = 0; v < B["opens"]["length"]; v++)
                                        if (B["opens"][v].seat == W) {
                                            i = B["opens"][v]["tiles"],
                                                x = B["opens"][v]["count"];
                                            break;
                                        }
                                W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](Z, i, x) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["RecordNewGame"](Z, i, x);
                            }
                        }
                        if (Q["DesktopMgr"].Inst["setScores"](B["scores"]), Q["DesktopMgr"].Inst.md5 = B.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), Q["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                            var l = B["operations"][Q["DesktopMgr"].Inst["localPosition2Seat"](Q["DesktopMgr"].Inst.seat)];
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && l && Q["ActionOperation"].ob(l, V, 1000);
                        } else {
                            if (B["doras"] && B["doras"]["length"] > 0)
                                for (var W = 0; W < B["doras"]["length"]; W++)
                                    Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B["doras"][W])), uiscript["UI_DesktopInfo"].Inst["setDora"](W, Q["DesktopMgr"].Inst.dora[W]);
                            else
                                B.dora && '' != B.dora && (Q["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](B.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, Q["DesktopMgr"].Inst.dora[0]));
                            for (var W = 0; 4 > W; W++)
                                Q["DesktopMgr"].Inst["players"][W]["OnDoraRefresh"]();
                            if (B["tingpai"])
                                for (var W = 0; W < B["tingpai"]["length"]; W++)
                                    B["tingpai"][W].seat != Q["DesktopMgr"].Inst["index_ju"] && Q["DesktopMgr"].Inst["setTingpai"](B["tingpai"][W].seat, B["tingpai"][W]["tingpais1"]);
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 1000);
                        }
                        Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["paipu"] && (B["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](B["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionNewRound"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionChiPengGang play data:" + JSON["stringify"](B));
                        var V = B.seat,
                            W = new mjcore["MJMing"]();
                        W.type = B.type,
                            W.from = B["froms"],
                            W.pais = [];
                        for (var Z = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)], S = 0; S < B["tiles"]["length"]; S++)
                            W.pais.push(mjcore["MJPai"]["Create"](B["tiles"][S]));
                        for (var v = [], S = 0; S < W.pais["length"]; S++)
                            !B["tile_states"] || B["tile_states"]["length"] <= S ? v.push(0) : v.push(B["tile_states"][S]);
                        Laya["timer"].once(600, this, function () {
                            try {
                                B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                    Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                    Z["AddMing"](W, v),
                                    W.type == mjcore["E_Ming"]["gang_ming"] && (Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                            } catch (V) {
                                var S = {};
                                S["error"] = V["message"],
                                    S["stack"] = V["stack"],
                                    S["method"] = "addming600",
                                    S.name = "ActionChiPengGang",
                                    GameMgr.Inst["onFatalError"](S);
                            }
                        }),
                            V != Q["DesktopMgr"].Inst.seat || W.type != mjcore["E_Ming"]["gang_an"] && W.type != mjcore["E_Ming"]["gang_ming"] || (Q["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                        var i = '',
                            x = '';
                        switch (W.type) {
                            case mjcore["E_Ming"].kezi:
                                i = "emoji_4",
                                    x = "emoji_3";
                                break;
                            case mjcore["E_Ming"]["shunzi"]:
                                i = "emoji_2",
                                    x = "emoji_1";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                                i = "emoji_6",
                                    x = "emoji_5";
                        }
                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Q["DesktopMgr"].Inst["index_player"], i, 2000),
                            Q["DesktopMgr"].Inst["index_player"] = V,
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Q["DesktopMgr"].Inst["index_player"], x, 2000),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"].play(B.liqi),
                            B["operation"] && Laya["timer"].once(600, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            B["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                        var l = '';
                        switch (W.type) {
                            case mjcore["E_Ming"]["shunzi"]:
                                l = "act_chi";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                            case mjcore["E_Ming"]["gang_an"]:
                                l = "act_kan";
                                break;
                            case mjcore["E_Ming"].kezi:
                                l = "act_pon";
                        }
                        var m = Z["score"];
                        B["scores"] && B["scores"]["length"] > 0 && Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            Z["PlaySound"](l, Z["score"] - m),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](B);
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionChiPengGang fastplay data:" + JSON["stringify"](B) + " usetime:" + V);
                        var W = B.seat,
                            Z = new mjcore["MJMing"]();
                        Z.type = B.type,
                            Z.from = B["froms"],
                            Z.pais = [];
                        for (var S = 0; S < B["tiles"]["length"]; S++)
                            Z.pais.push(mjcore["MJPai"]["Create"](B["tiles"][S]));
                        for (var v = [], S = 0; S < Z.pais["length"]; S++)
                            !B["tile_states"] || B["tile_states"]["length"] <= S ? v.push(0) : v.push(B["tile_states"][S]);
                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddMing"](Z, v, !1),
                            Z.type == mjcore["E_Ming"]["gang_ming"] && (Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                            W != Q["DesktopMgr"].Inst.seat || Z.type != mjcore["E_Ming"]["gang_an"] && Z.type != mjcore["E_Ming"]["gang_ming"] || (Q["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["fastplay"](B.liqi, 0),
                            B["operation"] && -1 != V && Laya["timer"].once(600, this, function () {
                                Q["ActionOperation"].play(B["operation"], V);
                            }),
                            B["scores"] && B["scores"]["length"] > 0 && Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            B["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](B);
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionChiPengGang record data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = new mjcore["MJMing"]();
                        Z.type = B.type,
                            Z.from = B["froms"],
                            Z.pais = [];
                        for (var S = 0; S < B["tiles"]["length"]; S++)
                            Z.pais.push(mjcore["MJPai"]["Create"](B["tiles"][S]));
                        for (var v = [], S = 0; S < Z.pais["length"]; S++)
                            !B["tile_states"] || B["tile_states"]["length"] <= S ? v.push(0) : v.push(B["tile_states"][S]);
                        Laya["timer"].once(600, this, function () {
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddMing"](Z, v),
                                Z.type == mjcore["E_Ming"]["gang_ming"] && (Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                        }),
                            W != Q["DesktopMgr"].Inst.seat || Z.type != mjcore["E_Ming"]["gang_an"] && Z.type != mjcore["E_Ming"]["gang_ming"] || (Q["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                        var i = '',
                            x = '';
                        switch (Z.type) {
                            case mjcore["E_Ming"].kezi:
                                i = "emoji_4",
                                    x = "emoji_3";
                                break;
                            case mjcore["E_Ming"]["shunzi"]:
                                i = "emoji_2",
                                    x = "emoji_1";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                                i = "emoji_6",
                                    x = "emoji_5";
                        }
                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Q["DesktopMgr"].Inst["index_player"], i, 2000),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](Q["DesktopMgr"].Inst["index_player"], x, 2000),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["record"](B.liqi),
                            B["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]);
                        var l = '';
                        switch (Z.type) {
                            case mjcore["E_Ming"]["shunzi"]:
                                l = "act_chi";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                            case mjcore["E_Ming"]["gang_an"]:
                                l = "act_kan";
                                break;
                            case mjcore["E_Ming"].kezi:
                                l = "act_pon";
                        }
                        var m = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)],
                            s = m["score"];
                        return B["scores"] && B["scores"]["length"] > 0 && Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            m["PlaySound"](l, m["score"] - s),
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 500),
                            1200;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionChiPengGang fastrecord data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = new mjcore["MJMing"]();
                        Z.type = B.type,
                            Z.from = B["froms"],
                            Z.pais = [];
                        for (var S = 0; S < B["tiles"]["length"]; S++)
                            Z.pais.push(mjcore["MJPai"]["Create"](B["tiles"][S]));
                        for (var v = [], S = 0; S < Z.pais["length"]; S++)
                            !B["tile_states"] || B["tile_states"]["length"] <= S ? v.push(0) : v.push(B["tile_states"][S]);
                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddMing"](Z, v, !1),
                            Z.type == mjcore["E_Ming"]["gang_ming"] && (Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                            B["scores"] && B["scores"]["length"] > 0 && Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            B["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](B["liqibang"]),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["fastrecord"](B.liqi),
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operation"] && Q["ActionOperation"].ob(B["operation"], V, 500);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionChiPengGang"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionDealTile play data:" + JSON["stringify"](B));
                        var V = B.seat,
                            W = B.tile;
                        Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](B["tile_index"], !0), uiscript["UI_Astrology"].Inst["onSelectionEnd"](B["tile_index"])),
                            Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"],
                            10 == Q["DesktopMgr"].Inst["left_tile_count"] && (Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Q["DesktopMgr"].Inst.seat)]["already_xuezhan_hule_state"] || Q["DesktopMgr"].Inst["addMindVoice"](Q["DesktopMgr"].Inst.seat, "ingame_remain10"), Laya["timer"].once(1000, this, function () {
                                Q["DesktopMgr"].Inst["playMindVoice"]();
                            }));
                        var Z = !1;
                        if (B["tile_state"] && B["tile_state"] > 0 && (Z = !0), V == Q["DesktopMgr"].Inst.seat) {
                            var S = Laya["timer"]["currTimer"] - Q["DesktopMgr"].Inst["last_gang"],
                                v = 0;
                            650 > S && (v = 650 - S),
                                Laya["timer"].once(v, this, function () {
                                    B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                        Q["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](W), Z),
                                        Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                        } else
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), Z || W && -1 != W["indexOf"]('t') ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["TakePai"](mjcore["MJPai"]["Create"](W), Z) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), Z), Q["DesktopMgr"].Inst["ActionRunComplete"]();
                        Q["DesktopMgr"].Inst["index_player"] = V,
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"].play(B.liqi),
                            B["operation"] && Q["ActionOperation"].play(B["operation"]),
                            B["doras"] && B["doras"]["length"] > 0 && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](B),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionDealTile fastplay data:" + JSON["stringify"](B) + " usetime:" + V);
                        var W = B.seat,
                            Z = B.tile;
                        Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"];
                        var S = !1;
                        B["tile_state"] && B["tile_state"] > 0 && (S = !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](Z), S, !1) : S || Z && -1 != Z["indexOf"]('t') ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["TakePai"](mjcore["MJPai"]["Create"](Z), S) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), S),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](B["tile_index"], !1), uiscript["UI_Astrology"].Inst["onSelectionEnd"](B["tile_index"])),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["fastplay"](B.liqi, 0),
                            B["operation"] && -1 != V && Q["ActionOperation"].play(B["operation"], V),
                            B["doras"] && B["doras"]["length"] > 0 && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](B),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionDealTile record data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = B.tile;
                        Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"];
                        var S = !1;
                        return B["tile_state"] && B["tile_state"] > 0 && (S = !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](Z), S) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordTakePai"](mjcore["MJPai"]["Create"](Z), S, Q["DesktopMgr"].Inst["record_show_anim"]),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](B["tile_index"], !0), uiscript["UI_Astrology"].Inst["onSelectionEnd"](B["tile_index"])),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["record"](B.liqi),
                            B["doras"] && B["doras"]["length"] > 0 && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0),
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operation"] && Q["ActionOperation"].ob(B["operation"], V),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            300;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionDealTile fastrecord data:" + JSON["stringify"](B));
                        var W = B.seat,
                            Z = B.tile;
                        Q["DesktopMgr"].Inst["left_tile_count"] = B["left_tile_count"];
                        var S = !1;
                        B["tile_state"] && B["tile_state"] > 0 && (S = !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](Z), S, !1) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordTakePai"](mjcore["MJPai"]["Create"](Z), S),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](B["tile_index"], !1), uiscript["UI_Astrology"].Inst["onSelectionEnd"](B["tile_index"])),
                            Q["DesktopMgr"].Inst["index_player"] = W,
                            Q["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            Q["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            B.liqi && Q["ActionLiqi"]["fastrecord"](B.liqi),
                            B["doras"] && B["doras"]["length"] > 0 && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0),
                            Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operation"] && Q["ActionOperation"].ob(B["operation"], V),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionDealTile"] = B;
        }
            (view || (view = {}));


        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionDiscardTile play data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1);
                        var V = B.seat,
                            W = mjcore["MJPai"]["Create"](B.tile),
                            Z = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]);
                        if (B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["AddQiPai"](W, Z, B["moqie"]), Q["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](V, Z), Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"](), Z) {
                            B["is_wliqi"] ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["PlaySound"]("act_drich") : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["PlaySound"]("act_rich");
                            var S = Q["DesktopMgr"].Inst["player_effects"][V][game["EView"]["lizhi_bgm"]];
                            if (S && 0 != S) {
                                var v = cfg["item_definition"].item.get(S)["sargs"][0];
                                Q["AudioMgr"]["lizhiMuted"] ? Q["AudioMgr"]["PlayLiqiBgm"](v, 300, !0) : (Q["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function () {
                                    Q["DesktopMgr"].Inst["gameing"] && (Q["BgmListMgr"]["PlayMJBgm"]('', !0), Q["AudioMgr"]["PlayLiqiBgm"](v, 300, !0));
                                }));
                            }
                        }
                        var i = !1;
                        !W["touming"] && B["tile_state"] && B["tile_state"] > 0 && (i = !0),
                            V == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](W, i, !1, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](V)]["onDiscardTile"](B["moqie"], B.tile, i, !1),
                            B["operation"] && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"]);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !1),
                            Laya["timer"].once(500, this, function () {
                                Z ? Q["DesktopMgr"].Inst["clearMindVoice"]() : Q["DesktopMgr"].Inst["playMindVoice"]();
                            });
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionDiscardTile fastplay data:" + JSON["stringify"](B) + " usetime:" + V),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]),
                            v = !1;
                        !Z["touming"] && B["tile_state"] && B["tile_state"] > 0 && (v = !0),
                            Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"], !1),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, v, !0, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["onDiscardTile"](B["moqie"], B.tile, v, !0),
                            B["operation"] && -1 != V && Laya["timer"].once(500, this, function () {
                                Q["ActionOperation"].play(B["operation"], V);
                            }),
                            void 0 != B["zhenting"] && void 0 == B["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](B["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"])),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !0),
                            Q["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](W, S),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"]();
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionDiscardTile record data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]),
                            v = !1;
                        if (!Z["touming"] && B["tile_state"] && B["tile_state"] > 0 && (v = !0), B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0), Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"]), S && (B["is_wliqi"] ? Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["PlaySound"]("act_drich") : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["PlaySound"]("act_rich"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](W, "emoji_9", 2000)), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, v, !1, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordDiscardTile"](Z, B["moqie"], v, !1), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        return Q["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](W, S),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"](),
                            500;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionDiscardTile fastrecord data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = mjcore["MJPai"]["Create"](B.tile),
                            S = !(null == B["is_liqi"] || void 0 == B["is_liqi"] || !B["is_liqi"]),
                            v = !1;
                        if (!Z["touming"] && B["tile_state"] && B["tile_state"] > 0 && (v = !0), B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1), Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["AddQiPai"](Z, S, B["moqie"], !1), W == Q["DesktopMgr"].Inst.seat ? Q["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](Z, v, !0, B["moqie"]) : Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](W)]["recordDiscardTile"](Z, B["moqie"], v, !0), B["tingpais"] && Q["DesktopMgr"].Inst["setTingpai"](B.seat, B["tingpais"]), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        Q["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](W, S),
                            Q["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"]();
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionDiscardTile"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B;
            !function (Q) {
                Q[Q.none = 0] = "none",
                    Q[Q["room_invite"] = 1] = "room_invite";
            }
                (B = Q["EFriendMsgType"] || (Q["EFriendMsgType"] = {}));
            var V = function () {
                function B() { }
                return B.init = function () {
                    var Q = this;
                    this["_friend_list"] = [],
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendList", {}, function (B, V) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(V),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                }
                            }));
                            if (B)
                                app.Log.log("获取好友列表时发生错误:" + B);
                            else if (V["error"])
                                app.Log.log("获取好友列表时发生错误，错误码：" + V["error"].code);
                            else {
                                if (app.Log.log(JSON["stringify"](V)), V["friends"])
                                    for (var W = 0; W < V["friends"]["length"]; W++) {
                                        var Z = V["friends"][W];
                                        Q["_friend_list"].push(Z);
                                    }
                                Q["friend_count"] = V["friend_count"],
                                    Q["friend_max_count"] = V["friend_max_count"];
                            }
                        }),
                        this["_friendapply_list"] = [],
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendApplyList", {}, function (B, V) {
                            if (B || V["error"])
                                app.Log.log("获取好友申请列表发生错误");
                            else if (app.Log.log(JSON["stringify"](V)), V["applies"])
                                for (var W = 0; W < V["applies"]["length"]; W++)
                                    Q["_friendapply_list"].push(V["applies"][W]);
                        }),
                        this["fetchRecentPlayer"](),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendViewChange", Laya["Handler"]["create"](this, this["_onFriendViewChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendStateChange", Laya["Handler"]["create"](this, this["_onFriendStateChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendChange", Laya["Handler"]["create"](this, this["_onFriendChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyNewFriendApply", Laya["Handler"]["create"](this, this["_onFriendApplyChange"], null, !1));
                },
                    Object["defineProperty"](B, "friend_list", {
                        get: function () {
                            return this["_friend_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](B, "friendapply_list", {
                        get: function () {
                            return this["_friendapply_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](B, "recentplayer_list", {
                        get: function () {
                            return this["_recentplayer_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    B.find = function (Q) {
                        for (var B = 0; B < this["_friend_list"]["length"]; B++)
                            if (this["_friend_list"][B].base["account_id"] == Q)
                                return this["_friend_list"][B];
                        return null;
                    },
                    B["_onFriendStateChange"] = function (Q) {
                        app.Log.log(JSON["stringify"](Q));
                        var B = this.find(Q["target_id"]);
                        return null == B ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](Q)), void 0) : (Q = Q["active_state"], Q && (null != Q["login_time"] && void 0 != Q["login_time"] && (B["state"]["login_time"] = Q["login_time"]), null != Q["logout_time"] && void 0 != Q["logout_time"] && (B["state"]["logout_time"] = Q["logout_time"]), B["state"]["playing"] = Q["playing"], null != Q["is_online"] && void 0 != Q["is_online"] && (B["state"]["is_online"] = Q["is_online"]), this["triggerMsg"]({
                            type: "singlechange",
                            account_id: B.base["account_id"]
                        })), void 0);
                    },
                    B["_onFriendViewChange"] = function (Q) {
                        var B = this.find(Q["target_id"]);
                        return null == B ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](Q)), void 0) : (null != Q.base["avatar_id"] && void 0 != Q.base["avatar_id"] && (B.base["avatar_id"] = Q.base["avatar_id"]), null != Q.base["title"] && void 0 != Q.base["title"] && (B.base["title"] = Q.base["title"]), null != Q.base["nickname"] && void 0 != Q.base["nickname"] && (B.base["nickname"] = Q.base["nickname"]), null != Q.base["verified"] && void 0 != Q.base["verified"] && (B.base["verified"] = Q.base["verified"]), null != Q.base["level"] && void 0 != Q.base["level"] && (B.base["level"] = Q.base["level"]), null != Q.base["level3"] && void 0 != Q.base["level3"] && (B.base["level3"] = Q.base["level3"]), null != Q.base["avatar_frame"] && void 0 != Q.base["avatar_frame"] && (B.base["avatar_frame"] = Q.base["avatar_frame"]), this["triggerMsg"]({
                            type: "singlechange",
                            account_id: B.base["account_id"]
                        }), void 0);
                    },
                    B["addListener"] = function (Q) {
                        this["removeListener"](Q),
                            this["_listener"].push(Q);
                    },
                    B["removeListener"] = function (Q) {
                        for (var B = 0; B < this["_listener"]["length"]; B++)
                            if (this["_listener"][B] === Q) {
                                this["_listener"][B] = this["_listener"][this["_listener"]["length"] - 1],
                                    this["_listener"].pop();
                                break;
                            }
                    },
                    B["triggerMsg"] = function (Q) {
                        for (var B = 0; B < this["_listener"]["length"]; B++)
                            this["_listener"][B] && this["_listener"][B]["runWith"](Q);
                    },
                    B["removeFriend"] = function (Q) {
                        for (var B = 0; B < this["_friend_list"]["length"]; B++)
                            if (this["_friend_list"][B].base["account_id"] == Q) {
                                for (var V = B; V < this["_friend_list"]["length"] - 1; V++)
                                    this["_friend_list"][V] = this["_friend_list"][V + 1];
                                this["_friend_list"].pop(),
                                    this["friend_count"]--;
                                break;
                            }
                    },
                    B["_onFriendChange"] = function (Q) {
                        var B = Q["account_id"];
                        1 == Q.type ? this.find(B) || (this["friend_count"]++, this["friend_list"].push(Q["friend"])) : 2 == Q.type && this["removeFriend"](B),
                            this["triggerMsg"]({
                                type: "listchange"
                            });
                    },
                    B["_onFriendApplyChange"] = function (Q) {
                        for (var B = 0; B < this["_friendapply_list"]["length"]; B++)
                            if (this["_friendapply_list"][B]["account_id"] == Q["account_id"])
                                return this["_friendapply_list"][B]["apply_time"] = Q["apply_time"], void 0;
                        if (this["_friendapply_list"].push({
                            account_id: Q["account_id"],
                            apply_time: Q["apply_time"]
                        }), Q["removed_id"])
                            for (var B = 0; B < this["_friendapply_list"]["length"]; B++)
                                if (this["_friendapply_list"][B]["account_id"] == Q["removed_id"]) {
                                    for (var V = 0; V < this["_friendapply_list"]["length"] - 1; V++)
                                        this["_friendapply_list"][V] = this["_friendapply_list"][V + 1];
                                    this["_friendapply_list"].pop();
                                    break;
                                }
                    },
                    B["delFriendApply"] = function (Q) {
                        for (var B = 0; B < this["_friendapply_list"]["length"]; B++)
                            if (this["_friendapply_list"][B]["account_id"] == Q) {
                                for (var V = B; V < this["_friendapply_list"]["length"] - 1; V++)
                                    this["_friendapply_list"][V] = this["_friendapply_list"][V + 1];
                                this["_friendapply_list"].pop();
                                break;
                            }
                    },
                    B["needShowRedpoint"] = function () {
                        var B = Laya["LocalStorage"]["getItem"]("friend_apply_" + GameMgr.Inst["account_id"]),
                            V = 0;
                        if (B && (V = Number(B) / 1000), Q["FriendMgr"]["friendapply_list"])
                            for (var W = 0, Z = Q["FriendMgr"]["friendapply_list"]; W < Z["length"]; W++) {
                                var S = Z[W];
                                if (S["apply_time"] > V)
                                    return !0;
                            }
                        return !1;
                    },
                    B["fetchRecentPlayer"] = function (Q) {
                        var B = this;
                        return this["recentplayer_changed"] ? (this["recentplayer_changed"] = !1, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchRecentFriend", {}, function (V, W) {
                            if (V || W["error"])
                                app.Log.log("fetchRecentFriend");
                            else {
                                var Z = B["_recentplayer_list"];
                                if (B["_recentplayer_list"] = [], W["account_list"])
                                    for (var S = 0; S < W["account_list"]["length"]; S++) {
                                        for (var v = !1, i = 0, x = Z; i < x["length"]; i++) {
                                            var l = x[i];
                                            if (l["account_id"] == W["account_list"][S]) {
                                                B["_recentplayer_list"].push(l),
                                                    v = !0;
                                                break;
                                            }
                                        }
                                        v || B["_recentplayer_list"].push({
                                            account_id: W["account_list"][S],
                                            base: null
                                        });
                                    }
                            }
                            Q && Q["runWith"]({
                                err: V,
                                res: W
                            });
                        }), void 0) : (Q && Q.run(), void 0);
                    },
                    B["_friend_list"] = [],
                    B["_listener"] = [],
                    B["_friendapply_list"] = [],
                    B["_recentplayer_list"] = [],
                    B["friend_max_count"] = 0,
                    B["friend_count"] = 0,
                    B["recentplayer_changed"] = !0,
                    B;
            }
                ();
            Q["FriendMgr"] = V;
        }
            (game || (game = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this,
                            W = Q["DesktopMgr"].Inst.mode == Q["EMJMode"].play || Q["DesktopMgr"].Inst["record_show_anim"];
                        B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            Q["BgmListMgr"]["stopBgm"](),
                            Laya["timer"].once(100, this, function () {
                                var Z = B["hules"],
                                    S = 0;
                                if (B["hules_history"] && Laya["timer"].once(3000, V, function () {
                                    for (var V = 0, Z = B["hules_history"]; V < Z["length"]; V++) {
                                        var S = Z[V],
                                            v = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](S.seat)];
                                        if (v && v["already_xuezhan_hule_state"]) {
                                            for (var i = [], x = 0; x < S.hand["length"]; x++)
                                                i.push(mjcore["MJPai"]["Create"](S.hand[x]));
                                            i = i.sort(mjcore["MJPai"]["Distance"]),
                                                v["onXuezhanEnd"](i, !W);
                                        }
                                    }
                                }), Z[0].zimo) {
                                    for (var v = Z[0].seat, i = [], x = 0; x < Z[0].hand["length"]; x++)
                                        i.push(mjcore["MJPai"]["Create"](Z[0].hand[x]));
                                    i = i.sort(mjcore["MJPai"]["Distance"]),
                                        uiscript["UI_Huleshow"].Inst["showZimo"]([Q["DesktopMgr"].Inst["seat2LocalPosition"](v)]),
                                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                        S += 1400,
                                        Laya["timer"].once(S, V, function () {
                                            v == Q["DesktopMgr"].Inst.seat && Q["DesktopMgr"].Inst["mainrole"]["HulePrepare"](i, Z[0]["hu_tile"], Z[0].zimo),
                                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](v)].Hule(i, mjcore["MJPai"]["Create"](Z[0]["hu_tile"]), Z[0].zimo);
                                        }),
                                        S += W ? 1500 : 500,
                                        v == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                }
                                else {
                                    Laya["timer"].once(S, V, function () {
                                        for (var B = [], V = 0; V < Z["length"]; V++)
                                            B.push(Q["DesktopMgr"].Inst["seat2LocalPosition"](Z[V].seat));
                                        uiscript["UI_Huleshow"].Inst["showRong"](B);
                                    }),
                                        S += 1500;
                                    for (var x = 0; x < Z["length"]; x++) {
                                        var l = Z[x].seat;
                                        if (l == Q["DesktopMgr"].Inst.seat) {
                                            for (var m = [], s = 0; s < Z[x].hand["length"]; s++)
                                                m.push(mjcore["MJPai"]["Create"](Z[x].hand[s]));
                                            m = m.sort(mjcore["MJPai"]["Distance"]),
                                                Q["DesktopMgr"].Inst["mainrole"]["HulePrepare"](m, Z[x]["hu_tile"], Z[x].zimo);
                                        }
                                    }
                                    Laya["timer"].once(S, V, function () {
                                        if (W) {
                                            for (var B = 0, V = -1, S = 0; S < Z["length"]; S++) {
                                                var v = Z[S].seat;
                                                if (-1 == V)
                                                    V = v;
                                                else {
                                                    var i = Q["DesktopMgr"].Inst["seat2LocalPosition"](V),
                                                        x = Q["DesktopMgr"].Inst["seat2LocalPosition"](v);
                                                    i > x && (V = v);
                                                }
                                            }
                                            V >= 0 && (B = Q["DesktopMgr"].Inst["player_effects"][V][game["EView"]["hupai_effect"]]),
                                                Q["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                Q["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                Q["DesktopMgr"].Inst["ShowHuleEffect"](Q["DesktopMgr"].Inst["lastqipai"], Q["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], B, Q["DesktopMgr"].Inst["lastpai_seat"], Q["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                        }
                                        for (var S = 0; S < Z["length"]; S++) {
                                            for (var l = [], m = 0; m < Z[S].hand["length"]; m++)
                                                l.push(mjcore["MJPai"]["Create"](Z[S].hand[m]));
                                            l = l.sort(mjcore["MJPai"]["Distance"]),
                                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Z[S].seat)].Hule(l, mjcore["MJPai"]["Create"](Z[S]["hu_tile"]), Z[S].zimo),
                                                Z[S].seat == Q["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                        }
                                    }),
                                        S += W ? 2000 : 300;
                                }
                                for (var f = [], x = 0; x < B["delta_scores"]["length"]; x++) {
                                    var z = {
                                        title_id: 0,
                                        score: 0,
                                        delta: 0
                                    };
                                    if (B["delta_scores"][x] > 0) {
                                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_7", -1),
                                            Q["DesktopMgr"].Inst["onRoundEnd"](x, 1),
                                            z["delta"] = B["delta_scores"][x];
                                        for (var C = 0, T = Z; C < T["length"]; C++) {
                                            var t = T[C];
                                            if (t.seat == x) {
                                                z["title_id"] = t["title_id"];
                                                break;
                                            }
                                        }
                                    } else
                                        B["delta_scores"][x] < 0 && (z["delta"] = B["delta_scores"][x], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](x, "emoji_8", -1), Q["DesktopMgr"].Inst["onRoundEnd"](x, 0));
                                    z["score"] = B["old_scores"][x],
                                        f.push(z);
                                }
                                Laya["timer"].once(S, V, function () {
                                    Laya["timer"].once(200, V, function () {
                                        Q["DesktopMgr"].Inst["setScores"](B["scores"]);
                                    }),
                                        uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](f);
                                }),
                                    S += 3000,
                                    Laya["timer"].once(S, V, function () {
                                        uiscript["UIMgr"].Inst["ShowWin"](B, !1),
                                            Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](B)),
                            Q["BgmListMgr"]["stopBgm"](),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                    },
                    V["record"] = function (Q) {
                        return this.play(Q),
                            100000;
                    },
                    V["fastrecord"] = function (B) {
                        Q["BgmListMgr"]["stopBgm"](),
                            Q["DesktopMgr"].Inst["gameing"] = !1,
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1),
                            Q["DesktopMgr"].Inst["setScores"](B["scores"]),
                            uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionHuleXueZhanEnd"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionNewCard play data:" + JSON["stringify"](B));
                        var V = uiscript["UI_FightBegin"].hide();
                        return Laya["timer"].once(V + 200, this, function () {
                            uiscript["UI_DesktopInfo"].Inst["OnNewCard"](B, !0),
                                Q["DesktopMgr"].Inst["ActionRunComplete"]();
                        }),
                            V + 1000;
                    },
                    V["fastplay"] = function (B) {
                        return app.Log.log("ActionNewCard fastplay data:" + JSON["stringify"](B)),
                            uiscript["UI_FightBegin"].hide(),
                            uiscript["UI_DesktopInfo"].Inst["OnNewCard"](B, !1),
                            Q["DesktopMgr"].Inst["ActionRunComplete"](),
                            0;
                    },
                    V["record"] = function (B) {
                        app.Log.log("ActionNewCard record data:" + JSON["stringify"](B));
                        var V = uiscript["UI_FightBegin"].hide();
                        return Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] ? (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](B, !0), V += 1000) : uiscript["UI_DesktopInfo"].Inst["OnNewCard"](B, !1),
                            Q["DesktopMgr"].Inst["ActionRunComplete"](),
                            V;
                    },
                    V["fastrecord"] = function (B) {
                        app.Log.log("ActionNewCard fastrecord data:" + JSON["stringify"](B));
                        uiscript["UI_FightBegin"].hide();
                        return uiscript["UI_DesktopInfo"].Inst["OnNewCard"](B, !1),
                            Q["DesktopMgr"].Inst["ActionRunComplete"](),
                            0;
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionNewCard"] = B;
        }
            (view || (view = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        app.Log.log("ActionAnGangAddGang play data:" + JSON["stringify"](B));
                        var V = B.seat,
                            W = Q["DesktopMgr"].Inst["seat2LocalPosition"](V);
                        if (B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !1), B.type == mjcore["E_Ming"]["gang_ming"])
                            Q["DesktopMgr"].Inst["players"][W]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function () {
                                B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                    Q["DesktopMgr"].Inst["players"][W]["AddGang"](mjcore["MJPai"]["Create"](B["tiles"])),
                                    Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            });
                        else {
                            var Z = new mjcore["MJMing"]();
                            Z.type = mjcore["E_Ming"]["gang_an"],
                                Z.from = [V, V, V, V],
                                Z.pais = this["getAngangTile"](B["tiles"]);
                            for (var S = [], v = 0; v < Z.pais["length"]; v++)
                                S.push(-1);
                            Laya["timer"].once(500, this, function () {
                                B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                    Q["DesktopMgr"].Inst["players"][W]["AddMing"](Z, S),
                                    Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            }),
                                Q["DesktopMgr"].Inst["players"][W]["PlaySound"]("act_kan");
                        }
                        B["operation"] && Laya["timer"].once(600, this, function () {
                            Q["ActionOperation"].play(B["operation"]);
                        }),
                            void 0 != B["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"]),
                            V == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !1),
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](V, "emoji_5", 2000),
                            Q["DesktopMgr"].Inst["mainrole"]["revertAllPais"]();
                    },
                    V["fastplay"] = function (B, V) {
                        app.Log.log("ActionAnGangAddGang fastplay data:" + JSON["stringify"](B) + " usetime:" + V);
                        var W = B.seat,
                            Z = Q["DesktopMgr"].Inst["seat2LocalPosition"](W);
                        if (B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0), B.type == mjcore["E_Ming"]["gang_ming"])
                            Q["DesktopMgr"].Inst["players"][Z]["AddGang"](mjcore["MJPai"]["Create"](B["tiles"]), !1);
                        else {
                            var S = new mjcore["MJMing"]();
                            S.type = mjcore["E_Ming"]["gang_an"],
                                S.from = [W, W, W, W],
                                S.pais = this["getAngangTile"](B["tiles"]);
                            for (var v = [], i = 0; i < S.pais["length"]; i++)
                                v.push(-1);
                            Q["DesktopMgr"].Inst["players"][Z]["AddMing"](S, v, !1);
                        }
                        B["operation"] && -1 != V && Laya["timer"].once(500, this, function () {
                            Q["ActionOperation"].play(B["operation"], V);
                        }),
                            void 0 != B["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](B["zhenting"]),
                            W == Q["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](B, !0),
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    V["record"] = function (B, V) {
                        void 0 === V && (V = 0),
                            app.Log.log("ActionAnGangAddGang record data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = Q["DesktopMgr"].Inst["seat2LocalPosition"](W);
                        if (B.type == mjcore["E_Ming"]["gang_ming"])
                            Q["DesktopMgr"].Inst["players"][Z]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function () {
                                B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                    Q["DesktopMgr"].Inst["players"][Z]["AddGang"](mjcore["MJPai"]["Create"](B["tiles"])),
                                    Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            });
                        else {
                            var S = new mjcore["MJMing"]();
                            S.type = mjcore["E_Ming"]["gang_an"],
                                S.from = [W, W, W, W],
                                S.pais = this["getAngangTile"](B["tiles"]);
                            for (var v = [], i = 0; i < S.pais["length"]; i++)
                                v.push(-1);
                            Laya["timer"].once(500, this, function () {
                                B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0),
                                    Q["DesktopMgr"].Inst["players"][Z]["AddMing"](S, v),
                                    Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            }),
                                Q["DesktopMgr"].Inst["players"][Z]["PlaySound"]("act_kan");
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](W, "emoji_5", 2000), Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        return 1700;
                    },
                    V["fastrecord"] = function (B, V) {
                        void 0 === V && (V = -1),
                            app.Log.log("ActionAnGangAddGang fastrecord data:" + JSON["stringify"](B)),
                            B["doras"] && Q["DesktopMgr"].Inst["WhenDoras"](B["doras"], !0);
                        var W = B.seat,
                            Z = Q["DesktopMgr"].Inst["seat2LocalPosition"](W);
                        if (B.type == mjcore["E_Ming"]["gang_ming"])
                            Q["DesktopMgr"].Inst["players"][Z]["AddGang"](mjcore["MJPai"]["Create"](B["tiles"]), !1);
                        else {
                            var S = new mjcore["MJMing"]();
                            S.type = mjcore["E_Ming"]["gang_an"],
                                S.from = [W, W, W, W],
                                S.pais = this["getAngangTile"](B["tiles"]);
                            for (var v = [], i = 0; i < S.pais["length"]; i++)
                                v.push(-1);
                            Q["DesktopMgr"].Inst["players"][Z]["AddMing"](S, v, !1);
                        }
                        if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && V >= 0 && B["operations"])
                            for (var i = 0; i < B["operations"]["length"]; i++)
                                Q["ActionOperation"].ob(B["operations"][i], V, 450);
                        Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1);
                    },
                    V["getAngangTile"] = function (B) {
                        var V = [];
                        if (Q["DesktopMgr"].Inst["is_chuanma_mode"]() || '0' != B["charAt"](0) && '5' != B["charAt"](0) || 'z' == B["charAt"](1))
                            for (var W = 0; 4 > W; W++) {
                                var Z = mjcore["MJPai"]["Create"](B);
                                Q["DesktopMgr"].Inst["is_jiuchao_mode"]() && (Z["touming"] = 3 != W),
                                    V.push(Z);
                            }
                        else {
                            var S = 1;
                            if (Q["DesktopMgr"].Inst["game_config"]) {
                                var v = Q["DesktopMgr"].Inst["game_config"].mode;
                                if (v && v["extendinfo"]) {
                                    var i = JSON["parse"](v["extendinfo"]);
                                    if (i && null != i["dora_count"])
                                        switch (i["dora_count"]) {
                                            case 0:
                                                S = 0;
                                                break;
                                            case 2:
                                                S = 1;
                                                break;
                                            case 3:
                                                S = 1;
                                                break;
                                            case 4:
                                                S = 'p' == B["charAt"](1) ? 2 : 1;
                                        }
                                }
                                if (v && v["detail_rule"] && v["detail_rule"] && null != v["detail_rule"]["dora_count"])
                                    switch (v["detail_rule"]["dora_count"]) {
                                        case 0:
                                            S = 0;
                                            break;
                                        case 2:
                                            S = 1;
                                            break;
                                        case 3:
                                            S = 1;
                                            break;
                                        case 4:
                                            S = 'p' == B["charAt"](1) ? 2 : 1;
                                    }
                            }
                            for (var W = 0; 4 > W; W++) {
                                var Z = mjcore["MJPai"]["Create"](B);
                                Q["DesktopMgr"].Inst["is_jiuchao_mode"]() && (Z["touming"] = 3 != W),
                                    Z.dora = 0 == W ? !1 : S >= W,
                                    V.push(Z);
                            }
                        }
                        return Q["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            V;
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionAnGangAddGang"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B = function () {
                function B(Q) {
                    var B = this;
                    this["rounds"] = [],
                        this["locking"] = !1,
                        this["enable"] = !1,
                        this.me = Q,
                        this.me["visible"] = !1,
                        this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                        this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                        this["btn_up"] = this.me["getChildByName"]('up'),
                        this["btn_down"] = this.me["getChildByName"]("down"),
                        this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || B["scrollview"]["scrollDelta"](-100);
                        }, null, !1),
                        this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || B["scrollview"]["scrollDelta"](100);
                        }, null, !1),
                        this["scrollview"].me.on("ratechange", this, function () {
                            B["btn_up"]["visible"] = B["scrollview"].rate > 0,
                                B["btn_down"]["visible"] = B["scrollview"]["need_scroll"] && B["scrollview"].rate < 1;
                        }),
                        this["enable"] = !1;
                }
                return B["prototype"].show = function (B) {
                    var V = this;
                    this["enable"] = !0,
                        this["locking"] = !0,
                        this.me["visible"] = !0,
                        this["scrollview"]["reset"](),
                        this["rounds"] = B;
                    for (var W = 0, Z = 0; Z < B["length"]; Z++) {
                        var S = this["caluH"](B[Z]);
                        W += S,
                            this["scrollview"]["addItem"](1, S);
                    }
                    Q["UIBase"]["anim_alpha_in"](this.me, {
                        y: 30
                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                        V["locking"] = !1;
                    })),
                        this["btn_up"]["visible"] = !1,
                        this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                },
                    B["prototype"]["close"] = function () {
                        var B = this;
                        this["enable"] = !1,
                            this["locking"] = !0,
                            Q["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1,
                                    B.me["visible"] = !1;
                            }));
                    },
                    B["prototype"]["caluH"] = function (Q) {
                        var B = Q["actions"][Q["actions"]["length"] - 1];
                        if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            return W.Inst["isRoundEnd"](B.name) ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120;
                        if (view["DesktopMgr"].Inst["xuezhan"]) {
                            if (!W.Inst["isRoundEnd"](B.name))
                                return 120;
                            if (B.data["hules_history"] && B.data["hules_history"]["length"] > 0)
                                return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        }
                        if ("RecordNoTile" == B.name) {
                            for (var V = B.data, Z = [], S = 0; S < view["DesktopMgr"].Inst["player_count"]; S++)
                                Z.push({
                                    old_score: V["scores"][0]["old_scores"][S],
                                    delta: 0
                                });
                            for (var S = 0; S < V["scores"]["length"]; S++)
                                for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                    Z[v]["delta"] += V["scores"][S]["delta_scores"][v];
                            for (var i = [], S = 0; S < Z["length"]; S++)
                                Z[S]["delta"] > 0 && i.push(S);
                            var x = 0 == i["length"] ? 120 : 80 + 40 * i["length"];
                            return x;
                        }
                        if ("RecordLiuJu" == B.name) {
                            if (view["DesktopMgr"].Inst["xuezhan"]) {
                                for (var l = 0, m = 0, s = B.data["delta_scores"]; m < s["length"]; m++) {
                                    var f = s[m];
                                    f && l++;
                                }
                                return l ? 100 + 40 * l : 120;
                            }
                            return 120;
                        }
                        return "RecordHule" == B.name ? B.data["hules"][0].zimo ? 120 : 180 + 40 * (B.data["hules"]["length"] - 1) : 120;
                    },
                    B["prototype"]["renderInfo"] = function (Q) {
                        for (var B = this, V = Q["index"], Z = Q["container"], S = this["rounds"][V], v = 0; v < S["actions"]["length"]; v++)
                            if ("RecordNewRound" == S["actions"][v].name) {
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    Z["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                        Z["getChildByName"]("container_title")["getChildByName"]('ju').text = (S["actions"][v].data["ju_count"] + 1)["toString"](),
                                        Z["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                        Z["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                    for (var i = 0, x = Z["getChildByName"]("container_title"), l = [3, 3, 0], m = 0; 3 > m; m++) {
                                        var s = x["getChildAt"](m);
                                        i += s["textField"]["textWidth"] * s["scaleX"],
                                            i += l[m];
                                    }
                                    for (var f = x["width"] / 2 - i / 2, z = 0; 3 > z; z++) {
                                        var s = x["getChildAt"](z);
                                        s.x = f,
                                            f += s["textField"]["textWidth"] * s["scaleX"] + l[z],
                                            s.y = "haolong" == s.font ? 34 : 31;
                                    }
                                    break;
                                }
                                var C = void 0;
                                C = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                    Z["getChildByName"]("container_title")["getChildByName"]("chang").text = C[S["actions"][v].data["chang"] % 4],
                                    Z["getChildByName"]("container_title")["getChildByName"]('ju').text = (S["actions"][v].data.ju + 1)["toString"](),
                                    Z["getChildByName"]("container_title")["getChildByName"]("ben").text = S["actions"][v].data.ben["toString"]();
                                for (var i = 0, x = Z["getChildByName"]("container_title"), l = [3, 3, 50, 3, 0], T = 0; T < x["numChildren"]; T++) {
                                    var s = x["getChildAt"](T);
                                    i += s["textField"]["textWidth"] * s["scaleX"],
                                        i += l[T];
                                }
                                for (var f = x["width"] / 2 - i / 2, t = 0; t < x["numChildren"]; t++) {
                                    var s = x["getChildAt"](t);
                                    s.x = f,
                                        f += s["textField"]["textWidth"] * s["scaleX"] + l[t],
                                        s.y = "haolong" == s.font ? 34 : 31;
                                }
                                break;
                            }
                        var w = S["actions"][S["actions"]["length"] - 1],
                            h = w.data,
                            G = Z,
                            g = Z["getChildByName"]("line"),
                            r = Z["getChildByName"]("liuju"),
                            j = Z["getChildByName"]("win"),
                            X = Z["getChildByName"]("lose");
                        g["visible"] = !1,
                            r["visible"] = !1,
                            j["visible"] = !1,
                            X["visible"] = !1;
                        var d = !0;
                        if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                            for (var y = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                y.push(0);
                            for (var p = !1, E = 0, O = S["actions"]; E < O["length"]; E++) {
                                var b = O[E];
                                if (("RecordHuleXueZhanEnd" == b.name || "RecordNoTile" == b.name) && (p = b.data["hules_history"] && b.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == b.name || "RecordHuleXueZhanEnd" == b.name)
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y[v] += b.data["delta_scores"][v];
                                else if ("RecordNoTile" == b.name) {
                                    for (var v = 0; v < b.data["scores"]["length"]; v++)
                                        if (b.data["scores"][v]["delta_scores"] && b.data["scores"][v]["delta_scores"]["length"] > 0)
                                            for (var M = 0; M < view["DesktopMgr"].Inst["player_count"]; M++)
                                                y[M] += b.data["scores"][v]["delta_scores"][M];
                                } else if ("RecordGangResult" == b.name || "RecordGangResultEnd" == b.name)
                                    for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                        y[v] += b.data["gang_infos"]["delta_scores"][v];
                            }
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (p = !0), W.Inst["isRoundEnd"](w.name) || (d = !1), G["height"] = d ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, p) {
                                d = !1,
                                    j["visible"] = !0;
                                var U = j["getChildByName"]("info");
                                U["visible"] = "RecordLiuJu" != w.name,
                                    U.text = game["Tools"]["strOfLocalization"](3257),
                                    U = X["getChildByName"]("chong");
                                for (var v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++) {
                                    var k = j["getChildByName"]("player"),
                                        L = k["getChildAt"](v);
                                    L["visible"] = !0,
                                        L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](v)["nickname"],
                                        L["getChildByName"]("point").text = y[v] > 0 ? '+' + y[v]["toString"]() : y[v]["toString"]();
                                }
                                for (var R = j["getChildByName"]("player"), v = view["DesktopMgr"].Inst["player_count"]; v < R["numChildren"]; v++)
                                    R["getChildAt"](v)["visible"] = !1;
                            } else;
                        }
                        if ("RecordNoTile" == w.name) {
                            if (d) {
                                for (var o = [], v = 0; v < view["DesktopMgr"].Inst["player_count"]; v++)
                                    o.push({
                                        old_score: h["scores"][0]["old_scores"][v],
                                        delta: 0
                                    });
                                for (var v = 0; v < h["scores"]["length"]; v++)
                                    for (var M = 0; M < view["DesktopMgr"].Inst["player_count"]; M++)
                                        o[M]["delta"] += h["scores"][v]["delta_scores"][M];
                                for (var q = [], v = 0; v < o["length"]; v++)
                                    o[v]["delta"] > 0 && q.push(v);
                                if (G["height"] = 120 + (0 == q["length"] ? 0 : 40 * (q["length"] - 1)), h["liujumanguan"]) {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2170),
                                        U["color"] = "#8d8fac";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        v < q["length"] ? (L["visible"] = !0, L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](q[v])["nickname"], L["getChildByName"]("point").text = (o[q[v]]["delta"] > 0 ? '+' : '') + o[q[v]]["delta"]["toString"]()) : L["visible"] = !1;
                                    }
                                } else if (j["visible"] = !0, j["getChildByName"]("info").text = '', r["visible"] = !0, r.text = game["Tools"]["strOfLocalization"](2171), r["color"] = "#8d8fac", h["scores"])
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        v < q["length"] ? (L["visible"] = !0, L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](q[v])["nickname"], L["getChildByName"]("point").text = (o[q[v]]["delta"] > 0 ? '+' : '') + o[q[v]]["delta"]["toString"]()) : L["visible"] = !1;
                                    }
                            }
                        } else if ("RecordLiuJu" == w.name) {
                            var K = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                            r["visible"] = !0,
                                r.text = K[h.type],
                                r["color"] = "#8d8fac",
                                d && (G["height"] = 120);
                        } else if ("RecordHule" == w.name) {
                            if (!view["DesktopMgr"].Inst["xuezhan"])
                                if (w.data["hules"][0].zimo) {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2177),
                                        U["color"] = "#ea3694";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (0 == v) {
                                            L["visible"] = !0;
                                            var e = h["hules"][0].seat;
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = (I > 0 ? '+' : '') + I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    G["height"] = 120;
                                } else {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2178),
                                        U["color"] = "#ef3538";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (v < h["hules"]["length"]) {
                                            L["visible"] = !0;
                                            var e = h["hules"][v].seat;
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = (I > 0 ? '+' : '') + I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    g["visible"] = !0,
                                        g.y = 80 + 40 * h["hules"]["length"],
                                        X["visible"] = !0,
                                        X.y = 83 + 40 * h["hules"]["length"];
                                    var U = X["getChildByName"]("chong");
                                    U["visible"] = !0;
                                    for (var R = X["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (0 == v) {
                                            L["visible"] = !0;
                                            for (var e = 0, M = 0; M < h["delta_scores"]["length"]; M++)
                                                (h["delta_scores"][M] < h["delta_scores"][e] || h["baopai"] > 0 && h["delta_scores"][M] == h["delta_scores"][e] && h["baopai"] - 1 == e) && (e = M);
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    G["height"] = 180 + 40 * (w.data["hules"]["length"] - 1);
                                }
                        } else if (W.Inst["isRoundEnd"](w.name)) {
                            if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                if (w.data["hules"][0].zimo) {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2177),
                                        U["color"] = "#ea3694";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (0 == v) {
                                            L["visible"] = !0;
                                            var e = h["hules"][0].seat;
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = (I > 0 ? '+' : '') + I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    G["height"] = 120;
                                } else {
                                    j["visible"] = !0;
                                    var U = j["getChildByName"]("info");
                                    U.text = game["Tools"]["strOfLocalization"](2178),
                                        U["color"] = "#ef3538";
                                    for (var R = j["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (v < h["hules"]["length"]) {
                                            L["visible"] = !0;
                                            var e = h["hules"][v].seat;
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = (I > 0 ? '+' : '') + I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    g["visible"] = !0,
                                        g.y = 80 + 40 * h["hules"]["length"],
                                        X["visible"] = !0,
                                        X.y = 83 + 40 * h["hules"]["length"];
                                    var U = X["getChildByName"]("chong");
                                    U["visible"] = !0;
                                    for (var R = X["getChildByName"]("player"), v = 0; v < R["numChildren"]; v++) {
                                        var L = R["getChildAt"](v);
                                        if (0 == v) {
                                            L["visible"] = !0;
                                            for (var e = 0, M = 0; M < h["delta_scores"]["length"]; M++)
                                                (h["delta_scores"][M] < h["delta_scores"][e] || h["baopai"] > 0 && h["delta_scores"][M] == h["delta_scores"][e] && h["baopai"] - 1 == e) && (e = M);
                                            L["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](e)["nickname"];
                                            var I = h["delta_scores"][e];
                                            L["getChildByName"]("point").text = I["toString"]();
                                        } else
                                            L["visible"] = !1;
                                    }
                                    G["height"] = 180 + 40 * (w.data["hules"]["length"] - 1);
                                }
                        } else
                            r["visible"] = !0, r.text = game["Tools"]["strOfLocalization"](3036), r["color"] = "#8ADB97", G["height"] = 120;
                        G["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            B["locking"] || (W.Inst["jumpRound"](V), B["close"]());
                        }, null, !1),
                            Z["getChildByName"]('bg')["height"] = Z["height"] - 4;
                    },
                    B;
            }
                (),
                V = function () {
                    function B(Q) {
                        var B = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = Q,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                B["locking"] || B["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                B["locking"] || B["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function () {
                                B["btn_up"]["visible"] = B["scrollview"].rate > 0,
                                    B["btn_down"]["visible"] = B["scrollview"]["need_scroll"] && B["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return B["prototype"].show = function (B, V) {
                        var W = this;
                        this["enable"] = !0,
                            this["locking"] = !0,
                            this["have0"] = V,
                            this.me["visible"] = !0,
                            this["scrollview"]["reset"](),
                            this["scrollview"]["addItem"](B + (V ? 1 : 0)),
                            Q["UIBase"]["anim_alpha_in"](this.me, {
                                y: 30
                            }, 100, 0, Laya["Handler"]["create"](this, function () {
                                W["locking"] = !1;
                            })),
                            this["btn_up"]["visible"] = !1,
                            this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                    },
                        B["prototype"]["close"] = function () {
                            var B = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                Q["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function () {
                                    B["locking"] = !1,
                                        B.me["visible"] = !1;
                                }));
                        },
                        B["prototype"]["renderInfo"] = function (Q) {
                            var B = this,
                                V = Q["index"],
                                Z = Q["container"];
                            Z["getChildByName"]("num").text = (V + (this["have0"] ? 0 : 1))["toString"](),
                                Z["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    B["locking"] || (W.Inst["jumpXun"](V + (B["have0"] ? 0 : 1)), B["close"]());
                                }, null, !1);
                            var S = Z,
                                v = [];
                            'en' == GameMgr["client_language"] ? (v.push(S["getChildByName"]("xun")), v.push(S["getChildByName"]("num"))) : (v.push(S["getChildByName"]("num")), v.push(S["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](v, 115, [10]);
                            for (var i = 1; i < S["numChildren"]; i++) {
                                var x = S["getChildAt"](i);
                                x.y = "haolong" == x.font ? 42 : 39;
                            }
                        },
                        B;
                }
                    (),
                W = function (W) {
                    function Z() {
                        var Q = W.call(this, new ui.mj["ob_replayUI"]()) || this;
                        return Q.root = null,
                            Q["label_chang"] = null,
                            Q["label_ju"] = null,
                            Q["label_xun"] = null,
                            Q["img_play"] = null,
                            Q["img_stop"] = null,
                            Q["btn_preround"] = null,
                            Q["btn_nextround"] = null,
                            Q["page_chang"] = null,
                            Q["page_xun"] = null,
                            Q["origin_actions"] = [],
                            Q["rounds"] = [],
                            Q["round_index"] = 0,
                            Q["action_index"] = 0,
                            Q["locking_time"] = 0,
                            Q["anim_time"] = 0,
                            Q["_auto_play"] = !1,
                            Q["locking"] = !1,
                            Z.Inst = Q,
                            Q;
                    }
                    return __extends(Z, W),
                        Object["defineProperty"](Z["prototype"], "auto_play", {
                            get: function () {
                                return this["_auto_play"];
                            },
                            set: function (Q) {
                                this["_auto_play"] = Q,
                                    this["img_play"]["visible"] = !Q,
                                    this["img_stop"]["visible"] = Q;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Z["prototype"]["onCreate"] = function () {
                            var Q = this;
                            this.root = this.me["getChildByName"]("root");
                            var W = this.me["getChildByName"]("root")["getChildByName"]("round");
                            W["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                Q["page_chang"]["locking"] || (Q["locking"], Q["auto_play"] && (Q["auto_play"] = !1), Q["page_xun"]["enable"] && Q["page_xun"]["close"](), Q["page_chang"]["enable"] ? Q["page_chang"]["close"]() : Q["page_chang"].show(Q["rounds"]));
                            }, null, !1),
                                this["label_chang"] = W["getChildByName"]("chang"),
                                this["label_ju"] = W["getChildByName"]('ju');
                            var Z = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            this["label_xun"] = Z["getChildByName"]("xun"),
                                Z["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["page_xun"]["locking"] || (Q["auto_play"] && (Q["auto_play"] = !1), Q["page_chang"]["enable"] && Q["page_chang"]["close"](), Q["page_xun"]["enable"] ? Q["page_xun"]["close"]() : Q["page_xun"].show(Q["rounds"][Q["round_index"]].xun["length"], 0 != Q["rounds"][Q["round_index"]].xun[0]));
                                }, null, !1),
                                this["page_chang"] = new B(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new V(this.me["getChildByName"]("info_xun")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["auto_play"] = !Q["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    return Q["locking"],
                                        Q["locking_time"] > Laya["timer"]["currTimer"] ? (Q["auto_play"] && (Q["auto_play"] = !1), void 0) : (Q["nextStep"](),
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify({
                                                    'record_click_action': "nextStep"
                                                }),
                                                onload: function (msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                        'record_click_action': "nextStep"
                                                    }));
                                                }
                                            })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    Q["locking"],
                                        Q["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause");
                        },
                        Z["prototype"]["isRoundEnd"] = function (Q) {
                            return "RecordNoTile" == Q || "RecordLiuJu" == Q || "RecordHule" == Q || "RecordHuleXueZhanEnd" == Q || "RecordGangResultEnd" == Q;
                        },
                        Z["prototype"].show = function (B) {
                            var V = this;
                            this["enable"] = !0,
                                this["origin_actions"] = B,
                                this["auto_play"] = !1,
                                this["page_chang"]["enable"] = !1,
                                this["page_chang"].me["visible"] = !1,
                                this["page_xun"]["enable"] = !1,
                                this["page_xun"].me["visible"] = !1,
                                this["initData"](),
                                this["locking"] = !0,
                                Q["UIBase"]["anim_alpha_in"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function () {
                                    V["locking"] = !1,
                                        Q["UI_ReplayWheel"].Inst["enable"] = !0;
                                })),
                                this["round_index"] = this["rounds"]["length"] - 1,
                                this["action_index"] = this["rounds"][this["round_index"]]["actions"]["length"] - 1,
                                this["_refreshBarshow"]();
                        },
                        Z["prototype"]["close"] = function () {
                            var B = this;
                            this["reset"](),
                                this["locking"] = !0,
                                Q["UIBase"]["anim_alpha_out"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function () {
                                    B["locking"] = !1,
                                        B["enable"] = !1,
                                        Q["UI_ReplayWheel"].Inst["enable"] = !1;
                                }));
                        },
                        Z["prototype"]["initData"] = function () {
                            var Q = null;
                            this["rounds"] = [];
                            for (var B = this["origin_actions"], V = 0; V < B["length"]; V++) {
                                var W = B[V];
                                null == Q && (Q = {
                                    xun: [],
                                    actions: []
                                }),
                                    Q["actions"].push(W),
                                    this["isRoundEnd"](W.name) && (this["pengding_xun"](Q), this["rounds"].push(Q), Q = null);
                            }
                            null != Q && (this["pengding_xun"](Q), this["rounds"].push(Q)),
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var Z = [];
                            'en' != GameMgr["client_language"] ? (Z.push(this["label_xun"]["parent"]["getChildByName"]("xun")), Z.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (Z.push(this["label_xun"]["parent"]["getChildByName"]("turn")), Z.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1,
                                this["btn_preround"]["visible"] = this["rounds"]["length"] > 1,
                                game["Tools"]["sprite_align_center"](Z, 80, [5]);
                        },
                        Z["prototype"]["reset"] = function () {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"]();
                        },
                        Z["prototype"]["pengding_xun"] = function (Q) {
                            Q.xun = [];
                            for (var B = view["DesktopMgr"].Inst.seat, V = !1, W = 0; W < Q["actions"]["length"]; W++) {
                                var Z = Q["actions"][W];
                                "RecordNewRound" == Z.name ? Z.data.ju == B && (V = !0, Q.xun.push(W)) : "RecordDealTile" == Z.name || "RecordChiPengGang" == Z.name || "RecordHuleXueZhanMid" == Z.name ? Z.data.seat == B && (V || (V = !0, Q.xun.push(W))) : ("RecordDiscardTile" == Z.name || "RecordAnGangAddGang" == Z.name || "RecordBaBei" == Z.name) && (V = !1);
                            }
                        },
                        Z["prototype"]["get_currentxun"] = function () {
                            var Q = this["rounds"][this["round_index"]];
                            if (0 == Q.xun["length"])
                                return 1;
                            for (var B = Q.xun["length"], V = 0; V < Q.xun["length"]; V++)
                                if (this["action_index"] < Q.xun[V]) {
                                    B = V;
                                    break;
                                }
                            return 0 > B && (B = 0),
                                B;
                        },
                        Z["prototype"]["nextStep"] = function (Q) {
                            if (void 0 === Q && (Q = !1), !(!Q && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= this["rounds"]["length"])) {
                                if (this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1 ? (this["round_index"]++, this["action_index"] = 0, this["round_index"] == this["rounds"]["length"] && (this["round_index"] = 0)) : this["action_index"]++, this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name) {
                                    var B = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    B != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](B)]["RecordLiPai"](0);
                                }
                                this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](this["rounds"][this["round_index"]]["actions"][this["action_index"]]),
                                    this["_refreshBarshow"]();
                            }
                        },
                        Z["prototype"]["_refreshBarshow"] = function () {
                            var Q = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? Q = "Round" : ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"]) && (Q += '第'), this["label_chang"].text = Q, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '东';
                                            break;
                                        case 1:
                                            Q += '南';
                                            break;
                                        case 2:
                                            Q += '西';
                                            break;
                                        case 3:
                                            Q += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '東';
                                            break;
                                        case 1:
                                            Q += '南';
                                            break;
                                        case 2:
                                            Q += '西';
                                            break;
                                        case 3:
                                            Q += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += '동';
                                            break;
                                        case 1:
                                            Q += '남';
                                            break;
                                        case 2:
                                            Q += '서';
                                            break;
                                        case 3:
                                            Q += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            Q += "East";
                                            break;
                                        case 1:
                                            Q += "South";
                                            break;
                                        case 2:
                                            Q += "West";
                                            break;
                                        case 3:
                                            Q += "North";
                                    }
                                this["label_chang"].text = Q,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var B = function (Q, B) {
                                for (var V = 0, W = 1; W < Q["numChildren"]; W++) {
                                    1 != W && (V += 3);
                                    var Z = Q["getChildAt"](W);
                                    V += Z["textField"]["textWidth"] * Z["scaleX"];
                                }
                                for (var S = Q["width"] / 2 - V / 2, W = 1; W < Q["numChildren"]; W++) {
                                    var Z = Q["getChildAt"](W);
                                    Z.x = S,
                                        S += Z["textField"]["textWidth"] * Z["scaleX"] + 3,
                                        Z.y = "haolong" == Z.font ? B + 3 : B;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var V = [];
                            'en' != GameMgr["client_language"] ? (V.push(this["label_xun"]["parent"]["getChildByName"]("xun")), V.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (V.push(this["label_xun"]["parent"]["getChildByName"]("turn")), V.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](V, 80, [5]),
                                B(this["label_chang"]["parent"], 40);
                        },
                        Z["prototype"]["doRecord"] = function (Q) {
                            try {
                                var B = 0;
                                switch (Q.name) {
                                    case "RecordNewRound":
                                        this["anim_time"] = view["ActionNewRound"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordChangeTile":
                                        this["anim_time"] = view["ActionChangeTile"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordSelectGap":
                                        this["anim_time"] = view["ActionSelectGap"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordDiscardTile":
                                        this["anim_time"] = view["ActionDiscardTile"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordDealTile":
                                        this["anim_time"] = view["ActionDealTile"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordChiPengGang":
                                        this["anim_time"] = view["ActionChiPengGang"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordAnGangAddGang":
                                        this["anim_time"] = view["ActionAnGangAddGang"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordBaBei":
                                        this["anim_time"] = view["ActionBabei"]["record"](Q.data),
                                            B = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordHule":
                                        this["anim_time"] = view["ActionHule"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordLiuJu":
                                        this["anim_time"] = view["ActionLiuJu"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordNoTile":
                                        this["anim_time"] = view["ActionNoTile"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        this["anim_time"] = view["ActionHuleXueZhanMid"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        this["anim_time"] = view["ActionHuleXueZhanEnd"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordGangResult":
                                        this["anim_time"] = view["ActionGangResult"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordGangResultEnd":
                                        this["anim_time"] = view["ActionGangResultEnd"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordRevealTile":
                                        this["anim_time"] = view["ActionRevealTile"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordUnveilTile":
                                        this["anim_time"] = view["ActionUnveilTile"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordLockTile":
                                        this["anim_time"] = view["ActionLockTile"]["record"](Q.data),
                                            B = this["anim_time"];
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        this["anim_time"] = view["ActionFillAwaitingTiles"]["record"](Q.data),
                                            B = this["anim_time"];
                                }
                                return this["anim_time"] += Laya["timer"]["currTimer"],
                                    B;
                            } catch (V) {
                                var W = {};
                                return W["error"] = V["message"],
                                    W["stack"] = V["stack"],
                                    W["method"] = "UI_Ob_Replay doRecord",
                                    W.name = Q.name,
                                    W.data = Q.data,
                                    GameMgr.Inst["onFatalError"](W),
                                    1000000;
                            }
                        },
                        Z["prototype"]["doFastRecord"] = function (Q) {
                            if (Q) {
                                try {
                                    switch (Q.name) {
                                        case "RecordNewRound":
                                            view["ActionNewRound"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordChangeTile":
                                            view["ActionChangeTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordSelectGap":
                                            view["ActionSelectGap"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordDiscardTile":
                                            view["ActionDiscardTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordDealTile":
                                            view["ActionDealTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordChiPengGang":
                                            view["ActionChiPengGang"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordAnGangAddGang":
                                            view["ActionAnGangAddGang"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordHule":
                                            view["ActionHule"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordLiuJu":
                                            view["ActionLiuJu"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordNoTile":
                                            view["ActionNoTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordBaBei":
                                            view["ActionBabei"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordHuleXueZhanMid":
                                            view["ActionHuleXueZhanMid"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordHuleXueZhanEnd":
                                            view["ActionHuleXueZhanEnd"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordGangResult":
                                            view["ActionGangResult"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordGangResultEnd":
                                            view["ActionGangResultEnd"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordRevealTile":
                                            view["ActionRevealTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordLockTile":
                                            view["ActionLockTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordUnveilTile":
                                            view["ActionUnveilTile"]["fastrecord"](Q.data);
                                            break;
                                        case "RecordFillAwaitingTiles":
                                            view["ActionFillAwaitingTiles"]["fastrecord"](Q.data);
                                    }
                                } catch (B) {
                                    var V = {};
                                    return V["error"] = B["message"],
                                        V["stack"] = B["stack"],
                                        V["method"] = "UI_Ob_Replay doRecord",
                                        V.name = Q.name,
                                        V.data = Q.data,
                                        GameMgr.Inst["onFatalError"](V),
                                        1000000;
                                }
                                return 0;
                            }
                        },
                        Z["prototype"]["update"] = function () {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        Z["prototype"]["jumpToLastRoundXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var Q = this["rounds"][this["round_index"]],
                                B = Q["actions"]["length"] - 3;
                            1 > B && (B = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': B - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': B - 1
                                        }));
                                    }
                                })),
                                this["_jumpStep"](this["round_index"], B);
                        },
                        Z["prototype"]["nextXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                if (this["action_index"] != Q["actions"]["length"] - 1) {
                                    var B = 0;
                                    if (0 == Q.xun["length"])
                                        B = Q["actions"]["length"] - 1;
                                    else if (Q.xun[0] > this["action_index"])
                                        B = Q.xun[0];
                                    else {
                                        var V = this["get_currentxun"]();
                                        B = V == Q.xun["length"] ? Q["actions"]["length"] - 1 : Q.xun[V];
                                    }
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': B - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': B - 1
                                            }));
                                        }
                                    }));
                                    this["_jumpStep"](this["round_index"], B);
                                }
                            }
                        },
                        Z["prototype"]["preXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == Q["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var B = 0;
                                if (0 == Q.xun["length"])
                                    B = 0;
                                else if (Q.xun[0] > this["action_index"])
                                    B = 0;
                                else {
                                    var V = this["get_currentxun"]() - 1;
                                    B = 0 == V ? 0 : Q.xun[V - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': B - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': B - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], B);
                            }
                        },
                        Z["prototype"]["preStep"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var Q = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == Q["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0);
                            }
                        },
                        Z["prototype"]["nextRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        Z["prototype"]["preRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        Z["prototype"]["jumpRound"] = function (Q) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > Q || Q >= this["rounds"]["length"] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Q
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': Q
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](Q, 0), void 0);
                        },
                        Z["prototype"]["jumpXun"] = function (Q) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var B = this["rounds"][this["round_index"]],
                                    V = 0;
                                V = 0 == B.xun["length"] ? 0 : 0 == Q ? 0 : B.xun[Q - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': V - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': V - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], V);
                            }
                        },
                        Z["prototype"]["onWheelClick"] = function () {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this['nextStep'](), void 0);
                        },
                        Z["prototype"]["_jumpStep"] = function (Q, B) {
                            var V = this["rounds"][Q];
                            this["round_index"] = Q,
                                B >= V["actions"]["length"] && (B = V["actions"]["length"] - 1),
                                V["actions"][B] && V["actions"][B + 1] && "RecordNewCard" == V["actions"][B].name && B++;
                            for (var W = 0; B > W; W++) {
                                if (W > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][W - 1].name) {
                                    var Z = this["rounds"][this["round_index"]]["actions"][W - 1].data.seat;
                                    Z != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](V["actions"][W]);
                            }
                            if (B == V["actions"]["length"] - 1)
                                this["action_index"] = B - 1, this["nextStep"]();
                            else {
                                if (B > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name) {
                                    var Z = this["rounds"][this["round_index"]]["actions"][B - 1].data.seat;
                                    Z != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](V["actions"][B]),
                                    this["action_index"] = B,
                                    this["_refreshBarshow"]();
                            }
                        },
                        Z["prototype"]["onChangeMainBody"] = function () {
                            var Q = this["round_index"],
                                B = this["action_index"];
                            this["initData"](),
                                this["reset"](),
                                Q >= this["rounds"]["length"] || 0 > Q || this["_jumpStep"](Q, B);
                        },
                        Z.Inst = null,
                        Z;
                }
                    (Q["UIBase"]);
            Q["UI_Ob_Replay"] = W;
        }
            (uiscript || (uiscript = {}));




        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        for (var V = 0, W = B["gang_infos"], Z = [], S = 0; S < W["delta_scores"]["length"]; S++) {
                            var v = {
                                title_id: 0,
                                score: 0,
                                delta: 0
                            };
                            W["delta_scores"][S] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S, "emoji_7", -1), v["delta"] = W["delta_scores"][S]) : W["delta_scores"][S] < 0 && (v["delta"] = W["delta_scores"][S], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S, "emoji_8", -1)),
                                v["score"] = W["old_scores"][S],
                                Z.push(v);
                        }
                        if (Laya["timer"].once(200, this, function () {
                            Q["DesktopMgr"].Inst["setScores"](W["scores"]);
                        }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](Z), V += 2000, W["hules_history"] && W["hules_history"]["length"] > 0) {
                            for (var i = 0, x = W["hules_history"]; i < x["length"]; i++) {
                                var l = x[i],
                                    m = Q["DesktopMgr"].Inst["seat2LocalPosition"](l.seat);
                                Q["DesktopMgr"].Inst["players"][m]["onXuezhanEnd"](l.hand, !1);
                            }
                            Laya["timer"].once(V, this, function () {
                                uiscript["UIMgr"].Inst["ShowWin"](W, !1);
                            });
                        } else
                            Laya["timer"].once(V, this, function () {
                                Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                            });
                        Laya["timer"].once(V, this, function () {
                            Q["DesktopMgr"].Inst["ActionRunComplete"]();
                        });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](B));
                        var V = B["gang_infos"];
                        V["hules_history"] && V["hules_history"]["length"] > 0 ? uiscript["UIMgr"].Inst["ShowWin"](V, !1) : Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                    },
                    V["record"] = function (Q) {
                        return this.play(Q),
                            5100;
                    },
                    V["fastrecord"] = function (B) {
                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            this["fastplay"](B, 1000);
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionGangResultEnd"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B = function (B) {
                function V() {
                    return null !== B && B["apply"](this, arguments) || this;
                }
                return __extends(V, B),
                    V.play = function (B) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(B),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                            }
                        }));
                        var V = this;
                        app.Log.log("ActionNotile play data:" + JSON["stringify"](B));
                        for (var W = 0, Z = 1; 4 > Z; Z++) {
                            var S = Q["DesktopMgr"].Inst["players"][Z]["discardcd"] - Laya["timer"]["currTimer"];
                            S > W && (W = S);
                        }
                        W += 1000,
                            Laya["timer"].once(W, this, function () {
                                Q["BgmListMgr"]["stopBgm"]();
                                var W = B["players"];
                                Q["DesktopMgr"].Inst["gameing"] = !1,
                                    uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                    uiscript["UI_TingPai"].Inst["reset"](),
                                    uiscript["UI_TingPai"].Inst["setZhengting"](!1),
                                    B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !0);
                                for (var Z = 0; Z < W["length"]; Z++) {
                                    for (var S = Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Z)], v = [], i = 0; i < W[Z].hand["length"]; i++)
                                        v.push(mjcore["MJPai"]["Create"](W[Z].hand[i]));
                                    v = v.sort(mjcore["MJPai"]["Distance"]),
                                        Q["DesktopMgr"].Inst["is_chuanma_mode"]() ? S["onChuanmaNoTile"](v, !1) : S["already_xuezhan_hule_state"] ? S["onXuezhanEnd"](v, !1) : S["Huangpai"](W[Z]["tingpai"], v, !1);
                                }
                                Laya["timer"].once(1000, V, function () {
                                    var Z,
                                        S = !1,
                                        v = !1;
                                    if (Q["DesktopMgr"].Inst["xuezhan"] || Q["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                        var i = !1;
                                        if (B["scores"] && B["scores"]["length"] > 0) {
                                            for (var x = 0; x < B["scores"]["length"]; x++) {
                                                if (B["scores"][x]["hasOwnProperty"]("delta_scores"))
                                                    for (var l = 0; l < Q["DesktopMgr"].Inst["player_count"] && l < B["scores"][x]["delta_scores"]["length"]; l++)
                                                        0 != B["scores"][x]["delta_scores"][l] && (i = !0);
                                                if (B["scores"][x]["hasOwnProperty"]("taxes"))
                                                    for (var l = 0; l < Q["DesktopMgr"].Inst["player_count"] && l < B["scores"][x]["taxes"]["length"]; l++)
                                                        0 != B["scores"][x]["taxes"][l] && (v = !0);
                                            }
                                            Z = B["scores"][0]["lines"];
                                        }
                                        var m = !1;
                                        B["liujumanguan"] && (m = !0),
                                            B["hules_history"] && B["hules_history"]["length"] > 0 && (m = !0),
                                            S = !v && !i && !m;
                                    }
                                    uiscript["UI_Huleshow"].Inst["showLiuJu"](W, Laya["Handler"]["create"](V, function () {
                                        if (Q["DesktopMgr"].Inst["xuezhan"] || Q["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                            var W = !1,
                                                S = [],
                                                i = [];
                                            if (B["scores"] && B["scores"]["length"] > 0) {
                                                for (var x = 0; x < Q["DesktopMgr"].Inst["player_count"]; x++)
                                                    S.push({
                                                        score: Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](x)]["score"],
                                                        title_id: 0,
                                                        delta: 0
                                                    }), i.push({
                                                        score: 0,
                                                        title_id: 0,
                                                        delta: 0
                                                    });
                                                for (var x = 0; x < B["scores"]["length"]; x++) {
                                                    if (B["liujumanguan"] && (S[B["scores"][x].seat]["title_id"] = -1), B["scores"][x]["hasOwnProperty"]("delta_scores"))
                                                        for (var l = 0; l < Q["DesktopMgr"].Inst["player_count"] && l < B["scores"][x]["delta_scores"]["length"]; l++)
                                                            S[l]["delta"] += B["scores"][x]["delta_scores"][l];
                                                    if (B["scores"][x]["hasOwnProperty"]("taxes"))
                                                        for (var l = 0; l < Q["DesktopMgr"].Inst["player_count"] && l < B["scores"][x]["taxes"]["length"]; l++)
                                                            i[l]["delta"] += B["scores"][x]["taxes"][l];
                                                }
                                                if (Q["DesktopMgr"].Inst["is_chuanma_mode"]())
                                                    for (var x = 0; x < Q["DesktopMgr"].Inst["player_count"]; x++)
                                                        0 != S[x]["delta"] && (W = !0), i[x]["score"] = S[x]["score"] + S[x]["delta"];
                                                else
                                                    for (var x = 0; x < Q["DesktopMgr"].Inst["player_count"]; x++)
                                                        0 != S[x]["delta"] && (W = !0);
                                            }
                                            if (Q["DesktopMgr"].Inst["is_chuanma_mode"]() && v) {
                                                var m = V,
                                                    s = function () {
                                                        var Q = !1;
                                                        B["liujumanguan"] && (Q = !0, uiscript["UIMgr"].Inst["ShowWin"](B["scores"], !0)),
                                                            B["hules_history"] && B["hules_history"]["length"] > 0 && (Q = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](B)),
                                                            Q ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : m["onXuezhanNoWinNext"]();
                                                    };
                                                W ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](S, i, Laya["Handler"]["create"](null, s))) : uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](null, i, Laya["Handler"]["create"](null, s)),
                                                    Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                            } else {
                                                var f = V,
                                                    s = function () {
                                                        var Q = !1;
                                                        B["liujumanguan"] && (Q = !0, uiscript["UIMgr"].Inst["ShowWin"](B["scores"], !0)),
                                                            B["hules_history"] && B["hules_history"]["length"] > 0 && (Q = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](B)),
                                                            Q ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : f["onXuezhanNoWinNext"]();
                                                    };
                                                W ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](S, Laya["Handler"]["create"](null, s), Q["DesktopMgr"].Inst["is_chuanma_mode"](), Z)) : s(),
                                                    Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                            }
                                        } else {
                                            if (B["liujumanguan"])
                                                uiscript["UIMgr"].Inst["ShowWin"](B["scores"], !0);
                                            else {
                                                var z = [];
                                                if (B["scores"] && B["scores"]["length"] > 0) {
                                                    for (var x = 0; x < Q["DesktopMgr"].Inst["player_count"]; x++)
                                                        z.push({
                                                            old_score: B["scores"][0]["old_scores"][x],
                                                            delta: 0
                                                        });
                                                    for (var x = 0; x < B["scores"]["length"]; x++)
                                                        if (B["scores"][x]["hasOwnProperty"]("delta_scores"))
                                                            for (var l = 0; l < Q["DesktopMgr"].Inst["player_count"] && l < B["scores"][x]["delta_scores"]["length"]; l++)
                                                                z[l]["delta"] += B["scores"][x]["delta_scores"][l];
                                                } else
                                                    for (var x = 0; x < Q["DesktopMgr"].Inst["player_count"]; x++)
                                                        z.push({
                                                            old_score: Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](x)]["score"],
                                                            delta: 0
                                                        });
                                                uiscript["UI_ScoreChange"].Inst.show(z);
                                            }
                                            Q["DesktopMgr"].Inst["ActionRunComplete"]();
                                        }
                                    }), S);
                                });
                            });
                    },
                    V["fastplay"] = function (B) {
                        app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](B));
                        Q["BgmListMgr"]["stopBgm"]();
                        var V = B["players"];
                        Q["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                        var W = [!1, !1, !1, !1];
                        uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_TingPai"].Inst["setZhengting"](!1);
                        for (var Z = 0; Z < Q["DesktopMgr"].Inst["player_count"]; Z++) {
                            for (var S = [], v = 0; v < V[Z].hand["length"]; v++)
                                S.push(mjcore["MJPai"]["Create"](V[Z].hand[v]));
                            S = S.sort(mjcore["MJPai"]["Distance"]),
                                Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["Huangpai"](V[Z]["tingpai"], S, !0),
                                W[Q["DesktopMgr"].Inst["seat2LocalPosition"](Z)] = V[Z]["tingpai"];
                        }
                        if (B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1), B["liujumanguan"])
                            uiscript["UIMgr"].Inst["ShowWin"](B["scores"], !0);
                        else {
                            var i = [];
                            if (B["scores"] && B["scores"]["length"] > 0) {
                                for (var Z = 0; Z < Q["DesktopMgr"].Inst["player_count"]; Z++)
                                    i.push({
                                        old_score: B["scores"][0]["old_scores"][Z],
                                        delta: 0
                                    });
                                for (var Z = 0; Z < B["scores"]["length"]; Z++)
                                    if (B["scores"][Z]["hasOwnProperty"]("delta_scores"))
                                        for (var v = 0; v < Q["DesktopMgr"].Inst["player_count"] && v < B["scores"][Z]["delta_scores"]["length"]; v++)
                                            i[v]["delta"] += B["scores"][Z]["delta_scores"][v];
                            } else
                                for (var Z = 0; Z < Q["DesktopMgr"].Inst["player_count"]; Z++)
                                    i.push({
                                        old_score: Q["DesktopMgr"].Inst["players"][Q["DesktopMgr"].Inst["seat2LocalPosition"](Z)]["score"],
                                        delta: 0
                                    });
                            uiscript["UI_ScoreChange"].Inst.show(i);
                        }
                    },
                    V["record"] = function (Q) {
                        return app.Log.log("ActionNewRound record data:" + JSON["stringify"](Q)),
                            this.play(Q),
                            8000;
                    },
                    V["fastrecord"] = function (B) {
                        Q["BgmListMgr"]["stopBgm"](),
                            Q["DesktopMgr"].Inst["gameing"] = !1;
                        for (var V = [], W = 0; W < B["players"]["length"]; W++)
                            V.push({
                                seat: W
                            });
                        B.muyu && Q["DesktopMgr"].Inst["onMuyuChange"](B.muyu, !1),
                            uiscript["UI_Huleshow"].Inst["showLiuJu"](V, null);
                    },
                    V["onXuezhanNoWinNext"] = function () {
                        var B = this;
                        if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"].play)
                            null != Q["DesktopMgr"].Inst["gameEndResult"] ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1, uiscript["UIMgr"].Inst["ShowGameEnd"]()) : (Q["DesktopMgr"].Inst["Reset"](), Laya["timer"].once(200, this, function () {
                                Q["DesktopMgr"].Inst["timestoped"] ? Q["DesktopMgr"].Inst["handles_after_timerun"].push(Laya["Handler"]["create"](B, function () {
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                                })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                            }));
                        else if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["paipu"])
                            uiscript["UI_Replay"].Inst["nextStep"](!0);
                        else if (Q["DesktopMgr"].Inst.mode == Q["EMJMode"]["live_broadcast"]) {
                            uiscript["UI_Huleshow"].Inst["enable"] = !1,
                                uiscript["UI_Live_Broadcast"].Inst["onScoreChangeConfirm"]();
                        }
                    },
                    V;
            }
                (Q["ActionBase"]);
            Q["ActionNoTile"] = B;
        }
            (view || (view = {}));



        !function (Q) {
            var B,
                V = function () {
                    function B(B) {
                        var V = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = B,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["switch"]();
                            }, null, !1),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_show_hand"] = !V["_show_hand"],
                                    V["_choosed_show_hand"]["visible"] = V["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](V["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_show_paopai"] = !V["_show_paopai"],
                                    V["_choosed_show_paopai"]["visible"] = V["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](V["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                Q["UI_Ob_Replay"].Inst["locking"] || Q["UI_Ob_Replay"].Inst["anim_time"] > Laya["timer"]["currTimer"] || "RecordHuleXueZhanEnd" != W.Inst["last_action_name"] && "RecordHule" != W.Inst["last_action_name"] && "RecordLiuJu" != W.Inst["last_action_name"] && "RecordNoTile" != W.Inst["last_action_name"] && ("RecordNewRound" == W.Inst["last_action_name"] && W.Inst["during_do_cd"] || (V["_show_replay"] = !V["_show_replay"], V["_choosed_show_replay"]["visible"] = V["_show_replay"], V["_show_replay"] ? W.Inst["enterReplay"]() : W.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this.me["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return B["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this["_show_hand"] = !1,
                            this.me.x = -258,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                            this["_show_paopai"] = !1,
                            this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                            this["_show_replay"] = !1,
                            this["_choosed_show_replay"]["visible"] = this["_show_replay"];
                    },
                        B["prototype"]["switch"] = function () {
                            var Q = this,
                                B = -258;
                            this.me.x < -100 && (B = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: B
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    Q["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        B;
                }
                    ();
            !function (Q) {
                Q[Q.none = 0] = "none",
                    Q[Q["gameing"] = 1] = "gameing",
                    Q[Q["replay"] = 2] = "replay";
            }
                (B || (B = {}));
            var W = function (W) {
                function Z() {
                    var Q = W.call(this, new ui.mj["live_broadcastUI"]()) || this;
                    return Q["state"] = B.none,
                        Q["segments"] = [],
                        Q["_time0"] = 0,
                        Q["_time_start"] = 0,
                        Q["segment_index"] = 0,
                        Q["unit_index"] = 0,
                        Q["during_asknew"] = !1,
                        Q["retry_loadtime"] = 0,
                        Q["segment_end_millisecond"] = 0,
                        Q["guanzhanconfig"] = null,
                        Q["do_unit_cd"] = 0,
                        Q["time_stop_length"] = 0,
                        Q["time_stop_start_time"] = 0,
                        Q["_last_action_name"] = '',
                        Q["have_gameend"] = !1,
                        Q["is_realtime"] = !1,
                        Q["pending_units"] = [],
                        Z.Inst = Q,
                        app["NetAgent"]["AddListener2MJ"]("NotifyObserveData", Laya["Handler"]["create"](Q, function (B) {
                            Q["pending_units"].push(B);
                        })),
                        Q;
                }
                return __extends(Z, W),
                    Z["fetchInfo"] = function (B, V) {
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                            game_uuid: B
                        }, function (W, Z) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(Z),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Z));
                                }
                            }));
                            W || Z["error"] ? (Q["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", W, Z), V && V["runWith"]({
                                success: !1
                            })) : (app.Log.log("fetchGameLiveInfo res:" + JSON["stringify"](Z)), Z["left_start_seconds"] ? Q["UI_WaitOb"].Inst.show(B, Z["left_start_seconds"], V) : V && V["runWith"]({
                                success: !0,
                                data: Z
                            }));
                        });
                    },
                    Z["goToWatch"] = function (B, V, W) {
                        var S = this;
                        app.Log.log("goToWatch res:" + JSON["stringify"](V)),
                            Q["UI_Loading"].Inst.show("enter_mj"),
                            game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                            GameMgr.Inst["onLoadStart"]('ob');
                        for (var v = V["live_head"], i = [null, null, null, null], x = 0; x < v["players"]["length"]; x++) {
                            for (var l = -1, m = 0; m < v["seat_list"]["length"]; m++)
                                if (v["seat_list"][m] == v["players"][x]["account_id"]) {
                                    l = m;
                                    break;
                                }
                            -1 != l ? i[l] = v["players"][x] : app.Log["Error"]("goToWatch " + JSON["stringify"](v["players"][x]) + "未找到位置");
                        }
                        var s = game["Tools"]["strOfLocalization"](2003),
                            f = v["game_config"].mode;
                        f["extendinfo"] && (s = game["Tools"]["strOfLocalization"](2004)),
                            f["detail_rule"] && f["detail_rule"]["ai_level"] && (1 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2003)), 2 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2004)));
                        for (var x = 0; x < i["length"]; x++)
                            null == i[x] && (i[x] = {
                                nickname: s,
                                avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                level: {
                                    id: "10101"
                                },
                                level3: {
                                    id: "20101"
                                },
                                character: {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                }
                            });
                        game["Scene_MJ"].Inst["openMJRoom"]({
                            mode: f
                        }, i, Laya["Handler"]["create"](this, function () {
                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](v["game_config"])), i, W, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](S, function () {
                                Q["UI_Loading"].Inst["setProgressVal"](0.7),
                                    Laya["timer"].once(1000, S, function () {
                                        GameMgr.Inst["EnterMJ"](),
                                            Q["UI_Loading"].Inst["setProgressVal"](0.8),
                                            Z.Inst["startLive"](B);
                                    });
                            }));
                        }), Laya["Handler"]["create"](this, function (B) {
                            return Q["UI_Loading"].Inst["setProgressVal"](0.7 * B);
                        }, null, !1));
                    },
                    Object["defineProperty"](Z["prototype"], "during_do_cd", {
                        get: function () {
                            return this["enable"] ? Laya["timer"]["currTimer"] < this["do_unit_cd"] : Q["UI_Live_Broadcast1"].Inst["during_do_cd"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](Z["prototype"], "during_play", {
                        get: function () {
                            return this["enable"] ? this["state"] == B["gameing"] : Q["UI_Live_Broadcast1"].Inst["during_play"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](Z["prototype"], "last_action_name", {
                        get: function () {
                            return this["enable"] ? this["_last_action_name"] : Q["UI_Live_Broadcast1"].Inst["last_action_name"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Z["prototype"]["onCreate"] = function () {
                        this["guanzhanconfig"] = new V(this.me["getChildByName"]("config"));
                    },
                    Z["prototype"]["onDisable"] = function () {
                        Laya["timer"]["clearAll"](this),
                            this["pending_units"] = [];
                    },
                    Z["prototype"]["_doRecord"] = function (Q, B, V) {
                        switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = Q, Q) {
                            case "RecordNewRound":
                                return view["ActionNewRound"]["record"](B, V);
                            case "RecordChangeTile":
                                return view["ActionChangeTile"]["record"](B, V);
                            case "RecordSelectGap":
                                return view["ActionSelectGap"]["record"](B, V);
                            case "RecordDiscardTile":
                                return view["ActionDiscardTile"]["record"](B, V);
                            case "RecordDealTile":
                                return view["ActionDealTile"]["record"](B, V);
                            case "RecordChiPengGang":
                                return view["ActionChiPengGang"]["record"](B, V);
                            case "RecordAnGangAddGang":
                                return view["ActionAnGangAddGang"]["record"](B, V);
                            case "RecordHule":
                                return view["ActionHule"]["record"](B);
                            case "RecordLiuJu":
                                return view["ActionLiuJu"]["record"](B);
                            case "RecordNoTile":
                                return view["ActionNoTile"]["record"](B);
                            case "RecordBaBei":
                                return view["ActionBabei"]["record"](B);
                            case "RecordHuleXueZhanMid":
                                return view["ActionHuleXueZhanMid"]["record"](B);
                            case "RecordHuleXueZhanEnd":
                                return view["ActionHuleXueZhanEnd"]["record"](B);
                            case "RecordGangResult":
                                return view["ActionGangResult"]["record"](B);
                            case "RecordGangResultEnd":
                                return view["ActionGangResultEnd"]["record"](B);
                            case "RecordRevealTile":
                                return view["ActionRevealTile"]["record"](B);
                            case "RecordLockTile":
                                return view["ActionLockTile"]["record"](B);
                            case "RecordUnveilTile":
                                return view["ActionUnveilTile"]["record"](B);
                            case "RecordNewCard":
                                return view["ActionNewCard"]["record"](B);
                            case "RecordFillAwaitingTiles":
                                return view["ActionFillAwaitingTiles"]["record"](B);
                        }
                        return 0;
                    },
                    Z["prototype"]["_doFastRecord"] = function (Q, B, V) {
                        try {
                            switch (this["_last_action_name"] = Q, Q) {
                                case "RecordNewRound":
                                    view["ActionNewRound"]["fastrecord"](B, V);
                                    break;
                                case "RecordChangeTile":
                                    view["ActionChangeTile"]["fastrecord"](B, V);
                                    break;
                                case "RecoreSelectGap":
                                    view["ActionSelectGap"]["fastrecord"](B, V);
                                    break;
                                case "RecordDiscardTile":
                                    view["ActionDiscardTile"]["fastrecord"](B, V);
                                    break;
                                case "RecordDealTile":
                                    view["ActionDealTile"]["fastrecord"](B, V);
                                    break;
                                case "RecordChiPengGang":
                                    view["ActionChiPengGang"]["fastrecord"](B, V);
                                    break;
                                case "RecordAnGangAddGang":
                                    view["ActionAnGangAddGang"]["fastrecord"](B, V);
                                    break;
                                case "RecordHule":
                                    view["ActionHule"]["fastrecord"](B);
                                    break;
                                case "RecordLiuJu":
                                    view["ActionLiuJu"]["fastrecord"](B);
                                    break;
                                case "RecordNoTile":
                                    view["ActionNoTile"]["fastrecord"](B);
                                    break;
                                case "RecordBaBei":
                                    view["ActionBabei"]["fastrecord"](B);
                                    break;
                                case "RecordHuleXueZhanMid":
                                    view["ActionHuleXueZhanMid"]["fastrecord"](B);
                                    break;
                                case "RecordHuleXueZhanEnd":
                                    view["ActionHuleXueZhanEnd"]["fastrecord"](B);
                                    break;
                                case "RecordRevealTile":
                                    view["ActionRevealTile"]["fastrecord"](B);
                                    break;
                                case "RecordLockTile":
                                    view["ActionLockTile"]["fastrecord"](B);
                                    break;
                                case "RecordUnveilTile":
                                    view["ActionUnveilTile"]["fastrecord"](B);
                                    break;
                                case "RecordNewCard":
                                    view["ActionNewCard"]["fastrecord"](B);
                                    break;
                                case "RecordFillAwaitingTiles":
                                    view["ActionFillAwaitingTiles"]["fastrecord"](B);
                            }
                        } catch (W) {
                            var Z = {};
                            return Z["error"] = W["message"],
                                Z["stack"] = W["stack"],
                                Z["method"] = "ui_live_broadcast doFastRecord",
                                Z.name = Q,
                                Z.data = B,
                                GameMgr.Inst["onFatalError"](Z),
                                1000000;
                        }
                    },
                    Z["prototype"]["_doUnit"] = function (B, V, W) {
                        if (V) {
                            if (1 == B["category"])
                                return (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_fast_action': B
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_fast_action': B
                                        }));
                                    }
                                })), this["_doFastRecord"](B.name, B.data, W), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                            if ("GameNewRoundState" == B.name) {
                                for (var Z = 0; Z < B.data["seat_states"]["length"]; Z++)
                                    view["DesktopMgr"]["player_link_state"][Z] = B.data["seat_states"][Z];
                                Q["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == B.name ? (view["DesktopMgr"].Inst["gameEndResult"] = B.data["result"], this["enable"] = !1, Q["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == B.name ? Q["UI_DesktopInfo"].Inst["onPlayerConnectionState"](B.data) : "GameEndAction" == B.name ? 3 == B.data["state"] && Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == B.name && (view["DesktopMgr"].Inst["setGameStop"](B.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += B["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? B["timestamp"] : -1);
                            return -1;
                        }
                        if (1 == B["category"]) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'live_action': B
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'live_action': B
                                    }));
                                }
                            }));
                            var S = this["_doRecord"](B.name, B.data, W);
                            return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                S;
                        }
                        if ("GameNewRoundState" == B.name) {
                            for (var Z = 0; Z < B.data["seat_states"]["length"]; Z++)
                                view["DesktopMgr"]["player_link_state"][Z] = B.data["seat_states"][Z];
                            Q["UI_DesktopInfo"].Inst["refreshLinks"]();
                        } else
                            "NotifyGameEndResult" == B.name ? (view["DesktopMgr"].Inst["gameEndResult"] = B.data["result"], this["enable"] = !1, Q["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == B.name ? Q["UI_DesktopInfo"].Inst["onGameBroadcast"](B.data) : "NotifyPlayerConnectionState" == B.name ? Q["UI_DesktopInfo"].Inst["onPlayerConnectionState"](B.data) : "GameEndAction" == B.name ? 3 == B.data["state"] && Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                game["Scene_MJ"].Inst["ForceOut"]();
                            })) : "NotifyGamePause" == B.name && (view["DesktopMgr"].Inst["setGameStop"](B.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += B["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? B["timestamp"] : -1);
                        return -1;
                    },
                    Z["prototype"]["_parseUnit"] = function (Q) {
                        var B = net["MessageWrapper"]["decodeMessage"](Q["action_data"]);
                        return {
                            timestamp: Q["timestamp"],
                            category: Q["action_category"],
                            name: B["$type"].name,
                            data: B
                        };
                    },
                    Z["prototype"]["_loadUnit"] = function (Q, B, V) {
                        var W = this,
                            Z = new Laya["HttpRequest"]();
                        Z.once(Laya["Event"]["COMPLETE"], this, function (Z) {
                            if (V)
                                try {
                                    var S = new Laya.Byte();
                                    S["writeArrayBuffer"](Z),
                                        W["last_success_segment_url"] = B;
                                    for (var v = net["MessageWrapper"]["decodeMessage"](S["getUint8Array"](0, S["length"])), i = [], x = 0; x < v["actions"]["length"]; x++)
                                        i.push(W["_parseUnit"](v["actions"][x]));
                                    V["runWith"]({
                                        success: !0,
                                        id: Q,
                                        units: i,
                                        url: B
                                    });
                                } catch (l) {
                                    V["runWith"]({
                                        success: !1,
                                        id: Q,
                                        type: "parse_error",
                                        url: B
                                    });
                                }
                        }),
                            Z.once(Laya["Event"]["ERROR"], this, function () {
                                V && V["runWith"]({
                                    success: !1,
                                    id: Q,
                                    url: B,
                                    type: "download_timeout"
                                });
                            });
                        var S = [];
                        Z.send(B, '', "get", "arraybuffer", S);
                    },
                    Z["prototype"]["startLive"] = function (B) {
                        var V = this;
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                            game_uuid: B
                        }, function (W, Z) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(Z),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Z));
                                }
                            }));
                            if (W || Z["error"] || Z["left_start_seconds"])
                                GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                    condition: "loading",
                                    uuid: B,
                                    segment_name: '',
                                    last_success_segment_name: '',
                                    error_info: "download_timeout",
                                    gametime_since_start: 0
                                }), Q["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", W, Z), V["_forceQuit"]();
                            else {
                                var S = Z;
                                V["segment_index"] = 0,
                                    V["segments"] = [],
                                    V["last_success_segment_url"] = '',
                                    V["_time0"] = S["now_millisecond"],
                                    V["_time_start"] = Laya["timer"]["currTimer"];
                                var v = 0,
                                    i = !1;
                                V["game_uuid"] = B,
                                    V["enable"] = !0,
                                    V["guanzhanconfig"]["reset"](),
                                    Q["UI_Ob_Replay"].Inst["enable"] = !1,
                                    V["do_unit_cd"] = 0,
                                    V["have_gameend"] = !1,
                                    V["is_realtime"] = !1,
                                    V.me["getChildByName"]("f_realtime")["visible"] = !1;
                                for (var x = function (W) {
                                    if (!i)
                                        if (app.Log.log("loadover0 " + JSON["stringify"](W)), W["success"]) {
                                            for (var Z = 0; Z < V["segments"]["length"]; Z++)
                                                if (V["segments"][Z]["segment_id"] == W.id) {
                                                    V["segments"][Z]["units"] = W["units"],
                                                        V["segments"][Z]["loaded"] = !0;
                                                    break;
                                                }
                                            app.Log.log("loadover1"),
                                                v++,
                                                Q["UI_Loading"].Inst["setProgressVal"](0.8 + 0.2 * (v / V["segments"]["length"])),
                                                v == V["segments"]["length"] && V["_onFirstLoadOver"]();
                                        } else
                                            app.Log.log("loadover2"), i = !0, Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), V["_forceQuit"](), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                condition: "loading",
                                                uuid: B,
                                                segment_name: W.url,
                                                last_success_segment_name: V["last_success_segment_url"],
                                                error_info: W.type,
                                                gametime_since_start: 0
                                            });
                                }, l = 0; l < S["segments"]["length"]; l++) {
                                    var m = S["segments"][l]["segment_id"],
                                        s = game["LobbyNetMgr"].Inst["ob_url"] + S["segments"][l]["segment_uri"];
                                    V["segments"].push({
                                        segment_id: m,
                                        uri: s,
                                        units: [],
                                        loaded: !1
                                    }),
                                        V["_loadUnit"](m, s, Laya["Handler"]["create"](V, x));
                                }
                            }
                        });
                    },
                    Z["prototype"]["clearPendingUnits"] = function () {
                        this["pending_units"] = [];
                    },
                    Z["prototype"]["startRealtimeLive"] = function (B, V) {
                        var W = this;
                        this["segment_index"] = 0,
                            this["segments"] = [],
                            this["enable"] = !0,
                            this["guanzhanconfig"]["reset"](),
                            Q["UI_Ob_Replay"].Inst["enable"] = !1,
                            this["do_unit_cd"] = 0,
                            this["have_gameend"] = !1,
                            this["is_realtime"] = !0,
                            this["_time0"] = 1000 * B,
                            this["_time_start"] = Laya["timer"]["currTimer"];
                        var Z = this.me["getChildByName"]("f_realtime");
                        Z["visible"] = !0,
                            Laya["timer"]["clearAll"](this),
                            Laya["timer"]["frameLoop"](1, this, function () {
                                var Q = (Laya["timer"]["currTimer"] - W["_time_start"]) / 1000;
                                Q -= 4 * Math["floor"](Q / 4),
                                    Z["alpha"] = 2 > Q ? Q / 2 * 0.7 + 0.3 : 0.7 * (1 - (Q - 2) / 2) + 0.3;
                            });
                        for (var S = [], v = 0; v < V["actions"]["length"]; v++)
                            S.push(this["_parseUnit"](V["actions"][v]));
                        for (var v = 0; v < this["pending_units"]["length"]; v++)
                            S.push(this["_parseUnit"](this["pending_units"][v].unit));
                        this["pending_units"] = [],
                            this["segments"].push({
                                segment_id: 1,
                                units: S,
                                loaded: !0
                            }),
                            this["_onFirstLoadOver"]();
                    },
                    Z["prototype"]["_onFirstLoadOver"] = function () {
                        var Q = this;
                        if (this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function () {
                            if (Q["is_realtime"]) {
                                for (var B = 0; B < Q["pending_units"]["length"]; B++)
                                    Q["segments"][0]["units"].push(Q["_parseUnit"](Q["pending_units"][B].unit));
                                Q["pending_units"] = [];
                            }
                            Q["_timeDoAction"](!1);
                        }, null, !0), !this["is_realtime"])) {
                            var B = this["segments"][this["segments"]["length"] - 1]["units"],
                                V = B[B["length"] - 1]["timestamp"];
                            this["segment_end_millisecond"] = V,
                                Laya["timer"].loop(3700, this, function () {
                                    Q["_askNewSegment"]();
                                }, null, !1);
                        }
                    },
                    Z["prototype"]["_unitIsTimeLast"] = function (Q, B) {
                        if (Q >= this["segments"]["length"])
                            return !0;
                        var V = this["segments"][Q];
                        if (!V["loaded"])
                            return !0;
                        if (V["units"]["length"] <= B)
                            return this["_unitIsTimeLast"](Q + 1, 0);
                        var W = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"],
                            Z = V["units"][B];
                        return Z["timestamp"] > W ? !0 : 2 == Z["category"] ? this["_unitIsTimeLast"](Q, B + 1) : !1;
                    },
                    Z["prototype"]["_getTimeStop"] = function (Q, B, V) {
                        var W = 0;
                        if (V > 0 && (W = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"] - V), Q >= this["segments"]["length"])
                            return W;
                        var Z = this["segments"][Q];
                        if (!Z["loaded"])
                            return W;
                        if (Z["units"]["length"] <= B)
                            return this["_getTimeStop"](Q + 1, 0, V);
                        var S = Z["units"][B],
                            v = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        if (S["timestamp"] > v)
                            return W;
                        if (1 == S["category"])
                            return 0;
                        if ("NotifyGamePause" == S.name) {
                            var i = 0;
                            return V > 0 && (i += S["timestamp"] - V),
                                V = S.data["paused"] ? S["timestamp"] : -1,
                                i + this["_getTimeStop"](Q, B + 1, V);
                        }
                        return this["_getTimeStop"](Q, B + 1, V);
                    },
                    Z["prototype"]["_timeDoAction"] = function (V) {
                        if (this["state"] != B["gameing"])
                            return !1;
                        if (this["segment_index"] >= this["segments"]["length"])
                            return !1;
                        var W = this["segments"][this["segment_index"]];
                        if (!W["loaded"])
                            return !1;
                        if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= W["units"]["length"])
                            return !1;
                        var Z = W["units"][this["unit_index"]],
                            S = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        if (Z["timestamp"] > S && !this["is_realtime"])
                            return !0;
                        if ("NotifyGameEndResult" == Z.name)
                            return !0;
                        if (1 == Z["category"] && this["during_do_cd"])
                            return !0;
                        var v = this["_unitIsTimeLast"](this["segment_index"], this["unit_index"] + 1);
                        v && (S -= this["_getTimeStop"](this["segment_index"], this["unit_index"] + 1, this["time_stop_start_time"]));
                        var i = 0;
                        if (this["is_realtime"] ? (i = Laya["timer"]["currTimer"] + GameMgr.Inst["server_time_delta"] - this["_time0"] - Z["timestamp"], i = 0 > i ? 0 : i) : i = S - Z["timestamp"], Q["UI_Loading"].Inst && Q["UI_Loading"].Inst["enable"] && Q["UI_Loading"].Inst["close"](), V)
                            v ? this["_doUnit"](Z, !0, i) : this["_doUnit"](Z, !0, -1);
                        else {
                            var x = this["_doUnit"](Z, !1, i);
                            x > 0 && (this["do_unit_cd"] = Laya["timer"]["currTimer"] + x);
                        }
                        return this["unit_index"]++,
                            this["unit_index"] >= W["units"]["length"] && !this["is_realtime"] && (this["unit_index"] = 0, this["segment_index"]++),
                            this["_timeDoAction"](V);
                    },
                    Z["prototype"]["_askNewSegment"] = function () {
                        var B = this;
                        if (!this["have_gameend"] && !(this["during_asknew"] || this["retry_loadtime"] >= 3) && this["segments"][this["segments"]["length"] - 1]["loaded"]) {
                            var V = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                            V + 15000 < this["segment_end_millisecond"] || (this["during_asknew"] = !0, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveLeftSegment", {
                                game_uuid: this["game_uuid"],
                                last_segment_id: this["segments"][this["segments"]["length"] - 1]["segment_id"]
                            }, function (V, W) {
                                if (B["during_asknew"] = !1, V || W["error"])
                                    B["retry_loadtime"]++, B["retry_loadtime"] >= 3 && (Q["UIMgr"].Inst["showNetReqError"]("fetchGameLiveLeftSegment", V, W), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                        condition: "runtime",
                                        uuid: B["game_uuid"],
                                        segment_name: '',
                                        last_success_segment_name: B["segments"][B["segments"]["length"] - 1].uri,
                                        error_info: "server_timeout",
                                        gametime_since_start: B["_time_start"]
                                    }));
                                else {
                                    B["retry_loadtime"] = 0;
                                    var Z = W["segments"];
                                    B["segment_end_millisecond"] = W["segment_end_millisecond"];
                                    for (var S = function (Q) {
                                        if (Q["success"]) {
                                            for (var V = 0; V < B["segments"]["length"]; V++)
                                                if (B["segments"][V]["segment_id"] == Q.id) {
                                                    B["segments"][V]["units"] = Q["units"];
                                                    for (var W = 0; W < Q["units"]["length"]; W++)
                                                        if ("NotifyGameEndResult" == Q["units"][W].name) {
                                                            B["have_gameend"] = !0;
                                                            break;
                                                        }
                                                    B["segments"][V]["loaded"] = !0;
                                                    break;
                                                }
                                        } else
                                            GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                condition: "runtime",
                                                uuid: B["game_uuid"],
                                                segment_name: Q.url,
                                                last_success_segment_name: B["last_success_segment_url"],
                                                error_info: Q.type,
                                                gametime_since_start: B["_time_start"]
                                            });
                                    }, v = B["segments"][B["segments"]["length"] - 1]["segment_id"], i = 0; i < Z["length"]; i++) {
                                        var x = Z[i]["segment_id"],
                                            l = game["LobbyNetMgr"].Inst["ob_url"] + Z[i]["segment_uri"];
                                        v >= x || (B["segments"].push({
                                            segment_id: x,
                                            uri: l,
                                            units: [],
                                            loaded: !1
                                        }), B["_loadUnit"](x, l, Laya["Handler"]["create"](B, S, null, !1)));
                                    }
                                }
                            }));
                        }
                    },
                    Z["prototype"]["_forceQuit"] = function () {
                        this["state"] = B.none,
                            this["enable"] = !1,
                            GameMgr.Inst["EnterLobby"]();
                    },
                    Z["prototype"]["_fastSync"] = function () {
                        var V = -1,
                            W = -1;
                        this["time_stop_start_time"] = -1,
                            this["time_stop_length"] = 0;
                        var Z = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        this["is_realtime"] && (Z = Laya["timer"]["currTimer"]);
                        for (var S = 0; S < this["segments"]["length"]; S++)
                            for (var v = this["segments"][S], i = 0; i < v["units"]["length"]; i++)
                                v["units"][i]["timestamp"] <= Z && "RecordNewRound" == v["units"][i].name && (V = S, W = i);
                        if (app.Log.log("_fastSync1: segment=" + V + ", unit=" + W), -1 == V) {
                            V = 0;
                            for (var v = this["segments"][0], i = 0; i < v["units"]["length"]; i++)
                                if ("RecordNewRound" == v["units"][i].name) {
                                    V = 0,
                                        W = i,
                                        this["_time0"] = v["units"][i]["timestamp"] - 50;
                                    break;
                                }
                        }
                        return app.Log.log("_fastSync2: segment=" + V + ", unit=" + W),
                            -1 == W ? this["is_realtime"] ? (this["state"] = B["gameing"], this["segment_index"] = 0, this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = B["gameing"], this["segment_index"] = V, this["unit_index"] = W, this["_timeDoAction"](!0), !0);
                    },
                    Z["prototype"]["onChangeMainbody"] = function () {
                        this["state"] == B["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == B["replay"] && Q["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                    },
                    Z["prototype"]["onScoreChangeConfirm"] = function () {
                        if (!this["enable"])
                            return Q["UI_Live_Broadcast1"].Inst["onScoreChangeConfirm"](), void 0;
                        if (this["state"] == B["gameing"]) {
                            if (this["do_unit_cd"] = 0, this["segment_index"] >= this["segments"]["length"])
                                return !1;
                            var V = this["segments"][this["segment_index"]];
                            if (!V["loaded"])
                                return !1;
                            if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= V["units"]["length"])
                                return !1;
                            var W = V["units"][this["unit_index"]];
                            "NotifyGameEndResult" == W.name && (Q["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](W, !1, 0));
                        } else
                            this["state"] == B["replay"] && (Q["UI_ScoreChange"].Inst["enable"] = !1, Q["UI_Ob_Replay"].Inst["nextStep"](!0));
                    },
                    Z["prototype"]["enterReplay"] = function () {
                        this["state"] = B["replay"];
                        for (var V = [], W = 0; W <= this["segment_index"] && W < this["segments"]["length"] && this["segments"][W]["loaded"]; W++)
                            for (var Z = this["segments"][W]["units"], S = 0; S < Z["length"] && !(W == this["segment_index"] && S >= this["unit_index"]); S++) {
                                var v = Z[S];
                                1 == v["category"] && V.push({
                                    name: v.name,
                                    data: v.data
                                });
                            }
                        Q["UI_Ob_Replay"].Inst.show(V),
                            view["DesktopMgr"].Inst["ClearOperationShow"]();
                    },
                    Z["prototype"]["closeReplay"] = function () {
                        this["state"] = B["gameing"],
                            Q["UI_Ob_Replay"].Inst["close"](),
                            this["do_unit_cd"] = 0,
                            this["_fastSync"]();
                    },
                    Z;
            }
                (Q["UIBase"]);
            Q["UI_Live_Broadcast"] = W;
        }
            (uiscript || (uiscript = {}));




        !function (Q) {
            var B,
                V = function () {
                    function B(B) {
                        var V = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = B,
                            this["_btn_out"] = this.me["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["switch"]();
                            }, null, !1),
                            this.me["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_show_hand"] = !V["_show_hand"],
                                    V["_choosed_show_hand"]["visible"] = V["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](V["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this.me["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                V["_show_paopai"] = !V["_show_paopai"],
                                    V["_choosed_show_paopai"]["visible"] = V["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](V["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this.me["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                Q["UI_Ob_Replay"].Inst["locking"] || Q["UI_Ob_Replay"].Inst["anim_time"] > game["Tools"]["getServerTime"]() || "RecordHuleXueZhanEnd" != W.Inst["last_action_name"] && "RecordHule" != W.Inst["last_action_name"] && "RecordLiuJu" != W.Inst["last_action_name"] && "RecordNoTile" != W.Inst["last_action_name"] && ("RecordNewRound" == W.Inst["last_action_name"] && W.Inst["during_do_cd"] || (V["_show_replay"] = !V["_show_replay"], V["_choosed_show_replay"]["visible"] = V["_show_replay"], V["_show_replay"] ? W.Inst["enterReplay"]() : W.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this.me["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this.me["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this.me["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return B["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this["_show_hand"] = !1,
                            this.me.x = -258,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                            this["_show_paopai"] = !1,
                            this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                            this["_show_replay"] = !1,
                            this["_choosed_show_replay"]["visible"] = this["_show_replay"];
                    },
                        B["prototype"]["switch"] = function () {
                            var Q = this,
                                B = -258;
                            this.me.x < -100 && (B = -5),
                                this["_btn_out"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: B
                                }, 200, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    Q["_btn_out"]["disabled"] = !1;
                                }), 0, !0, !0);
                        },
                        B;
                }
                    ();
            !function (Q) {
                Q[Q.none = 0] = "none",
                    Q[Q["gameing"] = 1] = "gameing",
                    Q[Q["replay"] = 2] = "replay";
            }
                (B || (B = {}));
            var W = function (W) {
                function Z() {
                    var Q = W.call(this, new ui.mj["live_broadcastUI"]()) || this;
                    return Q["state"] = B.none,
                        Q["pending_units"] = [],
                        Q["_time0"] = 0,
                        Q["_time_start"] = 0,
                        Q["unit_index"] = 0,
                        Q["guanzhanconfig"] = null,
                        Q["do_unit_cd"] = 0,
                        Q["time_stop_length"] = 0,
                        Q["time_stop_start_time"] = 0,
                        Q["_last_action_name"] = '',
                        Q["have_gameend"] = !1,
                        Q["is_realtime"] = !1,
                        Q["waiting_start"] = !1,
                        Q["sended_error_msg"] = !1,
                        Z.Inst = Q,
                        game["LiveNetMgr"].Inst["setNotifyHandler"](new Laya["Handler"](Q, Q["onReceiveNotify"])),
                        Q;
                }
                return __extends(Z, W),
                    Z["fetchInfo"] = function (B, V) {
                        var W = this;
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchOBToken", {
                            uuid: B
                        }, function (S, v) {
                            if (S || v["error"])
                                Q["UIMgr"].Inst["showNetReqError"]("fetchOBToken", S, v), V && V["runWith"]({
                                    success: !1
                                });
                            else {
                                app.Log.log("fetchOBToken res:" + JSON["stringify"](v)),
                                    W["token"] = v["token"],
                                    W["game_uuid"] = B,
                                    W["create_time"] = v["create_time"],
                                    W["delay"] = v["delay"],
                                    W["start_time"] = v["start_time"];
                                var i = Math["floor"](v["start_time"] + v["delay"] - game["Tools"]["getServerTime"]() / 1000);
                                i > 0 ? Q["UI_WaitOb"].Inst.show(Z["game_uuid"], i, V) : V && V["runWith"]({
                                    success: !0,
                                    data: v
                                });
                            }
                        });
                    },
                    Z["goToWatch"] = function (B, V) {
                        var W = this;
                        Q["UI_Loading"].Inst["setProgressVal"](0.1),
                            Q["UI_Loading"].Inst.show("enter_mj"),
                            this["connect"](new Laya["Handler"](this, function (Z) {
                                Z["success"] ? (Q["UI_Loading"].Inst["setProgressVal"](0.2), W["startLoadOb"](B, Z.data, V)) : (Q["UI_Loading"].Inst["enable"] = !1, Q["UIMgr"].Inst["showLobby"]());
                            }));
                    },
                    Z["startLoadOb"] = function (B, V, W) {
                        var S = this;
                        app.Log.log("startLoadOb res:" + JSON["stringify"](V)),
                            GameMgr.Inst["onLoadStart"]('ob');
                        for (var v = JSON["parse"](V.head), i = [null, null, null, null], x = 0; x < v["players"]["length"]; x++) {
                            for (var l = -1, m = 0; m < v["seat_list"]["length"]; m++)
                                if (v["seat_list"][m] == v["players"][x]["account_id"]) {
                                    l = m;
                                    break;
                                }
                            -1 != l ? i[l] = v["players"][x] : app.Log["Error"]("goToWatch " + JSON["stringify"](v["players"][x]) + "未找到位置");
                        }
                        var s = game["Tools"]["strOfLocalization"](2003),
                            f = v["game_config"].mode;
                        f["extendinfo"] && (s = game["Tools"]["strOfLocalization"](2004)),
                            f["detail_rule"] && f["detail_rule"]["ai_level"] && (1 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2003)), 2 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2004)));
                        for (var x = 0; x < i["length"]; x++)
                            null == i[x] && (i[x] = {
                                nickname: s,
                                avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                level: {
                                    id: "10101"
                                },
                                level3: {
                                    id: "20101"
                                },
                                character: {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                }
                            });
                        game["Scene_MJ"].Inst["openMJRoom"]({
                            mode: f
                        }, i, Laya["Handler"]["create"](this, function () {
                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](v["game_config"])), i, W, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](S, function () {
                                Q["UI_Loading"].Inst["setProgressVal"](0.7),
                                    Laya["timer"].once(1000, S, function () {
                                        GameMgr.Inst["EnterMJ"](),
                                            Q["UI_Loading"].Inst["setProgressVal"](0.8),
                                            Z.Inst["time0"] = game["Tools"]["getServerTime"]() - (1000 * V["start_time"] + 1000 * V["delay"]),
                                            Z.Inst["startLive"](B);
                                    });
                            }));
                        }), Laya["Handler"]["create"](this, function (B) {
                            return Q["UI_Loading"].Inst["setProgressVal"](0.5 * B + 0.2);
                        }, null, !1));
                    },
                    Z["connect"] = function (Q) {
                        this["connect_func"] = Q,
                            game["LiveNetMgr"].Inst["connect"](new Laya["Handler"](this, this["onConnect"]));
                    },
                    Z["onConnect"] = function (B) {
                        var V = this;
                        if (B.open)
                            game["LiveNetMgr"].Inst["sendReq"]("Auth", {
                                token: this["token"]
                            }, function (B, W) {
                                B || W["error"] ? (V["connect_func"] && (V["connect_func"]["runWith"]({
                                    success: !1,
                                    data: W
                                }), V["connect_func"] = null), Z.Inst && Z.Inst["_forceQuit"](), W["error"] ? Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](W["error"])) : Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), Q["UI_Loading"].Inst["enable"] = !1) : Z.Inst && Z.Inst["enable"] ? Z.Inst["sendStartObRequest"]() : V["connect_func"] && (V["connect_func"]["runWith"]({
                                    success: !0,
                                    data: W
                                }), V["connect_func"] = null);
                            });
                        else if (this["connect_func"] && (this["connect_func"]["runWith"]({
                            success: !1
                        }), this["connect_func"] = null), game["LiveNetMgr"].Inst["close"](), "connect failed" == B.info)
                            Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), Z.Inst ? Z.Inst["_forceQuit"]() : Q["UI_Loading"].Inst["enable"] = !1;
                        else if ("disconnect" == B.info) {
                            if (!Z.Inst || !Z.Inst["enable"])
                                return;
                            Q["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3529), Laya["Handler"]["create"](this, function () {
                                game["LiveNetMgr"].Inst["force_reconnect"]();
                            }), Laya["Handler"]["create"](this, function () {
                                Z.Inst && Z.Inst["_forceQuit"]();
                            }));
                        } else
                            Z.Inst && Z.Inst["_forceQuit"]();
                    },
                    Object["defineProperty"](Z["prototype"], "time0", {
                        set: function (Q) {
                            this["_time0"] = Q;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](Z["prototype"], "during_do_cd", {
                        get: function () {
                            return game["Tools"]["getServerTime"]() < this["do_unit_cd"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](Z["prototype"], "during_play", {
                        get: function () {
                            return this["state"] == B["gameing"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](Z["prototype"], "last_action_name", {
                        get: function () {
                            return this["_last_action_name"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Z["prototype"]["onCreate"] = function () {
                        this["guanzhanconfig"] = new V(this.me["getChildByName"]("config"));
                    },
                    Z["prototype"]["startLive"] = function () {
                        var B = this;
                        if (game["LiveNetMgr"].Inst["connect_state"] != game["EConnectState"]["connecting"])
                            return Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), Z.Inst && Z.Inst["_forceQuit"](), void 0;
                        this["sended_error_msg"] = !1,
                            this["pending_units"] = [];
                        var V = this.me["getChildByName"]("f_realtime");
                        V["visible"] = !1,
                            this["_time_start"] = game["Tools"]["getServerTime"]();
                        this["enable"] = !0,
                            this["guanzhanconfig"]["reset"](),
                            Q["UI_Ob_Replay"].Inst["enable"] = !1,
                            this["do_unit_cd"] = 0,
                            this["have_gameend"] = !1,
                            this["waiting_start"] = !0,
                            game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function (V, W) {
                                V || W["error"] ? (W["error"] ? Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](W["error"])) : Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), B["_forceQuit"]()) : (app.Log.log("StartOb"), B["start_seq"] = W.seq ? W.seq : 0);
                            });
                    },
                    Z["prototype"]["sendStartObRequest"] = function () {
                        var B = this;
                        game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function (V, W) {
                            V || W["error"] ? (W["error"] ? Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](W["error"])) : Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), B["_forceQuit"]()) : app.Log.log("StartOb");
                        });
                    },
                    Z["prototype"]["onDisable"] = function () {
                        Laya["timer"]["clearAll"](this),
                            game["LiveNetMgr"].Inst["close"](),
                            this["pending_units"] = [];
                    },
                    Z["prototype"]["onReceiveNotify"] = function (Q, B) {
                        var V = this;
                        void 0 === B && (B = !1);
                        for (var W = 0, S = this["pending_units"]; W < S["length"]; W++) {
                            var v = S[W];
                            if (v.seq == Q.seq)
                                return;
                        }
                        if ("GameEndAction" == Q.name && game["LiveNetMgr"].Inst["close"](), B) {
                            for (var i = !1, x = -1, l = 0, m = this["pending_units"]; l < m["length"]; l++) {
                                var v = m[l];
                                if (i || (x++, v.seq == Q.seq - 1 && (i = !0)), v.seq == Q.seq)
                                    return;
                            }
                            if (0 > x)
                                this["pending_units"].push(Q);
                            else if (this["pending_units"]["splice"](x + 1, 0, Q), this["pending_units"][x + 2] && this["pending_units"][x + 2].seq != Q.seq + 1) {
                                var s = this;
                                game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                    seq: Q.seq + 1
                                }, function (B, V) {
                                    (B || V["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                        uuid: Z["game_uuid"],
                                        token: Z["token"],
                                        missing_seq: Q.seq + 1,
                                        error: B || V["error"]
                                    }),
                                        !B && V && s["onReceiveNotify"](s["_handleMsg"](V["segments"]), !0);
                                });
                            }
                        } else {
                            if (this["pending_units"]["length"] > 0 && Q.seq != this["pending_units"][this["pending_units"]["length"] - 1].seq + 1) {
                                this["sended_error_msg"] || (GameMgr.Inst["postInfo2Server"]("livebroad", {
                                    uuid: Z["game_uuid"],
                                    last_seq: this["pending_units"][this["pending_units"]["length"] - 1].seq,
                                    recent_seq: Q.seq,
                                    token: Z["token"]
                                }), this["sended_error_msg"] = !0);
                                var f = this;
                                game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                    seq: this["pending_units"][this["pending_units"]["length"] - 1].seq + 1
                                }, function (Q, B) {
                                    (Q || B["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                        uuid: Z["game_uuid"],
                                        token: Z["token"],
                                        missing_seq: V["pending_units"][V["pending_units"]["length"] - 1].seq + 1,
                                        error: Q || B["error"]
                                    }),
                                        !Q && B && f["onReceiveNotify"](f["_handleMsg"](B["segments"]), !0);
                                });
                            }
                            this["pending_units"].push(Q);
                        }
                        this["waiting_start"] && (Q.seq >= this["start_seq"] && this["start_seq"] > 0 || Q["offsetTime"] > this["_time0"] - 3000) && (this["_onFirstLoadOver"](), this["waiting_start"] = !1);
                    },
                    Z["prototype"]["_onFirstLoadOver"] = function () {
                        var Q = this;
                        this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function () {
                            Q["_timeDoAction"](!1);
                        }, null, !0));
                    },
                    Z["prototype"]["_fastSync"] = function () {
                        var V = -1;
                        this["time_stop_start_time"] = -1,
                            this["time_stop_length"] = 0;
                        var W = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        this["is_realtime"] && (W = game["Tools"]["getServerTime"]());
                        for (var Z = 0; Z < this["pending_units"]["length"]; Z++) {
                            var S = this["pending_units"][Z];
                            S["offsetTime"] <= W && ("RecordNewRound" == S.name || "RecordNewCard" == S.name) && (V = Z);
                        }
                        if (app.Log.log("_fastSync1: unit=" + V), -1 == V && (V = 0, this["pending_units"]["length"] > 0)) {
                            var S = this["pending_units"][0];
                            ("RecordNewRound" == S.name || "RecordNewCard" == S.name) && (V = 0, this["_time0"] = S["offsetTime"] - 50);
                        }
                        return app.Log.log("_fastSync2: unit=" + V),
                            -1 == V ? this["is_realtime"] ? (this["state"] = B["gameing"], this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = B["gameing"], this["unit_index"] = V, this["pending_units"][V] && "RecordNewCard" == this["pending_units"][V].name && !this["pending_units"][V + 1] ? this["_timeDoAction"](!1) : this["_timeDoAction"](!0), !0);
                    },
                    Z["prototype"]["_forceQuit"] = function () {
                        app.Log["Error"]("_forceQuit"),
                            this["state"] = B.none,
                            this["enable"] = !1,
                            GameMgr.Inst["EnterLobby"]();
                    },
                    Z["prototype"]["_getTimeStop"] = function (Q, B) {
                        var V = 0;
                        if (B > 0 && (V = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"] - B), this["pending_units"]["length"] <= Q)
                            return V;
                        var W = this["pending_units"][Q],
                            Z = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        if (W["offsetTime"] > Z)
                            return V;
                        if (1 == W["category"])
                            return 0;
                        if ("NotifyGamePause" == W.name) {
                            var S = 0;
                            return B > 0 && (S += W["offsetTime"] - B),
                                B = W.data["paused"] ? W["offsetTime"] : -1,
                                S + this["_getTimeStop"](Q + 1, B);
                        }
                        return this["_getTimeStop"](Q + 1, B);
                    },
                    Z["prototype"]["_unitIsTimeLast"] = function (Q) {
                        if (Q >= this["pending_units"]["length"])
                            return !0;
                        var B = this["pending_units"][Q],
                            V = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        return B["offsetTime"] > V ? !0 : 2 == B["category"] ? this["_unitIsTimeLast"](Q + 1) : !1;
                    },
                    Z["prototype"]["_timeDoAction"] = function (V) {
                        if (this["state"] != B["gameing"])
                            return !1;
                        if (this["unit_index"] >= this["pending_units"]["length"])
                            return !1;
                        var W = this["pending_units"][this["unit_index"]],
                            Z = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        if (W["offsetTime"] > Z && !this["is_realtime"])
                            return !0;
                        if ("NotifyGameEndResult" == W.name)
                            return !0;
                        if (1 == W["category"] && this["during_do_cd"])
                            return !0;
                        var S = this["_unitIsTimeLast"](this["unit_index"] + 1);
                        S && (Z -= this["_getTimeStop"](this["unit_index"] + 1, this["time_stop_start_time"]));
                        var v = 0;
                        if (this["is_realtime"] ? (v = game["Tools"]["getServerTime"]() - this["_time0"] - W["offsetTime"], v = 0 > v ? 0 : v) : v = Z - W["offsetTime"], Q["UI_Loading"].Inst && Q["UI_Loading"].Inst["enable"] && Q["UI_Loading"].Inst["close"](), V)
                            S ? this["_doUnit"](W, !0, v) : this["_doUnit"](W, !0, -1);
                        else {
                            var i = this["_doUnit"](W, !1, v);
                            i > 0 && (this["do_unit_cd"] = game["Tools"]["getServerTime"]() + i);
                        }
                        return this["unit_index"]++,
                            this["_timeDoAction"](V);
                    },
                    Z["prototype"]["onScoreChangeConfirm"] = function () {
                        if (this["state"] == B["gameing"]) {
                            if (this["do_unit_cd"] = 0, this["unit_index"] >= this["pending_units"]["length"])
                                return !1;
                            var V = this["pending_units"][this["unit_index"]];
                            "NotifyGameEndResult" == V.name && (Q["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](V, !1, 0));
                        } else
                            this["state"] == B["replay"] && (Q["UI_ScoreChange"].Inst["enable"] = !1, Q["UI_Ob_Replay"].Inst["nextStep"](!0));
                    },
                    Z["prototype"]["_doRecord"] = function (Q, B, V) {
                        switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = Q, Q) {
                            case "RecordNewRound":
                                return view["ActionNewRound"]["record"](B, V);
                            case "RecordChangeTile":
                                return view["ActionChangeTile"]["record"](B, V);
                            case "RecordSelectGap":
                                return view["ActionSelectGap"]["record"](B, V);
                            case "RecordDiscardTile":
                                return view["ActionDiscardTile"]["record"](B, V);
                            case "RecordDealTile":
                                return view["ActionDealTile"]["record"](B, V);
                            case "RecordChiPengGang":
                                return view["ActionChiPengGang"]["record"](B, V);
                            case "RecordAnGangAddGang":
                                return view["ActionAnGangAddGang"]["record"](B, V);
                            case "RecordHule":
                                return view["ActionHule"]["record"](B);
                            case "RecordLiuJu":
                                return view["ActionLiuJu"]["record"](B);
                            case "RecordNoTile":
                                return view["ActionNoTile"]["record"](B);
                            case "RecordBaBei":
                                return view["ActionBabei"]["record"](B);
                            case "RecordHuleXueZhanMid":
                                return view["ActionHuleXueZhanMid"]["record"](B);
                            case "RecordHuleXueZhanEnd":
                                return view["ActionHuleXueZhanEnd"]["record"](B);
                            case "RecordGangResult":
                                return view["ActionGangResult"]["record"](B);
                            case "RecordGangResultEnd":
                                return view["ActionGangResultEnd"]["record"](B);
                            case "RecordRevealTile":
                                return view["ActionRevealTile"]["record"](B);
                            case "RecordLockTile":
                                return view["ActionLockTile"]["record"](B);
                            case "RecordUnveilTile":
                                return view["ActionUnveilTile"]["record"](B);
                            case "RecordNewCard":
                                return view["ActionNewCard"]["record"](B);
                            case "RecordFillAwaitingTiles":
                                return view["ActionFillAwaitingTiles"]["record"](B);
                        }
                        return 0;
                    },
                    Z["prototype"]["_doFastRecord"] = function (Q, B, V) {
                        try {
                            switch (this["_last_action_name"] = Q, Q) {
                                case "RecordNewRound":
                                    view["ActionNewRound"]["fastrecord"](B, V);
                                    break;
                                case "RecordChangeTile":
                                    view["ActionChangeTile"]["fastrecord"](B, V);
                                    break;
                                case "RecoreSelectGap":
                                    view["ActionSelectGap"]["fastrecord"](B, V);
                                    break;
                                case "RecordDiscardTile":
                                    view["ActionDiscardTile"]["fastrecord"](B, V);
                                    break;
                                case "RecordDealTile":
                                    view["ActionDealTile"]["fastrecord"](B, V);
                                    break;
                                case "RecordChiPengGang":
                                    view["ActionChiPengGang"]["fastrecord"](B, V);
                                    break;
                                case "RecordAnGangAddGang":
                                    view["ActionAnGangAddGang"]["fastrecord"](B, V);
                                    break;
                                case "RecordHule":
                                    view["ActionHule"]["fastrecord"](B);
                                    break;
                                case "RecordLiuJu":
                                    view["ActionLiuJu"]["fastrecord"](B);
                                    break;
                                case "RecordNoTile":
                                    view["ActionNoTile"]["fastrecord"](B);
                                    break;
                                case "RecordBaBei":
                                    view["ActionBabei"]["fastrecord"](B);
                                    break;
                                case "RecordHuleXueZhanMid":
                                    view["ActionHuleXueZhanMid"]["fastrecord"](B);
                                    break;
                                case "RecordHuleXueZhanEnd":
                                    view["ActionHuleXueZhanEnd"]["fastrecord"](B);
                                    break;
                                case "RecordRevealTile":
                                    view["ActionRevealTile"]["fastrecord"](B);
                                    break;
                                case "RecordLockTile":
                                    view["ActionLockTile"]["fastrecord"](B);
                                    break;
                                case "RecordUnveilTile":
                                    view["ActionUnveilTile"]["fastrecord"](B);
                                    break;
                                case "RecordNewCard":
                                    return view["ActionNewCard"]["fastrecord"](B);
                                case "RecordFillAwaitingTiles":
                                    view["ActionFillAwaitingTiles"]["fastrecord"](B);
                            }
                        } catch (W) {
                            var Z = {};
                            return Z["error"] = W["message"],
                                Z["stack"] = W["stack"],
                                Z["method"] = "ui_live_broadcast doFastRecord",
                                Z.name = Q,
                                Z.data = B,
                                GameMgr.Inst["onFatalError"](Z),
                                1000000;
                        }
                    },
                    Z["prototype"]["_doUnit"] = function (B, V, W) {
                        if (V) {
                            if (1 == B["category"])
                                return (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_fast_action': B
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_fast_action': B
                                        }));
                                    }
                                })), this["_doFastRecord"](B.name, B.data, W), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                            if ("GameNewRoundState" == B.name) {
                                for (var Z = 0; Z < B.data["seat_states"]["length"]; Z++)
                                    view["DesktopMgr"]["player_link_state"][Z] = B.data["seat_states"][Z];
                                Q["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == B.name ? (view["DesktopMgr"].Inst["gameEndResult"] = B.data["result"], this["enable"] = !1, Q["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == B.name ? Q["UI_DesktopInfo"].Inst["onPlayerConnectionState"](B.data) : "GameEndAction" == B.name ? 3 == B.data["state"] && Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == B.name && (view["DesktopMgr"].Inst["setGameStop"](B.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += B["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? B["offsetTime"] : -1);
                            return -1;
                        }
                        if (1 == B["category"]) {
                            var S = this["_doRecord"](B.name, B.data, W);
                            return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                S;
                        }
                        if ("GameNewRoundState" == B.name) {
                            for (var Z = 0; Z < B.data["seat_states"]["length"]; Z++)
                                view["DesktopMgr"]["player_link_state"][Z] = B.data["seat_states"][Z];
                            Q["UI_DesktopInfo"].Inst["refreshLinks"]();
                        } else
                            "NotifyGameEndResult" == B.name ? (view["DesktopMgr"].Inst["gameEndResult"] = B.data["result"], this["enable"] = !1, Q["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == B.name ? Q["UI_DesktopInfo"].Inst["onGameBroadcast"](B.data) : "NotifyPlayerConnectionState" == B.name ? Q["UI_DesktopInfo"].Inst["onPlayerConnectionState"](B.data) : "GameEndAction" == B.name ? 3 == B.data["state"] && Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                game["Scene_MJ"].Inst["ForceOut"]();
                            })) : "NotifyGamePause" == B.name && (view["DesktopMgr"].Inst["setGameStop"](B.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += B["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? B["offsetTime"] : -1);
                        return -1;
                    },
                    Z["prototype"]["enterReplay"] = function () {
                        this["state"] = B["replay"];
                        for (var V = [], W = 0; W <= this["unit_index"] && W < this["pending_units"]["length"]; W++) {
                            var Z = this["pending_units"][W];
                            1 == Z["category"] && V.push({
                                name: Z.name,
                                data: Z.data
                            });
                        }
                        Q["UI_Ob_Replay"].Inst.show(V),
                            view["DesktopMgr"].Inst["ClearOperationShow"]();
                    },
                    Z["prototype"]["closeReplay"] = function () {
                        this["state"] = B["gameing"],
                            Q["UI_Ob_Replay"].Inst["close"](),
                            this["do_unit_cd"] = 0,
                            this["_fastSync"]();
                    },
                    Z["prototype"]["onChangeMainbody"] = function () {
                        this["state"] == B["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == B["replay"] && Q["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                    },
                    Z["prototype"]["_handleMsg"] = function (Q) {
                        for (var B = window.atob(Q), V = B["length"], W = new Uint8Array(V), Z = 0; V > Z; Z++)
                            W[Z] = B["charCodeAt"](Z);
                        var S = {};
                        S.seq = W[0] + (W[1] << 8),
                            S["offsetTime"] = W[2] + (W[3] << 8) + (W[4] << 16) + (W[5] << 24),
                            S.end = W[6] + (W[7] << 8),
                            S["category"] = W[8] + (W[9] << 8),
                            S["length"] = W[10] + (W[11] << 8) + (W[12] << 16) + (W[13] << 24),
                            W = W["slice"](14);
                        var v = net["MessageWrapper"]["decodeMessage"](W);
                        return S.data = v,
                            S.name = v["$type"].name,
                            S;
                    },
                    Z;
            }
                (Q["UIBase"]);
            Q["UI_Live_Broadcast1"] = W;
        }
            (uiscript || (uiscript = {}));




        if (typeof MMP == 'undefined') {
            !function (Q) {
                var B = function () {
                    function B() {
                        var B = this;
                        this.urls = [],
                            this["link_index"] = -1,
                            this["connect_state"] = Q["EConnectState"].none,
                            this["reconnect_count"] = 0,
                            this["reconnect_span"] = [500, 1000, 3000, 6000, 10000, 15000],
                            this["playerreconnect"] = !1,
                            this["lasterrortime"] = 0,
                            this["load_over"] = !1,
                            this["loaded_player_count"] = 0,
                            this["real_player_count"] = 0,
                            this["is_ob"] = !1,
                            this["ob_token"] = '',
                            this["lb_index"] = 0,
                            this["_report_reconnect_count"] = 0,
                            this["_connect_start_time"] = 0,
                            app["NetAgent"]["AddListener2MJ"]("NotifyPlayerLoadGameReady", Laya["Handler"]["create"](this, function (Q) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(Q),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Q));
                                    }
                                }));
                                app.Log.log("NotifyPlayerLoadGameReady: " + JSON["stringify"](Q)),
                                    B["loaded_player_count"] = Q["ready_id_list"]["length"],
                                    B["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](B["loaded_player_count"], B["real_player_count"]);
                            }));
                    }
                    return Object["defineProperty"](B, "Inst", {
                        get: function () {
                            return null == this["_Inst"] ? this["_Inst"] = new B() : this["_Inst"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        B["prototype"]["OpenConnect"] = function (B, V, W, Z) {
                            var S = this;
                            uiscript["UI_Loading"].Inst.show("enter_mj"),
                                Q["Scene_Lobby"].Inst && Q["Scene_Lobby"].Inst["active"] && (Q["Scene_Lobby"].Inst["active"] = !1),
                                Q["Scene_Huiye"].Inst && Q["Scene_Huiye"].Inst["active"] && (Q["Scene_Huiye"].Inst["active"] = !1),
                                this["Close"](),
                                view["BgmListMgr"]["stopBgm"](),
                                this["is_ob"] = !1,
                                Laya["timer"].once(500, this, function () {
                                    S.url = '',
                                        S["token"] = B,
                                        S["game_uuid"] = V,
                                        S["server_location"] = W,
                                        GameMgr.Inst["ingame"] = !0,
                                        GameMgr.Inst["mj_server_location"] = W,
                                        GameMgr.Inst["mj_game_token"] = B,
                                        GameMgr.Inst["mj_game_uuid"] = V,
                                        S["playerreconnect"] = Z,
                                        S["_setState"](Q["EConnectState"]["tryconnect"]),
                                        S["load_over"] = !1,
                                        S["loaded_player_count"] = 0,
                                        S["real_player_count"] = 0,
                                        S["lb_index"] = 0,
                                        S["_fetch_gateway"](0);
                                }),
                                Laya["timer"].loop(300000, this, this["reportInfo"]);
                        },
                        B["prototype"]["reportInfo"] = function () {
                            this["connect_state"] == Q["EConnectState"]["connecting"] && GameMgr.Inst["postNewInfo2Server"]("network_route", {
                                client_type: "web",
                                route_type: "game",
                                route_index: Q["LobbyNetMgr"]["root_id_lst"][Q["LobbyNetMgr"].Inst["choosed_index"]],
                                route_delay: Math.min(10000, Math["round"](app["NetAgent"]["mj_network_delay"])),
                                connection_time: Math["round"](Date.now() - this["_connect_start_time"]),
                                reconnect_count: this["_report_reconnect_count"]
                            });
                        },
                        B["prototype"]["Close"] = function () {
                            this["load_over"] = !1,
                                app.Log.log("MJNetMgr close"),
                                this["_setState"](Q["EConnectState"].none),
                                app["NetAgent"]["Close2MJ"](),
                                this.url = '',
                                Laya["timer"]["clear"](this, this["reportInfo"]);
                        },
                        B["prototype"]["_OnConnent"] = function (B) {
                            app.Log.log("MJNetMgr _OnConnent event:" + B),
                                B == Laya["Event"]["CLOSE"] || B == Laya["Event"]["ERROR"] ? Laya["timer"]["currTimer"] - this["lasterrortime"] > 100 && (this["lasterrortime"] = Laya["timer"]["currTimer"], this["connect_state"] == Q["EConnectState"]["tryconnect"] ? this["_try_to_linknext"]() : this["connect_state"] == Q["EConnectState"]["connecting"] ? view["DesktopMgr"].Inst["active"] ? (view["DesktopMgr"].Inst["duringReconnect"] = !0, this["_setState"](Q["EConnectState"]["reconnecting"]), this["reconnect_count"] = 0, this["_Reconnect"]()) : (this["_setState"](Q["EConnectState"]["disconnect"]), uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2008)), Q["Scene_MJ"].Inst["ForceOut"]()) : this["connect_state"] == Q["EConnectState"]["reconnecting"] && this["_Reconnect"]()) : B == Laya["Event"].OPEN && (this["_connect_start_time"] = Date.now(), (this["connect_state"] == Q["EConnectState"]["tryconnect"] || this["connect_state"] == Q["EConnectState"]["reconnecting"]) && ((this["connect_state"] = Q["EConnectState"]["tryconnect"]) ? this["_report_reconnect_count"] = 0 : this["_report_reconnect_count"]++, this["_setState"](Q["EConnectState"]["connecting"]), this["is_ob"] ? this["_ConnectSuccessOb"]() : this["_ConnectSuccess"]()));
                        },
                        B["prototype"]["_Reconnect"] = function () {
                            var B = this;
                            Q["LobbyNetMgr"].Inst["connect_state"] == Q["EConnectState"].none || Q["LobbyNetMgr"].Inst["connect_state"] == Q["EConnectState"]["disconnect"] ? this["_setState"](Q["EConnectState"]["disconnect"]) : Q["LobbyNetMgr"].Inst["connect_state"] == Q["EConnectState"]["connecting"] && GameMgr.Inst["logined"] ? this["reconnect_count"] >= this["reconnect_span"]["length"] ? this["_setState"](Q["EConnectState"]["disconnect"]) : (Laya["timer"].once(this["reconnect_span"][this["reconnect_count"]], this, function () {
                                B["connect_state"] == Q["EConnectState"]["reconnecting"] && (app.Log.log("MJNetMgr reconnect count:" + B["reconnect_count"]), app["NetAgent"]["connect2MJ"](B.url, Laya["Handler"]["create"](B, B["_OnConnent"], null, !1), "local" == B["server_location"] ? "/game-gateway" : "/game-gateway-zone"));
                            }), this["reconnect_count"]++) : Laya["timer"].once(1000, this, this["_Reconnect"]);
                        },
                        B["prototype"]["_try_to_linknext"] = function () {
                            this["link_index"]++,
                                this.url = '',
                                app.Log.log("mj _try_to_linknext(" + this["link_index"] + ") url.length=" + this.urls["length"]),
                                this["link_index"] < 0 || this["link_index"] >= this.urls["length"] ? Q["LobbyNetMgr"].Inst["polling_connect"] ? (this["lb_index"]++, this["_fetch_gateway"](0)) : (this["_setState"](Q["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](59)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Q["Scene_MJ"].Inst["ForceOut"]()) : (app["NetAgent"]["connect2MJ"](this.urls[this["link_index"]].url, Laya["Handler"]["create"](this, this["_OnConnent"], null, !1), "local" == this["server_location"] ? "/game-gateway" : "/game-gateway-zone"), this.url = this.urls[this["link_index"]].url);
                        },
                        B["prototype"]["GetAuthData"] = function () {
                            return {
                                account_id: GameMgr.Inst["account_id"],
                                token: this["token"],
                                game_uuid: this["game_uuid"],
                                gift: CryptoJS["HmacSHA256"](this["token"] + GameMgr.Inst["account_id"] + this["game_uuid"], "damajiang")["toString"]()
                            };
                        },
                        B["prototype"]["_fetch_gateway"] = function (B) {
                            var V = this;
                            if (Q["LobbyNetMgr"].Inst["polling_connect"] && this["lb_index"] >= Q["LobbyNetMgr"].Inst.urls["length"])
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](59)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Q["Scene_MJ"].Inst["ForceOut"](), this["_setState"](Q["EConnectState"].none), void 0;
                            this.urls = [],
                                this["link_index"] = -1,
                                app.Log.log("mj _fetch_gateway retry_count:" + B);
                            var W = function (W) {
                                var Z = JSON["parse"](W);
                                if (app.Log.log("mj _fetch_gateway func_success data = " + W), Z["maintenance"])
                                    V["_setState"](Q["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2009)), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Q["Scene_MJ"].Inst["ForceOut"]();
                                else if (Z["servers"] && Z["servers"]["length"] > 0) {
                                    for (var S = Z["servers"], v = Q["Tools"]["deal_gateway"](S), i = 0; i < v["length"]; i++)
                                        V.urls.push({
                                            name: "___" + i,
                                            url: v[i]
                                        });
                                    V["link_index"] = -1,
                                        V["_try_to_linknext"]();
                                } else
                                    1 > B ? Laya["timer"].once(1000, V, function () {
                                        V["_fetch_gateway"](B + 1);
                                    }) : Q["LobbyNetMgr"].Inst["polling_connect"] ? (V["lb_index"]++, V["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](60)), V["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && Q["Scene_MJ"].Inst["ForceOut"](), V["_setState"](Q["EConnectState"].none));
                            },
                                Z = function () {
                                    app.Log.log("mj _fetch_gateway func_error"),
                                        1 > B ? Laya["timer"].once(500, V, function () {
                                            V["_fetch_gateway"](B + 1);
                                        }) : Q["LobbyNetMgr"].Inst["polling_connect"] ? (V["lb_index"]++, V["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](58)), V["_SendDebugInfo"](), view["DesktopMgr"].Inst["active"] || Q["Scene_MJ"].Inst["ForceOut"](), V["_setState"](Q["EConnectState"].none));
                                },
                                S = function (Q) {
                                    var B = new Laya["HttpRequest"]();
                                    B.once(Laya["Event"]["COMPLETE"], V, function (Q) {
                                        W(Q);
                                    }),
                                        B.once(Laya["Event"]["ERROR"], V, function () {
                                            Z();
                                        });
                                    var S = [];
                                    S.push("If-Modified-Since"),
                                        S.push('0'),
                                        Q += "?service=ws-game-gateway",
                                        Q += GameMgr["inHttps"] ? "&protocol=ws&ssl=true" : "&protocol=ws&ssl=false",
                                        Q += "&location=" + V["server_location"],
                                        Q += "&rv=" + Math["floor"](10000000 * Math["random"]()) + Math["floor"](10000000 * Math["random"]()),
                                        B.send(Q, '', "get", "text", S),
                                        app.Log.log("mj _fetch_gateway func_fetch url = " + Q);
                                };
                            Q["LobbyNetMgr"].Inst["polling_connect"] ? S(Q["LobbyNetMgr"].Inst.urls[this["lb_index"]]) : S(Q["LobbyNetMgr"].Inst["lb_url"]);
                        },
                        B["prototype"]["_setState"] = function (B) {
                            this["connect_state"] = B,
                                GameMgr["inRelease"] || null != uiscript["UI_Common"].Inst && (B == Q["EConnectState"].none ? uiscript["UI_Common"].Inst["label_net_mj"].text = '' : B == Q["EConnectState"]["tryconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "尝试连接麻将服务器", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#000000") : B == Q["EConnectState"]["connecting"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正常", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#00ff00") : B == Q["EConnectState"]["disconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：断开连接", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()) : B == Q["EConnectState"]["reconnecting"] && (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正在重连", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()));
                        },
                        B["prototype"]["_ConnectSuccess"] = function () {
                            var B = this;
                            app.Log.log("MJNetMgr _ConnectSuccess "),
                                this["load_over"] = !1,
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authGame", this["GetAuthData"](), function (V, W) {
                                    if (V || W["error"])
                                        uiscript["UIMgr"].Inst["showNetReqError"]("authGame", V, W), Q["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                    else {
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify(W),
                                            onload: function (msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(W));
                                            }
                                        }));
                                        app.Log.log("麻将桌验证通过：" + JSON["stringify"](W)),
                                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                                        var Z = [],
                                            S = 0;
                                        view["DesktopMgr"]["player_link_state"] = W["state_list"];
                                        var v = Q["Tools"]["strOfLocalization"](2003),
                                            i = W["game_config"].mode,
                                            x = view["ERuleMode"]["Liqi4"];
                                        i.mode < 10 ? (x = view["ERuleMode"]["Liqi4"], B["real_player_count"] = 4) : i.mode < 20 && (x = view["ERuleMode"]["Liqi3"], B["real_player_count"] = 3);
                                        for (var l = 0; l < B["real_player_count"]; l++)
                                            Z.push(null);
                                        i["extendinfo"] && (v = Q["Tools"]["strOfLocalization"](2004)),
                                            i["detail_rule"] && i["detail_rule"]["ai_level"] && (1 === i["detail_rule"]["ai_level"] && (v = Q["Tools"]["strOfLocalization"](2003)), 2 === i["detail_rule"]["ai_level"] && (v = Q["Tools"]["strOfLocalization"](2004)));
                                        for (var m = Q["GameUtility"]["get_default_ai_skin"](), s = Q["GameUtility"]["get_default_ai_character"](), l = 0; l < W["seat_list"]["length"]; l++) {
                                            var f = W["seat_list"][l];
                                            if (0 == f)
                                                Z[l] = {
                                                    nickname: v,
                                                    avatar_id: m,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: s,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: m,
                                                        is_upgraded: !1
                                                    }
                                                };
                                            else {
                                                S++;
                                                for (var z = 0; z < W["players"]["length"]; z++)
                                                    if (W["players"][z]["account_id"] == f) {
                                                        Z[l] = W["players"][z];
                                                        break;
                                                    }
                                            }
                                        }
                                        for (var l = 0; l < B["real_player_count"]; l++)
                                            null == Z[l] && (Z[l] = {
                                                account: 0,
                                                nickname: Q["Tools"]["strOfLocalization"](2010),
                                                avatar_id: m,
                                                level: {
                                                    id: "10101"
                                                },
                                                level3: {
                                                    id: "20101"
                                                },
                                                character: {
                                                    charid: s,
                                                    level: 0,
                                                    exp: 0,
                                                    views: [],
                                                    skin: m,
                                                    is_upgraded: !1
                                                }
                                            });
                                        B["loaded_player_count"] = W["ready_id_list"]["length"],
                                            B["_AuthSuccess"](Z, W["is_game_start"], W["game_config"]["toJSON"]());
                                    }
                                });
                        },
                        B["prototype"]["_AuthSuccess"] = function (B, V, W) {
                            var Z = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function () {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.2),
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                        round_id: view["DesktopMgr"].Inst["round_id"],
                                        step: view["DesktopMgr"].Inst["current_step"]
                                    }, function (B, V) {
                                        B || V["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", B, V), Q["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame] " + JSON["stringify"](V)), V["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2011)), Q["Scene_MJ"].Inst["GameEnd"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.3), view["DesktopMgr"].Inst["fetchLinks"](), view["DesktopMgr"].Inst["Reset"](), view["DesktopMgr"].Inst["duringReconnect"] = !0, view["DesktopMgr"].Inst["syncGameByStep"](V["game_restore"])));
                                    });
                            })) : Q["Scene_MJ"].Inst["openMJRoom"](W, B, Laya["Handler"]["create"](this, function () {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](W)), B, GameMgr.Inst["account_id"], view["EMJMode"].play, Laya["Handler"]["create"](Z, function () {
                                    V ? Laya["timer"]["frameOnce"](10, Z, function () {
                                        app.Log.log("重连信息2 round_id:-1 step:" + 1000000),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                                round_id: '-1',
                                                step: 1000000
                                            }, function (B, V) {
                                                app.Log.log("syncGame " + JSON["stringify"](V)),
                                                    B || V["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", B, V), Q["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), view["DesktopMgr"].Inst["fetchLinks"](), Z["_PlayerReconnectSuccess"](V));
                                            });
                                    }) : Laya["timer"]["frameOnce"](10, Z, function () {
                                        app.Log.log("send enterGame"),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "enterGame", {}, function (B, V) {
                                                B || V["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("enterGame", B, V), Q["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), app.Log.log("enterGame"), Z["_EnterGame"](V), view["DesktopMgr"].Inst["fetchLinks"]());
                                            });
                                    });
                                }));
                            }), Laya["Handler"]["create"](this, function (Q) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.8 * Q);
                            }, null, !1));
                        },
                        B["prototype"]["_EnterGame"] = function (B) {
                            app.Log.log("正常进入游戏: " + JSON["stringify"](B)),
                                B["is_end"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2011)), Q["Scene_MJ"].Inst["GameEnd"]()) : B["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](B["game_restore"]) : (this["load_over"] = !0, this["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](this["loaded_player_count"], this["real_player_count"]), view["DesktopMgr"].Inst["duringReconnect"] = !1, view["DesktopMgr"].Inst["StartChainAction"](0));
                        },
                        B["prototype"]["_PlayerReconnectSuccess"] = function (B) {
                            app.Log.log("_PlayerReconnectSuccess data:" + JSON["stringify"](B)),
                                B["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2011)), Q["Scene_MJ"].Inst["GameEnd"]()) : B["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](B["game_restore"]) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](Q["Tools"]["strOfLocalization"](2012)), Q["Scene_MJ"].Inst["ForceOut"]());
                        },
                        B["prototype"]["_SendDebugInfo"] = function () { },
                        B["prototype"]["OpenConnectObserve"] = function (B, V) {
                            var W = this;
                            this["is_ob"] = !0,
                                uiscript["UI_Loading"].Inst.show("enter_mj"),
                                this["Close"](),
                                view["AudioMgr"]["StopMusic"](),
                                Laya["timer"].once(500, this, function () {
                                    W["server_location"] = V,
                                        W["ob_token"] = B,
                                        W["_setState"](Q["EConnectState"]["tryconnect"]),
                                        W["lb_index"] = 0,
                                        W["_fetch_gateway"](0);
                                });
                        },
                        B["prototype"]["_ConnectSuccessOb"] = function () {
                            var B = this;
                            app.Log.log("MJNetMgr _ConnectSuccessOb "),
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authObserve", {
                                    token: this["ob_token"]
                                }, function (V, W) {
                                    V || W["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("authObserve", V, W), Q["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]()) : (app.Log.log("实时OB验证通过：" + JSON["stringify"](W)), uiscript["UI_Loading"].Inst["setProgressVal"](0.3), uiscript["UI_Live_Broadcast"].Inst && uiscript["UI_Live_Broadcast"].Inst["clearPendingUnits"](), app["NetAgent"]["sendReq2MJ"]("FastTest", "startObserve", {}, function (V, W) {
                                        if (V || W["error"])
                                            uiscript["UIMgr"].Inst["showNetReqError"]("startObserve", V, W), Q["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                        else {
                                            var Z = W.head,
                                                S = Z["game_config"].mode,
                                                v = [],
                                                i = Q["Tools"]["strOfLocalization"](2003),
                                                x = view["ERuleMode"]["Liqi4"];
                                            S.mode < 10 ? (x = view["ERuleMode"]["Liqi4"], B["real_player_count"] = 4) : S.mode < 20 && (x = view["ERuleMode"]["Liqi3"], B["real_player_count"] = 3);
                                            for (var l = 0; l < B["real_player_count"]; l++)
                                                v.push(null);
                                            S["extendinfo"] && (i = Q["Tools"]["strOfLocalization"](2004)),
                                                S["detail_rule"] && S["detail_rule"]["ai_level"] && (1 === S["detail_rule"]["ai_level"] && (i = Q["Tools"]["strOfLocalization"](2003)), 2 === S["detail_rule"]["ai_level"] && (i = Q["Tools"]["strOfLocalization"](2004)));
                                            for (var m = Q["GameUtility"]["get_default_ai_skin"](), s = Q["GameUtility"]["get_default_ai_character"](), l = 0; l < Z["seat_list"]["length"]; l++) {
                                                var f = Z["seat_list"][l];
                                                if (0 == f)
                                                    v[l] = {
                                                        nickname: i,
                                                        avatar_id: m,
                                                        level: {
                                                            id: "10101"
                                                        },
                                                        level3: {
                                                            id: "20101"
                                                        },
                                                        character: {
                                                            charid: s,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: m,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else
                                                    for (var z = 0; z < Z["players"]["length"]; z++)
                                                        if (Z["players"][z]["account_id"] == f) {
                                                            v[l] = Z["players"][z];
                                                            break;
                                                        }
                                            }
                                            for (var l = 0; l < B["real_player_count"]; l++)
                                                null == v[l] && (v[l] = {
                                                    account: 0,
                                                    nickname: Q["Tools"]["strOfLocalization"](2010),
                                                    avatar_id: m,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: s,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: m,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            B["_StartObSuccuess"](v, W["passed"], Z["game_config"]["toJSON"](), Z["start_time"]);
                                        }
                                    }));
                                });
                        },
                        B["prototype"]["_StartObSuccuess"] = function (B, V, W, Z) {
                            var S = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function () {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](Z, V);
                            })) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.4), Q["Scene_MJ"].Inst["openMJRoom"](W, B, Laya["Handler"]["create"](this, function () {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](W)), B, GameMgr.Inst["account_id"], view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](S, function () {
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.9),
                                        Laya["timer"].once(1000, S, function () {
                                            GameMgr.Inst["EnterMJ"](),
                                                uiscript["UI_Loading"].Inst["setProgressVal"](0.95),
                                                uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](Z, V);
                                        });
                                }));
                            }), Laya["Handler"]["create"](this, function (Q) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.4 + 0.4 * Q);
                            }, null, !1)));
                        },
                        B["_Inst"] = null,
                        B;
                }
                    ();
                Q["MJNetMgr"] = B;
            }
                (game || (game = {}));




            !function (Q) {
                var B = function () {
                    function B(Q) {
                        var B = this;
                        this.me = Q,
                            this.me["getChildByName"]("blackbg")["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                B["locking"] || B.hide(null);
                            }),
                            this["title"] = this.me["getChildByName"]("title"),
                            this["input"] = this.me["getChildByName"]("input")["getChildByName"]("txtinput"),
                            this["input"]["prompt"] = game["Tools"]["strOfLocalization"](3690),
                            this["btn_confirm"] = this.me["getChildByName"]("btn_confirm"),
                            this["btn_cancel"] = this.me["getChildByName"]("btn_cancel"),
                            this.me["visible"] = !1,
                            this["btn_cancel"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                B["locking"] || B.hide(null);
                            }, null, !1),
                            this["container_hidename"] = this.me["getChildByName"]("hidename"),
                            this["sp_checkbox"] = this["container_hidename"]["getChildByName"]("checkbox")["getChildByName"]("checkbox");
                        var V = this["container_hidename"]["getChildByName"]('w0'),
                            W = this["container_hidename"]["getChildByName"]('w1');
                        W.x = V.x + V["textField"]["textWidth"] + 10,
                            this["container_hidename"]["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                B["sp_checkbox"]["visible"] = !B["sp_checkbox"]["visible"],
                                    B["refresh_share_uuid"]();
                            });
                    }
                    return B["prototype"]["show_share"] = function (B) {
                        var V = this;
                        this["title"].text = game["Tools"]["strOfLocalization"](2124),
                            this["sp_checkbox"]["visible"] = !1,
                            this["btn_confirm"]["visible"] = !1,
                            this["input"]["editable"] = !1,
                            this.uuid = B,
                            this["refresh_share_uuid"](),
                            this.me["visible"] = !0,
                            this["locking"] = !0,
                            this["container_hidename"]["visible"] = !0,
                            this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2127),
                            Q["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function () {
                                V["locking"] = !1;
                            }));
                    },
                        B["prototype"]["refresh_share_uuid"] = function () {
                            var Q = game["Tools"]["encode_account_id"](GameMgr.Inst["account_id"]),
                                B = this.uuid,
                                V = game["Tools"]["getShareUrl"](GameMgr.Inst["link_url"]);
                            this["input"].text = this["sp_checkbox"]["visible"] ? game["Tools"]["strOfLocalization"](2126) + ': ' + V + "?paipu=" + game["Tools"]["EncodePaipuUUID"](B) + '_a' + Q + '_2' : game["Tools"]["strOfLocalization"](2126) + ': ' + V + "?paipu=" + B + '_a' + Q;
                        },
                        B["prototype"]["show_check"] = function () {
                            var B = this;
                            return Q["UI_PiPeiYuYue"].Inst["enable"] ? (Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (this["title"].text = game["Tools"]["strOfLocalization"](2128), this["btn_confirm"]["visible"] = !0, this["container_hidename"]["visible"] = !1, this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2129), this["btn_confirm"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                return B["input"].text ? (B.hide(Laya["Handler"]["create"](B, function () {
                                    var Q = B["input"].text["split"]('='),
                                        V = Q[Q["length"] - 1]["split"]('_'),
                                        W = 0;
                                    V["length"] > 1 && (W = 'a' == V[1]["charAt"](0) ? game["Tools"]["decode_account_id"](parseInt(V[1]["substr"](1))) : parseInt(V[1]));
                                    var Z = 0;
                                    if (V["length"] > 2) {
                                        var S = parseInt(V[2]);
                                        S && (Z = S);
                                    }
                                    GameMgr.Inst["checkPaiPu"](V[0], W, Z);
                                })), void 0) : (Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](3690)), void 0);
                            }, null, !1), this["input"]["editable"] = !0, this["input"].text = '', this.me["visible"] = !0, this["locking"] = !0, Q["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1;
                            })), void 0);
                        },
                        B["prototype"].hide = function (B) {
                            var V = this;
                            this["locking"] = !0,
                                Q["UIBase"]["anim_pop_hide"](this.me, Laya["Handler"]["create"](this, function () {
                                    V["locking"] = !1,
                                        V.me["visible"] = !1,
                                        B && B.run();
                                }));
                        },
                        B;
                }
                    (),
                    V = function () {
                        function B(Q) {
                            var B = this;
                            this.me = Q,
                                this["blackbg"] = Q["getChildByName"]("blackbg"),
                                this.root = Q["getChildByName"]("root"),
                                this["input"] = this.root["getChildByName"]("input")["getChildByName"]("txtinput"),
                                this.root["getChildByName"]("btn_close")["clickHandler"] = new Laya["Handler"](this, function () {
                                    B["locking"] || B["close"]();
                                }),
                                this.root["getChildByName"]("btn_confirm")["clickHandler"] = new Laya["Handler"](this, function () {
                                    B["locking"] || (game["Tools"]["calu_word_length"](B["input"].text) > 30 ? B["toolong"]["visible"] = !0 : (B["close"](), S["addCollect"](B.uuid, B["start_time"], B["end_time"], B["input"].text)));
                                }),
                                this["toolong"] = this.root["getChildByName"]("toolong");
                        }
                        return B["prototype"].show = function (B, V, W) {
                            var Z = this;
                            this.uuid = B,
                                this["start_time"] = V,
                                this["end_time"] = W,
                                this.me["visible"] = !0,
                                this["locking"] = !0,
                                this["input"].text = '',
                                this["toolong"]["visible"] = !1,
                                this["blackbg"]["alpha"] = 0,
                                Laya["Tween"].to(this["blackbg"], {
                                    alpha: 0.5
                                }, 150),
                                Q["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function () {
                                    Z["locking"] = !1;
                                }));
                        },
                            B["prototype"]["close"] = function () {
                                var B = this;
                                this["locking"] = !0,
                                    Laya["Tween"].to(this["blackbg"], {
                                        alpha: 0
                                    }, 150),
                                    Q["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function () {
                                        B["locking"] = !1,
                                            B.me["visible"] = !1;
                                    }));
                            },
                            B;
                    }
                        ();
                Q["UI_Pop_CollectInput"] = V;
                var W;
                !function (Q) {
                    Q[Q.ALL = 0] = "ALL",
                        Q[Q["FRIEND"] = 1] = "FRIEND",
                        Q[Q.RANK = 2] = "RANK",
                        Q[Q["MATCH"] = 4] = "MATCH",
                        Q[Q["COLLECT"] = 100] = "COLLECT";
                }
                    (W || (W = {}));
                var Z = function () {
                    function B(Q) {
                        this["uuid_list"] = [],
                            this.type = Q,
                            this["reset"]();
                    }
                    return B["prototype"]["reset"] = function () {
                        this["count"] = 0,
                            this["true_count"] = 0,
                            this["have_more_paipu"] = !0,
                            this["uuid_list"] = [],
                            this["duringload"] = !1;
                    },
                        B["prototype"]["loadList"] = function () {
                            var B = this;
                            if (!this["duringload"] && this["have_more_paipu"]) {
                                if (this["duringload"] = !0, this.type == W["COLLECT"]) {
                                    for (var V = [], Z = 0, v = 0; 10 > v; v++) {
                                        var i = this["count"] + v;
                                        if (i >= S["collect_lsts"]["length"])
                                            break;
                                        Z++;
                                        var x = S["collect_lsts"][i];
                                        S["record_map"][x] || V.push(x),
                                            this["uuid_list"].push(x);
                                    }
                                    V["length"] > 0 ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordsDetail", {
                                        uuid_list: V
                                    }, function (W, v) {
                                        if (B["duringload"] = !1, S.Inst["onLoadStateChange"](B.type, !1), W || v["error"])
                                            Q["UIMgr"].Inst["showNetReqError"]("fetchGameRecordsDetail", W, v);
                                        else if (app.Log.log(JSON["stringify"](v)), v["record_list"] && v["record_list"]["length"] == V["length"]) {
                                            for (var i = 0; i < v["record_list"]["length"]; i++) {
                                                var x = v["record_list"][i].uuid;
                                                S["record_map"][x] || (S["record_map"][x] = v["record_list"][i]);
                                            }
                                            B["count"] += Z,
                                                B["count"] >= S["collect_lsts"]["length"] && (B["have_more_paipu"] = !1, S.Inst["onLoadOver"](B.type)),
                                                S.Inst["onLoadMoreLst"](B.type, Z);
                                        } else
                                            B["have_more_paipu"] = !1, S.Inst["onLoadOver"](B.type);
                                    }) : (this["duringload"] = !1, this["count"] += Z, this["count"] >= S["collect_lsts"]["length"] && (this["have_more_paipu"] = !1, S.Inst["onLoadOver"](this.type)), S.Inst["onLoadMoreLst"](this.type, Z));
                                } else
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordList", {
                                        start: this["true_count"],
                                        count: 10,
                                        type: this.type
                                    }, function (V, Z) {
                                        if (B["duringload"] = !1, S.Inst["onLoadStateChange"](B.type, !1), V || Z["error"])
                                            Q["UIMgr"].Inst["showNetReqError"]("fetchGameRecordList", V, Z);
                                        else if (app.Log.log(JSON["stringify"](Z)), Z["record_list"] && Z["record_list"]["length"] > 0) {
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(Z),
                                                onload: function (msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Z));
                                                }
                                            }));
                                            for (var v = Z["record_list"], i = 0, x = 0; x < v["length"]; x++) {
                                                var l = v[x].uuid;
                                                if (B.type == W.RANK && v[x]["config"] && v[x]["config"].meta) {
                                                    var m = v[x]["config"].meta;
                                                    if (m) {
                                                        var s = cfg["desktop"]["matchmode"].get(m["mode_id"]);
                                                        if (s && 5 == s.room)
                                                            continue;
                                                    }
                                                }
                                                i++,
                                                    B["uuid_list"].push(l),
                                                    S["record_map"][l] || (S["record_map"][l] = v[x]);
                                            }
                                            B["count"] += i,
                                                B["true_count"] += v["length"],
                                                S.Inst["onLoadMoreLst"](B.type, i),
                                                B["have_more_paipu"] = !0;
                                        } else
                                            B["have_more_paipu"] = !1, S.Inst["onLoadOver"](B.type);
                                    });
                                Laya["timer"].once(700, this, function () {
                                    B["duringload"] && S.Inst["onLoadStateChange"](B.type, !0);
                                });
                            }
                        },
                        B["prototype"]["removeAt"] = function (Q) {
                            for (var B = 0; B < this["uuid_list"]["length"] - 1; B++)
                                B >= Q && (this["uuid_list"][B] = this["uuid_list"][B + 1]);
                            this["uuid_list"].pop(),
                                this["count"]--,
                                this["true_count"]--;
                        },
                        B;
                }
                    (),
                    S = function (S) {
                        function v() {
                            var Q = S.call(this, new ui["lobby"]["paipuUI"]()) || this;
                            return Q.top = null,
                                Q["container_scrollview"] = null,
                                Q["scrollview"] = null,
                                Q["loading"] = null,
                                Q.tabs = [],
                                Q["pop_otherpaipu"] = null,
                                Q["pop_collectinput"] = null,
                                Q["label_collect_count"] = null,
                                Q["noinfo"] = null,
                                Q["locking"] = !1,
                                Q["current_type"] = W.ALL,
                                v.Inst = Q,
                                Q;
                        }
                        return __extends(v, S),
                            v.init = function () {
                                var Q = this;
                                this["paipuLst"][W.ALL] = new Z(W.ALL),
                                    this["paipuLst"][W["FRIEND"]] = new Z(W["FRIEND"]),
                                    this["paipuLst"][W.RANK] = new Z(W.RANK),
                                    this["paipuLst"][W["MATCH"]] = new Z(W["MATCH"]),
                                    this["paipuLst"][W["COLLECT"]] = new Z(W["COLLECT"]),
                                    this["collect_lsts"] = [],
                                    this["record_map"] = {},
                                    this["collect_info"] = {},
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchCollectedGameRecordList", {}, function (B, V) {
                                        if (B || V["error"]);
                                        else {
                                            if (V["record_list"]) {
                                                for (var W = V["record_list"], Z = 0; Z < W["length"]; Z++) {
                                                    var S = {
                                                        uuid: W[Z].uuid,
                                                        time: W[Z]["end_time"],
                                                        remarks: W[Z]["remarks"]
                                                    };
                                                    Q["collect_lsts"].push(S.uuid),
                                                        Q["collect_info"][S.uuid] = S;
                                                }
                                                Q["collect_lsts"] = Q["collect_lsts"].sort(function (B, V) {
                                                    return Q["collect_info"][V].time - Q["collect_info"][B].time;
                                                });
                                            }
                                            V["record_collect_limit"] && (Q["collect_limit"] = V["record_collect_limit"]);
                                        }
                                    });
                            },
                            v["onAccountUpdate"] = function () {
                                this.Inst && this.Inst["enable"] && (this.Inst["label_collect_count"].text = this["collect_lsts"]["length"]["toString"]() + '/' + this["collect_limit"]["toString"]());
                            },
                            v["reset"] = function () {
                                this["paipuLst"][W.ALL] && this["paipuLst"][W.ALL]["reset"](),
                                    this["paipuLst"][W["FRIEND"]] && this["paipuLst"][W["FRIEND"]]["reset"](),
                                    this["paipuLst"][W.RANK] && this["paipuLst"][W.RANK]["reset"](),
                                    this["paipuLst"][W["MATCH"]] && this["paipuLst"][W["MATCH"]]["reset"]();
                            },
                            v["addCollect"] = function (B, V, W, Z) {
                                var S = this;
                                if (!this["collect_info"][B]) {
                                    if (this["collect_lsts"]["length"] + 1 > this["collect_limit"])
                                        return Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2767)), void 0;
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "addCollectedGameRecord", {
                                        uuid: B,
                                        remarks: Z,
                                        start_time: V,
                                        end_time: W
                                    }, function () { });
                                    var i = {
                                        uuid: B,
                                        remarks: Z,
                                        time: W
                                    };
                                    this["collect_info"][B] = i,
                                        this["collect_lsts"].push(B),
                                        this["collect_lsts"] = this["collect_lsts"].sort(function (Q, B) {
                                            return S["collect_info"][B].time - S["collect_info"][Q].time;
                                        }),
                                        Q["UI_DesktopInfo"].Inst && Q["UI_DesktopInfo"].Inst["enable"] && Q["UI_DesktopInfo"].Inst["onCollectChange"](),
                                        v.Inst && v.Inst["enable"] && v.Inst["onCollectChange"](B, -1);
                                }
                            },
                            v["removeCollect"] = function (B) {
                                var V = this;
                                if (this["collect_info"][B]) {
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "removeCollectedGameRecord", {
                                        uuid: B
                                    }, function () { }),
                                        delete this["collect_info"][B];
                                    for (var W = -1, Z = 0; Z < this["collect_lsts"]["length"]; Z++)
                                        if (this["collect_lsts"][Z] == B) {
                                            this["collect_lsts"][Z] = this["collect_lsts"][this["collect_lsts"]["length"] - 1],
                                                W = Z;
                                            break;
                                        }
                                    this["collect_lsts"].pop(),
                                        this["collect_lsts"] = this["collect_lsts"].sort(function (Q, B) {
                                            return V["collect_info"][B].time - V["collect_info"][Q].time;
                                        }),
                                        Q["UI_DesktopInfo"].Inst && Q["UI_DesktopInfo"].Inst["enable"] && Q["UI_DesktopInfo"].Inst["onCollectChange"](),
                                        v.Inst && v.Inst["enable"] && v.Inst["onCollectChange"](B, W);
                                }
                            },
                            v["prototype"]["onCreate"] = function () {
                                var W = this;
                                this.top = this.me["getChildByName"]("top"),
                                    this.top["getChildByName"]("btn_back")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                        W["locking"] || W["close"](Laya["Handler"]["create"](W, function () {
                                            Q["UIMgr"].Inst["showLobby"]();
                                        }));
                                    }, null, !1),
                                    this["container_scrollview"] = this.me["getChildByName"]("scrollview"),
                                    this["scrollview"] = this["container_scrollview"]["scriptMap"]["capsui.CScrollView"],
                                    this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, function (Q) {
                                        W["setItemValue"](Q["index"], Q["container"]);
                                    }, null, !1)),
                                    this["scrollview"]["setElastic"](),
                                    this["container_scrollview"].on("ratechange", this, function () {
                                        var Q = v["paipuLst"][W["current_type"]];
                                        (1 - W["scrollview"].rate) * Q["count"] < 3 && (Q["duringload"] || (Q["have_more_paipu"] ? Q["loadList"]() : 0 == Q["count"] && (W["noinfo"]["visible"] = !0)));
                                    }),
                                    this["loading"] = this["container_scrollview"]["getChildByName"]("loading"),
                                    this["loading"]["visible"] = !1,
                                    this["container_scrollview"]["getChildByName"]("checkother")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                        W["pop_otherpaipu"].me["visible"] || W["pop_otherpaipu"]["show_check"]();
                                    }, null, !1),
                                    this.tabs = [];
                                for (var Z = 0; 5 > Z; Z++)
                                    this.tabs.push(this["container_scrollview"]["getChildByName"]("tabs")["getChildAt"](Z)), this.tabs[Z]["clickHandler"] = new Laya["Handler"](this, this["changeTab"], [Z, !1]);
                                this["pop_otherpaipu"] = new B(this.me["getChildByName"]("pop_otherpaipu")),
                                    this["pop_collectinput"] = new V(this.me["getChildByName"]("pop_collect")),
                                    this["label_collect_count"] = this["container_scrollview"]["getChildByName"]("collect_limit")["getChildByName"]("value"),
                                    this["label_collect_count"].text = "0/20",
                                    this["noinfo"] = this["container_scrollview"]["getChildByName"]("noinfo");
                            },
                            v["prototype"].show = function () {
                                var B = this;
                                GameMgr.Inst["BehavioralStatistics"](20),
                                    game["Scene_Lobby"].Inst["change_bg"]("indoor", !1),
                                    this["enable"] = !0,
                                    this["pop_otherpaipu"].me["visible"] = !1,
                                    this["pop_collectinput"].me["visible"] = !1,
                                    Q["UIBase"]["anim_alpha_in"](this.top, {
                                        y: -30
                                    }, 200),
                                    Q["UIBase"]["anim_alpha_in"](this["container_scrollview"], {
                                        y: 30
                                    }, 200),
                                    this["locking"] = !0,
                                    this["loading"]["visible"] = !1,
                                    Laya["timer"].once(200, this, function () {
                                        B["locking"] = !1;
                                    }),
                                    this["changeTab"](0, !0),
                                    this["label_collect_count"].text = v["collect_lsts"]["length"]["toString"]() + '/' + v["collect_limit"]["toString"]();
                            },
                            v["prototype"]["close"] = function (B) {
                                var V = this;
                                this["locking"] = !0,
                                    Q["UIBase"]["anim_alpha_out"](this.top, {
                                        y: -30
                                    }, 150),
                                    Q["UIBase"]["anim_alpha_out"](this["container_scrollview"], {
                                        y: 30
                                    }, 150),
                                    Laya["timer"].once(150, this, function () {
                                        V["locking"] = !1,
                                            V["enable"] = !1,
                                            B && B.run();
                                    });
                            },
                            v["prototype"]["changeTab"] = function (Q, B) {
                                var V = [W.ALL, W.RANK, W["FRIEND"], W["MATCH"], W["COLLECT"]];
                                if (B || V[Q] != this["current_type"]) {
                                    if (this["loading"]["visible"] = !1, this["noinfo"]["visible"] = !1, this["current_type"] = V[Q], this["current_type"] == W["COLLECT"] && v["paipuLst"][this["current_type"]]["reset"](), this["scrollview"]["reset"](), this["current_type"] != W["COLLECT"]) {
                                        var Z = v["paipuLst"][this["current_type"]]["count"];
                                        Z > 0 && this["scrollview"]["addItem"](Z);
                                    }
                                    for (var S = 0; S < this.tabs["length"]; S++) {
                                        var i = this.tabs[S];
                                        i["getChildByName"]("img").skin = game["Tools"]["localUISrc"](Q == S ? "myres/shop/tab_choose.png" : "myres/shop/tab_unchoose.png"),
                                            i["getChildByName"]("label_name")["color"] = Q == S ? "#d9b263" : "#8cb65f";
                                    }
                                }
                            },
                            v["prototype"]["setItemValue"] = function (B, V) {
                                var W = this;
                                if (this["enable"]) {
                                    var Z = v["paipuLst"][this["current_type"]];
                                    if (Z || !(B >= Z["uuid_list"]["length"])) {
                                        for (var S = v["record_map"][Z["uuid_list"][B]], i = 0; 4 > i; i++) {
                                            var x = V["getChildByName"]('p' + i["toString"]());
                                            if (i < S["result"]["players"]["length"]) {
                                                x["visible"] = !0;
                                                var l = x["getChildByName"]("chosen"),
                                                    m = x["getChildByName"]("rank"),
                                                    s = x["getChildByName"]("rank_word"),
                                                    f = x["getChildByName"]("name"),
                                                    z = x["getChildByName"]("score"),
                                                    C = S["result"]["players"][i];
                                                z.text = C["part_point_1"] || '0';
                                                for (var T = 0, t = game["Tools"]["strOfLocalization"](2133), w = 0, h = !1, G = 0; G < S["accounts"]["length"]; G++)
                                                    if (S["accounts"][G].seat == C.seat) {
                                                        T = S["accounts"][G]["account_id"],
                                                            t = S["accounts"][G]["nickname"],
                                                            w = S["accounts"][G]["verified"],
                                                            h = S["accounts"][G]["account_id"] == GameMgr.Inst["account_id"];
                                                        break;
                                                    }
                                                game["Tools"]["SetNickname"](f, {
                                                    account_id: T,
                                                    nickname: t,
                                                    verified: w
                                                }),
                                                    l["visible"] = h,
                                                    z["color"] = h ? "#ffc458" : "#b98930",
                                                    f["getChildByName"]("name")["color"] = h ? "#dfdfdf" : "#a0a0a0",
                                                    s["color"] = m["color"] = h ? "#57bbdf" : "#489dbc";
                                                var g = x["getChildByName"]("rank_word");
                                                if ('en' == GameMgr["client_language"])
                                                    switch (i) {
                                                        case 0:
                                                            g.text = 'st';
                                                            break;
                                                        case 1:
                                                            g.text = 'nd';
                                                            break;
                                                        case 2:
                                                            g.text = 'rd';
                                                            break;
                                                        case 3:
                                                            g.text = 'th';
                                                    }
                                            } else
                                                x["visible"] = !1;
                                        }
                                        var r = new Date(1000 * S["end_time"]),
                                            j = '';
                                        j += r["getFullYear"]() + '/',
                                            j += (r["getMonth"]() < 9 ? '0' : '') + (r["getMonth"]() + 1)["toString"]() + '/',
                                            j += (r["getDate"]() < 10 ? '0' : '') + r["getDate"]() + ' ',
                                            j += (r["getHours"]() < 10 ? '0' : '') + r["getHours"]() + ':',
                                            j += (r["getMinutes"]() < 10 ? '0' : '') + r["getMinutes"](),
                                            V["getChildByName"]("date").text = j,
                                            V["getChildByName"]("check")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                return W["locking"] ? void 0 : Q["UI_PiPeiYuYue"].Inst["enable"] ? (Q["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (GameMgr.Inst["checkPaiPu"](S.uuid, GameMgr.Inst["account_id"], 0), void 0);
                                            }, null, !1),
                                            V["getChildByName"]("share")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                W["locking"] || W["pop_otherpaipu"].me["visible"] || (W["pop_otherpaipu"]["show_share"](S.uuid), GameMgr.Inst["BehavioralStatistics"](21));
                                            }, null, !1);
                                        var X = V["getChildByName"]("room"),
                                            d = game["Tools"]["get_room_desc"](S["config"]);
                                        X.text = d.text;
                                        var y = '';
                                        if (1 == S["config"]["category"])
                                            y = game["Tools"]["strOfLocalization"](2023);
                                        else if (4 == S["config"]["category"])
                                            y = game["Tools"]["strOfLocalization"](2025);
                                        else if (2 == S["config"]["category"]) {
                                            var p = S["config"].meta;
                                            if (p) {
                                                var E = cfg["desktop"]["matchmode"].get(p["mode_id"]);
                                                E && (y = E["room_name_" + GameMgr["client_language"]]);
                                            }
                                        }
                                        if (v["collect_info"][S.uuid]) {
                                            var O = v["collect_info"][S.uuid],
                                                b = V["getChildByName"]("remarks_info"),
                                                M = V["getChildByName"]("input"),
                                                U = M["getChildByName"]("txtinput"),
                                                k = V["getChildByName"]("btn_input"),
                                                L = !1,
                                                R = function () {
                                                    L ? (b["visible"] = !1, M["visible"] = !0, U.text = b.text, k["visible"] = !1) : (b.text = O["remarks"] && '' != O["remarks"] ? game["Tools"]["strWithoutForbidden"](O["remarks"]) : y, b["visible"] = !0, M["visible"] = !1, k["visible"] = !0);
                                                };
                                            R(),
                                                k["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                    L = !0,
                                                        R();
                                                }, null, !1),
                                                U.on("blur", this, function () {
                                                    L && (game["Tools"]["calu_word_length"](U.text) > 30 ? Q["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2765)) : U.text != O["remarks"] && (O["remarks"] = U.text, app["NetAgent"]["sendReq2Lobby"]("Lobby", "changeCollectedGameRecordRemarks", {
                                                        uuid: S.uuid,
                                                        remarks: U.text
                                                    }, function () { }))),
                                                        L = !1,
                                                        R();
                                                });
                                            var o = V["getChildByName"]("collect");
                                            o["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                Q["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3248), Laya["Handler"]["create"](W, function () {
                                                    v["removeCollect"](S.uuid);
                                                }));
                                            }, null, !1),
                                                o["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star.png");
                                        } else {
                                            V["getChildByName"]("input")["visible"] = !1,
                                                V["getChildByName"]("btn_input")["visible"] = !1,
                                                V["getChildByName"]("remarks_info")["visible"] = !0,
                                                V["getChildByName"]("remarks_info").text = y;
                                            var o = V["getChildByName"]("collect");
                                            o["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                W["pop_collectinput"].show(S.uuid, S["start_time"], S["end_time"]);
                                            }, null, !1),
                                                o["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star_gray.png");
                                        }
                                    }
                                }
                            },
                            v["prototype"]["onLoadStateChange"] = function (Q, B) {
                                this["current_type"] == Q && (this["loading"]["visible"] = B);
                            },
                            v["prototype"]["onLoadMoreLst"] = function (Q, B) {
                                this["current_type"] == Q && this["scrollview"]["addItem"](B);
                            },
                            v["prototype"]["onLoadOver"] = function (Q) {
                                if (this["current_type"] == Q) {
                                    var B = v["paipuLst"][this["current_type"]];
                                    0 == B["count"] && (this["noinfo"]["visible"] = !0);
                                }
                            },
                            v["prototype"]["onCollectChange"] = function (Q, B) {
                                if (this["current_type"] == W["COLLECT"])
                                    B >= 0 && (v["paipuLst"][W["COLLECT"]]["removeAt"](B), this["scrollview"]["delItem"](B));
                                else
                                    for (var V = v["paipuLst"][this["current_type"]]["uuid_list"], Z = 0; Z < V["length"]; Z++)
                                        if (V[Z] == Q) {
                                            this["scrollview"]["wantToRefreshItem"](Z);
                                            break;
                                        }
                                this["label_collect_count"].text = v["collect_lsts"]["length"]["toString"]() + '/' + v["collect_limit"]["toString"]();
                            },
                            v.Inst = null,
                            v["paipuLst"] = {},
                            v["collect_lsts"] = [],
                            v["record_map"] = {},
                            v["collect_info"] = {},
                            v["collect_limit"] = 20,
                            v;
                    }
                        (Q["UIBase"]);
                Q["UI_PaiPu"] = S;
            }
                (uiscript || (uiscript = {}));




            GameMgr.Inst.checkPaiPu = function (B, V, W) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': B,
                        'account_id': parseInt(V.toString())
                    }),
                    onload: function (msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': B,
                            'account_id': parseInt(V.toString())
                        }));
                    }
                }));
                var Z = GameMgr.Inst;
                var Q = GameMgr;
                return B = B.trim(),
                    app.Log.log("checkPaiPu game_uuid:" + B + " account_id:" + V["toString"]() + " paipu_config:" + W),
                    this["duringPaipu"] ? (app.Log["Error"]("已经在看牌谱了"), void 0) : (this["duringPaipu"] = !0, uiscript["UI_Loading"].Inst.show("enter_mj"), Q.Inst["onLoadStart"]("paipu"), 2 & W && (B = game["Tools"]["DecodePaipuUUID"](B)), this["record_uuid"] = B, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecord", {
                        game_uuid: B,
                        client_version_string: this["getClientVersion"]()
                    }, function (S, v) {
                        if (S || v["error"]) {
                            uiscript["UIMgr"].Inst["showNetReqError"]("fetchGameRecord", S, v);
                            var i = 0.12;
                            uiscript["UI_Loading"].Inst["setProgressVal"](i);
                            var x = function () {
                                return i += 0.06,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](Math.min(1, i)),
                                    i >= 1.1 ? (uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), Laya["timer"]["clear"](this, x), void 0) : void 0;
                            };
                            Laya["timer"].loop(50, Z, x),
                                Z["duringPaipu"] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': v.head
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': v.head
                                    }));
                                }
                            }));
                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                            var l = v.head,
                                m = [null, null, null, null],
                                s = game["Tools"]["strOfLocalization"](2003),
                                f = l["config"].mode;
                            if (Q["inRelease"] && f["testing_environment"] && f["testing_environment"]["paixing"])
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](3169)), uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), Z["duringPaipu"] = !1, void 0;
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "readGameRecord", {
                                game_uuid: B,
                                client_version_string: Z["getClientVersion"]()
                            }, function () { }),
                                f["extendinfo"] && (s = game["Tools"]["strOfLocalization"](2004)),
                                f["detail_rule"] && f["detail_rule"]["ai_level"] && (1 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2003)), 2 === f["detail_rule"]["ai_level"] && (s = game["Tools"]["strOfLocalization"](2004)));
                            var z = !1;
                            l["end_time"] ? (Z["record_end_time"] = l["end_time"], l["end_time"] > "1576112400" && (z = !0)) : Z["record_end_time"] = -1,
                                Z["record_start_time"] = l["start_time"] ? l["start_time"] : -1;
                            for (var C = 0; C < l["accounts"]["length"]; C++) {
                                var T = l["accounts"][C];
                                if (T["character"]) {
                                    var t = T["character"],
                                        w = {};
                                    if (z) {
                                        var h = T["views"];
                                        if (h)
                                            for (var G = 0; G < h["length"]; G++)
                                                w[h[G].slot] = h[G]["item_id"];
                                    } else {
                                        var g = t["views"];
                                        if (g)
                                            for (var G = 0; G < g["length"]; G++) {
                                                var r = g[G].slot,
                                                    j = g[G]["item_id"],
                                                    X = r - 1;
                                                w[X] = j;
                                            }
                                    }
                                    var d = [];
                                    for (var y in w)
                                        d.push({
                                            slot: parseInt(y),
                                            item_id: w[y]
                                        });
                                    T["views"] = d,
                                        m[T.seat] = T;
                                } else
                                    T["character"] = {
                                        charid: T["avatar_id"],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg["item_definition"]["character"].get(T["avatar_id"])["init_skin"],
                                        is_upgraded: !1
                                    },
                                        T["avatar_id"] = T["character"].skin,
                                        T["views"] = [],
                                        m[T.seat] = T;
                            }
                            for (var p = game["GameUtility"]["get_default_ai_skin"](), E = game["GameUtility"]["get_default_ai_character"](), C = 0; C < m["length"]; C++)
                                null == m[C] && (m[C] = {
                                    nickname: s,
                                    avatar_id: p,
                                    level: {
                                        id: "10101"
                                    },
                                    level3: {
                                        id: "20101"
                                    },
                                    character: {
                                        charid: E,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: p,
                                        is_upgraded: !1
                                    }
                                });
                            var O = Laya["Handler"]["create"](Z, function (Q) {
                                game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                                    game["Scene_MJ"].Inst["openMJRoom"](l["config"], m, Laya["Handler"]["create"](Z, function () {
                                        Z["duringPaipu"] = !1,
                                            view["DesktopMgr"].Inst["paipu_config"] = W,
                                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](l["config"])), m, V, view["EMJMode"]["paipu"], Laya["Handler"]["create"](Z, function () {
                                                uiscript["UI_Replay"].Inst["initData"](Q),
                                                    uiscript["UI_Replay"].Inst["enable"] = !0,
                                                    Laya["timer"].once(1000, Z, function () {
                                                        Z["EnterMJ"]();
                                                    }),
                                                    Laya["timer"].once(1500, Z, function () {
                                                        view["DesktopMgr"]["player_link_state"] = [view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"]],
                                                            uiscript["UI_DesktopInfo"].Inst["refreshLinks"](),
                                                            uiscript["UI_Loading"].Inst["close"]();
                                                    }),
                                                    Laya["timer"].once(1000, Z, function () {
                                                        uiscript["UI_Replay"].Inst["nextStep"](!0);
                                                    });
                                            }));
                                    }), Laya["Handler"]["create"](Z, function (Q) {
                                        return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.9 * Q);
                                    }, null, !1));
                            }),
                                b = {};
                            if (b["record"] = l, v.data && v.data["length"])
                                b.game = net["MessageWrapper"]["decodeMessage"](v.data), O["runWith"](b);
                            else {
                                var M = v["data_url"];
                                game["LoadMgr"]["httpload"](M, "arraybuffer", !1, Laya["Handler"]["create"](Z, function (Q) {
                                    if (Q["success"]) {
                                        var B = new Laya.Byte();
                                        B["writeArrayBuffer"](Q.data);
                                        var V = net["MessageWrapper"]["decodeMessage"](B["getUint8Array"](0, B["length"]));
                                        b.game = V,
                                            O["runWith"](b);
                                    } else
                                        uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2005) + v["data_url"]), uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), Z["duringPaipu"] = !1;
                                }));
                            }
                        }
                    }), void 0);
            }



        }
        // 从网上抄的时间格式化
        Date.prototype.format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        }
        console.log('[mahjong-helper-majsoul] 启动完毕!!!');
    } catch (error) {
        console.log('[mahjong-helper-majsoul] 等待游戏启动');
        setTimeout(mahjong_helper_majsoul, 1000);
    }
}
    ();