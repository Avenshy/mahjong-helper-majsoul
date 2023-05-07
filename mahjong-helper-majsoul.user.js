// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20230507
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

let API_URL = 'https://localhost:12121/';
! function mahjong_helper_majsoul() {
    try {
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionLockTile play data:' + JSON['stringify'](S));
                            var V = S.seat;
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var o = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z'),
                                y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)];
                            if (S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }), void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])), Z['DesktopMgr'].Inst['setScores'](S['scores']), 0 == S['lock_state'] ? y['RevealFailed'](o) : 1 == S['lock_state'] && y['PlaySound']('act_locktile'), 3 == S['lock_state']) {
                                y['PlaySound']('act_unveil');
                                var G = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])];
                                G['RevealFailed'](o),
                                    Z['DesktopMgr'].Inst['onRevealStateChange'](Z['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                Z['DesktopMgr'].Inst['onRevealStateChange'](V, !1);
                            Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionLockTile fastplay data:' + JSON['stringify'](S) + ' usetime:' + V);
                            var o = S.seat;
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var y = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z'),
                                G = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                            if (S['operation'] && -1 != V && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }), void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])), Z['DesktopMgr'].Inst['setScores'](S['scores']), 0 == S['lock_state'] && G['RevealFailed'](y, !1), 3 == S['lock_state']) {
                                var e = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])];
                                e['RevealFailed'](y, !1),
                                    Z['DesktopMgr'].Inst['onRevealStateChange'](Z['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                Z['DesktopMgr'].Inst['onRevealStateChange'](o, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1);
                        },
                        V['record'] = function(S, V) {
                            if (void 0 === V && (V = 0), app.Log.log('ActionLockTile record data:' + JSON['stringify'](S)), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var o = 0; o < S['operations']['length']; o++)
                                    Z['ActionOperation'].ob(S['operations'][o], V, 450);
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']);
                            var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](S.seat)],
                                G = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z');
                            if (0 == S['lock_state'] ? y['RevealFailed'](G) : 1 == S['lock_state'] && y['PlaySound']('act_locktile'), 3 == S['lock_state']) {
                                y['PlaySound']('act_unveil');
                                var e = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])];
                                e['RevealFailed'](G),
                                    Z['DesktopMgr'].Inst['onRevealStateChange'](Z['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                Z['DesktopMgr'].Inst['onRevealStateChange'](S.seat, !1);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                1000;
                        },
                        V['fastrecord'] = function(S, V) {
                            if (void 0 === V && (V = -1), app.Log.log('ActionLockTile record data:' + JSON['stringify'](S)), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operations'])
                                for (var o = 0; o < S['operations']['length']; o++)
                                    Z['ActionOperation'].ob(S['operations'][o], V, 450);
                            Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](S.seat)],
                                G = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z');
                            if (0 == S['lock_state'] && y['RevealFailed'](G, !1), 3 == S['lock_state']) {
                                var e = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])];
                                e['RevealFailed'](G, !1),
                                    Z['DesktopMgr'].Inst['onRevealStateChange'](Z['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                Z['DesktopMgr'].Inst['onRevealStateChange'](S.seat, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionLockTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            Z['PAIMODEL_HEIGHT'] = '0.043225' * 0.94,
                Z['PAIMODEL_WIDTH'] = '0.032775' * 0.94,
                Z['PAIMODEL_THICKNESS'] = '0.0235' * 0.95 * 0.94,
                Z['PAI_COUNT'] = 136;
            var S;
            ! function(Z) {
                Z[Z.NULL = 0] = 'NULL',
                    Z[Z.AUTH = 1] = 'AUTH',
                    Z[Z['SYNCING'] = 2] = 'SYNCING',
                    Z[Z['READY'] = 3] = 'READY';
            }
            (S = Z['ELink_State'] || (Z['ELink_State'] = {}));
            var V;
            ! function(Z) {
                Z[Z['Liqi4'] = 0] = 'Liqi4',
                    Z[Z['Liqi3'] = 1] = 'Liqi3';
            }
            (V = Z['ERuleMode'] || (Z['ERuleMode'] = {}));
            var o;
            ! function(Z) {
                Z[Z.play = 0] = 'play',
                    Z[Z['paipu'] = 1] = 'paipu',
                    Z[Z['live_broadcast'] = 2] = 'live_broadcast';
            }
            (o = Z['EMJMode'] || (Z['EMJMode'] = {}));
            var y = function(y) {
                    function G() {
                        var S = y.call(this) || this;
                        return S['rule_mode'] = V['Liqi4'],
                            S.mode = o.play,
                            S['active'] = !1,
                            S['game_config'] = null,
                            S.seat = 0,
                            S.dora = [],
                            S['xuezhan'] = !1,
                            S['anpai'] = !1,
                            S['last_anpai_score'] = 0,
                            S['players'] = null,
                            S['mainrole'] = null,
                            S['num_left_show'] = new Array(),
                            S['container_other'] = null,
                            S['plane_chang'] = null,
                            S['plane_ju'] = null,
                            S['container_other_reveal'] = null,
                            S['plane_chang_reveal'] = null,
                            S['plane_ju_reveal'] = null,
                            S['num_left_show_reveal'] = new Array(),
                            S['score_reveal'] = new Array(),
                            S['trans_container_effect'] = null,
                            S['effect_pai_canchi'] = null,
                            S['effect_dora3D'] = null,
                            S['effect_dora3D_touying'] = null,
                            S['effect_doraPlane'] = null,
                            S['effect_shadow'] = null,
                            S['effect_shadow_touming'] = null,
                            S['effect_recommend'] = null,
                            S['auto_hule'] = !1,
                            S['auto_nofulu'] = !1,
                            S['auto_moqie'] = !1,
                            S['auto_liqi'] = !0,
                            S['emoji_switch'] = !1,
                            S['duringReconnect'] = !1,
                            S['gameing'] = !1,
                            S['lastpai_seat'] = 0,
                            S['lastqipai'] = null,
                            S['oplist'] = [],
                            S['liqi_select'] = [],
                            S['operation_showing'] = !1,
                            S['myaccountid'] = 0,
                            S['player_datas'] = [],
                            S['player_effects'] = [],
                            S['mjp_res_name'] = '',
                            S['last_gang'] = 0,
                            S['gameEndResult'] = null,
                            S['levelchangeinfo'] = null,
                            S['activity_reward'] = null,
                            S['rewardinfo'] = null,
                            S['choosed_pai'] = null,
                            S['muyu_info'] = null,
                            S['muyu_effect'] = null,
                            S['actionList'] = [],
                            S['action_frame'] = 0,
                            S['action_index'] = 0,
                            S['current_step'] = 0,
                            S['actionMap'] = null,
                            S['tingpais'] = [],
                            S['record_show_hand'] = !1,
                            S['record_show_paopai'] = !1,
                            S['record_show_anim'] = !0,
                            S['ptchange'] = 0,
                            S['waiting_lingshang_deal_tile'] = !1,
                            S.md5 = '',
                            S['paipu_config'] = 0,
                            S['ai_level'] = 1,
                            S['timestoped'] = !1,
                            S['handles_after_timerun'] = [],
                            S['doactioncd'] = 0,
                            S['dochain_fast'] = !1,
                            S['action_running'] = !1,
                            S['hangupCount'] = 0,
                            S['state_cache'] = {},
                            S['mind_voice_seat'] = -1,
                            S['mind_voice_type'] = '',
                            S['during_playing_mind_voice'] = !1,
                            G.Inst = S,
                            S['actionMap'] = {},
                            S['actionMap']['ActionMJStart'] = new Laya['Handler'](S, function(Z) {
                                Z.msg;
                                return app.Log.log('ActionMJStart begin'),
                                    S['ClearOperationShow'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    uiscript['UI_FightBegin'].show(Laya['Handler']['create'](S, function() {
                                        uiscript['UI_Loading'].Inst['close'](),
                                            S['ActionRunComplete']();
                                    })),
                                    2000;
                            }, null, !1),
                            S['actionMap']['ActionNewRound'] = new Laya['Handler'](S, function(V) {
                                app.Log.log('ActionNewRound begin');
                                var o = V.msg,
                                    y = V.fast;
                                if (S['ClearOperationShow'](), uiscript['UI_Loading'].Inst['close'](), GameMgr.Inst['EnterMJ'](), y)
                                    return uiscript['UI_FightBegin'].hide(), Z['ActionNewRound']['fastplay'](o, -1), 0;
                                var G = uiscript['UI_FightBegin'].hide();
                                return Laya['timer'].once(G + 200, S, function() {
                                        Z['ActionNewRound'].play(o);
                                    }),
                                    o.al && (G += 1300),
                                    S['is_jiuchao_mode']() && (G += 150),
                                    G + 200 + 1200 + 400;
                            }, null, !1),
                            S['actionMap']['ActionNewCard'] = new Laya['Handler'](S, function(V) {
                                app.Log.log('ActionNewCard begin');
                                var o = V.msg,
                                    y = V.fast;
                                return S['ClearOperationShow'](),
                                    uiscript['UI_Loading'].Inst['close'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    y ? (Z['ActionNewCard']['fastplay'](o, -1), 0) : Z['ActionNewCard'].play(o);
                            }, null, !1),
                            S['actionMap']['ActionDiscardTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionDiscardTile']['fastplay'](o, -1), 0) : (Z['ActionDiscardTile'].play(o), Laya['timer'].once(500, S, S['ActionRunComplete']), 500);
                            }, null, !1),
                            S['actionMap']['ActionDealTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionDealTile']['fastplay'](o, -1), 0) : (Z['ActionDealTile'].play(o), 500);
                            }, null, !1),
                            S['actionMap']['ActionChiPengGang'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionChiPengGang']['fastplay'](o, -1), 0) : (Z['ActionChiPengGang'].play(o), 1100);
                            }, null, !1),
                            S['actionMap']['ActionAnGangAddGang'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionAnGangAddGang']['fastplay'](o, -1), 0) : (Z['ActionAnGangAddGang'].play(o), 1100);
                            }, null, !1),
                            S['actionMap']['ActionHule'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg;
                                return Z['ActionHule'].play(o),
                                    5000;
                            }, null, !1),
                            S['actionMap']['ActionHuleXueZhanMid'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg;
                                return Z['ActionHuleXueZhanMid'].play(o),
                                    1000;
                            }, null, !1),
                            S['actionMap']['ActionHuleXueZhanEnd'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg;
                                return Z['ActionHuleXueZhanEnd'].play(o),
                                    1000;
                            }, null, !1),
                            S['actionMap']['ActionNoTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg;
                                return Z['ActionNoTile'].play(o),
                                    5000;
                            }, null, !1),
                            S['actionMap']['ActionLiuJu'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg;
                                return Z['ActionLiuJu'].play(o),
                                    5000;
                            }, null, !1),
                            S['actionMap']['ActionBaBei'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionBabei']['fastplay'](o, -1), 0) : (Z['ActionBabei'].play(o), 1000);
                            }, null, !1),
                            S['actionMap']['ActionChangeTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionChangeTile']['fastplay'](o, -1), 0) : (Z['ActionChangeTile'].play(o), 3000);
                            }, null, !1),
                            S['actionMap']['ActionSelectGap'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionSelectGap']['fastplay'](o, -1), 0) : (Z['ActionSelectGap'].play(o), 800);
                            }, null, !1),
                            S['actionMap']['ActionGangResult'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionGangResult']['fastplay'](o, -1), 0) : (Z['ActionGangResult'].play(o), 1000);
                            }, null, !1),
                            S['actionMap']['ActionGangResultEnd'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionGangResultEnd']['fastplay'](o, -1), 0) : (Z['ActionGangResultEnd'].play(o), 2000);
                            }, null, !1),
                            S['actionMap']['ActionRevealTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionRevealTile']['fastplay'](o, -1), 0) : (Z['ActionRevealTile'].play(o), Laya['timer'].once(500, S, S['ActionRunComplete']), 500);
                            }, null, !1),
                            S['actionMap']['ActionLockTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionLockTile']['fastplay'](o, -1), 0) : (Z['ActionLockTile'].play(o), 1000);
                            }, null, !1),
                            S['actionMap']['ActionUnveilTile'] = new Laya['Handler'](S, function(V) {
                                S['ClearOperationShow']();
                                var o = V.msg,
                                    y = V.fast;
                                return y ? (Z['ActionUnveilTile']['fastplay'](o, -1), 0) : (Z['ActionUnveilTile'].play(o), 1000);
                            }, null, !1),
                            S['actionMap']['ActionFillAwaitingTiles'] = new Laya['Handler'](S, function(S) {
                                app.Log.log('ActionFillAwaitingTiles begin');
                                var V = S.msg,
                                    o = S.fast;
                                return o ? (Z['ActionFillAwaitingTiles']['fastplay'](V, -1), 0) : Z['ActionFillAwaitingTiles'].play(V);
                            }, null, !1),
                            app['NetAgent']['AddListener2MJ']('NotifyGameEndResult', Laya['Handler']['create'](S, function(Z) {
                                S['gameEndResult'] = Z['result'],
                                    uiscript['UI_Hangup_Warn'].Inst['enable'] && uiscript['UI_Hangup_Warn'].Inst['close'](),
                                    S.mode == o.play && (uiscript['UI_Activity']['need_check_activity'] = !0),
                                    Laya['timer'].once(10000, S, function() {
                                        game['MJNetMgr'].Inst['Close']();
                                    });
                            })),
                            app['NetAgent']['AddListener2MJ']('ActionPrototype', Laya['Handler']['create'](S, function(Z) {
                                if (app.Log.log('Receive Action: ' + JSON['stringify'](Z)), S['duringReconnect'])
                                    S['actionList'].push(Z);
                                else if (S['actionList']['length'] > 0)
                                    S['actionList'].push(Z);
                                else {
                                    S['actionList'].push(Z);
                                    var V = S['doactioncd'] - Laya['timer']['currTimer'];
                                    0 > V && (V = 0),
                                        S['StartChainAction'](V);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameTerminate', Laya['Handler']['create'](S, function(V) {
                                app.Log.log('NotifyGameTerminate:' + JSON['stringify'](V)),
                                    Z['AudioMgr']['StopMusic'](),
                                    'user-manual-terminate' != V['reason'] && uiscript['UI_SecondConfirm'].Inst['show_only_confirm'](game['Tools']['strOfLocalization'](2227), Laya['Handler']['create'](S, function() {
                                        S['Reset'](),
                                            game['Scene_MJ'].Inst['GameEnd']();
                                    })),
                                    uiscript['UI_VoteProgress'].Inst['enable'] && uiscript['UI_VoteProgress'].Inst['close']();
                            })),
                            Z['ModelAnimationController']['init_data'](),
                            app['NetAgent']['AddListener2MJ']('NotifyGamePause', Laya['Handler']['create'](S, function(Z) {
                                app.Log.log('NotifyGamePause:' + JSON['stringify'](Z));
                                var V = Z['paused'];
                                S['setGameStop'](V);
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameFinishReward', Laya['Handler']['create'](S, function(Z) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](Z)),
                                    S['levelchangeinfo'] = Z['level_change'],
                                    S['rewardinfo'] = Z;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityReward', Laya['Handler']['create'](S, function(Z) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](Z)),
                                    S['activity_reward'] = Z;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityPoint', Laya['Handler']['create'](S, function(Z) {
                                for (var S = Z['activity_points'], V = 0; V < S['length']; V++) {
                                    var o = S[V];
                                    o['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = o['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyLeaderboardPoint', Laya['Handler']['create'](S, function(Z) {
                                for (var S = Z['leaderboard_points'], V = 0; V < S['length']; V++) {
                                    var o = S[V];
                                    o['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = o['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyGameFinishRewardV2', Laya['Handler']['create'](S, function(Z) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](Z)),
                                    S['levelchangeinfo'] = Z['level_change'],
                                    S['rewardinfo'] = Z;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityRewardV2', Laya['Handler']['create'](S, function(Z) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](Z)),
                                    S['activity_reward'] = Z;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityPointV2', Laya['Handler']['create'](S, function(Z) {
                                for (var S = Z['activity_points'], V = 0; V < S['length']; V++) {
                                    var o = S[V];
                                    o['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = o['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyLeaderboardPointV2', Laya['Handler']['create'](S, function(Z) {
                                for (var S = Z['leaderboard_points'], V = 0; V < S['length']; V++) {
                                    var o = S[V];
                                    o['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = o['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('PlayerLeaving', Laya['Handler']['create'](S, function(Z) {
                                Z && Z.seat == S.seat && uiscript['UI_Hangup_Warn'].Inst.show();
                            })),
                            S;
                    }
                    return __extends(G, y),
                        G['is_yuren_type'] = function(Z) {
                            if (void 0 === Z && (Z = !1), Z) {
                                var S = new Date();
                                this['_is_yuren_type'] = 3 == S['getMonth']() && 1 == S['getDate']();
                            }
                            return this['_is_yuren_type'];
                        },
                        Object['defineProperty'](G['prototype'], 'round_id', {
                            get: function() {
                                return this['index_change'] + '-' + this['index_ju'] + '-' + this['index_ben'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](G['prototype'], 'main_role_character_info', {
                            get: function() {
                                return this['player_datas'][this.seat]['character'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](G['prototype'], 'player_count', {
                            get: function() {
                                return this['rule_mode'] == V['Liqi3'] ? 3 : 4;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        G['prototype']['seat2LocalPosition'] = function(Z) {
                            if (this['rule_mode'] == V['Liqi3']) {
                                for (var S = this.seat, o = 0; 4 > o; o++) {
                                    if (Z == S)
                                        return o;
                                    S++,
                                    S >= 3 && (S = -1);
                                }
                                return 0;
                            }
                            return (Z - this.seat + 4) % 4;
                        },
                        G['prototype']['localPosition2Seat'] = function(Z) {
                            if (this['rule_mode'] == V['Liqi3']) {
                                for (var S = this.seat, o = 0; Z > o; o++)
                                    S++, S >= 3 && (S = -1);
                                return S;
                            }
                            return (this.seat + Z) % 4;
                        },
                        G['prototype']['getPlayerName'] = function(Z) {
                            var S = this['player_datas'][Z]['account_id'];
                            if (this.mode == o['paipu'] && uiscript['UI_Replay'].Inst['hide_name']) {
                                var V = this['seat2LocalPosition'](Z);
                                switch (V) {
                                    case 0:
                                        return {
                                            account_id: S,
                                            nickname: game['Tools']['strOfLocalization'](3076),
                                            verified: 0
                                        };
                                    case 1:
                                        return {
                                            account_id: S,
                                            nickname: game['Tools']['strOfLocalization'](3073),
                                            verified: 0
                                        };
                                    case 2:
                                        return {
                                            account_id: S,
                                            nickname: game['Tools']['strOfLocalization'](3074),
                                            verified: 0
                                        };
                                    case 3:
                                        return {
                                            account_id: S,
                                            nickname: game['Tools']['strOfLocalization'](3075),
                                            verified: 0
                                        };
                                }
                                return {
                                    account_id: S,
                                    nickname: '',
                                    verified: 0
                                };
                            }
                            var y = this['player_datas'][Z]['nickname'];
                            return S && !game['Tools']['is_same_zone'](GameMgr.Inst['account_id'], S) && (GameMgr.Inst['nickname_replace_enable'] && GameMgr.Inst['nickname_replace_lst']['length'] > 0 ? GameMgr.Inst['nickname_replace_table'][S] ? y = GameMgr.Inst['nickname_replace_table'][S] : (y = GameMgr.Inst['nickname_replace_lst'][Math['floor'](Math['random']() * GameMgr.Inst['nickname_replace_lst']['length'])], GameMgr.Inst['nickname_replace_table'][S] = y) : null != app['Taboo'].test(y) && (y = game['Tools']['strOfLocalization'](3060))), {
                                account_id: S,
                                nickname: y,
                                verified: this['player_datas'][Z]['verified']
                            };
                        },
                        Object['defineProperty'](G['prototype'], 'showingPaopai', {
                            get: function() {
                                return this.mode != o.play;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        G['prototype']['is_dora3_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['dora3_mode'] ? !0 : !1;
                        },
                        G['prototype']['is_peipai_open_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['begin_open_mode'] ? !0 : !1;
                        },
                        G['prototype']['is_muyu_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['muyu_mode'] ? !0 : !1;
                        },
                        G['prototype']['is_open_hand'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['open_hand'] ? !0 : !1;
                        },
                        G['prototype']['is_shilian_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode']['shilian'] ? !0 : !1;
                        },
                        G['prototype']['is_xiuluo_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['xuezhandaodi'] ? !0 : !1;
                        },
                        G['prototype']['is_jiuchao_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['jiuchao_mode'] ? !0 : !1;
                        },
                        G['prototype']['is_reveal_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['reveal_discard'] ? !0 : !1;
                        },
                        G['prototype']['is_hesu_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].hesu ? !0 : !1;
                        },
                        G['prototype']['is_huansanzhang_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['huansanzhang'] ? !0 : !1;
                        },
                        G['prototype']['is_chuanma_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['chuanma'] ? !0 : !1;
                        },
                        G['prototype']['is_jjc_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].jjc ? !0 : !1;
                        },
                        G['prototype']['is_top_match'] = function() {
                            var Z = 0;
                            if (this['game_config'] && this['game_config'].meta && (Z = this['game_config'].meta['mode_id']), (15 == Z || 16 == Z || 25 == Z || 26 == Z) && this['player_datas']) {
                                for (var S = 0, o = this['player_datas']; S < o['length']; S++) {
                                    var y = o[S],
                                        G = this['rule_mode'] == V['Liqi4'] ? y['level'].id : y['level3'].id;
                                    if (6 != cfg['level_definition']['level_definition'].get(G)['primary_level'])
                                        return !1;
                                }
                                return !0;
                            }
                            return !1;
                        },
                        G['prototype']['ActionRunComplete'] = function() {
                            this['action_running'] = !1;
                        },
                        G['prototype']['StartChainAction'] = function(Z) {
                            this['doactioncd'] = Laya['timer']['currTimer'] + Z,
                                Laya['timer']['frameLoop'](1, this, this['DoChainAction'], null, !0);
                        },
                        G['prototype']['DoChainAction'] = function() {
                            var Z = this;
                            if (this['action_index'] >= this['actionList']['length'])
                                this['action_index'] = 0, this['actionList'] = [], this['dochain_fast'] = !1, Laya['timer']['clear'](this, this['DoChainAction']), this['duringReconnect'] && (app.Log.log('finishSyncGame0'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}), this['duringReconnect'] = !1);
                            else {
                                if (!this['dochain_fast']) {
                                    if (this['action_running'])
                                        return;
                                    if (Laya['timer']['currFrame'] <= this['action_frame'])
                                        return;
                                    Laya['timer']['clear'](this, this['DoChainAction']);
                                }
                                this['action_index'] == this['actionList']['length'] - 1 && this['duringReconnect'] && (this['duringReconnect'] = !1, app.Log.log('finishSyncGame1'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {})),
                                    this['dochain_fast'] ? this['action_index'] + 2 < this['actionList']['length'] ? this['DoMJAction'](this['actionList'][this['action_index']++], !0) : (this['dochain_fast'] = !1, this['DoMJAction'](this['actionList'][this['action_index']++], !1)) : (this['dochain_fast'] = !1, this['action_index'] + 4 < this['actionList']['length'] && (this['dochain_fast'] = !0), this['dochain_fast'] ? Laya['timer'].once(800, this, function() {
                                        for (var S = Z['actionList']['length'] - 1; S >= Z['action_index']; S--)
                                            if ('ActionNewRound' == Z['actionList'][S].name) {
                                                Z['action_index'] = S;
                                                break;
                                            }
                                        Z['DoMJAction'](Z['actionList'][Z['action_index']++], !0);
                                    }) : this['DoMJAction'](this['actionList'][this['action_index']++], !1));
                            }
                            this['action_frame'] = Laya['timer']['currFrame'];
                        },
                        G['EnDecode'] = function(Z) {
                            for (var S = [132, 94, 78, 66, 57, 162, 31, 96, 28], V = 0; V < Z['byteLength']; V++) {
                                var o = (23 ^ Z['byteLength']) + 5 * V + S[V % S['length']] & 255;
                                Z[V] ^= o;
                            }
                            return Z;
                        },
                        G['prototype']['DoMJAction'] = function(Z, S) {
                            var V = this;
                            if (this['active']) {
                                var o = net['ProtobufManager']['lookupType']('lq.' + Z.name);
                                if (!o)
                                    throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + Z.name);
                                var y = Z.step,
                                    e = o['decode'](G['EnDecode'](Z.data));
                                if (app.Log.log('DoMJAction step:' + y + ' [' + Z.name + ']:  ' + JSON['stringify'](e) + ' fast:' + S), y > 1 && y != this['current_step'] + 1)
                                    return app.Log.log('step 不对 强制触发全数据重连 step:' + y + ' current_step:' + this['current_step']), this['trySyncGame'](), void 0;
                                var x = 0;
                                if (this['current_step'] = y, this['actionMap']['hasOwnProperty'](Z.name))
                                    try {
                                        S || (this['action_running'] = !0),
                                            x = this['actionMap'][Z.name]['runWith']({
                                                msg: e,
                                                fast: S
                                            });
                                    } catch (R) {
                                        var s = {};
                                        return s['error'] = R['message'],
                                            s['stack'] = R['stack'],
                                            s['method'] = 'DoMJAction',
                                            s.name = Z.name,
                                            s.data = Z,
                                            s.step = y,
                                            GameMgr.Inst['onFatalError'](s),
                                            void 0;
                                    }
                                else
                                    app.Log['Error']('没有监听操作：' + Z.name);
                                S ? this['DoChainAction']() : Laya['timer']['frameOnce'](1, this, function() {
                                    V['StartChainAction'](x);
                                });
                            }
                        },
                        G['prototype']['_load'] = function(S) {
                            this['desktop3D'] = S,
                                this['desktop3D']['getChildByName']('all')['active'] = !1;
                            var V = this['desktop3D']['getChildByName']('poss');
                            this['players'] = new Array(),
                                this['mainrole'] = V['getChildByName']('man_1')['addComponent'](Z['ViewPlayer_Me']),
                                this['mainrole']['InitMe'](this, 0, game['Scene_MJ'].Inst['root2']['getChildByName']('hands'), V),
                                this['players'].push(this['mainrole']);
                            for (var o = 2; 4 >= o; o++) {
                                var y = V['getChildByName']('man_' + o)['addComponent'](Z['ViewPlayer_Other']);
                                y.Init(this, o - 1, V),
                                    this['players'].push(y);
                            }
                            var G = this['desktop3D']['getChildByName']('other'),
                                e = G['getChildByName']('left');
                            this['num_left_show'].push(e['getChildByName']('0')),
                                this['num_left_show'].push(e['getChildByName']('1'));
                            var x = G['getChildByName']('chang');
                            this['container_other'] = G,
                                this['plane_chang'] = x['getChildByName']('chang'),
                                this['plane_ju'] = x['getChildByName']('ju'),
                                this['container_other'] = G,
                                this['container_other_reveal'] = this['desktop3D']['getChildByName']('other_reveal');
                            var R = this['container_other_reveal']['getChildByName']('left');
                            this['num_left_show_reveal'].push(R['getChildByName']('0')),
                                this['num_left_show_reveal'].push(R['getChildByName']('1'));
                            var s = this['container_other_reveal']['getChildByName']('chang');
                            if (this['plane_chang_reveal'] = s['getChildByName']('chang'), this['plane_ju_reveal'] = s['getChildByName']('ju'), 'kr' == GameMgr['client_language']) {
                                var u = 'scene/Assets/Resource/table/tablemid/',
                                    n = this['plane_chang_reveal']['meshRender']['material'];
                                n['albedoTexture'] = Laya['Loader']['getRes'](u + 'chang_kr.png'),
                                    n = s['getChildByName']('juzi')['meshRender']['material'],
                                    n['albedoTexture'] = Laya['Loader']['getRes'](u + 'chang_kr.png'),
                                    n = R['getChildByName']('left')['meshRender']['material'],
                                    n['albedoTexture'] = Laya['Loader']['getRes'](u + 'left_kr.png'),
                                    R['getChildByName']('left')['transform']['localScale'] = new Laya['Vector3']('0.0018', '0.0018', 0.3),
                                    R['getChildByName']('left')['transform']['localPosition'] = new Laya['Vector3'](-'0.00367', -0.0001, '0.00703'),
                                    n = this['plane_chang']['meshRender']['material'],
                                    n['albedoTexture'] = Laya['Loader']['getRes'](u + 'chang_kr.png'),
                                    n = x['getChildByName']('juzi')['meshRender']['material'],
                                    n['albedoTexture'] = Laya['Loader']['getRes'](u + 'chang_kr.png'),
                                    n = e['getChildByName']('left')['meshRender']['material'],
                                    n['albedoTexture'] = Laya['Loader']['getRes'](u + 'left_kr.png'),
                                    e['getChildByName']('left')['transform']['localScale'] = new Laya['Vector3']('0.0018', '0.0018', 0.3),
                                    e['getChildByName']('left')['transform']['localPosition'] = new Laya['Vector3'](-'0.00367', -0.0001, '0.00703');
                            }
                            for (var k = this['container_other_reveal']['getChildByName']('score'), o = 0; 6 > o; o++)
                                this['score_reveal'].push(k['getChildAt'](o));
                            this['SetLeftPaiShow'](0),
                                this['SetChangJuShow'](0, 0, 0),
                                this['trans_container_effect'] = this['desktop3D']['getChildByName']('effect'),
                                this['effect_dora3D'] = this['trans_container_effect']['getChildByName']('effect_dora'),
                                this['effect_dora3D_touying'] = this['trans_container_effect']['getChildByName']('effect_touming_dora');
                            var r = this['effect_dora3D']['getChildAt'](0)['meshRender']['material'];
                            r['disableLight'](),
                                this['effect_shadow'] = this['trans_container_effect']['getChildByName']('effect_shadow'),
                                this['effect_shadow_touming'] = this['trans_container_effect']['getChildByName']('effect_shadow_touming'),
                                this['effect_dora3D']['active'] = !0,
                                this['effect_shadow']['active'] = !0,
                                this['effect_shadow_touming']['active'] = !0,
                                this['effect_dora3D_touying']['active'] = !0,
                                this['effect_doraPlane'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_dora'),
                                this['effect_recommend'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_recommend'),
                                this['effect_doraPlane']['active'] = !1,
                                this['effect_recommend']['active'] = !1;
                            var M = this['effect_recommend']['getChildAt'](0)['meshRender']['material'],
                                g = 'myres2/mjp/recommend.png';
                            'chs' != GameMgr['client_language'] && (g = GameMgr['client_language'] + '/' + g),
                                Laya['loader']['getRes'](g) && (M['diffuseTexture'] = Laya['loader']['getRes'](g));
                        },
                        G['prototype']['initRoom'] = function(S, y, e, x, R) {
                            var s = this;
                            uiscript['UI_Rpg']['needShow'] = !1,
                                uiscript['UI_WaitingRoom'].Inst['resetData'](),
                                GameMgr.Inst['in_hesu'] = !1,
                                this['game_config'] = S,
                                this['rule_mode'] = V['Liqi4'],
                                S.mode.mode && (this['rule_mode'] = S.mode.mode < 10 ? V['Liqi4'] : V['Liqi3']),
                                this['xuezhan'] = !1,
                                S.mode && S.mode['detail_rule'] && (this['xuezhan'] = !!S.mode['detail_rule']['xuezhandaodi']),
                                S.mode && S.mode['detail_rule'] && (this['field_spell'] = S.mode['detail_rule']['field_spell_mode']),
                                S.mode && S.mode['detail_rule'] && S.mode['detail_rule']['reveal_discard'] ? (this['container_other']['active'] = !1, this['container_other_reveal']['active'] = !0, this['anpai'] = !0) : (this['anpai'] = !1, this['container_other']['active'] = !0, this['container_other_reveal']['active'] = !1),
                                this.mode = x,
                                this.seat = -1,
                                this['player_datas'] = y,
                                this['gameEndResult'] = null,
                                this['levelchangeinfo'] = null,
                                this['activity_reward'] = null,
                                this['rewardinfo'] = null,
                                this['active'] = !0,
                                this['ptchange'] = 0,
                                this['timestoped'] = !1,
                                this['action_running'] = !1,
                                this['hangupCount'] = 0,
                                this['handles_after_timerun'] = [],
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect']['destroy'](), this['muyu_effect'] = null),
                                uiscript['UI_GameStop'].Inst['close'](),
                                uiscript['UI_Replay'].Inst['hide_name'] = !1,
                                this.mode == o['paipu'] ? (this['record_show_hand'] = '0' != Laya['LocalStorage']['getItem']('record_show_hand'), this['record_show_paopai'] = '0' != Laya['LocalStorage']['getItem']('record_show_paopai'), this['record_show_anim'] = '0' != Laya['LocalStorage']['getItem']('record_show_anim')) : (this['record_show_anim'] = !0, this['record_show_hand'] = this['record_show_paopai'] = !1),
                                this.mode == o.play ? (uiscript['UI_Invite'].Inst['enable'] = !1, 4 == S['category'] && (GameMgr.Inst['custom_match_id'] = S.meta['contest_uid'])) : uiscript['UI_Invite'].Inst['enable'] = !0,
                                this['myaccountid'] = e;
                            for (var u = {}, n = 0; n < y['length']; n++)
                                for (var k = cfg['item_definition'].skin.get(y[n]['avatar_id']), r = cfg['item_definition']['character'].get(k['character_id']), M = cfg['voice']['sound']['getGroup'](r['sound']), g = 0; g < M['length']; g++)
                                    if (y[n]['character'] && 2 == M[g]['category'] && M[g]['level_limit'] <= y[n]['character']['level']) {
                                        var K = M[g].path + Z['AudioMgr']['suffix'];
                                        u['hasOwnProperty'](K) || (u[K] = 1);
                                    }
                            for (var Y in u)
                                Laya['loader'].load(Y, null, null, null, 3);
                            for (var n = 0; n < this['player_datas']['length']; n++)
                                this['player_datas'][n]['account_id'] == e && (this.seat = n);
                            if (GameMgr['sakiLimited'])
                                for (var n = 0; n < this['player_datas']['length']; n++)
                                    if (this['player_datas'][n]['account_id'] != GameMgr.Inst['account_id']) {
                                        game['GameUtility']['char_limited'](this['player_datas'][n]['character']['charid']) && (this['player_datas'][n]['character']['charid'] = game['GameUtility']['get_default_ai_character'](), this['player_datas'][n]['character'].skin = game['GameUtility']['get_default_ai_skin'](), this['player_datas'][n]['avatar_id'] = game['GameUtility']['get_default_ai_skin']());
                                        var j = this['player_datas'][n]['views'];
                                        if (j)
                                            for (var g = j['length'] - 1; g >= 0; g--) {
                                                var F = j[g]['item_id'];
                                                F && 1 == cfg['item_definition'].item.get(F)['collaboration'] && j['splice'](g, 1);
                                            }
                                    }
                            if (-1 == this.seat) {
                                if (this.mode == o.play)
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2228)), app.Log['Error'](JSON['stringify'](y)), void 0;
                                this.seat = 0;
                            }
                            if (this['emoji_switch'] = !1, S.mode && S.mode['game_setting'] && (this['emoji_switch'] = !!S.mode['game_setting']['emoji_switch']), uiscript['UI_Replay'].Inst['enable'] = this.mode == o['paipu'], uiscript['UI_Ob_Replay'].Inst['enable'] = !1, G['bianjietishi'] = !0, x == o.play) {
                                if (S.mode && S.mode['detail_rule']) {
                                    var w = S.mode['detail_rule'];
                                    null != w['bianjietishi'] && (G['bianjietishi'] = w['bianjietishi']);
                                }
                                if (2 == S['category'] && S.meta) {
                                    var T = cfg['desktop']['matchmode'].get(S.meta['mode_id']);
                                    T && 6 == T.room && (G['bianjietishi'] = !1);
                                }
                                uiscript['UI_MJTask_Progress']['record']();
                            }
                            this['mjp_res_name'] = game['GameUtility']['get_view_res_name'](game['EView'].mjp),
                                this['player_effects'] = [];
                            for (var N = game['EView']['liqibang'], O = game['EView']['lobby_bg'], n = 0; n < this['player_datas']['length']; n++) {
                                for (var J = this['player_datas'][n]['character'], H = {}, f = N; O >= f; f++) {
                                    var i = game['GameUtility']['get_view_default_item_id'](f);
                                    H[f] = i;
                                }
                                if (J) {
                                    var j = this['player_datas'][n]['views'],
                                        z = cfg['item_definition']['character'].get(J['charid']);
                                    if (z && (H[game['EView']['hand_model']] = z.hand), j)
                                        for (var g = 0; g < j['length']; g++) {
                                            var d = j[g].slot,
                                                F = j[g]['item_id'];
                                            F && (H[d] = F);
                                        }
                                } else
                                    this['player_datas'][n]['character'] = {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    };
                                this['player_effects'].push(H);
                            }
                            uiscript['UI_DesktopInfo'].Inst['initRoom'](),
                                uiscript['UI_DesktopInfo'].Inst['refreshSeat'](),
                                uiscript['UI_Hangup_Warn'].Inst['enable'] = !1,
                                uiscript['UI_TingPai'].Inst['enable'] = !0,
                                uiscript['UI_HuanSanZhange'].Inst['enable'] = !1,
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst['enable'] = !1,
                                uiscript['UI_Dingque'].Inst['enable'] = !1,
                                this['index_change'] = 0,
                                this['index_ju'] = 0,
                                this['index_ben'] = 0,
                                this['index_player'] = 0,
                                this['index_chuanma_ju'] = 0,
                                this['gameing'] = !0,
                                this['left_tile_count'] = 69,
                                this['duringReconnect'] = !1,
                                this['current_step'] = 0,
                                this['action_index'] = 0,
                                this['dochain_fast'] = !1,
                                this['actionList'] = [],
                                this['setAutoHule'](!1),
                                this['setAutoMoQie'](!1),
                                this['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                this['SetChangJuShow'](this['index_change'], this['index_ju'], this['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](this['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1);
                            for (var n = 0; 4 > n; n++)
                                this['players'][n]['onInitRoom'](this['localPosition2Seat'](n)), this['players'][n]['SetScore'](0, 0), this['players'][n]['trans_ind']['active'] = !1, this['players'][n]['RefreshDir']();
                            if (this['RefreshPaiLeft'](), uiscript['UI_GameEnd'].Inst['forceclose'](), uiscript['UI_RankChange'].Inst['close'](), uiscript['UI_MJReward'].Inst['close'](), Laya['timer']['frameOnce'](6, this, function() {
                                    s['Reset'](),
                                        app.Log.log('场景init结束：' + Laya.Stat['currentMemorySize'] / 1024 / 1024 + ' MB'),
                                        R && R.run();
                                }), this['state_cache'] = {}, uiscript['UI_Activity']['activity_is_running'](uiscript['UI_Activity_DuanWu_Point']['activity_id']) && (this['state_cache']['duanwu_point'] = uiscript['UI_Activity_DuanWu_Point']['point'], this['state_cache']['duanwu_rank'] = uiscript['UI_Activity_DuanWu_Rank']['point']), this['is_muyu_mode']()) {
                                var B = 'scene/effect_muyu_' + GameMgr['client_language'] + '.lh';
                                this['muyu_effect'] = new game['EffectBase'](B),
                                    this['muyu_effect'].root['active'] = !1,
                                    this['trans_container_effect']['addChild'](this['muyu_effect'].root);
                            }
                        },
                        G['prototype']['changeMainbody'] = function(Z) {
                            if (this.mode != o.play && this['gameing']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'change_seat_to': Z
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'change_seat_to': Z
                                        }));
                                    }
                                }));
                                this.seat = Z,
                                    uiscript['UI_DesktopInfo'].Inst['refreshSeat'](!0);
                                for (var S = 0; 4 > S; S++)
                                    this['players'][S]['onInitRoom'](this['localPosition2Seat'](S)), this['players'][S]['trans_ind']['active'] = !1, this['players'][S]['RefreshDir']();
                                this['Reset'](),
                                    this.mode == o['paipu'] && uiscript['UI_Replay'].Inst['onChangeMainBody'](),
                                    this.mode == o['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['onChangeMainbody'](),
                                    this.mode == o['live_broadcast'] && uiscript['UI_Live_Broadcast1'].Inst['onChangeMainbody']();
                            }
                        },
                        G['prototype']['trySyncGame'] = function() {
                            var Z = this;
                            this['Reset'](),
                                this['duringReconnect'] = !0,
                                this['hangupCount'] = 0,
                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                    round_id: this['round_id'],
                                    step: 0
                                }, function(S, V) {
                                    S || V['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', S, V), game['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame2] ' + JSON['stringify'](V)), V['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2229)), game['Scene_MJ'].Inst['GameEnd']()) : (Z['fetchLinks'](), Z['Reset'](), Z['duringReconnect'] = !0, Z['syncGameByStep'](V['game_restore'])));
                                });
                        },
                        G['prototype']['syncGameByStep'] = function(S) {
                            var V = this,
                                o = !1;
                            if (this['timestoped'] = !1, this['handles_after_timerun'] = [], this['action_running'] = !1, uiscript['UI_GameStop'].Inst['close'](), this['hangupCount'] = 0, uiscript['UI_Hangup_Warn'].Inst['enable'] = !1, S && 5 === S['game_state'] && (this['timestoped'] = !0), GameMgr.Inst['EnterMJ'](), S && S['actions'] && S['actions']['length'] > 0) {
                                var actions = [];
                                for (var idx = 0; idx < S.actions.length; idx++) {
                                    var rawAction = S.actions[idx];
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
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'sync_game_actions': actions
                                        }));
                                    }
                                }));
                                this['actionList'] = [];
                                var y = -1;
                                null != S['passed_waiting_time'] && void 0 != S['passed_waiting_time'] && (y = 1000 * S['passed_waiting_time']);
                                for (var e = 0; e < S['actions']['length']; e++) {
                                    var x = S['actions'][e],
                                        R = e == S['actions']['length'] - 1 ? y : -1,
                                        s = net['ProtobufManager']['lookupType']('lq.' + x.name);
                                    if (!s)
                                        throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + x.name);
                                    var u = s['decode'](x.data);
                                    this['current_step'] = x.step;
                                    try {
                                        switch (x.name) {
                                            case 'ActionNewRound':
                                                Z['ActionNewRound']['fastplay'](u, R);
                                                break;
                                            case 'ActionChangeTile':
                                                Z['ActionChangeTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionDiscardTile':
                                                Z['ActionDiscardTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionDealTile':
                                                Z['ActionDealTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionChiPengGang':
                                                Z['ActionChiPengGang']['fastplay'](u, R);
                                                break;
                                            case 'ActionAnGangAddGang':
                                                Z['ActionAnGangAddGang']['fastplay'](u, R);
                                                break;
                                            case 'ActionHule':
                                                Z['ActionHule']['fastplay'](u, R),
                                                    o = !0;
                                                break;
                                            case 'ActionHuleXueZhanMid':
                                                Z['ActionHuleXueZhanMid']['fastplay'](u, R),
                                                    o = !0;
                                                break;
                                            case 'ActionHuleXueZhanEnd':
                                                Z['ActionHuleXueZhanEnd']['fastplay'](u, R),
                                                    o = !0;
                                                break;
                                            case 'ActionLiuJu':
                                                Z['ActionLiuJu']['fastplay'](u, R),
                                                    o = !0;
                                                break;
                                            case 'ActionNoTile':
                                                Z['ActionNoTile']['fastplay'](u, R),
                                                    o = !0;
                                                break;
                                            case 'ActionBaBei':
                                                Z['ActionBabei']['fastplay'](u, R);
                                                break;
                                            case 'ActionSelectGap':
                                                Z['ActionSelectGap']['fastplay'](u, R);
                                                break;
                                            case 'ActionGangResult':
                                                Z['ActionGangResult']['fastplay'](u, R);
                                                break;
                                            case 'ActionGangResultEnd':
                                                Z['ActionGangResultEnd']['fastplay'](u, R);
                                                break;
                                            case 'ActionLockTile':
                                                Z['ActionLockTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionRevealTile':
                                                Z['ActionRevealTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionUnveilTile':
                                                Z['ActionUnveilTile']['fastplay'](u, R);
                                                break;
                                            case 'ActionNewCard':
                                                Z['ActionNewCard']['fastplay'](u, R);
                                                break;
                                            case 'ActionFillAwaitingTiles':
                                                Z['ActionFillAwaitingTiles']['fastplay'](u, R);
                                        }
                                    } catch (n) {
                                        var k = {};
                                        k['error'] = n['message'],
                                            k['stack'] = n['stack'],
                                            k['method'] = 'syncGameByStep',
                                            k.name = x.name,
                                            k.data = x,
                                            k.step = e,
                                            GameMgr.Inst['onFatalError'](k);
                                        break;
                                    }
                                }
                                Laya['timer'].once(1000, this, function() {
                                    V['duringReconnect'] = !1,
                                        uiscript['UI_Loading'].Inst['close'](),
                                        o || Z['BgmListMgr']['PlayMJBgm'](),
                                        V['DoChainAction']();
                                });
                            } else
                                this['duringReconnect'] = !1, this['timestoped'] ? this['handles_after_timerun'].push(Laya['Handler']['create'](this, function() {
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                            app.Log.log('finishSyncGame11'),
                                app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}),
                                G.Inst['fetchLinks'](),
                                this['timestoped'] && uiscript['UI_GameStop'].Inst.show();
                        },
                        G['prototype']['setGameStop'] = function(Z) {
                            if (Z != this['timestoped'])
                                if (this['timestoped'] = Z, this['timestoped'])
                                    this['handles_after_timerun'] = [], uiscript['UI_GameStop'].Inst.show();
                                else {
                                    if (uiscript['UI_GameStop'].Inst['close'](), this['handles_after_timerun'])
                                        for (var S = 0; S < this['handles_after_timerun']['length']; S++)
                                            this['handles_after_timerun'][S].run();
                                    this['handles_after_timerun'] = [],
                                        this['hangupCount'] = 0;
                                }
                        },
                        G['prototype']['CreatePai3D'] = function(Z) {
                            var S = Z['touming'] && !this['is_tianming_mode'](),
                                V = this['desktop3D']['getChildByName']('all')['getChildByName']('mjp')['getChildByName'](S ? 'touming' : Z['toString'](S))['clone'](),
                                o = this['desktop3D']['getChildByName']('all')['getChildByName']('maque_outline')['clone'](),
                                y = V,
                                e = (new caps['BaseMaterial'](caps['Cartoon']['filename']), 'scene/Assets/Resource/mjpai/');
                            if (S) {
                                var x = new caps['Material_TouMingPai'](caps['TouMingPai']['filename']),
                                    R = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (R += 'en_kr/'),
                                R += G['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    x['setTexture'](caps['TouMingPai']['TEXTURE'], Laya['loader']['getRes'](R)),
                                    y['meshRender']['sharedMaterial'] = x;
                            } else {
                                var s = new caps['BaseMaterial'](caps['Cartoon']['filename']),
                                    u = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (u += 'en_kr/'),
                                u += this['mjp_res_name'] + '/mjp.png',
                                    s['setTexture'](caps['Cartoon']['TEXTURE'], Laya['loader']['getRes'](u)),
                                    s['setNumber'](caps['Cartoon']['SPLIT'], 0.4),
                                    s['setColor'](caps['Cartoon']['COLOR_LIGHT'], new Laya['Vector3'](1, 1, 1)),
                                    s['setColor'](caps['Cartoon']['COLOR_UNLIGHT'], new Laya['Vector3'](0.788, 0.788, '0.8235')),
                                    s['setColor'](caps['Cartoon']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    y['meshRender']['sharedMaterial'] = s;
                            }
                            var n = o;
                            V['addChild'](n),
                                n['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0),
                                n['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                n['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                            var k = n,
                                r = new caps['Material_Outline'](caps['Outline']['filename']);
                            r['renderQueue'] = 2999,
                                r['setColor'](caps['Outline']['OUTLINE_COLOR'], new Laya['Vector3'](0.165, 0.192, 0.204)),
                                r['setNumber'](caps['Outline']['OUTLINE_ALPHA'], 0.6),
                                r['setNumber'](caps['Outline']['OUTLINE'], '0.0012'),
                                k['meshRender']['sharedMaterial'] = r;
                            var M = new Laya['Sprite3D']();
                            if (M.name = 'effect', M['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0), M['transform']['localScale'] = new Laya['Vector3'](1, 1, 1), M['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0), V['addChild'](M), S) {
                                var g = this['desktop3D']['getChildByName']('all')['getChildByName']('touming')['clone']();
                                g.name = 'touming',
                                    V['addChild'](g),
                                    g['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0.00001),
                                    g['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                    g['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                                var K = new caps['Material_TwoSided'](caps['TwoSided']['filename']),
                                    Y = 0;
                                switch (Z.type) {
                                    case mjcore['E_MJPai'].m:
                                        Y = 0;
                                        break;
                                    case mjcore['E_MJPai'].p:
                                        Y = 10;
                                        break;
                                    case mjcore['E_MJPai'].s:
                                        Y = 20;
                                        break;
                                    default:
                                        Y = 29;
                                }
                                Z.dora || (Y += Z['index']);
                                var j = (6 + Y % 7 * 104) / 1024,
                                    F = (6 + 144 * Math['floor'](Y / 7)) / 1024,
                                    e = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (e += 'en_kr/'),
                                e += G['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    K['setTexture'](caps['TwoSided']['TEXTURE'], Laya['loader']['getRes'](e)),
                                    K['setColor'](caps['TwoSided']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    K['setNumber'](caps['TwoSided']['OFFSET_X'], j),
                                    K['setNumber'](caps['TwoSided']['OFFSET_Y'], F),
                                    K['renderQueue'] = 3000,
                                    g['getChildByName']('twosided')['meshRender']['sharedMaterial'] = K,
                                    g['getChildByName']('touying')['getChildByName']('pai')['meshRender']['sharedMaterial'] = K,
                                    g['getChildByName']('touying')['getChildByName']('bg')['meshRender']['sharedMaterial']['renderQueue'] = 2998;
                            }
                            return V;
                        },
                        G['prototype']['RefreshPlayerIndicator'] = function() {
                            for (var Z = 0; 4 > Z; Z++)
                                this['players'][Z]['trans_ind']['active'] = Z == this['seat2LocalPosition'](this['index_player']), this['players'][Z]['RefreshScore'](this['mainrole']['score']);
                        },
                        G['prototype']['setAutoHule'] = function(Z) {
                            this['auto_hule'] = Z,
                                this['_PendingAuto'](!0);
                        },
                        G['prototype']['setAutoNoFulu'] = function(Z) {
                            this['auto_nofulu'] = Z,
                                this['_PendingAuto'](!0);
                        },
                        G['prototype']['setAutoMoQie'] = function(Z) {
                            this['auto_moqie'] = Z,
                                this['_PendingAuto'](!0);
                        },
                        G['prototype']['setAutoLiPai'] = function(Z) {
                            this['auto_liqi'] = Z,
                                Z && this['gameing'] && this['mainrole'] && this['mainrole']['LiPai'](!1, !1, !0);
                        },
                        G['prototype']['setScoreDelta'] = function(Z) {
                            for (var S = 1; 4 > S; S++)
                                this['players'][S]['duringShowDetla'] = Z, this['players'][S]['RefreshScore'](this['mainrole']['score']);
                        },
                        G['prototype']['SetChangJuShow'] = function(Z, S, V) {
                            if (this['is_chuanma_mode']()) {
                                var o = new Laya['Vector4']('0.1666', 1, 0, 0);
                                'en' == GameMgr['client_language'] && (o = new Laya['Vector4'](1, 0.2, 0, -0.8)),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = o;
                                var y = new Laya['Vector4'](0.1, 1, 0.1 * V, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = y;
                            } else {
                                var o = new Laya['Vector4'](0.166, 1, 0.166 + Z % 4 * 0.166, 0);
                                'en' == GameMgr['client_language'] && (o = new Laya['Vector4'](1, 0.2, 0, 0.2 * (Z % 4 - 3))),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = o,
                                    this['plane_chang_reveal']['meshRender']['material']['tilingOffset'] = o;
                                var y = new Laya['Vector4'](0.1, 1, 0.1 * S, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = y,
                                    this['plane_ju_reveal']['meshRender']['material']['tilingOffset'] = y;
                            }
                        },
                        G['prototype']['SetLeftPaiShow'] = function(Z) {
                            Z >= 100 ? Z = 99 : 0 > Z && (Z = 0);
                            for (var S = [Z % 10, Math['floor'](Z / 10)], V = 0; V < S['length']; V++) {
                                var o = new Laya['Vector4'](0.1, 1, 0.1 * S[V], 0);
                                this['num_left_show'][V]['meshRender']['material']['tilingOffset'] = o,
                                    this['num_left_show_reveal'][V]['meshRender']['material']['tilingOffset'] = o;
                            }
                        },
                        G['prototype']['RefreshPaiLeft'] = function() {
                            this['SetLeftPaiShow'](this['left_tile_count']);
                        },
                        G['prototype']['Reset'] = function() {
                            app.Log.log('DesktopMgr.Reset'),
                                this['operation_showing'] = !1,
                                this['oplist'] = [],
                                Laya['timer']['clearAll'](Z['ActionAnGangAddGang']),
                                Laya['timer']['clearAll'](Z['ActionChiPengGang']),
                                Laya['timer']['clearAll'](Z['ActionDealTile']),
                                Laya['timer']['clearAll'](Z['ActionDiscardTile']),
                                Laya['timer']['clearAll'](Z['ActionHule']),
                                Laya['timer']['clearAll'](Z['ActionHuleXueZhanEnd']),
                                Laya['timer']['clearAll'](Z['ActionHuleXueZhanMid']),
                                Laya['timer']['clearAll'](Z['ActionLiqi']),
                                Laya['timer']['clearAll'](Z['ActionLiuJu']),
                                Laya['timer']['clearAll'](Z['ActionNewRound']),
                                Laya['timer']['clearAll'](Z['ActionNoTile']),
                                Laya['timer']['clearAll'](Z['ActionOperation']),
                                Laya['timer']['clearAll'](Z['ActionChangeTile']),
                                Laya['timer']['clearAll'](Z['ActionSelectGap']),
                                Laya['timer']['clearAll'](Z['ActionGangResult']),
                                Laya['timer']['clearAll'](Z['ActionGangResultEnd']),
                                Laya['timer']['clearAll'](Z['ActionRevealTile']),
                                Laya['timer']['clearAll'](Z['ActionUnveilTile']),
                                Laya['timer']['clearAll'](Z['ActionLockTile']),
                                Laya['timer']['clearAll'](Z['ActionNewCard']),
                                Laya['timer']['clearAll'](Z['ActionFillAwaitingTiles']),
                                Laya['timer']['clearAll'](this),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                            for (var S = 0; 4 > S; S++)
                                this['players'][S]['Reset']();
                            this['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                this.md5 = '',
                                this['current_step'] = -1,
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect'].root['active'] = !1, Laya['timer']['clearAll'](this['muyu_effect'])),
                                this['mind_voice_seat'] = -1,
                                this['mind_voice_type'] = '',
                                this['during_playing_mind_voice'] = !1;
                        },
                        G['prototype']['setScores'] = function(S) {
                            for (var V = 0; V < S['length']; V++)
                                this['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['SetScore'](S[V], S[this.seat]);
                        },
                        G['prototype']['_PendingAuto'] = function(S) {
                            if (void 0 === S && (S = !1), null == this['oplist'] || 0 == this['oplist']['length'])
                                return !1;
                            try {
                                var V = !1,
                                    o = !1,
                                    y = !1,
                                    G = !1,
                                    e = !1,
                                    x = !1,
                                    R = !1,
                                    s = !1,
                                    u = this['operation_showing'];
                                this['operation_showing'] = !0;
                                var n = null,
                                    k = 0;
                                this['liqi_select'] = [];
                                for (var r = !0, M = 0; M < this['oplist']['length']; M++) {
                                    var g = this['oplist'][M],
                                        K = g.type;
                                    switch (K) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                        case mjcore['E_PlayOperation']['unveil']:
                                            V = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                        case mjcore['E_PlayOperation']['revealliqi']:
                                        case mjcore['E_PlayOperation']['reveal']:
                                        case mjcore['E_PlayOperation']['locktile']:
                                            o = !0;
                                        case mjcore['E_PlayOperation']['jiuzhongjiupai']:
                                            o = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['huansanzhang']:
                                            y = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['dingque']:
                                            G = !0,
                                                k = g['gap_type'];
                                            break;
                                        case mjcore['E_PlayOperation']['selecttile']:
                                            e = !0;
                                    }
                                    if (K == mjcore['E_PlayOperation']['dapai'])
                                        s = !0, n = this['oplist'][M]['combination'];
                                    else if (K == mjcore['E_PlayOperation'].liqi) {
                                        s = !0,
                                            this['liqi_select'] = [];
                                        for (var Y = 0; Y < this['oplist'][M]['combination']['length']; Y++)
                                            this['liqi_select'].push(mjcore['MJPai']['Create'](this['oplist'][M]['combination'][Y]));
                                    } else
                                        K == mjcore['E_PlayOperation'].rong ? x = !0 : K == mjcore['E_PlayOperation'].zimo ? R = !0 : K == mjcore['E_PlayOperation']['huansanzhang'] && (S || Z['DesktopMgr'].Inst['mainrole']['setHuanSanZhangDefaultTile'](g['change_tiles'], g['change_tile_states']));
                                    K != mjcore['E_PlayOperation']['dapai'] && K != mjcore['E_PlayOperation']['reveal'] && (r = !1);
                                }
                                var j = this['auto_hule'],
                                    F = this['auto_nofulu'],
                                    w = this['auto_moqie'];
                                if (this['anpai'] && r && w) {
                                    if (this['mainrole']['trans_liqi']['active'])
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), void 0;
                                    if (null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                }
                                if (j && (x || R))
                                    return Laya['timer'].once(800, this, function() {
                                        x ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            type: mjcore['E_PlayOperation'].rong,
                                            index: 0
                                        }, function() {}) : R && app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                            type: mjcore['E_PlayOperation'].zimo,
                                            index: 0
                                        }, function() {});
                                    }), this['ClearOperationShow'](), !1;
                                if (G)
                                    uiscript['UI_Dingque'].Inst.show(k);
                                else if (y)
                                    S || uiscript['UI_HuanSanZhange'].Inst.show();
                                else if (V) {
                                    if (F && !x && !R)
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), this['ClearOperationShow'](), !1;
                                    u || uiscript['UIMgr'].Inst['ShowChipenghu'](this['oplist']);
                                } else if (o && (u || uiscript['UIMgr'].Inst['ShowLiqiZimo'](this['oplist'])), s) {
                                    if (w && !uiscript['UI_LiQiZiMo'].Inst['enable'] && null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                    if (!u && (this['mainrole']['can_discard'] = !0, n && n['length'] > 0)) {
                                        for (var T = [], M = 0; M < n['length']; M++)
                                            T.push(mjcore['MJPai']['Create'](n[M]));
                                        this['mainrole']['ChiTiSelect'](T);
                                    }
                                } else
                                    this['mainrole']['can_discard'] = !1;
                                if (e) {
                                    if (w)
                                        return uiscript['UI_Astrology'].Inst['selectTile'](0), !1;
                                    u || uiscript['UI_Astrology'].Inst['showSelections']();
                                }
                            } catch (N) {
                                var O = {};
                                O['error'] = N['message'],
                                    O['stack'] = N['stack'],
                                    O['method'] = '_PendingAuto',
                                    O.name = 'DesktopMgr',
                                    GameMgr.Inst['onFatalError'](O);
                            }
                            return !0;
                        },
                        G['prototype']['OperationTimeOut'] = function() {
                            if (null != this['oplist'] && 0 != this['oplist']['length']) {
                                {
                                    var Z = !1,
                                        S = !1,
                                        V = !1,
                                        o = !1,
                                        y = !1;
                                    this['operation_showing'];
                                }
                                this['operation_showing'] = !0;
                                for (var G = null, e = 0; e < this['oplist']['length']; e++) {
                                    switch (this['oplist'][e].type) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                            Z = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                            S = !0;
                                    }
                                    (this['oplist'][e].type == mjcore['E_PlayOperation']['dapai'] || this['oplist'][e].type == mjcore['E_PlayOperation'].liqi) && (y = !0, this['oplist'][e].type == mjcore['E_PlayOperation']['dapai'] && (G = this['oplist'][e]['combination'])),
                                    this['oplist'][e].type == mjcore['E_PlayOperation'].rong && (V = !0),
                                        this['oplist'][e].type == mjcore['E_PlayOperation'].zimo && (o = !0);
                                }
                                if (Z)
                                    V ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        type: mjcore['E_PlayOperation'].rong,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {}) : app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']();
                                else if (o)
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        type: mjcore['E_PlayOperation'].zimo,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {});
                                else if (y)
                                    if (this['mainrole']['during_liqi']) {
                                        for (var x = -1, e = 0; e < this['mainrole'].hand['length']; e++)
                                            if (this['mainrole'].hand[e]['valid']) {
                                                x = e;
                                                break;
                                            }
                                        this['Action_LiQi'](this['mainrole'].hand[x].val, this['mainrole'].hand[x] === this['mainrole']['last_tile'], this['mainrole'].hand[x]['is_open']);
                                    } else {
                                        var R = null,
                                            s = !1,
                                            u = !1;
                                        if (null == R && this['mainrole']['last_tile'] && this['mainrole']['last_tile']['valid'] && (R = this['mainrole']['last_tile'].val, s = !0, u = this['mainrole']['last_tile']['is_open']), null == R)
                                            for (var e = this['mainrole'].hand['length'] - 1; e >= 0; e--)
                                                if (this['mainrole'].hand[e]['valid']) {
                                                    R = this['mainrole'].hand[e].val,
                                                        s = !1,
                                                        u = this['mainrole'].hand[e]['is_open'];
                                                    break;
                                                }
                                        this['Action_QiPai'](R, s, !0, u);
                                    }
                                else
                                    S && (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']());
                            }
                        },
                        G['prototype']['WhenDoOperation'] = function() {
                            this['hangupCount'] = 0,
                                this['ClearOperationShow']();
                        },
                        G['prototype']['ClearOperationShow'] = function() {
                            this['operation_showing'] = !1,
                                this['oplist'] = [],
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                uiscript['UIMgr'].Inst['CloseLiuJu'](),
                                uiscript['UIMgr'].Inst['CloseWin'](),
                                uiscript['UIMgr'].Inst['CloseChipenghu'](),
                                uiscript['UIMgr'].Inst['CloseLiqiZimo'](),
                                uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1,
                                Laya['timer']['clearAll'](Z['ActionOperation']),
                                uiscript['UI_ScoreChange'].Inst['enable'] = !1,
                                this['mainrole']['can_discard'] = !1,
                                uiscript['UI_DesktopInfo'].Inst['closeCountDown']();
                        },
                        G['prototype']['WhenLiqiInfo'] = function(Z) {
                            var S = this;
                            Z && Laya['timer'].once(300, this, function() {
                                var V = Z.seat,
                                    o = Z['score'];
                                S['players'][S['seat2LocalPosition'](V)]['ShowLiqi'](),
                                    S['players'][S['seat2LocalPosition'](V)]['SetScore'](o, S['mainrole']['score']),
                                    uiscript['UI_DesktopInfo'].Inst['setLiqibang'](Z['liqibang']);
                            });
                        },
                        G['prototype']['WhenDoras'] = function(S, V) {
                            var o = this;
                            if (!(null == S || void 0 == S || 0 == S['length'] || S['length'] <= this.dora['length']) && S) {
                                for (var y = 0; y < S['length']; y++)
                                    this.dora['length'] > y ? this.dora[y] = mjcore['MJPai']['Create'](S[y]) : this.dora.push(mjcore['MJPai']['Create'](S[y])), uiscript['UI_DesktopInfo'].Inst['setDora'](y, this.dora[y]);
                                Laya['timer']['frameOnce'](1, this, function() {
                                        for (var Z = 0; 4 > Z; Z++)
                                            o['players'][Z]['OnDoraRefresh']();
                                    }),
                                    V || Z['AudioMgr']['PlayAudio'](215);
                            }
                        },
                        G['prototype']['Action_QiPai'] = function(Z, S, V, o) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['dapai'],
                                    tile: Z['toString'](),
                                    moqie: S,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: o ? 1 : 0
                                }, function(Z) {
                                    Z ? app.Log['Error']('Action_QiPai 失败') : app.Log.info('Action_QiPai 成功');
                                }),
                                V ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        G['prototype']['Action_AnPai'] = function(Z, S, V, o) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['reveal'],
                                    tile: Z['toString'](),
                                    moqie: S,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: o ? 1 : 0
                                }, function(Z) {
                                    Z ? app.Log['Error']('Action_AnPai 失败') : app.Log.info('Action_AnPai 成功');
                                }),
                                V ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        G['prototype']['Action_LiQi'] = function(Z, S, V) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var o = !1, y = 0; y < this['liqi_select']['length']; y++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][y], Z)) {
                                    o = !0;
                                    break;
                                }
                            return o ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation'].liqi,
                                tile: Z['toString'](),
                                moqie: S,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: V ? 1 : 0
                            }, function(Z) {
                                Z ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        G['prototype']['Action_AnPaiLiQi'] = function(Z, S, V) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var o = !1, y = 0; y < this['liqi_select']['length']; y++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][y], Z)) {
                                    o = !0;
                                    break;
                                }
                            return o ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation']['revealliqi'],
                                tile: Z['toString'](),
                                moqie: S,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: V ? 1 : 0
                            }, function(Z) {
                                Z ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        G['prototype']['Action_HuanSanZhange'] = function(Z, S) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['huansanzhang'],
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_states: S,
                                    change_tiles: Z
                                }, function(Z) {
                                    Z ? app.Log['Error']('Action_HuanSanZhange 失败') : app.Log.info('Action_HuanSanZhange 成功');
                                }),
                                this['WhenDoOperation']();
                        },
                        G['prototype']['SetLastQiPai'] = function(Z, S) {
                            this['lastqipai'] = S,
                                this['lastpai_seat'] = Z,
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        G['prototype']['ShowHuleEffect'] = function(S, V, o, y, G) {
                            var e = this;
                            if (void 0 === G && (G = 0), null != S) {
                                V.y = 0;
                                var x = 'scene/effect_hupai_default.lh',
                                    R = 213;
                                if (o) {
                                    var s = cfg['item_definition'].view.get(o);
                                    s && (x = 'scene/' + s['res_name'] + '.lh', R = s['audio_id']);
                                }
                                var u = new game['EffectBase'](x);
                                if (this['trans_container_effect']['addChild'](u.root), u.root['transform']['position'] = V, u.root['active'] = !0, 'scene/ron_hl.lh' == x) {
                                    var n = this['seat2LocalPosition'](y);
                                    u.root['transform']['localRotationEuler'] = 0 == n ? new Laya['Vector3'](0, 0, 0) : 1 == n ? new Laya['Vector3'](0, 90, 0) : 2 == n ? new Laya['Vector3'](0, 180, 0) : new Laya['Vector3'](0, 270, 0);
                                } else if ('scene/effect_hupai_yanhua.lh' == x)
                                    Laya['timer'].once(600, this, function() {
                                        var Z = new game['EffectBase']('scene/effect_hupai_yanhua_bang.lh');
                                        e['desktop3D']['addChild'](Z.root),
                                            Z.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                            Z.root['active'] = !0,
                                            Laya['timer'].once(2000, e, function() {
                                                Z['destroy']();
                                            });
                                    });
                                else if ('scene/ron_22chunjie.lh' == x) {
                                    var k = new game['EffectBase']('scene/ron_22chunjie_hongdi.lh');
                                    this['desktop3D']['addChild'](k.root),
                                        k['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                            for (var Z = game['Tools']['GetNodeByNameInChildren'](k.root, 'hongdi'), S = 0, V = Z['_childs']; S < V['length']; S++) {
                                                var o = V[S];
                                                o['particleRender']['material']['renderQueue'] = 3001;
                                            }
                                        })),
                                        k.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                        k.root['active'] = !0,
                                        Laya['timer'].once(3000, this, function() {
                                            k['destroy']();
                                        });
                                }
                                var r = !1,
                                    M = S['model']['parent'],
                                    g = S['model']['transform']['rotation']['clone'](),
                                    K = S['model']['transform']['worldMatrix']['clone']();
                                u['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                    if (!r) {
                                        Z['AudioMgr']['PlayAudio'](R);
                                        var V = game['Tools']['GetNodeByNameInChildren'](u.root, 'pai');
                                        V && 1 == G && (V['destroyChildren'](), V['addChild'](S['model']), S['ResetAllTimer'] && S['ResetAllTimer'](), S['model']['transform']['rotation'] = g['clone'](), S['model']['transform']['worldMatrix'] = K['clone'](), Laya['timer'].once(1800, e, function() {
                                            r || (M['addChild'](S['model']), S['model']['transform']['rotation'] = g['clone'](), S['model']['transform']['worldMatrix'] = K['clone']());
                                        }));
                                        var o = game['Tools']['GetNodeByNameInChildren'](u.root, 'pai_anim');
                                        !o || 1 != G && 0 != G || (o['destroyChildren'](), o['addChild'](S['model']), S['ResetAllTimer'] && S['ResetAllTimer'](), S['model']['transform']['rotation'] = g['clone'](), S['model']['transform']['worldMatrix'] = K['clone'](), Laya['timer'].once(1800, e, function() {
                                                r || (M['addChild'](S['model']), S['model']['transform']['rotation'] = g['clone'](), S['model']['transform']['worldMatrix'] = K['clone']());
                                            })),
                                            e['setSpecialHuleEffect'](x, u, S);
                                    }
                                }));
                                var Y = 2000;
                                'scene/ron_xiyuansi.lh' == x || 'scene/ron_beiyuan.lh' == x ? Y = 4600 : 'scene/ron_22chunjie.lh' == x ? Y = 3000 : 'scene/ron_2211saki.lh' == x ? Y = 3000 : 'scene/ron_llx.lh' == x && (Y = 3200),
                                    Laya['timer'].once(Y, this, function() {
                                        r = !0,
                                            S && S['model'] && S['model']['transform'] && (('scene/ron_xiyuansi.lh' == x || 'scene/ron_23wenquan.lh' == x) && (S['model']['getChildAt'](0)['getChildAt'](0) ? (S['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 2000, S['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['depthTest'] = 513, S['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001, S['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['depthTest'] = 513) : S['model']['meshRender'] && (S['model']['meshRender']['sharedMaterial']['depthTest'] = 513, S['model']['meshRender']['sharedMaterial']['renderQueue'] = 2000, S['model']['getChildAt'](0)['meshRender']['sharedMaterial']['depthTest'] = 513, S['model']['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001)), M['addChild'](S['model']), S['model']['transform']['rotation'] = g['clone'](), S['model']['transform']['worldMatrix'] = K['clone']()),
                                            u['destroy']();
                                    });
                            }
                        },
                        G['prototype']['setSpecialHuleEffect'] = function(Z, S, V) {
                            if ('scene/ron_llx.lh' == Z) {
                                var o = game['Tools']['GetNodeByNameInChildren'](S.root, 'global');
                                o['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    o['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                var y = game['Tools']['GetNodeByNameInChildren'](S.root, 'local');
                                y['active'] = !1,
                                    Laya['timer'].once(2000, this, function() {
                                        if (y && !y['destroyed']) {
                                            for (var Z = 1; 4 > Z; Z++)
                                                for (var S = y['getChildAt'](0)['getChildAt'](Z), V = 0, o = S['_childs']; V < o['length']; V++) {
                                                    var G = o[V];
                                                    if (G['_childs'] && G['_childs']['length'])
                                                        for (var e = 0, x = G['_childs']; e < x['length']; e++) {
                                                            var R = x[e];
                                                            R['particleRender']['material']['depthTest'] = 0;
                                                        }
                                                    else
                                                        G['particleRender']['material']['depthTest'] = 0;
                                                }
                                            y['active'] = !0;
                                        }
                                    });
                            }
                            if ('scene/ron_akagi.lh' == Z) {
                                var G = game['Tools']['GetNodeByNameInChildren'](S.root, 'heidi');
                                G['transform']['position'] = new Laya['Vector3'](0, 0.101, 0.718);
                            }
                            if ('scene/ron_22summer.lh' == Z) {
                                var e = game['Tools']['GetNodeByNameInChildren'](S.root, 'ya02');
                                e['meshRender']['material']['depthWrite'] = !0,
                                    e['meshRender']['material']['depthTest'] = 0,
                                    e['meshRender']['material']['renderQueue'] = 3005,
                                    e['meshRender']['material']['disableLight']();
                            }
                            if ('scene/ron_beiyuan.lh' == Z) {
                                var o = game['Tools']['GetNodeByNameInChildren'](S.root, 'global');
                                o['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    o['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                var x = game['Tools']['GetNodeByNameInChildren'](S.root, 'plane1X1');
                                x['meshRender']['material']['disableLight'](),
                                    x['meshRender']['material']['renderQueue'] = 3002;
                                var R = game['Tools']['GetNodeByNameInChildren'](S.root, 'shiziguang02');
                                R['particleRender']['material']['depthTest'] = 0,
                                    R['particleRender']['material']['renderQueue'] = 3003;
                                for (var s = 0; s < R['_childs']['length']; s++)
                                    R['getChildAt'](s)['particleRender']['material']['depthTest'] = 0, R['getChildAt'](s)['particleRender']['material']['renderQueue'] = 3003;
                                var u = game['Tools']['GetNodeByNameInChildren'](S.root, 'suipian');
                                u['particleRender']['material']['depthTest'] = 0,
                                    u['particleRender']['material']['renderQueue'] = 3003,
                                    u = game['Tools']['GetNodeByNameInChildren'](S.root, 'xuehua01'),
                                    u['particleRender']['material']['depthTest'] = 0,
                                    u['particleRender']['material']['renderQueue'] = 3003,
                                    u = game['Tools']['GetNodeByNameInChildren'](S.root, 'xuehua02'),
                                    u['particleRender']['material']['depthTest'] = 0,
                                    u['particleRender']['material']['renderQueue'] = 3003,
                                    u = game['Tools']['GetNodeByNameInChildren'](S.root, 'suipian01'),
                                    u['particleRender']['material']['depthTest'] = 0,
                                    u['particleRender']['material']['renderQueue'] = 3003;
                            }
                            if ('scene/ron_23wenquan.lh' == Z) {
                                if (V['model']['getChildAt'](0)['getChildAt'](0)) {
                                    var n = V['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial'];
                                    n['depthTest'] = 0,
                                        n['renderQueue'] = 3003,
                                        n = V['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial'],
                                        n['depthTest'] = 0,
                                        n['renderQueue'] = 3002;
                                } else if (V['model']['meshRender']) {
                                    var n = V['model']['meshRender']['sharedMaterial'];
                                    n['depthTest'] = 0,
                                        n['renderQueue'] = 3003,
                                        n = V['model']['getChildAt'](0)['meshRender']['sharedMaterial'],
                                        n['depthTest'] = 0,
                                        n['renderQueue'] = 3002;
                                }
                                var k = game['Tools']['GetNodeByNameInChildren'](S.root, 'chilun'),
                                    r = function(Z) {
                                        if (Z['_childs'] && Z['_childs']['length'] > 0)
                                            for (var S = 0, V = Z['_childs']; S < V['length']; S++) {
                                                var o = V[S];
                                                r(o);
                                            }
                                        Z['particleRender'] && Z['particleRender']['material']['renderQueue'] > 3000 && (Z['particleRender']['material']['depthTest'] = 0);
                                    };
                                r(k);
                            }
                            if ('scene/ron_xiyuansi.lh' == Z) {
                                Laya['timer'].once(1800, this, function() {
                                    if (V['model']['getChildAt'](0)['getChildAt'](0)) {
                                        var Z = V['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial'];
                                        Z['depthTest'] = 0,
                                            Z['renderQueue'] = 3003,
                                            Z = V['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial'],
                                            Z['depthTest'] = 0,
                                            Z['renderQueue'] = 3002;
                                    } else if (V['model']['meshRender']) {
                                        var Z = V['model']['meshRender']['sharedMaterial'];
                                        Z['depthTest'] = 0,
                                            Z['renderQueue'] = 3003,
                                            Z = V['model']['getChildAt'](0)['meshRender']['sharedMaterial'],
                                            Z['depthTest'] = 0,
                                            Z['renderQueue'] = 3002;
                                    }
                                });
                                var x = game['Tools']['GetNodeByNameInChildren'](S.root, 'plane1X1');
                                x['meshRender']['material']['disableLight'](),
                                    x['meshRender']['material']['renderQueue'] = 3002;
                                var M = game['LoadMgr']['getResImage']('extendRes/charactor/xiyuansiyiyu_0/full.png');
                                M && M['active'](),
                                    x['meshRender']['material']['diffuseTexture'] = Laya['Texture2D'].load(game['LoadMgr']['getResImageSkin']('extendRes/charactor/xiyuansiyiyu_0/full.png'));
                                for (var g = game['Tools']['GetNodeByNameInChildren'](S.root, 'lizi'), s = 0; s < g['numChildren']; s++)
                                    g['getChildAt'](s)['particleRender']['material']['renderQueue'] = 3002, g['getChildAt'](s)['particleRender']['material']['depthTest'] = 0;
                                var o = game['Tools']['GetNodeByNameInChildren'](S.root, 'global');
                                o['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    o['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                for (var s = 0; 3 > s; s++)
                                    o['getChildByName']('heidi01')['getChildAt'](s)['particleRender']['material']['renderQueue'] = 3002;
                                for (var s = 0; 3 > s; s++)
                                    o['getChildByName']('daoguang')['getChildByName']('lizi')['getChildAt'](s)['particleRender']['material']['renderQueue'] = 3002;
                                o['getChildByName']('baodian')['getChildByName']('shiziguang02')['particleRender']['material']['renderQueue'] = 3002;
                                for (var s = 0; 4 > s; s++)
                                    o['getChildByName']('baodian')['getChildByName']('shiziguang02')['getChildAt'](s)['particleRender']['material']['renderQueue'] = 3002;
                                for (var s = 4; 8 > s; s++) {
                                    var n = o['getChildByName']('quxian_amin01')['getChildAt'](s)['meshRender']['material'];
                                    n['renderQueue'] = 3002,
                                        n['disableLight']();
                                }
                            }
                        },
                        G['prototype']['ShowChiPengEffect'] = function() {
                            var S = this;
                            if (this['lastqipai']['model'] && this['lastqipai']['model']['transform']) {
                                this['effect_pai_canchi'] || (this['effect_pai_canchi'] = new game['EffectBase']('scene/' + game['GameUtility']['get_view_res_name'](game['EView']['mingpai_zhishi']) + '.lh'), this['trans_container_effect']['addChild'](this['effect_pai_canchi'].root), this['effect_pai_canchi'].root['active'] = !0),
                                    this['effect_pai_canchi'].root['transform']['worldMatrix'] = this['lastqipai']['model']['transform']['worldMatrix']['clone']();
                                var V = this['effect_pai_canchi'],
                                    o = this['lastqipai'];
                                if (this['lastqipai']['revealState'] == Z['ERevealState']['reveal']) {
                                    var y = this['effect_pai_canchi'].root['transform']['localPosition']['clone']();
                                    y.y -= Z['PAIMODEL_THICKNESS'],
                                        this['effect_pai_canchi'].root['transform']['localPosition'] = y;
                                }
                                Laya['timer']['frameLoop'](1, this['effect_pai_canchi'], function() {
                                    if (o['model']['activeInHierarchy'] && o['model']['active'] && o['model']['parent']['active']) {
                                        if (V.root['transform']['worldMatrix'] = o['model']['transform']['worldMatrix']['clone'](), o['revealState'] == Z['ERevealState']['reveal']) {
                                            var y = V.root['transform']['localPosition']['clone']();
                                            y.y -= Z['PAIMODEL_THICKNESS'],
                                                V.root['transform']['localPosition'] = y;
                                        }
                                        S['effect_pai_canchi'].root['active'] = !0;
                                    } else
                                        S['effect_pai_canchi'].root['active'] = !1;
                                });
                            }
                        },
                        G['prototype']['CloseChiPngEffect'] = function() {
                            this['effect_pai_canchi'] && (Laya['timer']['clearAll'](this['effect_pai_canchi']), this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        G['prototype']['setChoosedPai'] = function(Z) {
                            var S = !1;
                            if (S || !Z || this['choosed_pai'] || (S = !0), S || Z || !this['choosed_pai'] || (S = !0), !S && Z && this['choosed_pai'] && 0 != mjcore['MJPai']['Distance'](this['choosed_pai'], Z) && (S = !0), S && (this['choosed_pai'] = Z ? Z['Clone']() : null, G['bianjietishi'])) {
                                for (var V = 0; 4 > V; V++)
                                    this['players'][V]['OnChoosePai']();
                                uiscript['UI_TingPai'].Inst['onChooseTile'](Z);
                            }
                        },
                        G['prototype']['setTingpai'] = function(S, V) {
                            for (var o = !1, y = [], G = 0; G < V['length']; G++)
                                y.push(mjcore['MJPai']['Create'](V[G].tile));
                            this['tingpais'][S]['length'] != y['length'] && (o = !0);
                            for (var G = 0; G < y['length'] && !o; G++)
                                0 != mjcore['MJPai']['Distance'](y[G], this['tingpais'][S][G]) && (o = !0);
                            if (o) {
                                this['tingpais'][S] = y;
                                for (var G = 0; G < Z['DesktopMgr'].Inst['players']['length']; G++) {
                                    var e = this['localPosition2Seat'](G);
                                    if (!(0 > e)) {
                                        for (var x = 0; x < Z['DesktopMgr'].Inst['players'][G]['container_qipai'].pais['length']; x++) {
                                            var R = Z['DesktopMgr'].Inst['players'][G]['container_qipai'].pais[x];
                                            R['ispaopai'] = this['isPaoPai'](R.val),
                                                R['OnChoosedPai']();
                                        }
                                        for (var x = 0; x < Z['DesktopMgr'].Inst['players'][G]['container_ming'].pais['length']; x++) {
                                            var R = Z['DesktopMgr'].Inst['players'][G]['container_ming'].pais[x];
                                            R['ispaopai'] = this['isPaoPai'](R.val),
                                                R['OnChoosedPai']();
                                        }
                                        for (var x = 0; x < Z['DesktopMgr'].Inst['players'][G]['container_babei'].pais['length']; x++) {
                                            var R = Z['DesktopMgr'].Inst['players'][G]['container_babei'].pais[x];
                                            R['ispaopai'] = this['isPaoPai'](R.val),
                                                R['OnChoosedPai']();
                                        }
                                        var R = Z['DesktopMgr'].Inst['players'][G]['container_qipai']['last_pai'];
                                        if (R && (R['ispaopai'] = this['isPaoPai'](R.val), R['OnChoosedPai']()), 0 == G)
                                            for (var s = Z['DesktopMgr'].Inst['players'][G], x = 0; x < s.hand['length']; x++) {
                                                var R = s.hand[x];
                                                R['ispaopai'] = this['isPaoPai'](R.val),
                                                    R['OnChoosedPai']();
                                            }
                                        else
                                            for (var s = Z['DesktopMgr'].Inst['players'][G], x = 0; x < s.hand['length']; x++) {
                                                var R = s.hand[x]['pai3D'];
                                                R['ispaopai'] = this['record_show_hand'] || R['is_open'] ? this['isPaoPai'](R.val) : !1,
                                                    R['OnChoosedPai']();
                                            }
                                    }
                                }
                            }
                        },
                        G['prototype']['isPaoPai'] = function(Z) {
                            if (!this['record_show_paopai'])
                                return !1;
                            for (var S = 0; S < this['tingpais']['length']; S++)
                                for (var V = 0; V < this['tingpais'][S]['length']; V++)
                                    if (0 == mjcore['MJPai']['Distance'](this['tingpais'][S][V], Z))
                                        return !0;
                            return !1;
                        },
                        G['prototype']['getPaiLeft'] = function(S) {
                            for (var V = 0, o = 0; 4 > o; o++) {
                                for (var y = this['players'][o], G = 0; G < y['container_babei'].pais['length']; G++)
                                    0 == mjcore['MJPai']['Distance'](y['container_babei'].pais[G].val, S) && V++;
                                for (var G = 0; G < y['container_ming'].pais['length']; G++)
                                    0 == mjcore['MJPai']['Distance'](y['container_ming'].pais[G].val, S) && V++;
                                for (var G = 0; G < y['container_qipai'].pais['length']; G++)
                                    y['container_qipai'].pais[G]['revealState'] != Z['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](y['container_qipai'].pais[G].val, S) && V++;
                                y['container_qipai']['last_pai'] && y['container_qipai']['last_pai']['revealState'] != Z['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](y['container_qipai']['last_pai'].val, S) && V++,
                                    y['pai_xuezhan_mid_zimo'] && 0 == mjcore['MJPai']['Distance'](y['pai_xuezhan_mid_zimo'], S) && V++;
                            }
                            for (var o = 0; o < this['mainrole'].hand['length']; o++)
                                0 == mjcore['MJPai']['Distance'](this['mainrole'].hand[o].val, S) && V++;
                            for (var o = 0; o < this.dora['length']; o++)
                                this.dora[o] && 0 == mjcore['MJPai']['Distance'](this.dora[o], S) && V++;
                            var e = 4 - V;
                            return 0 > e ? 0 : e > 4 ? 4 : e;
                        },
                        G['prototype']['get_gang_count'] = function() {
                            for (var Z = 0, S = 0; S < this['players']['length']; S++) {
                                var V = this['localPosition2Seat'](S);
                                if (V >= 0)
                                    for (var o = this['players'][S]['container_ming']['mings'], y = 0; y < o['length']; y++)
                                        (o[y].type == mjcore['E_Ming']['gang_an'] || o[y].type == mjcore['E_Ming']['gang_ming']) && Z++;
                            }
                            return Z;
                        },
                        G['prototype']['get_babei_count'] = function() {
                            for (var Z = 0, S = 0; S < this['players']['length']; S++) {
                                var V = this['localPosition2Seat'](S);
                                V >= 0 && (Z += this['players'][S]['container_babei'].pais['length']);
                            }
                            return Z;
                        },
                        G['prototype']['fetchLinks'] = function() {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'fetchGamePlayerState', {}, function(Z, S) {
                                if (Z || S['error'])
                                    uiscript['UIMgr'].Inst['showNetReqError']('fetchGamePlayerState', Z, S);
                                else {
                                    app.Log.log(JSON['stringify'](S)),
                                        G['player_link_state'] = [];
                                    for (var V = 0; V < S['state_list']['length']; V++)
                                        G['player_link_state'].push(S['state_list'][V]);
                                    uiscript['UI_DesktopInfo'].Inst['refreshLinks']();
                                }
                            });
                        },
                        G['prototype']['onShowHandChange'] = function(Z) {
                            if (this['record_show_hand'] = Z, Laya['LocalStorage']['setItem']('record_show_hand', Z ? '1' : '0'), this['gameing'])
                                for (var S = 1; 4 > S; S++)
                                    this['players'][S]['onShowHandChange'](Z);
                        },
                        G['prototype']['onShowPaopaiChange'] = function(S) {
                            if (this['record_show_paopai'] = S, Laya['LocalStorage']['setItem']('record_show_paopai', S ? '1' : '0'), this['gameing']) {
                                this['mainrole']['onShowPaopaiChange']();
                                for (var V = 1; 4 > V; V++)
                                    this['players'][V]['onShowPaopaiChange']();
                                for (var V = 0; V < Z['DesktopMgr'].Inst['players']['length']; V++) {
                                    var o = this['localPosition2Seat'](V);
                                    if (!(0 > o)) {
                                        for (var y = 0; y < Z['DesktopMgr'].Inst['players'][V]['container_qipai'].pais['length']; y++) {
                                            var G = Z['DesktopMgr'].Inst['players'][V]['container_qipai'].pais[y];
                                            G['ispaopai'] = this['isPaoPai'](G.val),
                                                G['OnChoosedPai']();
                                        }
                                        for (var y = 0; y < Z['DesktopMgr'].Inst['players'][V]['container_ming'].pais['length']; y++) {
                                            var G = Z['DesktopMgr'].Inst['players'][V]['container_ming'].pais[y];
                                            G['ispaopai'] = this['isPaoPai'](G.val),
                                                G['OnChoosedPai']();
                                        }
                                        for (var y = 0; y < Z['DesktopMgr'].Inst['players'][V]['container_babei'].pais['length']; y++) {
                                            var G = Z['DesktopMgr'].Inst['players'][V]['container_babei'].pais[y];
                                            G['ispaopai'] = this['isPaoPai'](G.val),
                                                G['OnChoosedPai']();
                                        }
                                        var G = Z['DesktopMgr'].Inst['players'][V]['container_qipai']['last_pai'];
                                        G && (G['ispaopai'] = this['isPaoPai'](G.val), G['OnChoosedPai']());
                                    }
                                }
                            }
                        },
                        G['prototype']['onRoundEnd'] = function(S, V) {
                            var o = Z['DesktopMgr'].Inst['seat2LocalPosition'](S);
                            this['players'][o]['OnRoundEnd'](V);
                        },
                        G['prototype']['onMuyuChange'] = function(S, V) {
                            var o = this;
                            if (void 0 === V && (V = !0), this['is_muyu_mode']()) {
                                var y = !1;
                                if (this['muyu_info'] && this['muyu_info'].id == S.id || (y = !0), this['muyu_effect'] && !this['muyu_effect']['destroyed'])
                                    if (V) {
                                        if (y) {
                                            var G,
                                                e;
                                            if (this['muyu_info'] ? (G = this['muyu_effect']['clone'](), this['muyu_effect'].root['parent']['addChild'](G.root), e = this['muyu_effect'], this['muyu_effect'] = G) : G = this['muyu_effect'], this['muyu_info']) {
                                                e['effect_root']['getChildByName']('muyu_chuxian')['active'] = !1;
                                                var x = e['effect_root']['getChildByName']('muyu_xiaoshi');
                                                x['active'] = !0;
                                                var R = x['getChildByName']('mianpian')['getChildByName']('shuzi'),
                                                    s = R['meshRender']['material'];
                                                s['renderQueue'] = 3001,
                                                    s['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png'),
                                                    Laya['timer'].once(1000, null, function() {
                                                        e['destroy']();
                                                    });
                                            }
                                            G['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                                    var V = o['seat2LocalPosition'](S.seat);
                                                    G.root['transform']['worldMatrix'] = o['players'][V]['trans_muyu']['transform']['worldMatrix'],
                                                        G.root['transform']['rotation'] = o['players'][V]['trans_muyu']['transform']['rotation']['clone'](),
                                                        G.root['active'] = !0,
                                                        G['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                                    var y = G['effect_root']['getChildByName']('muyu_chuxian');
                                                    y['active'] = !0,
                                                        y['getChildByName']('baodian')['active'] = !0;
                                                    var e = y['getChildByName']('mianpian');
                                                    e['active'] = !0,
                                                        e['getChildByName']('shuzi_anim')['active'] = !1;
                                                    var x = e['getChildByName']('shuzi');
                                                    x['active'] = !0;
                                                    var R = x['meshRender']['material'];
                                                    R['renderQueue'] = 3001,
                                                        R['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + S['count'] + '.png'),
                                                        Z['AudioMgr']['PlayAudio'](246);
                                                })),
                                                this['muyu_info'] = S;
                                        } else if (S['count'] != this['muyu_info']['count']) {
                                            var u = this['muyu_effect']['effect_root'];
                                            u['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                            var n = u['getChildByName']('muyu_chuxian'),
                                                k = n['getChildByName']('mianpian');
                                            k['getChildByName']('shuzi_anim')['active'] = !1;
                                            var r = k['getChildByName']('shuzi'),
                                                M = k['getChildByName']('shuzi_anim'),
                                                g = M['getChildByName']('shuzi_up'),
                                                K = M['getChildByName']('shuzi_down');
                                            Laya['timer']['clearAll'](r),
                                                r['active'] = !1;
                                            var Y = r['meshRender']['material'];
                                            Y['renderQueue'] = 3001,
                                                Y['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + S['count'] + '.png');
                                            var j = g['meshRender']['material'];
                                            j['renderQueue'] = 3001,
                                                j['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png');
                                            var F = K['meshRender']['material'];
                                            F['renderQueue'] = 3002,
                                                F['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + S['count'] + '.png'),
                                                K['active'] = !1,
                                                M['active'] = !0,
                                                this['muyu_info'] = S,
                                                Laya['timer'].once(210, r, function() {
                                                    r['active'] = !0,
                                                        M['active'] = !1;
                                                });
                                        }
                                    } else {
                                        this['muyu_info'] = S;
                                        var w = this['seat2LocalPosition'](this['muyu_info'].seat);
                                        this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect'].root['transform']['worldMatrix'] = this['players'][w]['trans_muyu']['transform']['worldMatrix'],
                                            this['muyu_effect'].root['transform']['rotation'] = this['players'][w]['trans_muyu']['transform']['rotation']['clone'](),
                                            this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect']['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                        var n = this['muyu_effect']['effect_root']['getChildByName']('muyu_chuxian');
                                        n['active'] = !0,
                                            n['getChildByName']('baodian')['active'] = !1;
                                        var k = n['getChildByName']('mianpian');
                                        k['active'] = !0,
                                            k['getChildByName']('shuzi_anim')['active'] = !1;
                                        var R = k['getChildByName']('shuzi');
                                        R['active'] = !0;
                                        var s = R['meshRender']['material'];
                                        s['renderQueue'] = 3001,
                                            s['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + S['count'] + '.png');
                                    }
                            }
                        },
                        G['prototype']['getMindVoicePriority'] = function(Z) {
                            switch (Z) {
                                case 'ingame_yiman':
                                    return 100;
                                case 'ingame_beiman':
                                    return 90;
                                case 'ingame_lianda':
                                    return 50;
                                case 'ingame_baopai':
                                    return 30;
                                case 'ingame_remain10':
                                    return 20;
                            }
                            return 0;
                        },
                        G['prototype']['addMindVoice'] = function(Z, S) {
                            (!this['mind_voice_type'] || this['getMindVoicePriority'](this['mind_voice_type']) < this['getMindVoicePriority'](S)) && (this['mind_voice_seat'] = Z, this['mind_voice_type'] = S);
                        },
                        G['prototype']['playMindVoice'] = function() {
                            var S = this;
                            if (G['bianjietishi']) {
                                if (this['gameing'] && (this.mode == o.play || this.mode == o['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play']) && this['mind_voice_type'] && !this['during_playing_mind_voice']) {
                                    this['during_playing_mind_voice'] = !0;
                                    var V = Z['AudioMgr']['PlayCharactorSound_Teshu'](this['player_datas'][this['mind_voice_seat']]['character'], this['mind_voice_type'], Laya['Handler']['create'](this, function() {
                                        S['during_playing_mind_voice'] = !1;
                                    }));
                                    V && (this['mind_voice_sound'] = V['sound']);
                                }
                                this['mind_voice_type'] = null,
                                    this['mind_voice_seat'] = -1;
                            }
                        },
                        G['prototype']['clearMindVoice'] = function() {
                            this['mind_voice_type'] = null,
                                this['mind_voice_seat'] = -1;
                        },
                        G['prototype']['resetMindVoice'] = function() {
                            this['mind_voice_sound'] && (this['mind_voice_sound'].stop(), this['mind_voice_sound'] = null),
                                this['clearMindVoice']();
                        },
                        G['prototype']['getLastActionNames'] = function(Z) {
                            for (var S = [], V = this['actionList']['length'], o = Math.max(V - Z, this['action_index']); V > o; o++)
                                S.push(this['actionList'][o].name);
                            return S;
                        },
                        G['prototype']['isLastPaiMingPai'] = function() {
                            for (var Z = 0; Z < this['players']['length']; Z++)
                                for (var S = 0; S < this['players'][Z]['container_ming'].pais['length']; S++)
                                    if (this['lastqipai'] == this['players'][Z]['container_ming'].pais[S])
                                        return !0;
                            return !1;
                        },
                        G['prototype']['setRevealScore'] = function(Z, S) {
                            if (this['anpai']) {
                                var V = (1000 * Z)['toString']();
                                if (0 == Z)
                                    for (var o = 0; o < this['score_reveal']['length']; o++)
                                        if (2 == o) {
                                            this['score_reveal'][o]['active'] = !0;
                                            var y = new Laya['Vector4']();
                                            y.z = 0,
                                                y.w = -0.9,
                                                y.x = 1,
                                                y.y = 0.1,
                                                this['score_reveal'][o]['meshRender']['material']['tilingOffset'] = y;
                                        } else
                                            this['score_reveal'][o]['active'] = !1;
                                else
                                    for (var G = this['last_anpai_score']['toString'](), o = 0; o < this['score_reveal']['length']; o++)
                                        if (o < V['length']) {
                                            var e = o < G['length'] ? Number(G[o]) : 0;
                                            S ? this['show_reveal_score_anim'](o, e, Number(V[o])) : this['show_reveal_score_anim'](o, Number(V[o]), Number(V[o]));
                                        } else
                                            this['score_reveal'][o]['active'] = !1;
                                this['last_anpai_score'] = 1000 * Z;
                            }
                        },
                        G['prototype']['show_reveal_score_anim'] = function(S, V, o) {
                            var y = this,
                                G = 24,
                                e = 40,
                                x = 3,
                                R = 0.2,
                                s = 0.8,
                                u = 2000,
                                n = o - V;
                            if (this['score_reveal'][S]['active'] = !0, V == o) {
                                var k = new Laya['Vector4'](),
                                    r = V / 10;
                                return r > 0.9 && (r -= 1),
                                    k.w = -(0.9 - r),
                                    k.z = 0,
                                    k.x = 1,
                                    k.y = 0.1,
                                    this['score_reveal'][S]['meshRender']['material']['tilingOffset'] = k,
                                    void 0;
                            }
                            n += 10,
                                0 >= n && (n += 10);
                            var M = 0,
                                g = Laya['timer']['currTimer'],
                                K = Laya['timer']['currTimer'],
                                Y = 0,
                                j = !1,
                                F = 0,
                                w = function() {
                                    var o = Laya['timer']['currTimer'] - g;
                                    F % 9 == 0 && Z['AudioMgr']['PlayAudio'](222),
                                        F++,
                                        Laya['timer']['currTimer'] - K > u ? (Y = n, Laya['timer']['clear'](y, w)) : (n / 2 > Y && G > M ? M += e * o / 1000 : Y >= n / 2 && s > n - Y && (M -= e * o / 1000, M = Math.max(x, M)), j ? (Y -= M * o / 1000, n > Y && (Y = n, Laya['timer']['clear'](y, w))) : (Y += M * o / 1000, Y > n + R && (j = !0)));
                                    var k = new Laya['Vector4'](),
                                        r = (Y + V) / 10;
                                    r > 0.9 && (r -= 1),
                                        k.w = -(0.9 - r),
                                        k.z = 0,
                                        k.x = 1,
                                        k.y = 0.1,
                                        y['score_reveal'][S]['meshRender']['material']['tilingOffset'] = k,
                                        g = Laya['timer']['currTimer'];
                                };
                            Laya['timer']['frameLoop'](1, this, w);
                        },
                        G['prototype']['onRevealStateChange'] = function(Z, S) {
                            this['players'][this['seat2LocalPosition'](Z)]['trans_reveal']['active'] = S;
                        },
                        G['prototype']['is_field_spell_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['field_spell_mode'] ? !0 : !1;
                        },
                        G['prototype']['is_field_spell_extra_dora'] = function() {
                            if (!this['is_field_spell_mode']() || !this['field_spell'])
                                return !1;
                            var Z = Math['floor'](this['field_spell'] / 100) % 100;
                            return 3 == Z;
                        },
                        G['prototype']['is_zhanxing_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['zhanxing'] ? !0 : !1;
                        },
                        G['prototype']['is_tianming_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['tianming_mode'] ? !0 : !1;
                        },
                        G.Inst = null,
                        G['player_link_state'] = [S.NULL, S.NULL, S.NULL, S.NULL],
                        G['click_prefer'] = 0,
                        G['double_click_pass'] = 0,
                        G['en_mjp'] = !1,
                        G['bianjietishi'] = !0,
                        G['_is_yuren_type'] = !1,
                        G;
                }
                (Laya['Script']);
            Z['DesktopMgr'] = y;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this;
                            app.Log.log('ActionLiuJu play data:' + JSON['stringify'](S)),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var o = 0;
                            if (S.liqi ? (o = 1000, Z['ActionLiqi'].play(S.liqi)) : o = 500, S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), S.type == mjcore['E_LiuJu']['sanjiahule']) {
                                Z['BgmListMgr']['stopBgm']();
                                var y = S.seat;
                                Laya['timer'].once(o, this, function() {
                                        for (var S = [], V = 0; 4 > V; V++)
                                            Z['DesktopMgr'].Inst['localPosition2Seat'](V) != y && S.push(V);
                                        uiscript['UI_Huleshow'].Inst['showRong'](S);
                                    }),
                                    o += 1500,
                                    Laya['timer'].once(o, this, function() {
                                        for (var V = 0; V < S['allplayertiles']['length']; V++)
                                            if (V != y) {
                                                for (var o = S['allplayertiles'][V]['split']('|'), G = [], e = 0; e < o['length']; e++)
                                                    G.push(mjcore['MJPai']['Create'](o[e]));
                                                G = G.sort(mjcore['MJPai']['Distance']),
                                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['Huangpai'](!0, G, !1);
                                            }
                                    }),
                                    o += 1000,
                                    Laya['timer'].once(o, this, function() {
                                        V['showEnd'](S),
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                Laya['timer'].once(o, this, function() {
                                    if (Z['BgmListMgr']['stopBgm'](), S['hules_history'])
                                        for (var o = 0, y = S['hules_history']; o < y['length']; o++) {
                                            var G = y[o],
                                                e = Z['DesktopMgr'].Inst['seat2LocalPosition'](G.seat);
                                            Z['DesktopMgr'].Inst['players'][e]['onXuezhanEnd'](G.hand, !1);
                                        }
                                    var x = 500;
                                    if (S.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                        for (var e = S.seat, R = S['tiles'], s = [], u = 0; u < R['length']; u++)
                                            s.push(mjcore['MJPai']['Create'](R[u]));
                                        s = s.sort(mjcore['MJPai']['Distance']),
                                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](e)]['Huangpai'](!0, s, !1);
                                    }
                                    if (S.type == mjcore['E_LiuJu']['sijializhi'] && S['allplayertiles'] && S['allplayertiles']['length'] > 0) {
                                        for (var n = 0; n < S['allplayertiles']['length']; n++) {
                                            for (var k = S['allplayertiles'][n]['split']('|'), s = [], u = 0; u < k['length']; u++)
                                                s.push(mjcore['MJPai']['Create'](k[u]));
                                            s = s.sort(mjcore['MJPai']['Distance']),
                                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](n)]['Huangpai'](!0, s, !1);
                                        }
                                        x = 1000;
                                    }
                                    Laya['timer'].once(x, V, function() {
                                        V['showEnd'](S),
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionLiuJu fastplay data:' + JSON['stringify'](S)),
                                Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1);
                            if (S.liqi && Z['ActionLiqi']['fastplay'](S.liqi, 0), S.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                for (var V = S.seat, o = S['tiles'], y = [], G = 0; G < o['length']; G++)
                                    y.push(mjcore['MJPai']['Create'](o[G]));
                                y = y.sort(mjcore['MJPai']['Distance']),
                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['Huangpai'](!0, y, !0);
                            }
                            if (S.type == mjcore['E_LiuJu']['sanjiahule'])
                                for (var V = S.seat, e = 0; e < S['allplayertiles']['length']; e++)
                                    if (e != V) {
                                        for (var x = S['allplayertiles'][e]['split']('|'), y = [], G = 0; G < x['length']; G++)
                                            y.push(mjcore['MJPai']['Create'](x[G]));
                                        y = y.sort(mjcore['MJPai']['Distance']),
                                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](e)]['Huangpai'](!0, y, !1);
                                    }
                            this['showEnd'](S);
                        },
                        V['record'] = function(Z) {
                            return app.Log.log('ActionLiuJu record data:' + JSON['stringify'](Z)),
                                this.play(Z),
                                4000;
                        },
                        V['fastrecord'] = function(S) {
                            Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                this['showEnd'](S);
                        },
                        V['showEnd'] = function(S) {
                            var V = null;
                            Z['DesktopMgr'].Inst['xuezhan'] && S['hules_history'] && S['hules_history']['length'] > 0 && (V = Laya['Handler']['create'](this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](S, !1);
                                })),
                                uiscript['UIMgr'].Inst['ShowLiuJu'](S, V);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionLiuJu'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionUnveilTile play data:' + JSON['stringify'](S)),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']);
                            var V = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](S.seat)];
                            V['PlaySound']('act_unveil'),
                                S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                        },
                        V['fastplay'] = function(S) {
                            Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1);
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']);
                            var o = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](S.seat)];
                            if (o['PlaySound']('act_unveil'), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var y = 0; y < S['operations']['length']; y++)
                                    Z['ActionOperation'].ob(S['operations'][y], V, 450);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                500;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']);
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](S.seat)];
                            if (Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var o = 0; o < S['operations']['length']; o++)
                                    Z['ActionOperation'].ob(S['operations'][o], V, 450);
                            if (Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var o = 0; o < S['operations']['length']; o++)
                                    Z['ActionOperation'].ob(S['operations'][o], V, 450);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionUnveilTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function() {
                    function S(Z) {
                        var S = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = Z,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                S['btn_up']['visible'] = S['scrollview'].rate > 0,
                                    S['btn_down']['visible'] = S['scrollview']['need_scroll'] && S['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return S['prototype'].show = function(S) {
                            var V = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = S;
                            for (var o = 0, y = 0; y < S['length']; y++) {
                                var G = this['caluH'](S[y]);
                                o += G,
                                    this['scrollview']['addItem'](1, G);
                            }
                            Z['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    V['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S.me['visible'] = !1;
                                }));
                        },
                        S['prototype']['caluH'] = function(Z) {
                            var S = Z['actions'][Z['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if (view['DesktopMgr'].Inst['xuezhan'] && S.data['hules_history'] && S.data['hules_history']['length'] > 0)
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if ('RecordNoTile' == S.name) {
                                for (var V = S.data, o = [], y = 0; y < view['DesktopMgr'].Inst['player_count']; y++)
                                    o.push({
                                        old_score: V['scores'][0]['old_scores'][y],
                                        delta: 0
                                    });
                                for (var y = 0; y < V['scores']['length']; y++)
                                    for (var G = 0; G < view['DesktopMgr'].Inst['player_count']; G++)
                                        o[G]['delta'] += V['scores'][y]['delta_scores'][G];
                                for (var e = [], y = 0; y < o['length']; y++)
                                    o[y]['delta'] > 0 && e.push(y);
                                var x = 120 + (0 == e['length'] ? 0 : 40 * (e['length'] - 1));
                                return x;
                            }
                            return 'RecordLiuJu' == S.name ? 120 : S.data['hules'][0].zimo ? 120 : 180 + 40 * (S.data['hules']['length'] - 1);
                        },
                        S['prototype']['renderInfo'] = function(Z) {
                            for (var S = this, V = Z['index'], o = Z['container'], y = this['rounds'][V], e = 0; e < y['actions']['length']; e++)
                                if ('RecordNewRound' == y['actions'][e].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        o['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            o['getChildByName']('container_title')['getChildByName']('ju').text = (y['actions'][e].data['ju_count'] + 1)['toString'](),
                                            o['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            o['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var x = 0, R = o['getChildByName']('container_title'), s = [3, 3, 0], u = 0; 3 > u; u++) {
                                            var n = R['getChildAt'](u);
                                            x += n['textField']['textWidth'] * n['scaleX'],
                                                x += s[u];
                                        }
                                        for (var k = R['width'] / 2 - x / 2, r = 0; 3 > r; r++) {
                                            var n = R['getChildAt'](r);
                                            n.x = k,
                                                k += n['textField']['textWidth'] * n['scaleX'] + s[r],
                                                n.y = 'haolong' == n.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var M = void 0;
                                    M = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        o['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !0,
                                        o['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !0,
                                        o['getChildByName']('container_title')['getChildByName']('chang').text = M[y['actions'][e].data['chang'] % 4],
                                        o['getChildByName']('container_title')['getChildByName']('ju').text = (y['actions'][e].data.ju + 1)['toString'](),
                                        o['getChildByName']('container_title')['getChildByName']('ben').text = y['actions'][e].data.ben['toString']();
                                    for (var x = 0, R = o['getChildByName']('container_title'), s = [3, 3, 50, 3, 0], g = 0; g < R['numChildren']; g++) {
                                        var n = R['getChildAt'](g);
                                        x += n['textField']['textWidth'] * n['scaleX'],
                                            x += s[g];
                                    }
                                    for (var k = R['width'] / 2 - x / 2, K = 0; K < R['numChildren']; K++) {
                                        var n = R['getChildAt'](K);
                                        n.x = k,
                                            k += n['textField']['textWidth'] * n['scaleX'] + s[K],
                                            n.y = 'haolong' == n.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var Y = y['actions'][y['actions']['length'] - 1],
                                j = Y.data,
                                F = o,
                                w = o['getChildByName']('line'),
                                T = o['getChildByName']('liuju'),
                                N = o['getChildByName']('win'),
                                O = o['getChildByName']('lose');
                            w['visible'] = !1,
                                T['visible'] = !1,
                                N['visible'] = !1,
                                O['visible'] = !1;
                            var J = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var H = [], e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                    H.push(0);
                                for (var f = !1, i = 0, z = y['actions']; i < z['length']; i++) {
                                    var d = z[i];
                                    if (('RecordHuleXueZhanEnd' == d.name || 'RecordNoTile' == d.name) && (f = d.data['hules_history'] && d.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == d.name || 'RecordHuleXueZhanEnd' == d.name) {
                                        for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                            H[e] += d.data['delta_scores'][e];
                                        f = !0;
                                    } else if ('RecordNoTile' == d.name) {
                                        for (var e = 0; e < d.data['scores']['length']; e++)
                                            if (d.data['scores'][e]['delta_scores'] && d.data['scores'][e]['delta_scores']['length'] > 0)
                                                for (var B = 0; B < view['DesktopMgr'].Inst['player_count']; B++)
                                                    H[B] += d.data['scores'][e]['delta_scores'][B];
                                    } else if ('RecordGangResult' == d.name || 'RecordGangResultEnd' == d.name)
                                        for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                            H[e] += d.data['gang_infos']['delta_scores'][e];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (f = !0), F['height'] = f ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, f) {
                                    J = !1,
                                        N['visible'] = !0;
                                    var p = N['getChildByName']('info');
                                    p['visible'] = !0,
                                        p.text = game['Tools']['strOfLocalization'](3257),
                                        p = O['getChildByName']('chong'),
                                        p['visible'] = !1;
                                    for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++) {
                                        var X = N['getChildByName']('player'),
                                            _ = X['getChildAt'](e);
                                        _['visible'] = !0,
                                            _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](e)['nickname'],
                                            _['getChildByName']('point').text = H[e] >= 0 ? '+' + H[e]['toString']() : H[e]['toString']();
                                    }
                                    for (var P = N['getChildByName']('player'), e = view['DesktopMgr'].Inst['player_count']; e < P['numChildren']; e++)
                                        P['getChildAt'](e)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == Y.name) {
                                if (J) {
                                    for (var v = [], e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                        v.push({
                                            old_score: j['scores'][0]['old_scores'][e],
                                            delta: 0
                                        });
                                    for (var e = 0; e < j['scores']['length']; e++)
                                        for (var B = 0; B < view['DesktopMgr'].Inst['player_count']; B++)
                                            v[B]['delta'] += j['scores'][e]['delta_scores'][B];
                                    for (var I = [], e = 0; e < v['length']; e++)
                                        v[e]['delta'] > 0 && I.push(e);
                                    if (F['height'] = 120 + (0 == I['length'] ? 0 : 40 * (I['length'] - 1)), j['liujumanguan']) {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2170),
                                            p['color'] = '#8d8fac';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            e < I['length'] ? (_['visible'] = !0, _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](I[e])['nickname'], _['getChildByName']('point').text = v[I[e]]['delta'] > 0 ? '+' + v[I[e]]['delta']['toString']() : v[I[e]]['delta']['toString']()) : _['visible'] = !1;
                                        }
                                    } else if (N['visible'] = !0, N['getChildByName']('info').text = '', T['visible'] = !0, T.text = game['Tools']['strOfLocalization'](2171), j['scores'])
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            e < I['length'] ? (_['visible'] = !0, _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](I[e])['nickname'], _['getChildByName']('point').text = v[I[e]]['delta'] > 0 ? '+' + v[I[e]]['delta']['toString']() : v[I[e]]['delta']['toString']()) : _['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == Y.name && J) {
                                var W = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                T['visible'] = !0,
                                    T.text = W[j.type],
                                    F['height'] = 120;
                            } else if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                if (Y.data['hules'][0].zimo) {
                                    N['visible'] = !0;
                                    var p = N['getChildByName']('info');
                                    p.text = game['Tools']['strOfLocalization'](2177),
                                        p['color'] = '#ea3694';
                                    for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                        var _ = P['getChildAt'](e);
                                        if (0 == e) {
                                            _['visible'] = !0;
                                            var a = j['hules'][0].seat;
                                            _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                            var m = j['delta_scores'][a];
                                            _['getChildByName']('point').text = (m > 0 ? '+' : '') + m['toString']();
                                        } else
                                            _['visible'] = !1;
                                    }
                                    F['height'] = 120;
                                } else {
                                    N['visible'] = !0;
                                    var p = N['getChildByName']('info');
                                    p.text = game['Tools']['strOfLocalization'](2178),
                                        p['color'] = '#ef3538';
                                    for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                        var _ = P['getChildAt'](e);
                                        if (e < j['hules']['length']) {
                                            _['visible'] = !0;
                                            var a = j['hules'][e].seat;
                                            _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                            var m = j['delta_scores'][a];
                                            _['getChildByName']('point').text = m > 0 ? '+' + m['toString']() : m['toString']();
                                        } else
                                            _['visible'] = !1;
                                    }
                                    w['visible'] = !0,
                                        w.y = 80 + 40 * j['hules']['length'],
                                        O['visible'] = !0,
                                        O.y = 83 + 40 * j['hules']['length'];
                                    var p = O['getChildByName']('chong');
                                    p['visible'] = !0;
                                    for (var P = O['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                        var _ = P['getChildAt'](e);
                                        if (0 == e) {
                                            _['visible'] = !0;
                                            for (var a = 0, B = 0; B < j['delta_scores']['length']; B++)
                                                if (j['delta_scores'][B] < j['delta_scores'][a])
                                                    a = B;
                                                else if (j['delta_scores'][B] == j['delta_scores'][a])
                                                if (j['baopai'] > 0 && j['baopai_seats'] && j['baopai_seats']['length'] > 0)
                                                    for (var b = 0, D = j['baopai_seats']; b < D['length']; b++) {
                                                        var t = D[b];
                                                        if (t == a) {
                                                            a = B;
                                                            break;
                                                        }
                                                    }
                                                else
                                                    j['baopai'] > 0 && j['baopai'] - 1 == a && (a = B);
                                            _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                            var m = j['delta_scores'][a];
                                            _['getChildByName']('point').text = m['toString']();
                                        } else
                                            _['visible'] = !1;
                                    }
                                    F['height'] = 180 + 40 * (Y.data['hules']['length'] - 1);
                                }
                            F['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    S['locking'] || (G.Inst['jumpRound'](V), S['close']());
                                }, null, !1),
                                o['getChildByName']('bg')['height'] = o['height'] - 4;
                        },
                        S;
                }
                (),
                V = function() {
                    function S(Z) {
                        var S = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = Z,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                S['btn_up']['visible'] = S['scrollview'].rate > 0,
                                    S['btn_down']['visible'] = S['scrollview']['need_scroll'] && S['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return S['prototype'].show = function(S, V) {
                            var o = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = V,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](S + (V ? 1 : 0)),
                                Z['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    o['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S.me['visible'] = !1;
                                }));
                        },
                        S['prototype']['renderInfo'] = function(Z) {
                            var S = this,
                                V = Z['index'],
                                o = Z['container'];
                            o['getChildByName']('num').text = (V + (this['have0'] ? 0 : 1))['toString'](),
                                o['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    S['locking'] || (G.Inst['jumpXun'](V + (S['have0'] ? 0 : 1)), S['close']());
                                }, null, !1);
                            var y = o,
                                e = [];
                            'en' == GameMgr['client_language'] ? (e.push(y['getChildByName']('xun')), e.push(y['getChildByName']('num'))) : (e.push(y['getChildByName']('num')), e.push(y['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](e, 115, [10]);
                            for (var x = 1; x < y['numChildren']; x++) {
                                var R = y['getChildAt'](x);
                                R.y = 'haolong' == R.font ? 42 : 39;
                            }
                        },
                        S;
                }
                (),
                o = function() {
                    function S(S) {
                        var V = this;
                        this.me = S,
                            this._out = this.me['getChildByName']('out'),
                            this._in = this.me['getChildByName']('in'),
                            this._in['visible'] = !1,
                            this['_btn_out'] = this._out['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['switch'](!0);
                            }, null, !1),
                            this['_btn_in'] = this._in['getChildByName']('btn_in'),
                            this['_btn_in']['clickHandler'] = new Laya['Handler'](this, function() {
                                V['switch']();
                            }),
                            this['_choosed_show_hand'] = this._in['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_choosed_show_hand']['visible'] = !V['_choosed_show_hand']['visible'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](V['_choosed_show_hand']['visible']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this._in['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_choosed_show_paopai']['visible'] = !V['_choosed_show_paopai']['visible'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](V['_choosed_show_paopai']['visible']);
                            }, null, !1),
                            this['_choosed_show_anim'] = this._in['getChildByName']('btn_anim')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_anim')['clickHandler'] = new Laya['Handler'](this, function() {
                                V['_choosed_show_anim']['visible'] = !V['_choosed_show_anim']['visible'],
                                    view['DesktopMgr'].Inst['record_show_anim'] = V['_choosed_show_anim']['visible'],
                                    Laya['LocalStorage']['setItem']('record_show_anim', view['DesktopMgr'].Inst['record_show_anim'] ? '1' : '0');
                            }),
                            this['_choosed_hide_name'] = this._in['getChildByName']('btn_hidename')['getChildByName']('choosed'),
                            this['_btn_hide_name'] = this._in['getChildByName']('btn_hidename'),
                            this['_btn_hide_name']['clickHandler'] = new Laya['Handler'](this, function() {
                                V['_choosed_hide_name']['visible'] = !V['_choosed_hide_name']['visible'],
                                    Z['UI_Replay'].Inst['hide_name'] = !V['_choosed_hide_name']['visible'],
                                    Z['UI_DesktopInfo'].Inst['refreshNames']();
                            }),
                            this._out['getChildByName']('label_word')['visible'] = !1,
                            this._out['getChildByName']('img_set')['visible'] = !0;
                    }
                    return S['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this.me.x = -253,
                                this._in['visible'] = !1,
                                this._out['visible'] = !0,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = view['DesktopMgr'].Inst['record_show_hand'],
                                this['_choosed_show_paopai']['visible'] = view['DesktopMgr'].Inst['record_show_paopai'],
                                this['_choosed_show_anim']['visible'] = view['DesktopMgr'].Inst['record_show_anim'],
                                2 & view['DesktopMgr'].Inst['paipu_config'] ? (this['_choosed_hide_name']['visible'] = !1, Z['UI_Replay'].Inst['hide_name'] = !0, game['Tools']['setGrayDisable'](this['_btn_hide_name'], !0)) : (this['_choosed_hide_name']['visible'] = !G.Inst['hide_name'], game['Tools']['setGrayDisable'](this['_btn_hide_name'], !1));
                        },
                        S['prototype']['switch'] = function(Z) {
                            var S = this;
                            void 0 === Z && (Z = !1);
                            var V = Z ? 17 : -253;
                            this['_btn_out']['disabled'] = !0,
                                this['_btn_in']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: -333
                                }, Z ? 60 : 140, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    S._in['visible'] = Z,
                                        S._out['visible'] = !Z,
                                        Laya['Tween'].to(S.me, {
                                            x: V
                                        }, Z ? 140 : 60, Laya.Ease['strongOut'], Laya['Handler']['create'](S, function() {
                                            S['_btn_out']['disabled'] = !1,
                                                S['_btn_in']['disabled'] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        S;
                }
                (),
                y = function() {
                    function S(S) {
                        var V = this;
                        this['tiles'] = [],
                            this['container_input'] = null,
                            this['tile_count'] = 0,
                            this['gray_filter'] = null,
                            this['dora_filter'] = null,
                            this['lidora_filter'] = null,
                            this['tou_infos'] = [],
                            this['noinfo'] = !0,
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = S,
                            this.root = S['getChildByName']('root'),
                            this['content'] = this.root['getChildByName']('content'),
                            this['content']['vScrollBarSkin'] = '';
                        var o = this['content']['getChildByName']('tile_templete');
                        o['visible'] = !1;
                        for (var y = 0; 100 > y; y++) {
                            var G = o['scriptMap']['capsui.UICopy']['getNodeClone']();
                            G['visible'] = !1,
                                this['tiles'].push(G);
                        }
                        this['container_input'] = this['content']['getChildByName']('input'),
                            this['gray_filter'] = new Laya['ColorFilter']([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this['dora_filter'] = new Laya['ColorFilter']([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this['lidora_filter'] = new Laya['ColorFilter']([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this['container_input']['getChildByName']('btn_what')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['locking'] || Z['UI_Info_MD5'].Inst.show();
                            }, null, !1);
                    }
                    return S['prototype']['setTiles'] = function(Z) {
                            var S = Z['indexOf']('t'),
                                V = 0;
                            for (this['tou_infos'] = []; - 1 != S;)
                                this['tou_infos'].push(Math['floor']((S - V) / 2) - 1), V++, S = Z['indexOf']('t', S + 1);
                            var o = Z['replace'](/t/g, '');
                            this['tile_count'] = Math['floor'](o['length'] / 2);
                            for (var y = 'myres2/mjp/' + GameMgr.Inst['touming_mjp_view'] + /ui/, G = 'myres2/mjp/' + GameMgr.Inst['mjp_view'] + /ui/, e = 0, x = 0; 2 * x + 1 < o['length']; x++)
                                this['tou_infos']['length'] > e && x == this['tou_infos'][e] ? (e++, this['tiles'][x].skin = game['Tools']['localUISrc'](y + o['charAt'](2 * x) + o['charAt'](2 * x + 1) + '.png')) : this['tiles'][x].skin = game['Tools']['localUISrc'](G + o['charAt'](2 * x) + o['charAt'](2 * x + 1) + '.png'), this['tiles'][x]['visible'] = !0;
                            for (var x = this['tile_count']; x < this['tiles']['length']; x++)
                                this['tiles'][x]['visible'] = !1;
                            this['noinfo'] = !1,
                                this['container_input']['getChildByName']('txtinput').text = Z;
                        },
                        S['prototype']['refresh'] = function() {
                            this.me['visible'] && (this['noinfo'] || this['setInfo']());
                        },
                        S['prototype']['setInfo'] = function() {
                            if (!this['noinfo']) {
                                var S = view['DesktopMgr'].Inst['left_tile_count'],
                                    V = view['DesktopMgr'].Inst.dora['length'];
                                view['DesktopMgr'].Inst['is_zhanxing_mode']() && (S -= Z['UI_Astrology'].Inst['getTileCount']());
                                var o = view['DesktopMgr'].Inst['get_gang_count'](),
                                    y = view['DesktopMgr'].Inst['get_babei_count'](),
                                    G = o + y;
                                G > 0 && view['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] && G--;
                                var e = 14;
                                view['DesktopMgr'].Inst['is_chuanma_mode']() && (G = 0, e = 0);
                                var x = this['tile_count'] - G - e;
                                0 > x && (x = 0);
                                for (var R = this['tiles'][0]['width'], s = this['tiles'][0]['height'] + 10, u = 0; x > u; u++) {
                                    var n = 0;
                                    view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? n = u % 12 * R + 5 * Math['floor'](u % 12 / 3) : n += 2 + u % 12 * R + 5 * Math['floor'](u % 12 / 4),
                                        this['tiles'][u].x = n,
                                        this['tiles'][u].y = Math['floor'](u / 12) * s,
                                        this['tiles'][u]['filters'] = S >= x - u ? [] : [this['gray_filter']];
                                }
                                for (var k = Math.ceil(x / 12) * s + 20, u = x; u < this['tile_count']; u++) {
                                    var r = this['tiles'][u];
                                    r.x = (u - x) % 12 * R,
                                        r.y = Math['floor']((u - x) / 12) * s + k,
                                        r['filters'] = [];
                                }
                                for (var M = view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? 8 : 4, u = 0; V > u; u++)
                                    this['tiles'][this['tile_count'] - M - 1 - 2 * u]['filters'] = [this['dora_filter']], this['tiles'][this['tile_count'] - M - 2 - 2 * u]['filters'] = [this['lidora_filter']];
                                for (var u = 0; G > u; u++)
                                    this['tiles'][this['tile_count'] - 1 - u]['filters'] = [this['gray_filter']];
                                k += Math.ceil((this['tile_count'] - x) / 12) * s,
                                    this['container_input'].y = k + 80,
                                    this['content']['refresh']();
                            }
                        },
                        S['prototype']['setNoInfo'] = function() {
                            this['noinfo'] = !0;
                        },
                        S['prototype'].show = function() {
                            var S = this;
                            if (!this['locking']) {
                                if (this['noinfo'])
                                    return Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2179)), void 0;
                                this['locking'] = !0,
                                    this.me['visible'] = !0,
                                    this['refresh'](),
                                    Z['UIBase']['anim_alpha_in'](this.me, {
                                        y: 30
                                    }, 120, 0, Laya['Handler']['create'](this, function() {
                                        S['locking'] = !1;
                                    }));
                            }
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['locking'] || (this['locking'] = !0, Z['UIBase']['anim_alpha_out'](this.me, {
                                y: 30
                            }, 120, 0, Laya['Handler']['create'](this, function() {
                                S['locking'] = !1,
                                    S.me['visible'] = !1;
                            })));
                        },
                        S;
                }
                (),
                G = function(G) {
                    function e() {
                        var Z = G.call(this, new ui.mj['replayUI']()) || this;
                        return Z['label_chang'] = null,
                            Z['label_ju'] = null,
                            Z['label_xun'] = null,
                            Z['img_play'] = null,
                            Z['img_stop'] = null,
                            Z['btn_preround'] = null,
                            Z['btn_nextround'] = null,
                            Z['page_chang'] = null,
                            Z['page_xun'] = null,
                            Z['btn_change_score'] = null,
                            Z['paipuconfig'] = null,
                            Z['page_paishan'] = null,
                            Z['pop_collectinput'] = null,
                            Z.data = null,
                            Z['gameResult'] = null,
                            Z['rounds'] = [],
                            Z['round_index'] = 0,
                            Z['action_index'] = 0,
                            Z['locking_time'] = 0,
                            Z['_auto_play'] = !1,
                            Z['hide_name'] = !1,
                            e.Inst = Z,
                            Z;
                    }
                    return __extends(e, G),
                        Object['defineProperty'](e['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(Z) {
                                this['_auto_play'] = Z,
                                    this['img_play']['visible'] = !Z,
                                    this['img_stop']['visible'] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e['prototype']['onCreate'] = function() {
                            var G = this,
                                e = this.me['getChildByName']('root')['getChildByName']('round');
                            e['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['page_chang']['locking'] || (G['auto_play'] && (G['auto_play'] = !1), G['page_xun']['enable'] && G['page_xun']['close'](), G['page_paishan'].me['visible'] && G['page_paishan']['close'](), G['page_chang']['enable'] ? G['page_chang']['close']() : G['page_chang'].show(G['rounds']));
                                }, null, !1),
                                this['label_chang'] = e['getChildByName']('chang'),
                                this['label_ju'] = e['getChildByName']('ju');
                            var x = this.me['getChildByName']('root')['getChildByName']('turn');
                            'kr' == GameMgr['client_language'] && (x['getChildAt'](0)['width'] = 142, x['getChildAt'](0).x -= 1),
                                this['label_xun'] = x['getChildByName']('xun'),
                                x['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['page_xun']['locking'] || (G['auto_play'] && (G['auto_play'] = !1), G['page_chang']['enable'] && G['page_chang']['close'](), G['page_paishan'].me['visible'] && G['page_paishan']['close'](), G['page_xun']['enable'] ? G['page_xun']['close']() : G['page_xun'].show(G['rounds'][G['round_index']].xun['length'], 0 != G['rounds'][G['round_index']].xun[0]));
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('paishan')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['page_paishan']['locking'] || (G['auto_play'] && (G['auto_play'] = !1), G['page_chang']['enable'] && G['page_chang']['close'](), G['page_xun']['enable'] && G['page_xun']['close'](), G['page_paishan'].me['visible'] ? G['page_paishan']['close']() : G['page_paishan'].show());
                                }, null, !1),
                                this['page_chang'] = new S(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new V(this.me['getChildByName']('info_xun')),
                                this['page_paishan'] = new y(this.me['getChildByName']('info_paishan')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['auto_play'] = !G['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return G['locking_time'] > Laya['timer']['currTimer'] ? (G['auto_play'] && (G['auto_play'] = !1), void 0) : (G['nextStep'](), (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextStep"
                                            }));
                                        }
                                    })), void 0);
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause'),
                                this['btn_change_score'] = this.me['getChildByName']('btn_change_score'),
                                this['btn_change_score']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['UI_DesktopInfo'].Inst['onBtnShowScoreDelta']();
                                }, null, !1),
                                this['paipuconfig'] = new o(this.me['getChildByName']('config')),
                                this['pop_collectinput'] = new Z['UI_Pop_CollectInput'](this.me['getChildByName']('pop_collect'));
                        },
                        e['prototype']['onEnable'] = function() {
                            this['paipuconfig']['reset'](),
                                Z['UI_ReplayWheel'].Inst['enable'] = !0;
                        },
                        e['prototype']['onDisable'] = function() {
                            Z['UI_ReplayWheel'].Inst['enable'] = !1;
                        },
                        e['prototype']['_isRoundEnd'] = function(Z) {
                            return 'RecordNoTile' == Z || 'RecordLiuJu' == Z || 'RecordHule' == Z || 'RecordHuleXueZhanEnd' == Z || 'RecordGangResultEnd' == Z;
                        },
                        e['prototype']['initData'] = function(Z) {
                            this.data = Z;
                            var S = Z.game,
                                V = Z['record'],
                                o = null,
                                y = 0;
                            if (this['rounds'] = [], S['actions'] && S['actions']['length'] > 0) {
                                var actions = [];
                                for (var G = 0; G < S['actions']['length']; G++) {
                                    var e = S['actions'][G];
                                    if (1 == e.type) {
                                        y += e['result']['length'];
                                        var x = net['MessageWrapper']['decodeMessage'](e['result']),
                                            R = x['$type'].name,
                                            s = {
                                                name: R,
                                                data: x
                                            };
                                        actions.push(s);
                                        null == o && (o = {
                                                xun: [],
                                                actions: []
                                            }),
                                            o['actions'].push(s),
                                            this['_isRoundEnd'](R) && (this['pengding_xun'](o), this['rounds'].push(o), o = null);
                                    }
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_actions': actions
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_actions': actions
                                        }));
                                    }
                                }));
                            } else
                                for (var G = 0; G < S['records']['length']; G++) {
                                    y += S['records'][G]['length'];
                                    var x = net['MessageWrapper']['decodeMessage'](S['records'][G]),
                                        R = x['$type'].name,
                                        s = {
                                            name: R,
                                            data: x
                                        };
                                    null == o && (o = {
                                            xun: [],
                                            actions: []
                                        }),
                                        o['actions'].push(s),
                                        this['_isRoundEnd'](R) && (this['pengding_xun'](o), this['rounds'].push(o), o = null);
                                }
                            null != o && app.Log['Error']('最后一份牌谱没有结束'),
                                this['gameResult'] = V,
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var u = [];
                            'en' != GameMgr['client_language'] ? (u.push(this['label_xun']['parent']['getChildByName']('xun')), u.push(this['label_xun']['parent']['getChildByName']('turn'))) : (u.push(this['label_xun']['parent']['getChildByName']('turn')), u.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](u, 80, [5]),
                                app.Log.log('牌谱大小：' + y + 'B');
                        },
                        e['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['page_paishan'].me['visible'] && (this['page_paishan'].me['visible'] = !1);
                        },
                        e['prototype']['onBack'] = function() {
                            this['locking_time'] = 0,
                                this['enable'] = !0,
                                this['_jumpStep'](this['round_index'], this['rounds'][this['round_index']]['actions']['length'] - 2);
                        },
                        e['prototype']['pengding_xun'] = function(Z) {
                            Z.xun = [];
                            for (var S = view['DesktopMgr'].Inst.seat, V = !1, o = 0; o < Z['actions']['length']; o++) {
                                var y = Z['actions'][o];
                                'RecordNewRound' == y.name ? y.data.ju == S && (V = !0, Z.xun.push(o)) : 'RecordDealTile' == y.name || 'RecordChiPengGang' == y.name || 'RecordHuleXueZhanMid' == y.name ? y.data.seat == S && (V || (V = !0, Z.xun.push(o))) : ('RecordDiscardTile' == y.name || 'RecordRevealTile' == y.name || 'RecordAnGangAddGang' == y.name || 'RecordBaBei' == y.name) && (V = !1);
                            }
                        },
                        e['prototype']['get_currentxun'] = function() {
                            var Z = this['rounds'][this['round_index']];
                            if (0 == Z.xun['length'])
                                return 1;
                            for (var S = Z.xun['length'], V = 0; V < Z.xun['length']; V++)
                                if (this['action_index'] < Z.xun[V]) {
                                    S = V;
                                    break;
                                }
                            return 0 > S && (S = 0),
                                S;
                        },
                        e['prototype']['nextStep'] = function(S, V) {
                            if (void 0 === S && (S = !1), void 0 === V && (V = !1), !(!S && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] > this['rounds']['length'])) {
                                if (this['round_index'] == this['rounds']['length'] && (this['round_index'] = -1), this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1) {
                                    if (this['round_index'] + 1 >= this['rounds']['length'])
                                        return view['DesktopMgr'].Inst['gameEndResult'] = this['gameResult']['result'], this['enable'] = !1, Z['UIMgr'].Inst['ShowGameEnd'](), this['action_index']--, void 0;
                                    this['round_index']++,
                                        this['action_index'] = 0;
                                } else
                                    this['action_index']++;
                                if (this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name)) {
                                    var o = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    o != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](o)]['RecordLiPai'](0, !S && view['DesktopMgr'].Inst['record_show_anim'] && !(view['DesktopMgr'].Inst['is_jiuchao_mode']() || view['DesktopMgr'].Inst['is_open_hand']() || view['DesktopMgr'].Inst['record_show_hand']));
                                }
                                var y = this['rounds'][this['round_index']]['actions'][this['action_index']];
                                view['DesktopMgr'].Inst['record_show_anim'] || this['_isRoundEnd'](y.name) ? this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](y) : (this['doFastRecord'](y), this['locking_time'] = Laya['timer']['currTimer'] + (V ? 200 : 0)),
                                    'RecordNewCard' == y.name && this['nextStep'](!0),
                                    this['_refreshBarshow']();
                            }
                        },
                        e['prototype']['_refreshBarshow'] = function() {
                            var Z = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? Z = 'Round' : Z += '第', this['label_chang'].text = Z, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '东';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '東';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '동';
                                            break;
                                        case 1:
                                            Z += '남';
                                            break;
                                        case 2:
                                            Z += '서';
                                            break;
                                        case 3:
                                            Z += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += 'East';
                                            break;
                                        case 1:
                                            Z += 'South';
                                            break;
                                        case 2:
                                            Z += 'West';
                                            break;
                                        case 3:
                                            Z += 'North';
                                    }
                                this['label_chang'].text = Z,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var S = function(Z, S) {
                                for (var V = 0, o = 1; o < Z['numChildren']; o++) {
                                    1 != o && (V += 3);
                                    var y = Z['getChildAt'](o);
                                    V += y['textField']['textWidth'] * y['scaleX'];
                                }
                                for (var G = Z['width'] / 2 - V / 2, o = 1; o < Z['numChildren']; o++) {
                                    var y = Z['getChildAt'](o);
                                    y.x = G,
                                        G += y['textField']['textWidth'] * y['scaleX'] + 3,
                                        y.y = 'haolong' == y.font ? S + 3 : S;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var V = [];
                            'en' != GameMgr['client_language'] ? (V.push(this['label_xun']['parent']['getChildByName']('xun')), V.push(this['label_xun']['parent']['getChildByName']('turn'))) : (V.push(this['label_xun']['parent']['getChildByName']('turn')), V.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](V, 80, [5]),
                                S(this['label_chang']['parent'], 40);
                        },
                        e['prototype']['_get_autoplay_delay'] = function(Z) {
                            switch (Z.name) {
                                case 'RecordNewCard':
                                    return 0;
                                case 'RecordNewRound':
                                    return 0;
                                case 'RecordChangeTile':
                                    return 500;
                                case 'RecordDiscardTile':
                                    return 500;
                                case 'RecordDealTile':
                                    return 500;
                                case 'RecordChiPengGang':
                                    return 500;
                                case 'RecordAnGangAddGang':
                                    return 200;
                                case 'RecordBaBei':
                                    return 200;
                                case 'RecordHuleXueZhanMid':
                                    return 500;
                                case 'RecordRevealTile':
                                    return 500;
                                case 'RecordUnveilTile':
                                    return 500;
                                case 'RecordLockTile':
                                    return 1000;
                            }
                            return 0;
                        },
                        e['prototype']['doRecord'] = function(Z) {
                            try {
                                var S = 0;
                                switch (Z.name) {
                                    case 'RecordNewRound':
                                        S = view['ActionNewRound']['record'](Z.data);
                                        break;
                                    case 'RecordChangeTile':
                                        S = view['ActionChangeTile']['record'](Z.data);
                                        break;
                                    case 'RecordSelectGap':
                                        S = view['ActionSelectGap']['record'](Z.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        S = view['ActionDiscardTile']['record'](Z.data);
                                        break;
                                    case 'RecordDealTile':
                                        S = view['ActionDealTile']['record'](Z.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        S = view['ActionChiPengGang']['record'](Z.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        S = view['ActionAnGangAddGang']['record'](Z.data);
                                        break;
                                    case 'RecordBaBei':
                                        S = view['ActionBabei']['record'](Z.data);
                                        break;
                                    case 'RecordHule':
                                        S = view['ActionHule']['record'](Z.data);
                                        break;
                                    case 'RecordLiuJu':
                                        S = view['ActionLiuJu']['record'](Z.data);
                                        break;
                                    case 'RecordNoTile':
                                        S = view['ActionNoTile']['record'](Z.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        S = view['ActionHuleXueZhanMid']['record'](Z.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        S = view['ActionHuleXueZhanEnd']['record'](Z.data);
                                        break;
                                    case 'RecordGangResult':
                                        S = view['ActionGangResult']['record'](Z.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        S = view['ActionGangResultEnd']['record'](Z.data);
                                        break;
                                    case 'RecordRevealTile':
                                        S = view['ActionRevealTile']['record'](Z.data);
                                        break;
                                    case 'RecordLockTile':
                                        S = view['ActionLockTile']['record'](Z.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        S = view['ActionUnveilTile']['record'](Z.data);
                                        break;
                                    case 'RecordNewCard':
                                        S = view['ActionNewCard']['record'](Z.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        S = view['ActionFillAwaitingTiles']['record'](Z.data);
                                }
                                return this['auto_play'] && (S += this['_get_autoplay_delay'](Z)),
                                    ('RecordNewRound' == Z.name || 'RecordDealTile' == Z.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == Z.name || 'RecordFillAwaitingTiles' == Z.name) && this['page_paishan']['refresh'](),
                                    S;
                            } catch (V) {
                                var o = {};
                                return o['error'] = V['message'],
                                    o['stack'] = V['stack'],
                                    o['method'] = 'ui_replay doRecord',
                                    o.name = Z.name,
                                    o.data = Z.data,
                                    GameMgr.Inst['onFatalError'](o),
                                    1000000;
                            }
                        },
                        e['prototype']['doFastRecord'] = function(Z) {
                            try {
                                switch (Z.name) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordSelectGap':
                                        view['ActionSelectGap']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordGangResult':
                                        view['ActionGangResult']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        view['ActionGangResultEnd']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](Z.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](Z.data);
                                }
                                ('RecordNewRound' == Z.name || 'RecordDealTile' == Z.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == Z.name || 'RecordFillAwaitingTiles' == Z.name) && this['page_paishan']['refresh']();
                            } catch (S) {
                                var V = {};
                                return V['error'] = S['message'],
                                    V['stack'] = S['stack'],
                                    V['method'] = 'ui_replay doRecord',
                                    V.name = Z.name,
                                    V.data = Z.data,
                                    GameMgr.Inst['onFatalError'](V),
                                    1000000;
                            }
                            return 0;
                        },
                        e['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](!1, !0), (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'record_click_action': "update"
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'record_click_action': "update"
                                    }));
                                }
                            })));
                        },
                        e['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var Z = this['rounds'][this['round_index']],
                                S = Z['actions']['length'] - 3;
                            1 > S && (S = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': S - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': S - 1
                                        }));
                                    }
                                }));
                            this['_jumpStep'](this['round_index'], S);
                        },
                        e['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                if (this['action_index'] == Z['actions']['length'] - 1)
                                    return this['nextStep'](), void 0;
                                var S = 0;
                                if (0 == Z.xun['length'])
                                    S = Z['actions']['length'] - 1;
                                else if (Z.xun[0] > this['action_index'])
                                    S = Z.xun[0];
                                else {
                                    var V = this['get_currentxun']();
                                    S = V == Z.xun['length'] ? Z['actions']['length'] - 1 : Z.xun[V];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': S - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': S - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], S);
                            }
                        },
                        e['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == Z['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var S = 0;
                                if (0 == Z.xun['length'])
                                    S = 0;
                                else if (Z.xun[0] > this['action_index'])
                                    S = 0;
                                else {
                                    var V = this['get_currentxun']() - 1;
                                    S = 0 == V ? 0 : Z.xun[V - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': S - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': S - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], S);
                            }
                        },
                        e['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == Z['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : ((GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preStep",
                                        'fast_record_to': this.action_index - 2
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }));
                                    }
                                })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0);
                            }
                        },
                        e['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : ((GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextRound"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }));
                                    }
                                })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        e['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preRound"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preRound"
                                        }));
                                    }
                                })),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        e['prototype']['jumpRound'] = function(Z) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > Z || Z >= this['rounds']['length'] || (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpRound",
                                        'record_click_action_index': Z
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Z
                                        }));
                                    }
                                })) || this['_jumpStep'](Z, 0), void 0);
                        },
                        e['prototype']['jumpXun'] = function(Z) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var S = this['rounds'][this['round_index']],
                                    V = 0;
                                V = 0 == S.xun['length'] ? 0 : 0 == Z ? 0 : S.xun[Z - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': V - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': V - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], V);
                            }
                        },
                        e['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : ((GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'record_click_action': "nextStep"
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }));
                                }
                            })), this['nextStep'](), void 0);
                        },
                        e['prototype']['onChangeMainBody'] = function() {
                            var Z = this['round_index'],
                                S = this['action_index'];
                            this['initData'](this.data),
                                this['reset'](),
                                Z >= this['rounds']['length'] || 0 > Z || this['_jumpStep'](Z, S);
                        },
                        e['prototype']['_jumpStep'] = function(Z, S) {
                            var V = this['rounds'][Z];
                            this['round_index'] = Z,
                                V['actions'][S] && V['actions'][S + 1] && 'RecordNewCard' == V['actions'][S].name && S++;
                            for (var o = 0; S > o; o++) {
                                if (o > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][o - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][o - 1].name)) {
                                    var y = this['rounds'][this['round_index']]['actions'][o - 1].data.seat;
                                    y != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](y)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](V['actions'][o]);
                            }
                            if (S == V['actions']['length'] - 1)
                                this['action_index'] = S - 1, this['nextStep']();
                            else {
                                if (S > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][S - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][S - 1].name)) {
                                    var y = this['rounds'][this['round_index']]['actions'][S - 1].data.seat;
                                    y != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](y)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](V['actions'][S]),
                                    this['action_index'] = S,
                                    this['_refreshBarshow']();
                            }
                        },
                        e['prototype']['_lipai_all'] = function() {
                            for (var Z = 1; Z < view['DesktopMgr'].Inst['players']['length']; Z++)
                                view['DesktopMgr'].Inst['players'][Z]['RecordLiPai'](0);
                        },
                        e.Inst = null,
                        e;
                }
                (Z['UIBase']);
            Z['UI_Replay'] = G;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this,
                                o = Z['DesktopMgr'].Inst.mode == Z['EMJMode'].play || Z['DesktopMgr'].Inst['record_show_anim'];
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                void 0 != S['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting']),
                                Laya['timer'].once(100, this, function() {
                                    var y = S['hules'],
                                        G = 0;
                                    if (y[0].zimo) {
                                        var e = y[0].seat;
                                        Z['DesktopMgr'].Inst['setTingpai'](e, []),
                                            o && uiscript['UI_Huleshow'].Inst['showZimo']([Z['DesktopMgr'].Inst['seat2LocalPosition'](e)]),
                                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            G += o ? 1200 : 200,
                                            Laya['timer'].once(G, V, function() {
                                                var S = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](e)];
                                                S['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](y[0]['hu_tile']), !1);
                                            });
                                    } else {
                                        for (var x = 0, R = -1, s = [], u = 0; u < y['length']; u++) {
                                            var n = y[u].seat;
                                            Z['DesktopMgr'].Inst['setTingpai'](n, []),
                                                s.push(Z['DesktopMgr'].Inst['seat2LocalPosition'](n)), -1 == R && (R = n);
                                        }
                                        R >= 0 && (x = Z['DesktopMgr'].Inst['player_effects'][R][game['EView']['hupai_effect']]),
                                            o && uiscript['UI_Huleshow'].Inst['showRong'](s),
                                            G += o ? 1200 : 200,
                                            Laya['timer'].once(G, V, function() {
                                                for (var S = 0; S < y['length']; S++) {
                                                    var V = y[S].seat;
                                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](y[S]['hu_tile']), !1);
                                                }
                                                Z['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                    Z['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                    Z['DesktopMgr'].Inst['ShowHuleEffect'](Z['DesktopMgr'].Inst['lastqipai'], Z['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], x, Z['DesktopMgr'].Inst['lastpai_seat'], Z['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            });
                                    }
                                    G += 2000,
                                        Laya['timer'].once(G, V, function() {
                                            for (var o = 0, G = Z['DesktopMgr'].Inst['players']; o < G['length']; o++) {
                                                var e = G[o];
                                                e['hideLiqi']();
                                            }
                                            S.liqi ? Laya['timer'].once(2500, V, function() {
                                                Z['ActionLiqi'].play(S.liqi);
                                            }) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0);
                                            for (var x = [], R = 0; R < S['delta_scores']['length']; R++) {
                                                var s = {
                                                    title_id: 0,
                                                    score: 0,
                                                    delta: 0
                                                };
                                                if (S['delta_scores'][R] > 0) {
                                                    R == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                                        uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_7', -1),
                                                        s['delta'] = S['delta_scores'][R];
                                                    for (var u = 0, n = y; u < n['length']; u++) {
                                                        var k = n[u];
                                                        if (k.seat == R) {
                                                            s['title_id'] = k['title_id'];
                                                            break;
                                                        }
                                                    }
                                                } else
                                                    S['delta_scores'][R] < 0 && (s['delta'] = S['delta_scores'][R], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_8', -1));
                                                s['score'] = S['old_scores'][R],
                                                    x.push(s);
                                            }
                                            Laya['timer'].once(200, V, function() {
                                                    Z['DesktopMgr'].Inst['setScores'](S['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](x);
                                        }),
                                        G += 3000,
                                        Laya['timer'].once(G, V, function() {
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](S)),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var V = S['hules'];
                            if (void 0 != S['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting']), V[0].zimo) {
                                var o = V[0].seat;
                                Z['DesktopMgr'].Inst['setTingpai'](o, []);
                                var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                                y['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](V[0]['hu_tile']), !0),
                                    o == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                            } else {
                                for (var o = -1, G = [], e = 0; e < V['length']; e++) {
                                    var x = V[e].seat;
                                    o == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                        Z['DesktopMgr'].Inst['setTingpai'](x, []),
                                        G.push(Z['DesktopMgr'].Inst['seat2LocalPosition'](x)), -1 == o && (o = x);
                                }
                                for (var e = 0; e < V['length']; e++) {
                                    var x = V[e].seat;
                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](x)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](V[e]['hu_tile']), !0);
                                }
                                Z['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                    Z['DesktopMgr'].Inst['lastqipai']['OnChoosedPai']();
                            }
                            for (var R = 0, s = Z['DesktopMgr'].Inst['players']; R < s['length']; R++) {
                                var y = s[R];
                                y['hideLiqi']();
                            }
                            S.liqi ? Z['ActionLiqi']['fastplay'](S.liqi, 0) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']);
                        },
                        V['record'] = function(Z) {
                            return this.play(Z),
                                6000;
                        },
                        V['fastrecord'] = function(S) {
                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                this['fastplay'](S, 1000);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionHuleXueZhanMid'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            for (var V = 0, o = S['gang_infos'], y = !1, G = [], e = 0; e < o['delta_scores']['length']; e++) {
                                var x = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                o['delta_scores'][e] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_7', -1), x['delta'] = o['delta_scores'][e], y = !0) : o['delta_scores'][e] < 0 && (x['delta'] = o['delta_scores'][e], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_8', -1), y = !0),
                                    x['score'] = o['old_scores'][e],
                                    G.push(x);
                            }
                            y && (Laya['timer'].once(200, this, function() {
                                    Z['DesktopMgr'].Inst['setScores'](o['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](G), V += 2000),
                                Z['DesktopMgr'].Inst['mainrole']['revertAllPais'](),
                                Laya['timer'].once(V, this, function() {
                                    Z['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](S));
                            var V = S['gang_infos'];
                            Z['DesktopMgr'].Inst['setScores'](V['scores']);
                        },
                        V['record'] = function(Z) {
                            return this.play(Z),
                                2000;
                        },
                        V['fastrecord'] = function(Z) {
                            this['fastplay'](Z, 1000);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionGangResult'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionRevealTile play data:' + JSON['stringify'](S));
                            var V = S.seat,
                                o = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z'),
                                y = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']);
                            if (Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['AddQiPai'](o, y, S['moqie'], !0, V == Z['DesktopMgr'].Inst.seat ? Z['ERevealState'].self : Z['ERevealState']['reveal']), y) {
                                S['is_wliqi'] ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['PlaySound']('act_drich_anpai') : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['PlaySound']('act_rich_anpai');
                                var G = Z['DesktopMgr'].Inst['player_effects'][V][game['EView']['lizhi_bgm']];
                                if (G && 0 != G) {
                                    var e = cfg['item_definition'].item.get(G)['sargs'][0];
                                    Z['AudioMgr']['lizhiMuted'] ? Z['AudioMgr']['PlayLiqiBgm'](e, 300, !0) : (Z['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        Z['DesktopMgr'].Inst['gameing'] && (Z['BgmListMgr']['PlayMJBgm']('', !0), Z['AudioMgr']['PlayLiqiBgm'](e, 300, !0));
                                    }));
                                }
                            }
                            V == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](o, !1, !1, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['onDiscardTile'](S['moqie'], S.tile, !1, !1),
                                S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !1),
                                Laya['timer'].once(500, this, function() {
                                    y ? Z['DesktopMgr'].Inst['clearMindVoice']() : Z['DesktopMgr'].Inst['playMindVoice']();
                                }),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                Z['DesktopMgr'].Inst['onRevealStateChange'](V, !0);
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionRevealTile fastplay data:' + JSON['stringify'](S) + ' usetime:' + V);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z'),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']);
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie'], !1, o == Z['DesktopMgr'].Inst.seat ? Z['ERevealState'].self : Z['ERevealState']['reveal']),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, !1, !0, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['onDiscardTile'](S['moqie'], S.tile, !1, !0),
                                S['operation'] && -1 != V && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !0),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1),
                                Z['DesktopMgr'].Inst['onRevealStateChange'](o, !0);
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionRevealTile record data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']),
                                e = Z['DesktopMgr'].Inst['record_show_hand'] || o == Z['DesktopMgr'].Inst.seat ? Z['ERevealState'].self : Z['ERevealState']['reveal'];
                            if (Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie'], !0, e), G && (S['is_wliqi'] ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['PlaySound']('act_drich_anpai') : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['PlaySound']('act_rich_anpai'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](o, 'emoji_9', 2000)), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, !1, !1, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordDiscardTile'](y, S['moqie'], !1, !1), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            return Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                Z['DesktopMgr'].Inst['onRevealStateChange'](o, !0),
                                1000;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionRevealTile fastrecord data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile ? S.tile : '5z'),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']),
                                e = Z['DesktopMgr'].Inst['record_show_hand'] || o == Z['DesktopMgr'].Inst.seat ? Z['ERevealState'].self : Z['ERevealState']['reveal'];
                            if (Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie'], !1, e), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, !1, !0, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordDiscardTile'](y, S['moqie'], !1, !0), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1),
                                Z['DesktopMgr'].Inst['onRevealStateChange'](o, !0);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionRevealTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this;
                            app.Log.log('ActionChangeTile play data:' + JSON['stringify'](S));
                            for (var o = function(V) {
                                    var o = Z['DesktopMgr'].Inst['players'][V],
                                        G = [];
                                    if (0 == V) {
                                        o['onHuanSanZhang_Remove'](S['out_tiles'], S['out_tile_states'], !1);
                                        for (var e = 0; 3 > e; e++)
                                            G.push(mjcore['MJPai']['Create'](S['out_tiles'][e]));
                                    } else {
                                        o['onHuanSanZhang_Remove']();
                                        for (var e = 0; 3 > e; e++)
                                            G.push(mjcore['MJPai']['Create']('5z'));
                                    }
                                    o['ShowHuanSanZhang'](G, S['change_type']),
                                        Laya['timer'].once(2500, y, function() {
                                            0 == V ? o['onHuanSanZhang_Add'](S['in_tiles'], S['in_tile_states'], !1) : o['onHuanSanZhang_Add']();
                                        });
                                }, y = this, G = 0; G < Z['DesktopMgr'].Inst['players']['length']; G++) o(G);
                            uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(S['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    Z['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, V, function() {
                                            if (S['doras'] && S['doras']['length'] > 0)
                                                for (var V = 0; V < S['doras']['length']; V++)
                                                    Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][V])), uiscript['UI_DesktopInfo'].Inst['setDora'](V, Z['DesktopMgr'].Inst.dora[V]);
                                            for (var V = 0; 4 > V; V++)
                                                Z['DesktopMgr'].Inst['players'][V]['OnDoraRefresh']();
                                            if (Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                                var o = {
                                                    tingpais: S['tingpais0'],
                                                    operation: S['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](o);
                                            } else {
                                                var o = {
                                                    tingpais: S['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](o, !1);
                                            }
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != S['operation'] && Z['ActionOperation'].play(S['operation']);
                                });
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](S));
                            for (var o = 0; o < Z['DesktopMgr'].Inst['players']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][o];
                                0 == o ? (y['onHuanSanZhang_Remove'](S['out_tiles'], S['out_tile_states'], !0), y['onHuanSanZhang_Add'](S['in_tiles'], S['in_tile_states'], !0)) : (y['onHuanSanZhang_Add'](), y['onHuanSanZhang_Remove']());
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), S['doras'] && S['doras']['length'] > 0)
                                for (var o = 0; o < S['doras']['length']; o++)
                                    Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][o])), uiscript['UI_DesktopInfo'].Inst['setDora'](o, Z['DesktopMgr'].Inst.dora[o]);
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['OnDoraRefresh']();
                            if (Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                var G = {
                                    tingpais: S['tingpais0'],
                                    operation: S['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](G);
                            } else {
                                var G = {
                                    tingpais: S['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](G, !1);
                            }
                            S['operation'] && -1 != V && Laya['timer'].once(100, this, function() {
                                Z['ActionOperation'].play(S['operation'], V + 100);
                            });
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](S));
                            for (var o = function(V) {
                                    var o = Z['DesktopMgr'].Inst['players'][V],
                                        G = S['change_tile_infos'][Z['DesktopMgr'].Inst['localPosition2Seat'](V)];
                                    0 == V ? o['onHuanSanZhang_Remove'](G['out_tiles'], G['out_tile_states'], !1) : o['recordHuanSanZhang_Remove'](G['out_tiles'], G['out_tile_states']);
                                    for (var e = [], x = 0; 3 > x; x++)
                                        e.push(mjcore['MJPai']['Create'](G['out_tiles'][x]));
                                    o['ShowHuanSanZhang'](e, S['change_type']),
                                        Laya['timer'].once(2500, y, function() {
                                            0 == V ? o['onHuanSanZhang_Add'](G['in_tiles'], G['in_tile_states'], !1) : o['recordHuanSanZhang_Add'](G['in_tiles'], G['in_tile_states']);
                                        });
                                }, y = this, G = 0; G < Z['DesktopMgr'].Inst['players']['length']; G++) o(G);
                            return uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(S['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    if (Z['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        var o = S['operations'][Z['DesktopMgr'].Inst['localPosition2Seat'](Z['DesktopMgr'].Inst.seat)];
                                        Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && o && Z['ActionOperation'].ob(o, V, 1000);
                                    } else {
                                        if (S['doras'] && S['doras']['length'] > 0)
                                            for (var y = 0; y < S['doras']['length']; y++)
                                                Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][y])), uiscript['UI_DesktopInfo'].Inst['setDora'](y, Z['DesktopMgr'].Inst.dora[y]);
                                        else
                                            S.dora && '' != S.dora && (Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, Z['DesktopMgr'].Inst.dora[0]));
                                        for (var y = 0; 4 > y; y++)
                                            Z['DesktopMgr'].Inst['players'][y]['OnDoraRefresh']();
                                        if (S['tingpai'])
                                            for (var y = 0; y < S['tingpai']['length']; y++)
                                                S['tingpai'][y].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][y].seat, S['tingpai'][y]['tingpais1']);
                                        Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                                    }
                                }),
                                3000;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1);
                            for (var o = 0; o < Z['DesktopMgr'].Inst['players']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][o],
                                    G = S['change_tile_infos'][Z['DesktopMgr'].Inst['localPosition2Seat'](o)];
                                0 == o ? (y['onHuanSanZhang_Remove'](G['out_tiles'], G['out_tile_states'], !0), y['onHuanSanZhang_Add'](G['in_tiles'], G['in_tile_states'], !0)) : (y['recordHuanSanZhang_Remove'](G['out_tiles'], G['out_tile_states']), y['recordHuanSanZhang_Add'](G['in_tiles'], G['in_tile_states']));
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), S['doras'] && S['doras']['length'] > 0)
                                for (var o = 0; o < S['doras']['length']; o++)
                                    Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][o])), uiscript['UI_DesktopInfo'].Inst['setDora'](o, Z['DesktopMgr'].Inst.dora[o]);
                            else
                                S.dora && '' != S.dora && (Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, Z['DesktopMgr'].Inst.dora[0]));
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['OnDoraRefresh']();
                            if (S['tingpai'])
                                for (var o = 0; o < S['tingpai']['length']; o++)
                                    S['tingpai'][o].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][o].seat, S['tingpai'][o]['tingpais1']);
                            Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionChangeTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this;
                            app.Log.log('ActionSelectGap play data:' + JSON['stringify'](S));
                            for (var o = 0; o < S['gap_types']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                                y['SetGapType'](S['gap_types'][o]);
                            }
                            uiscript['UI_DesktopInfo'].Inst['setGapType'](S['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    Z['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, V, function() {
                                            if (Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                                var V = {
                                                    tingpais: S['tingpais0'],
                                                    operation: S['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](V);
                                            } else {
                                                var V = {
                                                    tingpais: S['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](V, !1);
                                            }
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != S['operation'] && Z['ActionOperation'].play(S['operation']);
                                });
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](S));
                            for (var o = 0; o < S['gap_types']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                                y['SetGapType'](S['gap_types'][o]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](S['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                var G = {
                                    tingpais: S['tingpais0'],
                                    operation: S['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](G);
                            } else {
                                var G = {
                                    tingpais: S['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](G, !1);
                            }
                            S['operation'] && -1 != V && Laya['timer'].once(100, this, function() {
                                Z['ActionOperation'].play(S['operation'], V + 100);
                            });
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](S));
                            for (var o = 0; o < S['gap_types']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                                y['SetGapType'](S['gap_types'][o]);
                            }
                            return uiscript['UI_DesktopInfo'].Inst['setGapType'](S['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    if (S['tingpai'])
                                        for (var o = 0; o < S['tingpai']['length']; o++)
                                            S['tingpai'][o].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][o].seat, S['tingpai'][o]['tingpais1']);
                                    Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                                }),
                                1300;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1);
                            for (var o = 0; o < S['gap_types']['length']; o++) {
                                var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)];
                                y['SetGapType'](S['gap_types'][o]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](S['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), S['tingpai'])
                                for (var o = 0; o < S['tingpai']['length']; o++)
                                    S['tingpai'][o].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][o].seat, S['tingpai'][o]['tingpais1']);
                            Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionSelectGap'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionLiqi play data:' + JSON['stringify'](S)),
                                Laya['timer'].once(300, this, function() {
                                    var V = S.seat,
                                        o = S['score'],
                                        y = Z['DesktopMgr'].Inst['seat2LocalPosition'](V);
                                    S['failed'] ? Z['DesktopMgr'].Inst['players'][y]['ShowLiqiFailed']() : Z['DesktopMgr'].Inst['players'][y]['ShowLiqi'](),
                                        Z['DesktopMgr'].Inst['players'][y]['SetScore'](o, Z['DesktopMgr'].Inst['mainrole']['score']),
                                        uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionLiqi fastplay data:' + JSON['stringify'](S));
                            var V = S.seat,
                                o = S['score'],
                                y = Z['DesktopMgr'].Inst['seat2LocalPosition'](V);
                            S['failed'] ? Z['DesktopMgr'].Inst['players'][y]['ShowLiqiFailed'](!1) : Z['DesktopMgr'].Inst['players'][y]['ShowLiqi'](!1),
                                Z['DesktopMgr'].Inst['players'][y]['SetScore'](o, Z['DesktopMgr'].Inst['mainrole']['score']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang'], !1);
                        },
                        V['record'] = function(Z) {
                            return app.Log.log('ActionLiqi record data:' + JSON['stringify'](Z)),
                                this.play(Z),
                                0;
                        },
                        V['fastrecord'] = function(Z) {
                            app.Log.log('ActionLiqi fastrecord data:' + JSON['stringify'](Z)),
                                this['fastplay'](Z, 0);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionLiqi'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function() {
                    function Z(S) {
                        this.me = S,
                            Z['scene_entrance'] = 'chs' != GameMgr['client_language'] ? 'scene/entrance_' + GameMgr['client_language'] + '.ls' : 'scene/entrance.ls';
                    }
                    return Z['prototype'].show = function() {
                            this['scene'] = Laya['loader']['getRes'](Z['scene_entrance']),
                                this.me['addChild'](this['scene']),
                                this['scene']['visible'] = !0;
                        },
                        Z['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['scene']['visible'] = !1,
                                this['scene']['destroy'](!0);
                        },
                        Z['scene_entrance'] = '',
                        Z;
                }
                (),
                V = function() {
                    function Z(Z) {
                        this.me = Z,
                            this['round'] = this.me['getChildByName']('round'),
                            this.word = this.me['getChildByName']('word'),
                            this.icon = this.me['getChildByName']('icon'),
                            this.me['visible'] = !1;
                    }
                    return Z['prototype'].show = function(Z) {
                            var S = this;
                            if (!this.me['visible']) {
                                this.me['visible'] = !0;
                                var V = Laya['timer']['currTimer'];
                                if (Laya['timer']['frameLoop'](1, this, function() {
                                        S['round']['rotation'] = (Laya['timer']['currTimer'] - V) / 2000 * 360;
                                    }), this.word.text = game['Tools']['strOfLocalization'](2053), 0 == Z)
                                    this.icon['visible'] = !1, this.word.y = 150;
                                else
                                    switch (this.icon['visible'] = !0, this.word.y = 195, Z) {
                                        case 1:
                                        case 4:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weixin.png');
                                            break;
                                        case 2:
                                        case 5:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weibo.png');
                                            break;
                                        case 3:
                                        case 6:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/QQ.png');
                                            break;
                                        case 7:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/yostar.png');
                                            break;
                                        case 8:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/google.png');
                                            break;
                                        case 9:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        case 10:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/tiwtter.png');
                                            break;
                                        case 13:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        default:
                                            this.icon['visible'] = !1,
                                                this.word.y = 150;
                                    }
                            }
                        },
                        Z['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this.me['visible'] = !1;
                        },
                        Z;
                }
                (),
                o = function() {
                    function S(S) {
                        var V = this;
                        this['saveflag'] = !0,
                            this['locking'] = !1,
                            this['last_mail_time'] = -1,
                            this.me = S,
                            this.me['visible'] = !1,
                            this.root = this.me['getChildByName']('jpenroot'),
                            this.root['getChildByName']('btn_close')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['locking'] || V['close']();
                            }, null, !1),
                            this['input_account'] = this.root['getChildByName']('container_mail')['getChildByName']('txtinput'),
                            this['label_account_no'] = this.root['getChildByName']('container_mail')['getChildByName']('no'),
                            this['input_account'].on('input', this, function() {
                                V['label_account_no']['visible'] && (V['label_account_no']['visible'] = !1),
                                    '' != V['input_code'].text && '' != V['input_account'].text && game['Tools']['setGrayDisable'](V['btn_regist'], !1);
                            }),
                            this['input_code'] = this.root['getChildByName']('container_yanzhengma')['getChildByName']('txtinput'),
                            this['input_code'].on('input', this, function() {
                                '' != V['input_code'].text && '' != V['input_account'].text && game['Tools']['setGrayDisable'](V['btn_regist'], !1);
                            }),
                            this['btn_getcode'] = this.root['getChildByName']('sendbutton')['getChildByName']('btn'),
                            this['btn_getcode']['clickHandler'] = new Laya['Handler'](this, function() {
                                var Z = V['input_account'].text,
                                    S = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                S.test(Z) ? (Yo['request']({
                                    account: Z,
                                    lang: 'jp' == GameMgr['client_type'] ? 'ja' : 'kr' == GameMgr['client_type'] || 'kr' == GameMgr['client_language'] ? 'kr' : 'en'
                                }).then(function(Z) {
                                    Z ? 0 === Z['result'] ? G.Inst['showInfo'](game['Tools']['strOfLocalization'](2688)) : '50003' === Z['result'] ? G.Inst['showError'](game['Tools']['strOfLocalization'](2684)) : '50004' === Z['result'] ? G.Inst['showError'](game['Tools']['strOfLocalization'](2685)) : G.Inst['showError'](game['Tools']['strOfLocalization'](2683)) : G.Inst['showError'](game['Tools']['strOfLocalization'](2683));
                                }), V['last_mail_time'] = Laya['timer']['currTimer'], V['refresh_code_state']()) : V['label_account_no']['visible'] = !0;
                            }),
                            this['btn_regist'] = this.root['getChildByName']('btn_enter'),
                            this['btn_regist']['clickHandler'] = new Laya['Handler'](this, function() {
                                if (!V['locking']) {
                                    app.Log.log('btn mail login');
                                    var Z = G.Inst['login_index'],
                                        S = V['input_account'].text;
                                    Yo['submit']({
                                            account: V['input_account'].text,
                                            code: V['input_code'].text
                                        }).then(function(V) {
                                            Z == G.Inst['login_index'] && (V ? (app.Log.log('mail login submit result:' + V['result']), 0 === V['result'] ? (game['LocalStorage']['setItem']('mail_account', S), G['onSocioBack'](7, V['token'], V.uid)) : '50016' === V['result'] ? (G.Inst['showError'](game['Tools']['strOfLocalization'](2686)), G.Inst['showContainerLogin']()) : '50009' === V['result'] ? (G.Inst['showError'](game['Tools']['strOfLocalization'](2687)), G.Inst['showContainerLogin']()) : (G.Inst['showError'](game['Tools']['strOfLocalization'](2689)), G.Inst['showContainerLogin']())) : (app.Log.log('mail login submit result: no'), G.Inst['showError'](game['Tools']['strOfLocalization'](2689)), G.Inst['showContainerLogin']()));
                                        }),
                                        1 == V['saveflag'] ? (game['LocalStorage']['setItem']('useremail', V['input_account'].text), game['LocalStorage']['setItem']('saveflag', 'true')) : (game['LocalStorage']['setItem']('useremail', ''), game['LocalStorage']['setItem']('saveflag', 'false')),
                                        V['close'](),
                                        G.Inst['showLoginLoading'](7);
                                }
                            }),
                            this['label_info'] = this.root['getChildByName']('sendbutton')['getChildByName']('label');
                        var o = this.root['getChildByName']('checkxieyi');
                        this['checkbox'] = o['getChildByName']('checkbox'),
                            o['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                V['checkbox']['visible'] = !V['checkbox']['visible'],
                                    V['btn_regist']['visible'] = V['checkbox']['visible'] && V['age_checkbox']['visible'];
                            });
                        var y;
                        if ('jp' == GameMgr['client_type'] ? (o['getChildByName']('en')['visible'] = !1, o['getChildByName']('kr')['visible'] = !1, y = o['getChildByName']('jp')) : 'kr' == GameMgr['client_language'] ? (o['getChildByName']('jp')['visible'] = !1, o['getChildByName']('en')['visible'] = !1, y = o['getChildByName']('kr')) : (o['getChildByName']('jp')['visible'] = !1, o['getChildByName']('kr')['visible'] = !1, y = o['getChildByName']('en')), o['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                V['checkbox']['visible'] = !V['checkbox']['visible'],
                                    V['btn_regist']['visible'] = 'kr' == GameMgr['client_type'] ? V['checkbox']['visible'] && V['age_checkbox']['visible'] : V['checkbox']['visible'];
                            }), y['getChildByName']('guize')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? Z['UI_User_Xieyi_enjp'].Inst.show('docs/jp_liyongguiyue.txt') : 'en' == GameMgr['client_type'] ? Z['UI_User_Xieyi_enjp'].Inst.show('docs/term_of_service.txt') : 'kr' == GameMgr['client_type'] && Z['UI_User_Xieyi_enjp'].Inst.show('docs/kr_liyongguiyue.txt');
                            }, null, !1), y['getChildByName']('yinsi')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? Z['UI_User_Xieyi_enjp'].Inst.show('docs/jp_yinsixieyi.txt') : 'en' == GameMgr['client_type'] ? Z['UI_User_Xieyi_enjp'].Inst.show('docs/privacy_policy.txt') : 'kr' == GameMgr['client_type'] && Z['UI_User_Xieyi_enjp'].Inst.show('docs/kr_yinsixieyi.txt');
                            }, null, !1), this.age = this.root['getChildByName']('age'), this['age_checkbox'] = this.age['getChildByName']('checkbox'), this.age['visible'] = 'kr' == GameMgr['client_type'], 'kr' == GameMgr['client_type']) {
                            this.age['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                V['age_checkbox']['visible'] = !V['age_checkbox']['visible'],
                                    V['btn_regist']['visible'] = V['checkbox']['visible'] && V['age_checkbox']['visible'];
                            });
                            var e = this.root['getChildByName']('bg');
                            e['getChildAt'](0)['height'] += 30,
                                e['getChildAt'](1)['height'] += 30,
                                this['btn_regist'].y += 30;
                        }
                    }
                    return S['prototype']['onchangecheck'] = function(Z) {
                            this['checkbox']['visible'] = Z,
                                this['btn_regist']['visible'] = Z,
                                this.root['getChildByName']('checkxieyi')['visible'] = Z;
                        },
                        S['prototype'].show = function() {
                            var S = this;
                            this['locking'] = !0,
                                this.me['visible'] = !0,
                                Z['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1;
                                })),
                                this['input_account'].text = '',
                                this['label_account_no']['visible'] = !1,
                                this['input_code'].text = '',
                                this['checkbox']['visible'] = !0,
                                this['age_checkbox']['visible'] = !0,
                                this['btn_regist']['visible'] = !0;
                            var V = game['LocalStorage']['getItem']('saveflag'),
                                o = game['LocalStorage']['getItem']('useremail');
                            'true' == V && (this['input_account'].text = o, app.Log.log(o)),
                                game['Tools']['setGrayDisable'](this['btn_regist'], !0),
                                Laya['timer']['clearAll'](this),
                                this['refresh_code_state'](),
                                Laya['timer'].loop(100, this, function() {
                                    S['refresh_code_state']();
                                });
                        },
                        S['prototype']['refresh_code_state'] = function() {
                            var Z = 100000000;
                            game['Tools']['setGrayDisable'](this['btn_getcode'], !0),
                                this['last_mail_time'] > 0 && (Z = Laya['timer']['currTimer'] - this['last_mail_time']),
                                60000 > Z ? (this['label_info']['underline'] = !1, Z = Math.ceil((60000 - Z) / 1000), this['label_info'].text = game['Tools']['strOfLocalization'](2682, [Z['toString']()]), this['label_info']['underline'] = !1, game['Tools']['setGrayDisable'](this['btn_getcode'], !0)) : (this['label_info'].text = game['Tools']['strOfLocalization'](2720), this['label_info']['underline'] = !0, game['Tools']['setGrayDisable'](this['btn_getcode'], !1));
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['locking'] = !0,
                                Z['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S.me['visible'] = !1,
                                        Laya['timer']['clearAll'](S);
                                }));
                        },
                        S;
                }
                (),
                y = function() {
                    function S(S) {
                        this['start_time'] = Laya['timer']['currTimer'],
                            this.data = null,
                            this.me = S,
                            this.info = this.me['getChildByName']('info'),
                            this['label_time'] = this.me['getChildByName']('time'),
                            this.img = this.me['getChildByName']('img'),
                            this.me['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                Z['UI_Entrance_Choose_Route'].Inst.show();
                            });
                    }
                    return S['prototype']['onEnable'] = function() {
                            var Z = this;
                            Laya['timer']['clearAll'](this),
                                this['update_data'](),
                                Laya['timer'].loop(100, this, function() {
                                    Z['update_data']();
                                }),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    Z['refresh']();
                                });
                        },
                        S['prototype']['update'] = function() {
                            this['update_data']();
                        },
                        S['prototype']['update_data'] = function() {
                            var Z = game['LobbyNetMgr'].Inst['GetLinkInfos'](),
                                S = game['LobbyNetMgr'].Inst['choosed_index'];
                            this.data = Z[S],
                                this.info.text = game['Tools']['strOfLocalization'](3150) + (S + 1)['toString']();
                        },
                        S['prototype']['refresh'] = function() {
                            var Z = this.data,
                                S = Z['delay'];
                            Z['connect'] == game['EConnectState']['connecting'] ? (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time'].text = 1 > S ? '--' : Math['floor'](S / 2) + 'ms', this['label_time']['fontSize'] = 30, this['label_time']['color'] = Z['delay'] < 300 ? '#32dd5b' : Z['delay'] < 800 ? '#ffe154' : '#e03737') : Z['connect'] == game['EConnectState']['tryconnect'] ? (this.img['visible'] = !0, this['label_time']['visible'] = !1, this.img.skin = Z['fetch'] == game['EFetchState']['success'] ? game['Tools']['localUISrc']('myres/entrance/connecting.png') : game['Tools']['localUISrc']('myres/entrance/fetching.png'), this.img['rotation'] = 0.5 * (Laya['timer']['currTimer'] - this['start_time'])) : (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time']['fontSize'] = 25, this['label_time']['color'] = '#7e818b', this['label_time'].text = Z['in_maintenance'] ? game['Tools']['strOfLocalization'](3149) : Z['fetch'] == game['EFetchState']['error'] ? game['Tools']['strOfLocalization'](3147) : game['Tools']['strOfLocalization'](3148));
                        },
                        S['prototype']['onClose'] = function() {
                            Laya['timer']['clearAll'](this);
                        },
                        S;
                }
                (),
                G = function(G) {
                    function e() {
                        var Z = G.call(this, new ui['entrance']['entranceUI']()) || this;
                        return Z['scene'] = null,
                            Z['login_type_tabs'] = [],
                            Z['txt_account'] = null,
                            Z['txt_password'] = null,
                            Z['btn_login_cd'] = 0,
                            Z['login_loading'] = null,
                            Z['route_info'] = null,
                            Z['btn_add2desktop'] = null,
                            Z['container_language'] = null,
                            Z['label_language'] = null,
                            Z['page_maillogin'] = null,
                            Z['container_extendInfo'] = null,
                            Z['xieyiflag'] = 0,
                            Z['login_index'] = 0,
                            Z['login_type_tab_index'] = -1,
                            Z['login_account_input_info'] = {},
                            e.Inst = Z,
                            Z;
                    }
                    return __extends(e, G),
                        e['trySocio'] = function(S) {
                            var V = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                o = -1;
                            V && '' != V && (o = parseInt(V));
                            var y = !0;
                            if (o === S)
                                if (S >= 1 && 6 >= S) {
                                    var G = Laya['LocalStorage']['getItem']('_pre_code');
                                    G && '' != G && (y = !1, this['onSocioBack'](S, G, null));
                                } else if (7 == S);
                            else if (S >= 8 && 10 >= S) {
                                var e = game['LocalStorage']['getItem']('yostar_token');
                                e || (e = '');
                                var x = game['LocalStorage']['getItem']('yostar_uid');
                                x || (x = ''),
                                    '' != e && '' != x && (y = !1, this['onSocioBack'](S, e, x));
                            }
                            if (y)
                                if (GameMgr['inConch']) {
                                    var R = Laya['PlatformClass']['createClass']('layaair.majsoul.mjmgr');
                                    1 == S ? R.call('wxLogin') : 2 == S ? R.call('weiboLogin') : 3 == S && R.call('qqLogin');
                                } else if (GameMgr['iniOSWebview']) {
                                var s = '';
                                switch (S) {
                                    case 1:
                                        s = 'wxLogin';
                                        break;
                                    case 2:
                                        s = 'wbLogin';
                                        break;
                                    case 3:
                                        s = 'qqLogin';
                                }
                                if (s) {
                                    var u = this,
                                        n = function(Z) {
                                            u['onSocioBack'](S + 3, Z, null);
                                        };
                                    Laya['Browser']['window']['wkbridge']['callNative'](s, '', n);
                                }
                            } else {
                                var k = window['location'].href;
                                if (-1 != k['indexOf']('?') && (k = k['split']('?')[0]), 1 == S) {
                                    var r = 'https://open.weixin.qq.com/connect/qrconnect?';
                                    r += 'appid=wx2a0c2449cab74448',
                                        r += '&response_type=code',
                                        r += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0?xdsfdl=1-' + k),
                                        r += '&scope=snsapi_login',
                                        Laya['Browser']['window']['location'].href = r;
                                } else if (2 == S) {
                                    var r = 'https://api.weibo.com/oauth2/authorize?';
                                    r += 'client_id=399644784',
                                        r += '&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-' + k,
                                        Laya['Browser']['window']['location'].href = r;
                                } else if (3 == S) {
                                    var r = 'https://graph.qq.com/oauth2.0/authorize?';
                                    r += 'response_type=code',
                                        r += '&client_id=101480027',
                                        r += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0'),
                                        r += GameMgr.Inst['link_url']['indexOf']('majsoul.com/1') >= 0 ? '&state=xdsfdl4' : '&state=xdsfdl3',
                                        Laya['Browser']['window']['location'].href = r;
                                } else if (7 == S)
                                    this.Inst && this.Inst['showMailLogin']();
                                else if (8 == S) {
                                    var M = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    M += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        M += '/yo_google.html',
                                        'kr' == GameMgr['client_type'] ? Yo['googleKrAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        }) : 'jp' == GameMgr['client_type'] ? Yo['googleJaAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        }) : Yo['googleAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        });
                                } else if (9 == S) {
                                    var M = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    M += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        M += '/yo_facebook.html',
                                        'kr' == GameMgr['client_type'] ? Yo['facebookKrAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        }) : Yo['facebookAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        });
                                } else if (10 == S) {
                                    var M = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    M += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        M += '/yo_tiwtter.html',
                                        'jp' == GameMgr['client_type'] ? Yo['twitterJaAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        }) : 'kr' == GameMgr['client_type'] ? Yo['twitterKrAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        }) : Yo['twitterAuth']({
                                            redirect_uri: M,
                                            openNewWindow: !1
                                        });
                                } else if (13 == S) {
                                    var g = function() {
                                        Laya['LocalStorage']['setItem']('fblogin', '1');
                                        var Z = 'https://www.facebook.com/dialog/oauth?';
                                        Z += 'client_id=511764882872601',
                                            Z += '&redirect_uri=' + encodeURI(GameMgr.Inst['link_url']),
                                            Z += '&response_type=token',
                                            Laya['Browser']['window']['location'].href = Z;
                                    };
                                    void 0 != window.FB && null != window.FB ? window.FB['getLoginStatus'](function(S) {
                                        S && 'connected' == S['status'] ? Z['UI_Entrance']['onSocioBack'](13, S['authResponse']['accessToken'], null) : g();
                                    }) : g();
                                } else
                                    14 == S && game['DmmSDK']['login']();
                            }
                        },
                        e['onSocioBack'] = function(Z, S, V) {
                            app.Log.log('!!!!!!!!!!!!!!! ' + Z + ' ' + S),
                                this.Inst && this.Inst['_onSocioBack'](Z, S, V);
                        },
                        e['prototype']['onCreate'] = function() {
                            var G = this,
                                x = this.me['getChildByName']('root');
                            this['container_login'] = this.me['getChildByName']('root')['getChildByName']('container_login');
                            var R = function(Z) {
                                    var S = {
                                        container: Z,
                                        input: Z['getChildByName']('txtinput'),
                                        lb: Z['getChildByName']('lb')
                                    };
                                    return S['input'].text = '',
                                        S.lb['visible'] = !0,
                                        S['input'].on('focus', G, function() {
                                            S.lb['visible'] = !1;
                                        }),
                                        S['input'].on('blur', G, function() {
                                            S.lb['visible'] = !S['input'].text || '' == S['input'].text;
                                        }),
                                        S['input'].on('input', G, function() {}),
                                        S;
                                },
                                s = this['container_login']['getChildByName']('chs');
                            this['route_info'] = new y(s['getChildByName']('img_lb')),
                                this['txt_account'] = R(s['getChildByName']('container_account')),
                                this['txt_password'] = R(s['getChildByName']('container_mima')),
                                this['txt_account']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(Z) {
                                    Z['keyCode'] === Laya['Keyboard']['ENTER'] && G['_btn_login']();
                                }),
                                this['txt_password']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(Z) {
                                    Z['keyCode'] === Laya['Keyboard']['ENTER'] && G['_btn_login']();
                                }),
                                this['login_type_tabs'] = [];
                            for (var u = function(Z) {
                                    var S = s['getChildByName']('container_tabs')['getChildByName']('tab' + Z);
                                    n['login_type_tabs'].push({
                                            btn: S,
                                            word: S['getChildByName']('word'),
                                            choosen: S['getChildByName']('chosen')
                                        }),
                                        n['login_type_tabs'][Z].btn['clickHandler'] = new Laya['Handler'](n, function() {
                                            G['login_type_tab_index'] != Z && G['change_chs_login_tab'](Z);
                                        });
                                }, n = this, k = 0; 2 > k; k++)
                                u(k);
                            this['container_extendInfo'] = x['getChildByName']('extendinfo'),
                                this['container_extendInfo']['visible'] = !1,
                                s['getChildByName']('btn_regist')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['UI_Entrance_Mail_Regist'].Inst.show();
                                }, null, !1),
                                s['getChildByName']('btn_forgetpassword')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['UI_Entrance_Reset_Password'].Inst.show();
                                }, null, !1),
                                s['getChildByName']('btn_find_account')['clickHandler'] = new Laya['Handler'](this, function() {
                                    Laya['Browser']['window']['location'].href = game['Tools']['getFinalUrl']('https://www.maj-soul.com/find-account/');
                                }),
                                s['getChildByName']('btn_find_account')['visible'] = 'chs' == GameMgr['client_type'],
                                this['btn_add2desktop'] = this.me['getChildByName']('root')['getChildByName']('btn_add2desktop'),
                                this['btn_add2desktop']['visible'] = (Laya['Browser']['onAndriod'] || Laya['Browser']['onAndroid'] || Laya['Browser']['onIOS']) && !GameMgr['inConch'] && !GameMgr['inConch'],
                                this['btn_add2desktop']['clickHandler'] = new Laya['Handler'](this, function() {
                                    Z['UI_Add2Desktop'].Inst && Z['UI_Add2Desktop'].Inst.show();
                                }),
                                s['getChildByName']('btn_enter')['clickHandler'] = Laya['Handler']['create'](this, this['_btn_login'], null, !1),
                                this['login_loading'] = new V(x['getChildByName']('loading_login')),
                                this['page_maillogin'] = new o(this.me['getChildByName']('mail_login')),
                                this['scene'] = new S(this.me['getChildByName']('scene')),
                                this['container_social'] = this['container_login']['getChildByName']('social'),
                                this['social_btns'] = [];
                            for (var k = 0; 4 > k; k++)
                                this['social_btns'].push(this['container_social']['getChildByName']('btn' + k)), this['social_btns'][k]['visible'] = !1;
                            var r = 55,
                                M = 395,
                                g = [];
                            'chs' == GameMgr['client_type'] && (g = [{
                                    img: 'myres/entrance/weibo.png',
                                    type: 2
                                }, {
                                    img: 'myres/entrance/QQ.png',
                                    type: 3
                                }, {
                                    img: 'myres/entrance/weixin.png',
                                    type: 1
                                }]),
                                'chs_t' == GameMgr['client_type'] && (g = [{
                                    img: 'myres/entrance/facebook.png',
                                    type: 13
                                }]),
                                'jp' == GameMgr['client_type'] && (g = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]),
                                ('en' == GameMgr['client_type'] || 'kr' == GameMgr['client_type']) && (g = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/facebook.png',
                                    type: 9
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]);
                            for (var K = function(Z) {
                                    var S = Y['social_btns'][Z];
                                    Z < g['length'] ? (S['visible'] = !0, S['getChildAt'](0).skin = game['Tools']['localUISrc'](g[Z].img), S['clickHandler'] = new Laya['Handler'](Y, function() {
                                        e['trySocio'](g[Z].type);
                                    }), S.x = 1 == g['length'] ? (M - r) / 2 + 50 : (M - r) * Z / (g['length'] - 1) + r) : S['visible'] = !1;
                                }, Y = this, k = 0; k < this['social_btns']['length']; k++)
                                K(k);
                            2 == g['length'] && (this['social_btns'][0].x = 1 * (M - r) / 3 + r, this['social_btns'][1].x = 2 * (M - r) / 3 + r),
                                this.me['getChildByName']('infos')['visible'] = 'chs' == GameMgr['client_type'],
                                this.me['getChildByName']('root')['getChildByName']('loading_login')['getChildByName']('btn_cancel')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    G['login_loading'].me['visible'] && (game['LobbyNetMgr'].Inst['Close'](), Laya['LocalStorage']['setItem']('_pre_sociotype', ''), G['showContainerLogin'](), G['btn_login_cd'] = Laya['timer']['currTimer'] + 500, Laya['timer'].once(500, G, function() {
                                        game['LobbyNetMgr'].Inst['OpenConnect'](null);
                                    }));
                                }, null, !1);
                            var j = this.me['getChildByName']('root')['getChildByName']('container_login')['getChildByName']('dmm');
                            j['getChildByName']('btn_enter')['clickHandler'] = new Laya['Handler'](this, function() {
                                e['trySocio'](14);
                            });
                            var F = j['getChildByName']('checksave'),
                                w = F['getChildByName']('checkbox');
                            w['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                F['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    w['visible'] = !w['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', w['visible'] ? 'true' : 'false');
                                });
                            var T = x['getChildByName']('btn_kefu');
                            T['visible'] = 'chs_t' == GameMgr['client_type'] || 'kr' == GameMgr['client_type'],
                                T['clickHandler'] = new Laya['Handler'](this, function() {
                                    if ('kr' == GameMgr['client_type'])
                                        return Z['UI_User_Xieyi_enjp'].Inst.show('docs/contact_us_kr_1.txt'), void 0;
                                    game['Tools']['setGrayDisable'](T, !0),
                                        Laya['timer'].once(1000, null, function() {
                                            game['Tools']['setGrayDisable'](T, !1);
                                        });
                                    var S = 'https://ykf-webchat.7moor.com/wapchat.html?';
                                    S += 'fromUrl=' + game['Tools']['getFinalUrl']('https://www.maj-soul.com'),
                                        S += '&urlTitle=网页',
                                        'chs' == GameMgr['client_language'] ? (S += '&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68', S += '&language=ZHCN') : (S += '&accessId=4184be70-95b1-11ea-b027-616616b0ded6', S += '&language=EN');
                                    var V = {};
                                    V['登陆状态'] = '未登录',
                                        S += '&customField=' + JSON['stringify'](V),
                                        game['Tools']['open_new_window'](S);
                                }),
                                this['container_language'] = this.me['getChildByName']('container_language');
                            var N = this['container_language']['getChildByName']('btn');
                            this['label_language'] = N['getChildByName']('info'),
                                N['clickHandler'] = new Laya['Handler'](this, function() {
                                    Z['UI_Entrance_Change_Language'].Inst.show();
                                });
                        },
                        e['prototype']['ModelJpEn'] = function() {
                            function Z(Z) {
                                1 == Z && e['trySocio'](7);
                            }
                            var S = this['container_login']['getChildByName']('jpen'),
                                V = S['getChildByName']('btn_enter');
                            V['clickHandler'] = Laya['Handler']['create'](this, function() {
                                Z(!0);
                            }, null, !1);
                            var o = S['getChildByName']('checksave'),
                                y = o['getChildByName']('checkbox');
                            y['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                o['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    y['visible'] = !y['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', y['visible'] ? 'true' : 'false');
                                });
                        },
                        e['prototype'].show = function() {
                            var Z = this;
                            GameMgr.Inst['postNewInfo2Server']('enter_entrance', {
                                    load_time: Date.now() - GameMgr.Inst['last_load_start_time']
                                }),
                                GameMgr['inDmm'] ? (this['container_social']['visible'] = !1, this['container_login']['getChildByName']('dmm')['visible'] = !0, this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !1) : (this['container_social']['visible'] = !0, this['container_login']['getChildByName']('dmm')['visible'] = !1, 'chs' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? (this['container_social'].x = 40, this['container_social'].y = 475, this['container_login']['getChildByName']('chs')['visible'] = !0, this['container_login']['getChildByName']('jpen')['visible'] = !1, this['route_info']['onEnable']()) : (this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !0, this['ModelJpEn']())), -1 != GameMgr.Inst['beinvited_roomid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2054) + ':' + GameMgr.Inst['beinvited_roomid']) : '' != GameMgr.Inst['outsee_paipuid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2055)) : this['container_extendInfo']['visible'] = !1;
                            var S = this['login_index'],
                                V = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                o = -1;
                            if (V && '' != V && (o = parseInt(V)), !GameMgr.Inst['in_emergence'] && Laya['LocalStorage']['getItem']('_pre_access_token') && 13 == o)
                                this['showLoginLoading'](13), Laya['timer'].once(500, this, function() {
                                    S == Z['login_index'] && Z['_loginby_sociocode'](S, 13, Laya['LocalStorage']['getItem']('_pre_access_token'));
                                });
                            else if (!GameMgr.Inst['in_emergence'] && GameMgr.Inst['fb_login_info'] && 'connected' == GameMgr.Inst['fb_login_info']['status'])
                                this['showLoginLoading'](13), Laya['timer'].once(500, this, function() {
                                    if (S == Z['login_index']) {
                                        var V = GameMgr.Inst['fb_login_info']['authResponse'];
                                        Z['_loginby_sociocode'](S, 13, V['accessToken']);
                                    }
                                });
                            else if (GameMgr.Inst['in_emergence'] || '1' != Laya['LocalStorage']['getItem']('fblogin')) {
                                this.me['getChildByName']('root')['getChildByName']('version').text = game['ResourceVersion']['version'];
                                var y = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                    G = Laya['LocalStorage']['getItem']('ssssoooodd');
                                G || (G = '');
                                var e = -1;
                                if (y && '' != y && (e = parseInt(y)), GameMgr.Inst['in_emergence'] && (e = -1), app.Log.log('sociotype:' + e), 0 > e || e > 14)
                                    this['showContainerLogin']();
                                else if (0 == e)
                                    '' != G ? (this['showLoginLoading'](0), Laya['timer'].once(600, this, function() {
                                        S == Z['login_index'] && Z['_try_socio_check'](S, e, G);
                                    })) : this['showContainerLogin']();
                                else if (e >= 1 && 6 >= e) {
                                    var x = Laya['LocalStorage']['getItem']('_pre_code');
                                    x || (x = ''),
                                        '' != x || '' != G ? (this['showLoginLoading'](e), Laya['timer'].once(500, this, function() {
                                            S == Z['login_index'] && (x && '' != x ? Z['_loginby_sociocode'](S, e, x) : Z['_try_socio_check'](S, e, G));
                                        })) : this['showContainerLogin']();
                                } else if (e >= 7 && 10 >= e && 'chs' != GameMgr['client_type'] && 'chs_t' != GameMgr['client_type'] && Yo && Yo['login']) {
                                    var R = game['LocalStorage']['getItem']('yostar_token');
                                    R || (R = '');
                                    var s = game['LocalStorage']['getItem']('yostar_uid');
                                    s || (s = ''),
                                        '' != s && '' != R ? (this['showLoginLoading'](e), Laya['timer'].once(500, this, function() {
                                            S == Z['login_index'] && Z['_login_2_yostar'](S, e, R, s);
                                        })) : this['showContainerLogin']();
                                } else if (13 == e || 14 == e) {
                                    var u = Laya['LocalStorage']['getItem']('_pre_code');
                                    u || (u = ''),
                                        '' != u || '' != G ? (this['showLoginLoading'](e), Laya['timer'].once(500, this, function() {
                                            S == Z['login_index'] && (u && '' != u ? Z['_loginby_sociocode'](S, e, u) : Z['_try_socio_check'](S, e, G));
                                        })) : this['showContainerLogin']();
                                } else
                                    this['showContainerLogin']();
                            } else {
                                if (this['showLoginLoading'](13), Laya['LocalStorage']['getItem']('_pre_access_token'))
                                    this['showLoginLoading'](13), Laya['timer'].once(500, this, function() {
                                        S == Z['login_index'] && Z['_loginby_sociocode'](S, 13, Laya['LocalStorage']['getItem']('_pre_access_token'));
                                    });
                                else {
                                    var n = Laya['timer']['currTimer'],
                                        k = this,
                                        r = function() {
                                            if (null != window.FB && void 0 != window.FB) {
                                                if (FB['getLoginStatus'](function(Z) {
                                                        GameMgr.Inst['fb_login_info'] = Z;
                                                    }), S != k['login_index'])
                                                    return;
                                                var Z = GameMgr.Inst['fb_login_info']['authResponse'];
                                                k['_loginby_sociocode'](S, 13, Z['accessToken']),
                                                    Laya['timer']['clear'](k, r);
                                            } else
                                                Laya['timer']['currTimer'] > n + 5000 && Laya['timer']['clear'](k, r);
                                        };
                                    Laya['timer']['frameLoop'](1, k, r);
                                }
                                Laya['LocalStorage']['setItem']('fblogin', '0');
                            }
                            if ('chs_t' == GameMgr['client_type'] || 'en' == GameMgr['client_type'])
                                switch (this['container_language']['visible'] = !0, GameMgr['client_language']) {
                                    case 'chs':
                                        this['label_language'].text = '中文(简体)';
                                        break;
                                    case 'chs_t':
                                        this['label_language'].text = '中文(繁體)';
                                        break;
                                    case 'jp':
                                        this['label_language'].text = '日本語';
                                        break;
                                    case 'en':
                                        this['label_language'].text = 'English';
                                        break;
                                    case 'kr':
                                        this['label_language'].text = game['Tools']['strOfLocalization'](3615);
                                        break;
                                    default:
                                        this['label_language'].text = '';
                                }
                            else
                                this['container_language']['visible'] = !1;
                            this['scene'].show(),
                                this['enable'] = !0;
                        },
                        e['prototype']['_onSocioBack'] = function(Z, S, V) {
                            var o = this,
                                y = this['login_index'];
                            this['showLoginLoading'](Z),
                                Laya['timer'].once(500, this, function() {
                                    y == o['login_index'] && (S && '' != S ? (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : Z['toString']()), V ? o['_login_2_yostar'](y, Z, S, V) : (Laya['LocalStorage']['setItem']('_pre_code', S), o['_loginby_sociocode'](y, Z, S))) : o['showContainerLogin']());
                                });
                        },
                        e['prototype']['showContainerLogin'] = function() {
                            if (-1 == this['login_type_tab_index']) {
                                var Z = game['LocalStorage']['getItem']('login_type_tab'),
                                    S = game['LocalStorage']['getItem']('account'),
                                    V = game['LocalStorage']['getItem']('password');
                                if (this['login_account_input_info'] = {}, S && V && '' != S && '' != V) {
                                    var o = 0;
                                    Z && '' != Z && (o = parseInt(Z)),
                                        this['login_account_input_info'][o] = {
                                            account: S,
                                            password: V
                                        },
                                        this['change_chs_login_tab'](o);
                                } else
                                    this['change_chs_login_tab'](0);
                            } else
                                this['change_chs_login_tab'](this['login_type_tab_index']);
                            this['container_login']['visible'] = !0,
                                this['login_loading']['close'](),
                                this['login_index']++;
                        },
                        e['prototype']['showLoginLoading'] = function(Z) {
                            this['container_login']['visible'] = !1,
                                this['login_loading'].show(Z);
                        },
                        e['prototype']['change_chs_login_tab'] = function(Z) {
                            this['login_type_tab_index'] >= 0 && (this['login_account_input_info'][this['login_type_tab_index']] = {
                                    account: this['txt_account']['input'].text,
                                    password: this['txt_password']['input'].text
                                }),
                                Z || (Z = 0),
                                this['login_type_tab_index'] = Z;
                            for (var S = 0; S < this['login_type_tabs']['length']; S++)
                                this['login_type_tabs'][S].word['color'] = S == Z ? '#446fdb' : '#84827b', this['login_type_tabs'][S]['choosen']['visible'] = S == Z;
                            switch (Z) {
                                case 0:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3138),
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                                    break;
                                case 1:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3132),
                                        this['txt_account']['input']['restrict'] = '0-9',
                                        this['txt_account']['input']['maxChars'] = 11;
                                    break;
                                default:
                                case 0:
                                    this['txt_account'].lb.text = '',
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                            }
                            var V = this['login_account_input_info'][Z],
                                o = '',
                                y = '';
                            V && (o = V['account'], y = V['password']),
                                o && '' != o ? (this['txt_account']['input'].text = o, this['txt_account'].lb['visible'] = !1) : (this['txt_account']['input'].text = '', this['txt_account'].lb['visible'] = !0),
                                y && '' != y ? (this['txt_password']['input'].text = y, this['txt_password'].lb['visible'] = !1) : (this['txt_password']['input'].text = '', this['txt_password'].lb['visible'] = !0);
                        },
                        e['prototype']['_btn_login'] = function() {
                            var S = this;
                            if (!this['showEmergency']()) {
                                var V = this['txt_account']['input'].text,
                                    o = this['txt_password']['input'].text;
                                if (!V || '' == V)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2056)), void 0;
                                if (!o || '' == o)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2057)), void 0;
                                if (!(Laya['timer']['currTimer'] < this['btn_login_cd'])) {
                                    if (this['multiLogin']())
                                        return this['showInfo'](game['Tools']['strOfLocalization'](2058)), void 0;
                                    this['btn_login_cd'] = Laya['timer']['currTimer'] + 1000,
                                        this['showLoginLoading'](0);
                                    var y = this['login_index'];
                                    game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(G) {
                                        Laya['timer'].once(800, S, function() {
                                            y == S['login_index'] && (G.open ? e.Inst['_try_login_account'](y, V, o) : (G['maintenance'] ? Z['UI_Entrance_Maintenance'].Inst.show(G['maintenance']) : S['showInfo'](G.info), S['showContainerLogin'](), S['btn_login_cd'] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        e['prototype']['_try_regist_account'] = function(Z, S, V, o) {
                            var y = this;
                            this['showEmergency']() || app['NetAgent']['sendReq2Lobby']('Lobby', 'signup', {
                                account: Z,
                                password: GameMgr['encodeP'](V),
                                code: S,
                                type: o,
                                device: GameMgr.Inst['get_device_info'](),
                                client_version_string: GameMgr.Inst['getClientVersion'](),
                                tag: GameMgr.Inst['getReportClientType']()
                            }, function(S, G) {
                                if (S)
                                    y['showError'](game['Tools']['strOfLocalization'](2059), S), app.Log['Error'](S['message']);
                                else if (G['error'])
                                    y['showError'](game['Tools']['strOfLocalization'](2060), G['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](G)]));
                                else {
                                    var e = o - 1;
                                    y['login_account_input_info'][e] = {
                                            account: Z,
                                            password: V
                                        },
                                        y['change_chs_login_tab'](e),
                                        y['_try_login_account'](y['login_index'], Z, V);
                                }
                            });
                        },
                        e['prototype']['_try_login_account'] = function(S, V, o) {
                            var y = this;
                            if (S == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                var G = GameMgr.Inst['get_device_info'](),
                                    e = game['Tools']['get_platform_currency']();
                                game['LocalStorage']['setItem']('account', V),
                                    game['LocalStorage']['setItem']('password', o),
                                    game['LocalStorage']['setItem']('login_type_tab', this['login_type_tab_index']['toString']()),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'login', {
                                        account: V,
                                        password: GameMgr['encodeP'](o),
                                        reconnect: !1,
                                        device: G,
                                        random_key: GameMgr['device_id'],
                                        client_version: {
                                            resource: game['ResourceVersion']['version']
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: e,
                                        type: this['login_type_tab_index'],
                                        client_version_string: GameMgr.Inst['getClientVersion'](),
                                        tag: GameMgr.Inst['getReportClientType']()
                                    }, function(G, e) {
                                        if (S == y['login_index'])
                                            if (y['btn_login_cd'] = 0, G)
                                                y['showError'](game['Tools']['strOfLocalization'](2061), G), y['showContainerLogin']();
                                            else if (e['error']) {
                                            if (156 == e['error'].code)
                                                return Z['UI_Entrance_Mail_Regist'].Inst['enable'] && (Z['UI_Entrance_Mail_Regist'].Inst['close'](), y['showLoginLoading'](0)), y['onLoginQueueError'](Laya['Handler']['create'](y, function() {
                                                    y['_try_login_account'](y['login_index'], V, o);
                                                })), void 0;
                                            503 == e['error'].code ? y['onLoginErrorProhibition'](e['error']) : y['showError']('', e['error'].code),
                                                y['showContainerLogin']();
                                        } else
                                            Laya['LocalStorage']['setItem']('_pre_sociotype', '0'), game['LocalStorage']['setItem']('account', V), game['LocalStorage']['setItem']('password', o), game['LocalStorage']['setItem']('login_type_tab', y['login_type_tab_index']['toString']()), GameMgr.Inst['account'] = V, GameMgr.Inst['password'] = o, GameMgr.Inst['sociotype'] = 0, GameMgr['country'] = e['country'], GameMgr.Inst['account_id'] = e['account_id'], GameMgr.Inst['account_data'] = e['account'], Z['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](y, function() {
                                                Z['UI_User_Xieyi_enjp']['needCheckVersion'] ? Z['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](y, function() {
                                                    y['_onLoginSuccess'](0, e);
                                                })) : y['_onLoginSuccess'](0, e);
                                            }));
                                    });
                            }
                        },
                        e['prototype']['_login_2_yostar'] = function(S, V, o, y) {
                            var G = this;
                            if (!this['showEmergency']() && S == this['login_index']) {
                                app.Log.log('login_2_yostar sociotype:' + V + ' token:' + o + ' uid:' + y);
                                var e = this,
                                    x = function(S, V) {
                                        switch (void 0 === V && (V = 0), V = Math['floor'](V / 1000), S) {
                                            case 1:
                                                e['showError'](game['Tools']['strOfLocalization'](2677));
                                                break;
                                            case 2:
                                                e['showError'](game['Tools']['strOfLocalization'](2678));
                                                break;
                                            case 3:
                                                e['showError'](game['Tools']['strOfLocalization'](2679));
                                                break;
                                            case 4:
                                                e['showError'](game['Tools']['strOfLocalization'](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr['client_type'] ? (Z['UI_Entrance_Account_Deleted'].Inst['setYoInfo'](y, o), Z['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization'](8026, [game['Tools']['time2YearMounthDate'](V, '-') + ' ' + game['Tools']['time2HourMinute'](V)]))) : e['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](V, '-') + ' ' + game['Tools']['time2HourMinute'](V)]));
                                                break;
                                            default:
                                                e['showError'](game['Tools']['strOfLocalization'](2676));
                                        }
                                        Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                            e['showContainerLogin']();
                                    };
                                Yo['login'] && Yo['login']({
                                    uid: y,
                                    token: o
                                }).then(function(R) {
                                    S == G['login_index'] && (R ? (app.Log.log('yo login data.result:' + R['result']), 0 == R['result'] ? 'kr' == GameMgr['client_type'] && 1 != R['kr_kmc_status'] ? (Laya['LocalStorage']['setItem']('_pre_sociotype', ''), e['showContainerLogin'](), Z['UI_ShiMingRenZheng_KR'].Inst.show(game['Tools']['strOfLocalization'](2 == R['kr_kmc_status'] ? 8043 : 8044), Laya['Handler']['create'](G, function() {
                                        Yo['kmcStart']({
                                            accessToken: R['accessToken']
                                        }).then(function() {});
                                    }))) : (game['LocalStorage']['setItem']('yostar_token', o), game['LocalStorage']['setItem']('yostar_uid', y), GameMgr.Inst['yostar_accessToken'] = R['accessToken'], GameMgr.Inst['yostar_uid'] = y, GameMgr.Inst['yostar_login_info'] = R, e['_loginby_sociocode'](S, V, R['accessToken'], y)) : x(R['result'], R['reborn_before_ms'])) : (app.Log.log('yo login data.result: no'), x(-1)));
                                });
                            }
                        },
                        e['prototype']['_loginby_sociocode'] = function(S, V, o, y) {
                            var G = this;
                            if (void 0 === y && (y = ''), !this['showEmergency']() && S == this['login_index']) {
                                if (app.Log.log('_loginby_sociocode0 sociotype:' + V + ', code:' + o + ', uid:' + y), !game['LobbyNetMgr'].Inst.isOK)
                                    return game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(e) {
                                        S == G['login_index'] && (e.open ? G['_loginby_sociocode'](S, V, o, y) : (e['maintenance'] ? Z['UI_Entrance_Maintenance'].Inst.show(e['maintenance']) : G['showInfo'](e.info), G['showContainerLogin']()));
                                    })), void 0;
                                Laya['LocalStorage']['setItem']('_pre_code', ''),
                                    Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                    app.Log.log('_loginby_sociocode1 sociotype' + V + ' code:' + o + ' uid:' + y);
                                var e = {
                                    type: V,
                                    code: o
                                };
                                y && (e.uid = y),
                                    e['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Auth', e, function(Z, o) {
                                        S == G['login_index'] && (Z ? (app.Log.log('oauth2Auth err:' + Z), G['showError'](game['Tools']['strOfLocalization'](2059), Z), app.Log['Error'](Z['message']), G['showContainerLogin'](), 13 == V && Laya['LocalStorage']['removeItem']('_pre_access_token')) : (app.Log.log('oauth2Auth res: ' + JSON['stringify'](o)), o['error'] ? (G['showError'](game['Tools']['strOfLocalization'](2062), o['error'].code), G['showContainerLogin']()) : G['_try_socio_check'](S, V, o['access_token'])));
                                    });
                            }
                        },
                        e['prototype']['_try_socio_check'] = function(S, V, o) {
                            var y = this;
                            if (!this['showEmergency']() && S == this['login_index'])
                                return this['multiLogin']() ? (this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0) : game['LobbyNetMgr'].Inst.isOK ? (Laya['timer'].once(800, this, function() {
                                    S == y['login_index'] && (app.Log.log('_try_socio_check sociotype' + V + ' access_token:' + o), app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Check', {
                                        type: V,
                                        access_token: o
                                    }, function(Z, G) {
                                        S == y['login_index'] && (Z ? (y['showError'](game['Tools']['strOfLocalization'](2059), Z), app.Log['Error'](Z['message']), y['showContainerLogin']()) : (app.Log.log('oauth2Check res: ' + JSON['stringify'](G)), G['error'] ? (y['showError'](game['Tools']['strOfLocalization'](2062), G['error'].code), y['showContainerLogin']()) : G['has_account'] ? y['_try_login_socio'](S, V, o) : y['_try_regist_socio'](S, V, o)));
                                    }));
                                }), void 0) : (game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(G) {
                                    S == y['login_index'] && (G.open ? y['_try_socio_check'](S, V, o) : (G['maintenance'] ? Z['UI_Entrance_Maintenance'].Inst.show(G['maintenance']) : y['showInfo'](G.info), y['showContainerLogin']()));
                                })), void 0);
                        },
                        e['prototype']['_try_regist_socio'] = function(Z, S, V) {
                            var o = this;
                            if (!this['showEmergency']() && Z == this['login_index']) {
                                app.Log.log('_try_regist_socio sociotype' + S + ' access_token:' + V);
                                var y = Laya['LocalStorage']['getItem']('__ad_s');
                                y && (GameMgr.Inst['_ad_str'] = y);
                                var G = {};
                                G.type = S,
                                    G['access_token'] = V,
                                    G['device'] = GameMgr.Inst['get_device_info'](),
                                    GameMgr.Inst['_ad_str'] && (G['advertise_str'] = GameMgr.Inst['_ad_str']),
                                    7 == S && (G['email'] = game['LocalStorage']['getItem']('mail_account')),
                                    G['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    G.tag = GameMgr.Inst['getReportClientType'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Signup', G, function(y, G) {
                                        Z == o['login_index'] && (y ? (app.Log.log('oauth2Signup err:' + y), o['showError'](game['Tools']['strOfLocalization'](2059), y), app.Log['Error'](y['message']), o['showContainerLogin']()) : (app.Log.log('oauth2Signup res: ' + JSON['stringify'](G)), G['error'] ? (o['showError'](game['Tools']['strOfLocalization'](2060), G['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](G)])), o['showContainerLogin']()) : (app['PlayerBehaviorStatistic']['fb_trace_force'](app['EBehaviorType']['CompleteRegistration']), app['PlayerBehaviorStatistic']['google_trace_force'](app['EBehaviorType']['G_Role_create']), app['PlayerBehaviorStatistic']['tw_trace_force'](app['EBehaviorType']['TW_Signup']), o['_try_login_socio'](Z, S, V))));
                                    });
                            }
                        },
                        e['prototype']['_try_login_socio'] = function(S, V, o) {
                            var y = this;
                            if (S == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showError'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                app.Log.log('_try_login_socio sociotype' + V + ' access_token:' + o);
                                var G = GameMgr.Inst['get_device_info'](),
                                    e = game['Tools']['get_platform_currency']();
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Login', {
                                    type: V,
                                    access_token: o,
                                    reconnect: !1,
                                    device: G,
                                    random_key: GameMgr['device_id'],
                                    client_version: {
                                        resource: game['ResourceVersion']['version']
                                    },
                                    currency_platforms: e,
                                    client_version_string: GameMgr.Inst['getClientVersion'](),
                                    tag: GameMgr.Inst['getReportClientType']()
                                }, function(G, e) {
                                    S == y['login_index'] && (y['btn_login_cd'] = 0, G ? (app.Log.log('oauth2Login err:' + G), y['showError'](game['Tools']['strOfLocalization'](2061), G), y['showContainerLogin']()) : (app.Log.log('oauth2Login res: ' + JSON['stringify'](e)), e['error'] ? (156 == e['error'].code ? y['onLoginQueueError'](Laya['Handler']['create'](y, function() {
                                        y['_try_login_socio'](y['login_index'], V, o);
                                    })) : 503 == e['error'].code ? y['onLoginErrorProhibition'](e['error']) : y['showError']('', e['error'].code), y['showContainerLogin']()) : (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : V['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', o), GameMgr.Inst['sociotype'] = V, GameMgr.Inst['access_token'] = o, GameMgr['country'] = e['country'], GameMgr.Inst['account_id'] = e['account_id'], GameMgr.Inst['account_data'] = e['account'], Z['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](y, function() {
                                        Z['UI_User_Xieyi_enjp']['needCheckVersion'] ? Z['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](y, function() {
                                            y['_onLoginSuccess'](V, e);
                                        })) : y['_onLoginSuccess'](V, e);
                                    })))));
                                });
                            }
                        },
                        e['prototype']['_onLoginPengdingPhone'] = function() {},
                        e['prototype']['_onLoginSuccess'] = function(S, V, o) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(V),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                }
                            }));
                            var y = this;
                            if (void 0 === o && (o = !1), app.Log.log('登陆：' + JSON['stringify'](V)), GameMgr.Inst['account_id'] = V['account_id'], GameMgr.Inst['account_data'] = V['account'], Z['UI_ShiMingRenZheng']['renzhenged'] = V['is_id_card_authed'], GameMgr.Inst['account_numerical_resource'] = {}, V['account']['platform_diamond'])
                                for (var G = V['account']['platform_diamond'], e = 0; e < G['length']; e++)
                                    GameMgr.Inst['account_numerical_resource'][G[e].id] = G[e]['count'];
                            if (V['account']['skin_ticket'] && (GameMgr.Inst['account_numerical_resource']['100004'] = V['account']['skin_ticket']), V['account']['platform_skin_ticket'])
                                for (var x = V['account']['platform_skin_ticket'], e = 0; e < x['length']; e++)
                                    GameMgr.Inst['account_numerical_resource'][x[e].id] = x[e]['count'];
                            GameMgr.Inst['account_refresh_time'] = Laya['timer']['currTimer'],
                                V['game_info'] && (GameMgr.Inst['ingame'] = !0, GameMgr.Inst['mj_server_location'] = V['game_info']['location'], GameMgr.Inst['mj_game_token'] = V['game_info']['connect_token'], GameMgr.Inst['mj_game_uuid'] = V['game_info']['game_uuid']),
                                V['access_token'] && (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : S['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', V['access_token']), GameMgr.Inst['sociotype'] = S, GameMgr.Inst['access_token'] = V['access_token']);
                            var R = this,
                                s = function() {
                                    GameMgr.Inst['onLoadStart']('login'),
                                        Laya['LocalStorage']['removeItem']('__ad_s'),
                                        Z['UI_Loading'].Inst.show('load_lobby'),
                                        R['enable'] = !1,
                                        R['scene']['close'](),
                                        Z['UI_Entrance_Mail_Regist'].Inst['close'](),
                                        R['login_loading']['close'](),
                                        Z['UIMgr'].Inst['openLobbyUI'](Laya['Handler']['create'](R, function() {
                                            GameMgr.Inst['afterLogin'](),
                                                R['route_info']['onClose'](),
                                                GameMgr.Inst['account_data']['anti_addiction'] && Z['UIMgr'].Inst['ShowPreventAddiction'](),
                                                R['destroy'](),
                                                R['disposeRes'](),
                                                Z['UI_Add2Desktop'].Inst && (Z['UI_Add2Desktop'].Inst['destroy'](), Z['UI_Add2Desktop'].Inst = null);
                                        }), Laya['Handler']['create'](R, function(S) {
                                            return Z['UI_Loading'].Inst['setProgressVal'](0.2 * S);
                                        }, null, !1));
                                },
                                u = Laya['Handler']['create'](this, function() {
                                    0 != GameMgr.Inst['account_data']['frozen_state'] ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchRefundOrder', {}, function(S, V) {
                                        S ? (app.Log.log('fetchRefundOrder err:' + S), y['showError'](game['Tools']['strOfLocalization'](2061), S), y['showContainerLogin']()) : (Z['UI_Refund']['orders'] = V['orders'], Z['UI_Refund']['clear_deadline'] = V['clear_deadline'], Z['UI_Refund']['message'] = V['message'], s());
                                    }) : s();
                                });
                            if (Z['UI_Loading']['Loading_Images'] = [], GameMgr.Inst['account_data']['loading_image'])
                                for (var n = 0, k = GameMgr.Inst['account_data']['loading_image']; n < k['length']; n++) {
                                    var r = k[n];
                                    cfg['item_definition']['loading_image'].get(r) && Z['UI_Loading']['Loading_Images'].push(r);
                                }
                            Z['UI_Loading']['loadNextCG'](),
                                'chs' != GameMgr['client_type'] || V['account']['phone_verify'] ? u.run() : (Z['UI_Entrance_Mail_Regist'].Inst['close'](), this['login_loading']['close'](), this['container_login']['visible'] = !1, Z['UI_Bind_Phone1'].Inst.show(!0, Laya['Handler']['create'](this, function() {
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchPhoneLoginBind', {}, function(S, V) {
                                        S || V['error'] ? y['showError'](S, V['error']) : 0 == V['phone_login'] ? Z['UI_Create_Phone_Account'].Inst.show(u) : Z['UI_Canot_Create_Phone_Account'].Inst.show(u);
                                    });
                                })));
                        },
                        e['prototype']['showMailLogin'] = function() {
                            this['page_maillogin'].show();
                        },
                        e['prototype']['showInfo'] = function(S) {
                            var V = '';
                            S && (V += S),
                                Z['UI_Entrance_Error'].Inst.show(V, 0, !1);
                        },
                        e['prototype']['showError'] = function(S, V, o) {
                            void 0 === V && (V = -1),
                                void 0 === o && (o = '');
                            var y = '';
                            S && (y += S), -1 != V && (y['length'] > 0 && (y += ','), y += cfg.info['error'].get(V) ? cfg.info['error'].get(V)[GameMgr['client_language']] : game['Tools']['strOfLocalization'](2063)),
                                o && (y += ', info:' + o),
                                Z['UI_Entrance_Error'].Inst.show(y, V, !1);
                        },
                        e['prototype']['updateServer'] = function() {
                            this['route_info']['update']();
                        },
                        e['prototype']['multiLogin'] = function() {
                            var Z = Laya['LocalStorage']['getItem']('dolllt');
                            return Z && '' != Z ? game['Tools']['currentTime'] < parseFloat(Z) + 1.5 && parseFloat(Z) < game['Tools']['currentTime'] + 1800 : !1;
                        },
                        e['prototype']['disposeRes'] = function() {
                            Laya['Loader']['clearTextureRes']('res/atlas/' + game['Tools']['localUISrc']('myres/entrance.atlas'));
                            var Z = '';
                            Z = 'chs' != GameMgr['client_language'] ? 'scene/Assets/Resource/entrance/icon_color_' + GameMgr['client_language'] + '.png' : 'scene/Assets/Resource/entrance/icon_color.png';
                            var S = [];
                            S.push(Z),
                                S.push('scene/Assets/Resource/entrance/Materials/icon_color.lmat'),
                                S.push('scene/Assets/Resource/entrance/Materials/blackmask.lmat');
                            for (var V = 0; V < S['length']; V++) {
                                var o = Laya['loader']['getRes'](S[V]);
                                o && o['dispose'](!0);
                            }
                        },
                        e['prototype']['showEmergency'] = function() {
                            return GameMgr.Inst['in_emergence'] && this['showInfo'](GameMgr.Inst['emergence_notice']),
                                GameMgr.Inst['in_emergence'];
                        },
                        e['prototype']['onLoginErrorProhibition'] = function(S) {
                            var V = 0;
                            S['u32_params'] && S['u32_params']['length'] >= 1 && (V = S['u32_params'][0]),
                                6 == V ? 'kr' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? Z['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization']('kr' == GameMgr['client_type'] ? 8026 : 8035, [game['Tools']['time2YearMounthDate'](S['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](S['u32_params'][1], 'chs_t' == GameMgr['client_type'])])) : this['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](S['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](S['u32_params'][1])])) : Z['UI_Entrance_Prohibition'].Inst.show(S);
                        },
                        e['prototype']['onLoginQueueError'] = function(S) {
                            var V = this;
                            this['queue_finish_handler'] = Laya['Handler']['create'](this, this['onLoginQueueFinished']),
                                app['NetAgent']['AddListener2Lobby']('NotifyLoginQueueFinished', this['queue_finish_handler']),
                                this['retry_handler'] = S,
                                this['page_maillogin']['locking'] = !0,
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchQueueInfo', {}, function(S, o) {
                                    V['page_maillogin']['locking'] = !1,
                                        S || o['error'] ? (V['onCancelQueue'](), S ? Z['UI_Entrance_Error'].Inst.show(game['Tools']['strOfLocalization'](3766), 0, !1) : V['showError'](S, o['error'])) : V['retry_handler'] && Z['UI_Entrance_Queue'].Inst.show(o['remain'], o.rank);
                                });
                        },
                        e['prototype']['onCancelQueue'] = function() {
                            this['retry_handler'] = null,
                                game['LobbyNetMgr'].Inst['Close'](),
                                this['btn_login_cd'] = Laya['timer']['currTimer'] + 500,
                                Laya['timer'].once(500, this, function() {
                                    game['LobbyNetMgr'].Inst['OpenConnect'](null);
                                }),
                                this['showContainerLogin'](),
                                this['onLoginQueueFinished']();
                        },
                        e['prototype']['onLoginQueueFinished'] = function() {
                            var S = this;
                            app['NetAgent']['RemoveListener2Lobby']('NotifyLoginQueueFinished', this['queue_finish_handler']),
                                Z['UI_Entrance_Queue'].Inst['enable'] && Z['UI_Entrance_Queue'].Inst['close'](),
                                this['retry_handler'] && Laya['timer'].once(200, this, function() {
                                    S['retry_handler'] && (S['retry_handler'].run(), S['retry_handler'] = null);
                                });
                        },
                        e['prototype']['onDisable'] = function() {
                            this['scene']['close'](),
                                this['login_loading']['close'](),
                                Laya['timer']['clearAll'](this['page_maillogin']),
                                this['route_info']['onClose']();
                        },
                        e.Inst = null,
                        e;
                }
                (Z['UIBase']);
            Z['UI_Entrance'] = G;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionBabei play data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var V = S.seat,
                                o = mjcore['MJPai']['Create']('4z');
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['AddBabei'](o, S['moqie'], !0),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['PlaySound']('act_babei');
                            var y = !1;
                            S['tile_state'] && S['tile_state'] > 0 && (y = !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                V == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['onBabei'](o, y, !1) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['onBabei'](S['moqie'], y, !1),
                                S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !1),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionBabei fastplay data:' + JSON['stringify'](S) + ' usetime:' + V),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create']('4z');
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddBabei'](y, S['moqie'], !1);
                            var G = !1;
                            S['tile_state'] && S['tile_state'] > 0 && (G = !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['onBabei'](y, G, !0) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['onBabei'](S['moqie'], G, !0),
                                S['operation'] && -1 != V && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !0),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionBabei record data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create']('4z');
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddBabei'](y, S['moqie'], !0),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['PlaySound']('act_babei');
                            var G = !1;
                            if (S['tile_state'] && S['tile_state'] > 0 && (G = !0), S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['onBabei'](y, G, !1) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordBabei'](y, S['moqie'], G, !1), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var e = 0; e < S['operations']['length']; e++)
                                    Z['ActionOperation'].ob(S['operations'][e], V, 450);
                            return Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                1000;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionBabei fastrecord data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create']('4z');
                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddBabei'](y, S['moqie'], !1);
                            var G = !1;
                            if (S['tile_state'] && S['tile_state'] > 0 && (G = !0), S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['onBabei'](y, G, !0) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordBabei'](y, S['moqie'], G, !0), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operations'])
                                for (var e = 0; e < S['operations']['length']; e++)
                                    Z['ActionOperation'].ob(S['operations'][e], V, 450);
                            Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionBabei'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this,
                                o = Z['DesktopMgr'].Inst.mode == Z['EMJMode'].play || Z['DesktopMgr'].Inst['record_show_anim'];
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice']();
                            var y = !1;
                            Laya['timer'].once(100, this, function() {
                                var G = S['hules'],
                                    e = 0;
                                if (G[0].zimo) {
                                    for (var x = G[0].seat, R = [], s = 0; s < G[0].hand['length']; s++)
                                        R.push(mjcore['MJPai']['Create'](G[0].hand[s]));
                                    if (R = R.sort(mjcore['MJPai']['Distance']), uiscript['UI_Huleshow'].Inst['showZimo']([Z['DesktopMgr'].Inst['seat2LocalPosition'](x)]), S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), e += 1400, o && (G[0]['title'] && '' != G[0]['title'] || G[0]['title_id']) && (Laya['timer'].once(e, V, function() {
                                            uiscript['UI_HuCutIn'].show(Z['DesktopMgr'].Inst['player_datas'][x]['avatar_id']),
                                                y = !0;
                                        }), e += 2000), Laya['timer'].once(e, V, function() {
                                            x == Z['DesktopMgr'].Inst.seat && Z['DesktopMgr'].Inst['mainrole']['HulePrepare'](R, G[0]['hu_tile'], G[0].zimo),
                                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](x)].Hule(R, mjcore['MJPai']['Create'](G[0]['hu_tile']), G[0].zimo);
                                        }), o) {
                                        var u = 0,
                                            n = G[0].seat;
                                        n >= 0 && (u = Z['DesktopMgr'].Inst['player_effects'][n][game['EView']['hupai_effect']]),
                                            e += '305215' == u || '305219' == u ? 5000 : '308021' == u ? 3800 : '305217' == u ? 3800 : '308026' == u ? 4200 : 2800;
                                    } else
                                        e += 500;
                                    x == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                } else {
                                    if (Laya['timer'].once(e, V, function() {
                                            for (var S = [], V = 0; V < G['length']; V++)
                                                S.push(Z['DesktopMgr'].Inst['seat2LocalPosition'](G[V].seat));
                                            uiscript['UI_Huleshow'].Inst['showRong'](S);
                                        }), e += 1500, o)
                                        for (var k = function(S) {
                                                var o = G[S].seat;
                                                (G[S]['title'] && '' != G[S]['title'] || G[S]['title_id']) && (Laya['timer'].once(e, V, function() {
                                                    uiscript['UI_HuCutIn'].show(Z['DesktopMgr'].Inst['player_datas'][o]['avatar_id']),
                                                        y = !0;
                                                }), e += 2000);
                                            }, s = 0; s < G['length']; s++)
                                            k(s);
                                    for (var s = 0; s < G['length']; s++) {
                                        var r = G[s].seat;
                                        if (r == Z['DesktopMgr'].Inst.seat) {
                                            for (var M = [], g = 0; g < G[s].hand['length']; g++)
                                                M.push(mjcore['MJPai']['Create'](G[s].hand[g]));
                                            M = M.sort(mjcore['MJPai']['Distance']),
                                                Z['DesktopMgr'].Inst['mainrole']['HulePrepare'](M, G[s]['hu_tile'], G[s].zimo);
                                        }
                                    }
                                    if (Laya['timer'].once(e, V, function() {
                                            if (o) {
                                                var S = 0,
                                                    V = G[0].seat;
                                                V >= 0 && (S = Z['DesktopMgr'].Inst['player_effects'][V][game['EView']['hupai_effect']]),
                                                    Z['DesktopMgr'].Inst['ShowHuleEffect'](Z['DesktopMgr'].Inst['lastqipai'], Z['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], S, Z['DesktopMgr'].Inst['lastpai_seat'], Z['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            }
                                            for (var y = 0; y < G['length']; y++) {
                                                for (var e = [], x = 0; x < G[y].hand['length']; x++)
                                                    e.push(mjcore['MJPai']['Create'](G[y].hand[x]));
                                                e = e.sort(mjcore['MJPai']['Distance']),
                                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](G[y].seat)].Hule(e, mjcore['MJPai']['Create'](G[y]['hu_tile']), G[y].zimo),
                                                    G[y].seat == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                            }
                                        }), o) {
                                        var u = 0,
                                            r = G[0].seat;
                                        r >= 0 && (u = Z['DesktopMgr'].Inst['player_effects'][r][game['EView']['hupai_effect']]),
                                            e += '305215' == u || '305219' == u ? 4200 : '308021' == u ? 3000 : '305217' == u ? 3000 : '308026' == u ? 3400 : 2000;
                                    } else
                                        e += 600;
                                }
                                for (var s = 0; s < S['delta_scores']['length']; s++)
                                    S['delta_scores'][s] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](s, 'emoji_7', -1), Z['DesktopMgr'].Inst['onRoundEnd'](s, 1)) : S['delta_scores'][s] < 0 && (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](s, 'emoji_8', -1), Z['DesktopMgr'].Inst['onRoundEnd'](s, 0));
                                Laya['timer'].once(e, V, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](S, !1),
                                        Z['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                            });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](S)),
                                Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice'](),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UIMgr'].Inst['ShowWin'](S, !1);
                        },
                        V['record'] = function(Z) {
                            return this.play(Z),
                                100000;
                        },
                        V['fastrecord'] = function(S) {
                            Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice'](),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                uiscript['UIMgr'].Inst['ShowWin'](S, !1);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionHule'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this;
                            app.Log.log('ActionNewRound play data:' + JSON['stringify'](S)),
                                Z['BgmListMgr'].type == Z['E_Bgm_Type'].mj ? Z['BgmListMgr']['PlayMJBgm'](Z['BgmListMgr']['playing_bgm']) : Z['BgmListMgr']['PlayMJBgm'](),
                                Z['DesktopMgr'].Inst['index_change'] = S['chang'],
                                Z['DesktopMgr'].Inst['index_chuanma_ju'] = S['ju_count'],
                                Z['DesktopMgr'].Inst['index_ju'] = S.ju,
                                Z['DesktopMgr'].Inst['index_ben'] = S.ben,
                                Z['DesktopMgr'].Inst['index_player'] = S.ju,
                                Z['DesktopMgr'].Inst['gameing'] = !0,
                                Z['DesktopMgr'].Inst['left_tile_count'] = 69,
                                Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi4'] ? Z['DesktopMgr'].Inst['left_tile_count'] = 69 : Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi3'] && (Z['DesktopMgr'].Inst['left_tile_count'] = 50),
                                S['left_tile_count'] && (Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count']),
                                Z['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                Z['DesktopMgr'].Inst['setAutoHule'](!1),
                                Z['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                Z['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                Z['DesktopMgr'].Inst['SetChangJuShow'](Z['DesktopMgr'].Inst['index_change'], Z['DesktopMgr'].Inst['index_ju'], Z['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](Z['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['Reset'](), Z['DesktopMgr'].Inst['players'][o]['setSeat'](Z['DesktopMgr'].Inst['localPosition2Seat'](o));
                            Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                Z['DesktopMgr'].Inst.md5 = S.md5,
                                Z['DesktopMgr'].Inst['choosed_pai'] = null,
                                Z['DesktopMgr'].Inst.dora = [];
                            var y = 0;
                            0 == Z['DesktopMgr'].Inst['index_change'] && 0 == Z['DesktopMgr'].Inst['index_ju'] && 0 == Z['DesktopMgr'].Inst['index_ben'] && (Z['DesktopMgr'].Inst['is_dora3_mode']() && !Z['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openDora3BeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_peipai_open_mode']() && (uiscript['UI_DesktopInfo'].Inst['openPeipaiOpenBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openMuyuOpenBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_shilian_mode']() && (uiscript['UI_DesktopInfo'].Inst['openShilianOpenBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_xiuluo_mode']() && (uiscript['UI_DesktopInfo'].Inst['openXiuluoOpenBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_top_match']() && (uiscript['UI_DesktopInfo'].Inst['openTopMatchOpenBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_jiuchao_mode']() && (uiscript['UI_DesktopInfo'].Inst['openJiuChaoBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_reveal_mode']() && (uiscript['UI_DesktopInfo'].Inst['openAnPaiBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_DesktopInfo'].Inst['openZhanxingBeginEffect'](), y = 1300), Z['DesktopMgr'].Inst['is_tianming_mode']() && (uiscript['UI_DesktopInfo'].Inst['openTianmingBeginEffect'](), y = 1300)),
                                Z['DesktopMgr'].Inst['is_chuanma_mode']() && 0 == Z['DesktopMgr'].Inst['index_chuanma_ju'] && (uiscript['UI_DesktopInfo'].Inst['openChuanmaBeginEffect'](), y = 1300);
                            var G = !1;
                            void 0 != S.al && null != S.al && (G = S.al),
                                G && (uiscript['UI_AL'].Show(), y = 1300),
                                Laya['timer'].once(y, this, function() {
                                    for (var o = [], y = 0; y < S['tiles']['length']; y++)
                                        o.push(mjcore['MJPai']['Create'](S['tiles'][y]));
                                    var G = [],
                                        e = [];
                                    if (S['opens'])
                                        for (var y = 0; y < S['opens']['length']; y++)
                                            if (S['opens'][y].seat == Z['DesktopMgr'].Inst.seat) {
                                                G = S['opens'][y]['tiles'],
                                                    e = S['opens'][y]['count'];
                                                break;
                                            }
                                    Z['DesktopMgr'].Inst['mainrole']['NewGame'](o, G, e, !1),
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0);
                                    for (var y = 1; 4 > y; y++) {
                                        var x = Z['DesktopMgr'].Inst['localPosition2Seat'](y);
                                        if (-1 != x) {
                                            var R = [],
                                                s = [];
                                            if (S['opens'])
                                                for (var u = 0; u < S['opens']['length']; u++)
                                                    if (S['opens'][u].seat == x) {
                                                        R = S['opens'][u]['tiles'],
                                                            s = S['opens'][u]['count'];
                                                        break;
                                                    }
                                            Z['DesktopMgr'].Inst['players'][y]['NewGame'](13 + (x == Z['DesktopMgr'].Inst['index_ju'] ? 1 : 0), R, s, !1, '');
                                        }
                                    }
                                    if (Z['DesktopMgr'].Inst['is_huansanzhang_mode']())
                                        Laya['timer'].once(1500, V, function() {
                                            Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                                Z['ActionOperation'].play(S['operation']);
                                        });
                                    else {
                                        if (Z['DesktopMgr'].Inst['is_dora3_mode']() && Laya['timer'].once(1000, V, function() {
                                                uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine']();
                                            }), Z['DesktopMgr'].Inst['is_tianming_mode']())
                                            for (var y = 0; 4 > y; y++) {
                                                var x = Z['DesktopMgr'].Inst['localPosition2Seat'](y); -
                                                1 != x && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](Z['DesktopMgr'].Inst['localPosition2Seat'](y), 5);
                                            }
                                        Laya['timer'].once(1200, V, function() {
                                                if (S['doras'] && S['doras']['length'] > 0)
                                                    for (var V = 0; V < S['doras']['length']; V++)
                                                        Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][V])), uiscript['UI_DesktopInfo'].Inst['setDora'](V, Z['DesktopMgr'].Inst.dora[V]);
                                                for (var V = 0; 4 > V; V++)
                                                    Z['DesktopMgr'].Inst['players'][V]['OnDoraRefresh']();
                                                if (Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                                    var o = {
                                                        tingpais: S['tingpais0'],
                                                        operation: S['operation']
                                                    };
                                                    uiscript['UI_TingPai'].Inst['setData0'](o);
                                                } else {
                                                    var o = {
                                                        tingpais: S['tingpais1']
                                                    };
                                                    uiscript['UI_TingPai'].Inst['setData1'](o, !1);
                                                }
                                                Z['DesktopMgr'].Inst['ActionRunComplete']();
                                            }),
                                            void 0 != S['operation'] && Laya['timer'].once(1000, V, function() {
                                                Z['ActionOperation'].play(S['operation']);
                                            });
                                    }
                                }),
                                Z['DesktopMgr'].Inst['fetchLinks']();
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](S) + ' usetime:' + V),
                                Z['DesktopMgr'].Inst['index_change'] = S['chang'],
                                Z['DesktopMgr'].Inst['index_ju'] = S.ju,
                                Z['DesktopMgr'].Inst['index_ben'] = S.ben,
                                Z['DesktopMgr'].Inst['index_player'] = S.ju,
                                Z['DesktopMgr'].Inst['index_chuanma_ju'] = S['ju_count'],
                                Z['DesktopMgr'].Inst['gameing'] = !0,
                                Z['DesktopMgr'].Inst['left_tile_count'] = 69,
                                Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi4'] ? Z['DesktopMgr'].Inst['left_tile_count'] = 69 : Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi3'] && (Z['DesktopMgr'].Inst['left_tile_count'] = 50),
                                S['left_tile_count'] && (Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count']),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                Z['DesktopMgr'].Inst['setAutoHule'](!1),
                                Z['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                Z['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                Z['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                Z['DesktopMgr'].Inst['SetChangJuShow'](Z['DesktopMgr'].Inst['index_change'], Z['DesktopMgr'].Inst['index_ju'], Z['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](Z['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1);
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['Reset'](), Z['DesktopMgr'].Inst['players'][o]['setSeat'](Z['DesktopMgr'].Inst['localPosition2Seat'](o));
                            Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                Z['DesktopMgr'].Inst.md5 = S.md5,
                                Z['DesktopMgr'].Inst['choosed_pai'] = null,
                                Z['DesktopMgr'].Inst.dora = [];
                            for (var y = [], o = 0; o < S['tiles']['length']; o++)
                                y.push(mjcore['MJPai']['Create'](S['tiles'][o]));
                            var G = [],
                                e = [];
                            if (S['opens'])
                                for (var o = 0; o < S['opens']['length']; o++)
                                    if (S['opens'][o].seat == Z['DesktopMgr'].Inst.seat) {
                                        G = S['opens'][o]['tiles'],
                                            e = S['opens'][o]['count'];
                                        break;
                                    }
                            Z['DesktopMgr'].Inst['mainrole']['NewGame'](y, G, e, !0);
                            for (var o = 1; 4 > o; o++) {
                                var x = Z['DesktopMgr'].Inst['localPosition2Seat'](o);
                                if (-1 != x) {
                                    var R = [],
                                        s = [];
                                    if (S['opens'])
                                        for (var u = 0; u < S['opens']['length']; u++)
                                            if (S['opens'][u].seat == x) {
                                                R = S['opens'][u]['tiles'],
                                                    s = S['opens'][u]['count'];
                                                break;
                                            }
                                    Z['DesktopMgr'].Inst['players'][o]['NewGame'](13 + (x == Z['DesktopMgr'].Inst['index_ju'] ? 1 : 0), R, s, !0, '');
                                }
                            }
                            if (Z['DesktopMgr'].Inst['is_chuanma_mode']())
                                S['operation'] && -1 != V && Laya['timer'].once(100, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V + 100);
                                });
                            else if (Z['DesktopMgr'].Inst['is_huansanzhang_mode']())
                                S['operation'] && -1 != V && Laya['timer'].once(100, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V + 100);
                                });
                            else {
                                if (Z['DesktopMgr'].Inst['is_tianming_mode']())
                                    for (var o = 0; 4 > o; o++) {
                                        var x = Z['DesktopMgr'].Inst['localPosition2Seat'](o); -
                                        1 != x && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](Z['DesktopMgr'].Inst['localPosition2Seat'](o), 5);
                                    }
                                if (S['doras'] && S['doras']['length'] > 0)
                                    for (var o = 0; o < S['doras']['length']; o++)
                                        Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][o])), uiscript['UI_DesktopInfo'].Inst['setDora'](o, Z['DesktopMgr'].Inst.dora[o]);
                                for (var o = 0; 4 > o; o++)
                                    Z['DesktopMgr'].Inst['players'][o]['OnDoraRefresh']();
                                if (Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat) {
                                    var n = {
                                        tingpais: S['tingpais0'],
                                        operation: S['operation']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData0'](n);
                                } else {
                                    var n = {
                                        tingpais: S['tingpais1']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData1'](n, !0);
                                }
                                S['operation'] && -1 != V && Laya['timer'].once(100, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V + 100);
                                });
                            }
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionNewRound record data:' + JSON['stringify'](S)),
                                Z['DesktopMgr'].Inst['ClearOperationShow'](),
                                Z['BgmListMgr'].type == Z['E_Bgm_Type'].mj ? Z['BgmListMgr']['PlayMJBgm'](Z['BgmListMgr']['playing_bgm']) : Z['BgmListMgr']['PlayMJBgm'](),
                                Z['DesktopMgr'].Inst['index_change'] = S['chang'],
                                Z['DesktopMgr'].Inst['index_ju'] = S.ju,
                                Z['DesktopMgr'].Inst['index_ben'] = S.ben,
                                Z['DesktopMgr'].Inst['index_player'] = S.ju,
                                Z['DesktopMgr'].Inst['index_chuanma_ju'] = S['ju_count'],
                                Z['DesktopMgr'].Inst['gameing'] = !0,
                                Z['DesktopMgr'].Inst['left_tile_count'] = 69,
                                Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi4'] ? Z['DesktopMgr'].Inst['left_tile_count'] = 69 : Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi3'] && (Z['DesktopMgr'].Inst['left_tile_count'] = 50),
                                S['left_tile_count'] && (Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count']),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                Z['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                Z['DesktopMgr'].Inst['SetChangJuShow'](Z['DesktopMgr'].Inst['index_change'], Z['DesktopMgr'].Inst['index_ju'], Z['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](Z['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['setSeat'](Z['DesktopMgr'].Inst['localPosition2Seat'](o));
                            Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                Z['DesktopMgr'].Inst['choosed_pai'] = null,
                                Z['DesktopMgr'].Inst.dora = [],
                                Z['AudioMgr']['PlayAudio'](216);
                            for (var o = 0; 4 > o; o++) {
                                var y = [],
                                    G = 'tiles' + o['toString']();
                                if (S[G] && S[G]['length'] > 0) {
                                    for (var e = 0; e < S[G]['length']; e++)
                                        y.push(mjcore['MJPai']['Create'](S[G][e]));
                                    var x = [],
                                        R = [];
                                    if (S['opens'])
                                        for (var e = 0; e < S['opens']['length']; e++)
                                            if (S['opens'][e].seat == o) {
                                                x = S['opens'][e]['tiles'],
                                                    R = S['opens'][e]['count'];
                                                break;
                                            }
                                    o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['RecordNewGame'](y, x, R) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['RecordNewGame'](y, x, R);
                                }
                            }
                            if (Z['DesktopMgr'].Inst['setScores'](S['scores']), Z['DesktopMgr'].Inst.md5 = S.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), Z['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var s = S['operations'][Z['DesktopMgr'].Inst['localPosition2Seat'](Z['DesktopMgr'].Inst.seat)];
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && s && Z['ActionOperation'].ob(s, V, 1000);
                            } else {
                                if (Z['DesktopMgr'].Inst['is_tianming_mode']())
                                    for (var o = 0; 4 > o; o++) {
                                        var u = Z['DesktopMgr'].Inst['localPosition2Seat'](o); -
                                        1 != u && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](Z['DesktopMgr'].Inst['localPosition2Seat'](o), 5);
                                    }
                                if (S['doras'] && S['doras']['length'] > 0)
                                    for (var o = 0; o < S['doras']['length']; o++)
                                        Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][o])), uiscript['UI_DesktopInfo'].Inst['setDora'](o, Z['DesktopMgr'].Inst.dora[o]);
                                else
                                    S.dora && '' != S.dora && (Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, Z['DesktopMgr'].Inst.dora[0]));
                                for (var o = 0; 4 > o; o++)
                                    Z['DesktopMgr'].Inst['players'][o]['OnDoraRefresh']();
                                if (S['tingpai'])
                                    for (var o = 0; o < S['tingpai']['length']; o++)
                                        S['tingpai'][o].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][o].seat, S['tingpai'][o]['tingpais1']);
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                            }
                            return S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['paipu'] && (S['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](S['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                300;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionNewRound fastrecord data:' + JSON['stringify'](S)),
                                Z['BgmListMgr'].type == Z['E_Bgm_Type'].mj ? Z['BgmListMgr']['PlayMJBgm'](Z['BgmListMgr']['playing_bgm']) : Z['BgmListMgr']['PlayMJBgm'](),
                                Z['DesktopMgr'].Inst['ClearOperationShow'](),
                                Z['DesktopMgr'].Inst['index_change'] = S['chang'],
                                Z['DesktopMgr'].Inst['index_ju'] = S.ju,
                                Z['DesktopMgr'].Inst['index_ben'] = S.ben,
                                Z['DesktopMgr'].Inst['index_player'] = S.ju,
                                Z['DesktopMgr'].Inst['index_chuanma_ju'] = S['ju_count'],
                                Z['DesktopMgr'].Inst['gameing'] = !0,
                                Z['DesktopMgr'].Inst['left_tile_count'] = 69,
                                Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi4'] ? Z['DesktopMgr'].Inst['left_tile_count'] = 69 : Z['DesktopMgr'].Inst['rule_mode'] == Z['ERuleMode']['Liqi3'] && (Z['DesktopMgr'].Inst['left_tile_count'] = 50),
                                S['left_tile_count'] && (Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count']),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                Z['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                Z['DesktopMgr'].Inst['SetChangJuShow'](Z['DesktopMgr'].Inst['index_change'], Z['DesktopMgr'].Inst['index_ju'], Z['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](Z['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                            for (var o = 0; 4 > o; o++)
                                Z['DesktopMgr'].Inst['players'][o]['setSeat'](Z['DesktopMgr'].Inst['localPosition2Seat'](o));
                            Z['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](Z['DesktopMgr'].Inst['index_ju'] == Z['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['choosed_pai'] = null,
                                Z['DesktopMgr'].Inst.dora = [];
                            for (var o = 0; 4 > o; o++) {
                                var y = [],
                                    G = 'tiles' + o['toString']();
                                if (S[G] && S[G]['length'] > 0) {
                                    for (var e = 0; e < S[G]['length']; e++)
                                        y.push(mjcore['MJPai']['Create'](S[G][e]));
                                    var x = [],
                                        R = [];
                                    if (S['opens'])
                                        for (var e = 0; e < S['opens']['length']; e++)
                                            if (S['opens'][e].seat == o) {
                                                x = S['opens'][e]['tiles'],
                                                    R = S['opens'][e]['count'];
                                                break;
                                            }
                                    o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['RecordNewGame'](y, x, R) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['RecordNewGame'](y, x, R);
                                }
                            }
                            if (Z['DesktopMgr'].Inst['setScores'](S['scores']), Z['DesktopMgr'].Inst.md5 = S.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), Z['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var s = S['operations'][Z['DesktopMgr'].Inst['localPosition2Seat'](Z['DesktopMgr'].Inst.seat)];
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && s && Z['ActionOperation'].ob(s, V, 1000);
                            } else {
                                if (Z['DesktopMgr'].Inst['is_tianming_mode']())
                                    for (var o = 0; 4 > o; o++) {
                                        var u = Z['DesktopMgr'].Inst['localPosition2Seat'](o); -
                                        1 != u && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](Z['DesktopMgr'].Inst['localPosition2Seat'](o), 5);
                                    }
                                if (S['doras'] && S['doras']['length'] > 0)
                                    for (var o = 0; o < S['doras']['length']; o++)
                                        Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S['doras'][o])), uiscript['UI_DesktopInfo'].Inst['setDora'](o, Z['DesktopMgr'].Inst.dora[o]);
                                else
                                    S.dora && '' != S.dora && (Z['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](S.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, Z['DesktopMgr'].Inst.dora[0]));
                                for (var o = 0; 4 > o; o++)
                                    Z['DesktopMgr'].Inst['players'][o]['OnDoraRefresh']();
                                if (S['tingpai'])
                                    for (var o = 0; o < S['tingpai']['length']; o++)
                                        S['tingpai'][o].seat != Z['DesktopMgr'].Inst['index_ju'] && Z['DesktopMgr'].Inst['setTingpai'](S['tingpai'][o].seat, S['tingpai'][o]['tingpais1']);
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 1000);
                            }
                            Z['DesktopMgr'].Inst.mode == Z['EMJMode']['paipu'] && (S['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](S['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionNewRound'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionChiPengGang play data:' + JSON['stringify'](S));
                            var V = S.seat,
                                o = new mjcore['MJMing']();
                            o.type = S.type,
                                o.from = S['froms'],
                                o.pais = [];
                            for (var y = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)], G = 0; G < S['tiles']['length']; G++) {
                                var e = mjcore['MJPai']['Create'](S['tiles'][G]);
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && e['touming'] && S['froms'][G] != V && (e['touming'] = !1),
                                    o.pais.push(e);
                            }
                            for (var x = [], G = 0; G < o.pais['length']; G++)
                                !S['tile_states'] || S['tile_states']['length'] <= G ? x.push(0) : x.push(S['tile_states'][G]);
                            Laya['timer'].once(600, this, function() {
                                    try {
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                            y['AddMing'](o, x),
                                            o.type == mjcore['E_Ming']['gang_ming'] && (Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                    } catch (V) {
                                        var G = {};
                                        G['error'] = V['message'],
                                            G['stack'] = V['stack'],
                                            G['method'] = 'addming600',
                                            G.name = 'ActionChiPengGang',
                                            GameMgr.Inst['onFatalError'](G);
                                    }
                                }),
                                V != Z['DesktopMgr'].Inst.seat || o.type != mjcore['E_Ming']['gang_an'] && o.type != mjcore['E_Ming']['gang_ming'] || (Z['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var R = '',
                                s = '';
                            switch (o.type) {
                                case mjcore['E_Ming'].kezi:
                                    R = 'emoji_4',
                                        s = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    R = 'emoji_2',
                                        s = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    R = 'emoji_6',
                                        s = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z['DesktopMgr'].Inst['index_player'], R, 2000),
                                Z['DesktopMgr'].Inst['index_player'] = V,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z['DesktopMgr'].Inst['index_player'], s, 2000),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi'].play(S.liqi),
                                S['operation'] && Laya['timer'].once(600, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                S['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                            var u = '';
                            switch (o.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    u = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    u = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    u = 'act_pon';
                            }
                            var n = y['score'];
                            S['scores'] && S['scores']['length'] > 0 && Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                y['PlaySound'](u, y['score'] - n),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](S);
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionChiPengGang fastplay data:' + JSON['stringify'](S) + ' usetime:' + V);
                            var o = S.seat,
                                y = new mjcore['MJMing']();
                            y.type = S.type,
                                y.from = S['froms'],
                                y.pais = [];
                            for (var G = 0; G < S['tiles']['length']; G++) {
                                var e = mjcore['MJPai']['Create'](S['tiles'][G]);
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && e['touming'] && S['froms'][G] != o && (e['touming'] = !1),
                                    y.pais.push(e);
                            }
                            for (var x = [], G = 0; G < y.pais['length']; G++)
                                !S['tile_states'] || S['tile_states']['length'] <= G ? x.push(0) : x.push(S['tile_states'][G]);
                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddMing'](y, x, !1),
                                y.type == mjcore['E_Ming']['gang_ming'] && (Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                o != Z['DesktopMgr'].Inst.seat || y.type != mjcore['E_Ming']['gang_an'] && y.type != mjcore['E_Ming']['gang_ming'] || (Z['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['fastplay'](S.liqi, 0),
                                S['operation'] && -1 != V && Laya['timer'].once(600, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }),
                                S['scores'] && S['scores']['length'] > 0 && Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                S['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](S);
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionChiPengGang record data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = new mjcore['MJMing']();
                            y.type = S.type,
                                y.from = S['froms'],
                                y.pais = [];
                            for (var G = 0; G < S['tiles']['length']; G++) {
                                var e = mjcore['MJPai']['Create'](S['tiles'][G]);
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && e['touming'] && S['froms'][G] != o && (e['touming'] = !1),
                                    y.pais.push(e);
                            }
                            for (var x = [], G = 0; G < y.pais['length']; G++)
                                !S['tile_states'] || S['tile_states']['length'] <= G ? x.push(0) : x.push(S['tile_states'][G]);
                            Laya['timer'].once(600, this, function() {
                                    S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                        Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                        Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddMing'](y, x),
                                        y.type == mjcore['E_Ming']['gang_ming'] && (Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                }),
                                o != Z['DesktopMgr'].Inst.seat || y.type != mjcore['E_Ming']['gang_an'] && y.type != mjcore['E_Ming']['gang_ming'] || (Z['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var R = '',
                                s = '';
                            switch (y.type) {
                                case mjcore['E_Ming'].kezi:
                                    R = 'emoji_4',
                                        s = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    R = 'emoji_2',
                                        s = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    R = 'emoji_6',
                                        s = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z['DesktopMgr'].Inst['index_player'], R, 2000),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z['DesktopMgr'].Inst['index_player'], s, 2000),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['record'](S.liqi),
                                S['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']);
                            var u = '';
                            switch (y.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    u = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    u = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    u = 'act_pon';
                            }
                            var n = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)],
                                k = n['score'];
                            return S['scores'] && S['scores']['length'] > 0 && Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                n['PlaySound'](u, n['score'] - k),
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 500),
                                1200;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionChiPengGang fastrecord data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = new mjcore['MJMing']();
                            y.type = S.type,
                                y.from = S['froms'],
                                y.pais = [];
                            for (var G = 0; G < S['tiles']['length']; G++) {
                                var e = mjcore['MJPai']['Create'](S['tiles'][G]);
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && e['touming'] && S['froms'][G] != o && (e['touming'] = !1),
                                    y.pais.push(e);
                            }
                            for (var x = [], G = 0; G < y.pais['length']; G++)
                                !S['tile_states'] || S['tile_states']['length'] <= G ? x.push(0) : x.push(S['tile_states'][G]);
                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddMing'](y, x, !1),
                                y.type == mjcore['E_Ming']['gang_ming'] && (Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                S['scores'] && S['scores']['length'] > 0 && Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                S['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](S['liqibang']),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['fastrecord'](S.liqi),
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operation'] && Z['ActionOperation'].ob(S['operation'], V, 500);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionChiPengGang'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionDealTile play data:' + JSON['stringify'](S));
                            var V = S.seat,
                                o = S.tile;
                            Z['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](S['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](S['tile_index'])),
                                Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count'],
                                10 == Z['DesktopMgr'].Inst['left_tile_count'] && (Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](Z['DesktopMgr'].Inst.seat)]['already_xuezhan_hule_state'] || Z['DesktopMgr'].Inst['addMindVoice'](Z['DesktopMgr'].Inst.seat, 'ingame_remain10'), Laya['timer'].once(1000, this, function() {
                                    Z['DesktopMgr'].Inst['playMindVoice']();
                                }));
                            var y = !1;
                            if (S['tile_state'] && S['tile_state'] > 0 && (y = !0), V == Z['DesktopMgr'].Inst.seat) {
                                var G = Laya['timer']['currTimer'] - Z['DesktopMgr'].Inst['last_gang'],
                                    e = 0;
                                650 > G && (e = 650 - G),
                                    Laya['timer'].once(e, this, function() {
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            Z['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](o), y),
                                            Z['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), y || o && -1 != o['indexOf']('t') ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['TakePai'](mjcore['MJPai']['Create'](o), y) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['TakePai'](mjcore['MJPai']['Create']('5z'), y), Z['DesktopMgr'].Inst['ActionRunComplete']();
                            Z['DesktopMgr'].Inst['index_player'] = V,
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi'].play(S.liqi),
                                S['operation'] && Z['ActionOperation'].play(S['operation']),
                                S['doras'] && S['doras']['length'] > 0 && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](S),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionDealTile fastplay data:' + JSON['stringify'](S) + ' usetime:' + V);
                            var o = S.seat,
                                y = S.tile;
                            Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count'];
                            var G = !1;
                            S['tile_state'] && S['tile_state'] > 0 && (G = !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](y), G, !1) : G || y && -1 != y['indexOf']('t') ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['TakePai'](mjcore['MJPai']['Create'](y), G) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['TakePai'](mjcore['MJPai']['Create']('5z'), G),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](S['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](S['tile_index'])),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['fastplay'](S.liqi, 0),
                                S['operation'] && -1 != V && Z['ActionOperation'].play(S['operation'], V),
                                S['doras'] && S['doras']['length'] > 0 && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](S),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionDealTile record data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = S.tile;
                            Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count'];
                            var G = !1;
                            return S['tile_state'] && S['tile_state'] > 0 && (G = !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](y), G) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordTakePai'](mjcore['MJPai']['Create'](y), G, Z['DesktopMgr'].Inst['record_show_anim']),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](S['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](S['tile_index'])),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['record'](S.liqi),
                                S['doras'] && S['doras']['length'] > 0 && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0),
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operation'] && Z['ActionOperation'].ob(S['operation'], V),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                300;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionDealTile fastrecord data:' + JSON['stringify'](S));
                            var o = S.seat,
                                y = S.tile;
                            Z['DesktopMgr'].Inst['left_tile_count'] = S['left_tile_count'];
                            var G = !1;
                            S['tile_state'] && S['tile_state'] > 0 && (G = !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](y), G, !1) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordTakePai'](mjcore['MJPai']['Create'](y), G),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](S['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](S['tile_index'])),
                                Z['DesktopMgr'].Inst['index_player'] = o,
                                Z['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                Z['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                S.liqi && Z['ActionLiqi']['fastrecord'](S.liqi),
                                S['doras'] && S['doras']['length'] > 0 && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0),
                                Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operation'] && Z['ActionOperation'].ob(S['operation'], V),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionDealTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionDiscardTile play data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1);
                            var V = S.seat,
                                o = mjcore['MJPai']['Create'](S.tile),
                                y = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']);
                            if (S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['AddQiPai'](o, y, S['moqie']), Z['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](V, y), Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](), y) {
                                S['is_wliqi'] ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['PlaySound']('act_drich') : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['PlaySound']('act_rich');
                                var G = Z['DesktopMgr'].Inst['player_effects'][V][game['EView']['lizhi_bgm']];
                                if (G && 0 != G) {
                                    var e = cfg['item_definition'].item.get(G)['sargs'][0];
                                    Z['AudioMgr']['lizhiMuted'] ? Z['AudioMgr']['PlayLiqiBgm'](e, 300, !0) : (Z['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        Z['DesktopMgr'].Inst['gameing'] && (Z['BgmListMgr']['PlayMJBgm']('', !0), Z['AudioMgr']['PlayLiqiBgm'](e, 300, !0));
                                    }));
                                }
                            }
                            var x = !1;
                            !o['touming'] && S['tile_state'] && S['tile_state'] > 0 && (x = !0),
                                V == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](o, x, !1, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['onDiscardTile'](S['moqie'], S.tile, x, !1),
                                S['operation'] && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !1),
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](V, Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](V)]['getTianMingRate'](), !0),
                                Laya['timer'].once(500, this, function() {
                                    y ? Z['DesktopMgr'].Inst['clearMindVoice']() : Z['DesktopMgr'].Inst['playMindVoice']();
                                });
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionDiscardTile fastplay data:' + JSON['stringify'](S) + ' usetime:' + V),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']),
                                e = !1;
                            !y['touming'] && S['tile_state'] && S['tile_state'] > 0 && (e = !0),
                                Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie'], !1),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, e, !0, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['onDiscardTile'](S['moqie'], S.tile, e, !0),
                                S['operation'] && -1 != V && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }),
                                void 0 != S['zhenting'] && void 0 == S['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](S['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting'])),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !0),
                                Z['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](o, G),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](),
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](o, Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['getTianMingRate']());
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionDiscardTile record data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']),
                                e = !1;
                            if (!y['touming'] && S['tile_state'] && S['tile_state'] > 0 && (e = !0), S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0), Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie']), G && (S['is_wliqi'] ? Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['PlaySound']('act_drich') : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['PlaySound']('act_rich'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](o, 'emoji_9', 2000)), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, e, !1, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordDiscardTile'](y, S['moqie'], e, !1), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            return Z['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](o, G),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](),
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](o, Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['getTianMingRate'](), !0),
                                500;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionDiscardTile fastrecord data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = mjcore['MJPai']['Create'](S.tile),
                                G = !(null == S['is_liqi'] || void 0 == S['is_liqi'] || !S['is_liqi']),
                                e = !1;
                            if (!y['touming'] && S['tile_state'] && S['tile_state'] > 0 && (e = !0), S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1), Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['AddQiPai'](y, G, S['moqie'], !1), o == Z['DesktopMgr'].Inst.seat ? Z['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](y, e, !0, S['moqie']) : Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['recordDiscardTile'](y, S['moqie'], e, !0), S['tingpais'] && Z['DesktopMgr'].Inst['setTingpai'](S.seat, S['tingpais']), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            Z['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](o, G),
                                Z['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](),
                                Z['DesktopMgr'].Inst['is_tianming_mode']() && uiscript['UI_DesktopInfo'].Inst['SetTianMingRate'](o, Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](o)]['getTianMingRate']());
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionDiscardTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S;
            ! function(Z) {
                Z[Z.none = 0] = 'none',
                    Z[Z['room_invite'] = 1] = 'room_invite';
            }
            (S = Z['EFriendMsgType'] || (Z['EFriendMsgType'] = {}));
            var V = function() {
                    function S() {}
                    return S.init = function() {
                            var Z = this;
                            this['_friend_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendList', {}, function(S, V) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(V),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(V));
                                        }
                                    }));
                                    if (S)
                                        app.Log.log('获取好友列表时发生错误:' + S);
                                    else if (V['error'])
                                        app.Log.log('获取好友列表时发生错误，错误码：' + V['error'].code);
                                    else {
                                        if (app.Log.log(JSON['stringify'](V)), V['friends'])
                                            for (var o = 0; o < V['friends']['length']; o++) {
                                                var y = V['friends'][o];
                                                Z['_friend_list'].push(y);
                                            }
                                        Z['friend_count'] = V['friend_count'],
                                            Z['friend_max_count'] = V['friend_max_count'];
                                    }
                                }),
                                this['_friendapply_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendApplyList', {}, function(S, V) {
                                    if (S || V['error'])
                                        app.Log.log('获取好友申请列表发生错误');
                                    else if (app.Log.log(JSON['stringify'](V)), V['applies'])
                                        for (var o = 0; o < V['applies']['length']; o++)
                                            Z['_friendapply_list'].push(V['applies'][o]);
                                }),
                                this['fetchRecentPlayer'](),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendViewChange', Laya['Handler']['create'](this, this['_onFriendViewChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendStateChange', Laya['Handler']['create'](this, this['_onFriendStateChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendChange', Laya['Handler']['create'](this, this['_onFriendChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyNewFriendApply', Laya['Handler']['create'](this, this['_onFriendApplyChange'], null, !1));
                        },
                        Object['defineProperty'](S, 'friend_list', {
                            get: function() {
                                return this['_friend_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](S, 'friendapply_list', {
                            get: function() {
                                return this['_friendapply_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](S, 'recentplayer_list', {
                            get: function() {
                                return this['_recentplayer_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        S.find = function(Z) {
                            for (var S = 0; S < this['_friend_list']['length']; S++)
                                if (this['_friend_list'][S].base['account_id'] == Z)
                                    return this['_friend_list'][S];
                            return null;
                        },
                        S['_onFriendStateChange'] = function(Z) {
                            app.Log.log(JSON['stringify'](Z));
                            var S = this.find(Z['target_id']);
                            return null == S ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](Z)), void 0) : (Z = Z['active_state'], Z && (null != Z['login_time'] && void 0 != Z['login_time'] && (S['state']['login_time'] = Z['login_time']), null != Z['logout_time'] && void 0 != Z['logout_time'] && (S['state']['logout_time'] = Z['logout_time']), S['state']['playing'] = Z['playing'], null != Z['is_online'] && void 0 != Z['is_online'] && (S['state']['is_online'] = Z['is_online']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: S.base['account_id']
                            })), void 0);
                        },
                        S['_onFriendViewChange'] = function(Z) {
                            var S = this.find(Z['target_id']);
                            return null == S ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](Z)), void 0) : (null != Z.base['avatar_id'] && void 0 != Z.base['avatar_id'] && (S.base['avatar_id'] = Z.base['avatar_id']), null != Z.base['title'] && void 0 != Z.base['title'] && (S.base['title'] = Z.base['title']), null != Z.base['nickname'] && void 0 != Z.base['nickname'] && (S.base['nickname'] = Z.base['nickname']), null != Z.base['verified'] && void 0 != Z.base['verified'] && (S.base['verified'] = Z.base['verified']), null != Z.base['level'] && void 0 != Z.base['level'] && (S.base['level'] = Z.base['level']), null != Z.base['level3'] && void 0 != Z.base['level3'] && (S.base['level3'] = Z.base['level3']), null != Z.base['avatar_frame'] && void 0 != Z.base['avatar_frame'] && (S.base['avatar_frame'] = Z.base['avatar_frame']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: S.base['account_id']
                            }), void 0);
                        },
                        S['addListener'] = function(Z) {
                            this['removeListener'](Z),
                                this['_listener'].push(Z);
                        },
                        S['removeListener'] = function(Z) {
                            for (var S = 0; S < this['_listener']['length']; S++)
                                if (this['_listener'][S] === Z) {
                                    this['_listener'][S] = this['_listener'][this['_listener']['length'] - 1],
                                        this['_listener'].pop();
                                    break;
                                }
                        },
                        S['triggerMsg'] = function(Z) {
                            for (var S = 0; S < this['_listener']['length']; S++)
                                this['_listener'][S] && this['_listener'][S]['runWith'](Z);
                        },
                        S['removeFriend'] = function(Z) {
                            for (var S = 0; S < this['_friend_list']['length']; S++)
                                if (this['_friend_list'][S].base['account_id'] == Z) {
                                    for (var V = S; V < this['_friend_list']['length'] - 1; V++)
                                        this['_friend_list'][V] = this['_friend_list'][V + 1];
                                    this['_friend_list'].pop(),
                                        this['friend_count']--;
                                    break;
                                }
                        },
                        S['_onFriendChange'] = function(Z) {
                            var S = Z['account_id'];
                            1 == Z.type ? this.find(S) || (this['friend_count']++, this['friend_list'].push(Z['friend'])) : 2 == Z.type && this['removeFriend'](S),
                                this['triggerMsg']({
                                    type: 'listchange'
                                });
                        },
                        S['_onFriendApplyChange'] = function(Z) {
                            for (var S = 0; S < this['_friendapply_list']['length']; S++)
                                if (this['_friendapply_list'][S]['account_id'] == Z['account_id'])
                                    return this['_friendapply_list'][S]['apply_time'] = Z['apply_time'], void 0;
                            if (this['_friendapply_list'].push({
                                    account_id: Z['account_id'],
                                    apply_time: Z['apply_time']
                                }), Z['removed_id'])
                                for (var S = 0; S < this['_friendapply_list']['length']; S++)
                                    if (this['_friendapply_list'][S]['account_id'] == Z['removed_id']) {
                                        for (var V = 0; V < this['_friendapply_list']['length'] - 1; V++)
                                            this['_friendapply_list'][V] = this['_friendapply_list'][V + 1];
                                        this['_friendapply_list'].pop();
                                        break;
                                    }
                        },
                        S['delFriendApply'] = function(Z) {
                            for (var S = 0; S < this['_friendapply_list']['length']; S++)
                                if (this['_friendapply_list'][S]['account_id'] == Z) {
                                    for (var V = S; V < this['_friendapply_list']['length'] - 1; V++)
                                        this['_friendapply_list'][V] = this['_friendapply_list'][V + 1];
                                    this['_friendapply_list'].pop();
                                    break;
                                }
                        },
                        S['needShowRedpoint'] = function() {
                            var S = Laya['LocalStorage']['getItem']('friend_apply_' + GameMgr.Inst['account_id']),
                                V = 0;
                            if (S && (V = Number(S) / 1000), Z['FriendMgr']['friendapply_list'])
                                for (var o = 0, y = Z['FriendMgr']['friendapply_list']; o < y['length']; o++) {
                                    var G = y[o];
                                    if (G['apply_time'] > V)
                                        return !0;
                                }
                            return !1;
                        },
                        S['fetchRecentPlayer'] = function(Z) {
                            var S = this;
                            return this['recentplayer_changed'] ? (this['recentplayer_changed'] = !1, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchRecentFriend', {}, function(V, o) {
                                if (V || o['error'])
                                    app.Log.log('fetchRecentFriend');
                                else {
                                    var y = S['_recentplayer_list'];
                                    if (S['_recentplayer_list'] = [], o['account_list'])
                                        for (var G = 0; G < o['account_list']['length']; G++) {
                                            for (var e = !1, x = 0, R = y; x < R['length']; x++) {
                                                var s = R[x];
                                                if (s['account_id'] == o['account_list'][G]) {
                                                    S['_recentplayer_list'].push(s),
                                                        e = !0;
                                                    break;
                                                }
                                            }
                                            e || S['_recentplayer_list'].push({
                                                account_id: o['account_list'][G],
                                                base: null
                                            });
                                        }
                                }
                                Z && Z['runWith']({
                                    err: V,
                                    res: o
                                });
                            }), void 0) : (Z && Z.run(), void 0);
                        },
                        S['_friend_list'] = [],
                        S['_listener'] = [],
                        S['_friendapply_list'] = [],
                        S['_recentplayer_list'] = [],
                        S['friend_max_count'] = 0,
                        S['friend_count'] = 0,
                        S['recentplayer_changed'] = !0,
                        S;
                }
                ();
            Z['FriendMgr'] = V;
        }
        (game || (game = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this,
                                o = Z['DesktopMgr'].Inst.mode == Z['EMJMode'].play || Z['DesktopMgr'].Inst['record_show_anim'];
                            S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice'](),
                                Laya['timer'].once(100, this, function() {
                                    var y = S['hules'],
                                        G = 0;
                                    if (S['hules_history'] && Laya['timer'].once(3000, V, function() {
                                            for (var V = 0, y = S['hules_history']; V < y['length']; V++) {
                                                var G = y[V],
                                                    e = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](G.seat)];
                                                if (e && e['already_xuezhan_hule_state']) {
                                                    for (var x = [], R = 0; R < G.hand['length']; R++)
                                                        x.push(mjcore['MJPai']['Create'](G.hand[R]));
                                                    x = x.sort(mjcore['MJPai']['Distance']),
                                                        e['onXuezhanEnd'](x, !o);
                                                }
                                            }
                                        }), y[0].zimo) {
                                        for (var e = y[0].seat, x = [], R = 0; R < y[0].hand['length']; R++)
                                            x.push(mjcore['MJPai']['Create'](y[0].hand[R]));
                                        x = x.sort(mjcore['MJPai']['Distance']),
                                            uiscript['UI_Huleshow'].Inst['showZimo']([Z['DesktopMgr'].Inst['seat2LocalPosition'](e)]),
                                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            G += 1400,
                                            Laya['timer'].once(G, V, function() {
                                                e == Z['DesktopMgr'].Inst.seat && Z['DesktopMgr'].Inst['mainrole']['HulePrepare'](x, y[0]['hu_tile'], y[0].zimo),
                                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](e)].Hule(x, mjcore['MJPai']['Create'](y[0]['hu_tile']), y[0].zimo);
                                            }),
                                            G += o ? 1500 : 500,
                                            e == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                    } else {
                                        Laya['timer'].once(G, V, function() {
                                                for (var S = [], V = 0; V < y['length']; V++)
                                                    S.push(Z['DesktopMgr'].Inst['seat2LocalPosition'](y[V].seat));
                                                uiscript['UI_Huleshow'].Inst['showRong'](S);
                                            }),
                                            G += 1500;
                                        for (var R = 0; R < y['length']; R++) {
                                            var s = y[R].seat;
                                            if (s == Z['DesktopMgr'].Inst.seat) {
                                                for (var u = [], n = 0; n < y[R].hand['length']; n++)
                                                    u.push(mjcore['MJPai']['Create'](y[R].hand[n]));
                                                u = u.sort(mjcore['MJPai']['Distance']),
                                                    Z['DesktopMgr'].Inst['mainrole']['HulePrepare'](u, y[R]['hu_tile'], y[R].zimo);
                                            }
                                        }
                                        Laya['timer'].once(G, V, function() {
                                                if (o) {
                                                    for (var S = 0, V = -1, G = 0; G < y['length']; G++) {
                                                        var e = y[G].seat;
                                                        if (-1 == V)
                                                            V = e;
                                                        else {
                                                            var x = Z['DesktopMgr'].Inst['seat2LocalPosition'](V),
                                                                R = Z['DesktopMgr'].Inst['seat2LocalPosition'](e);
                                                            x > R && (V = e);
                                                        }
                                                    }
                                                    V >= 0 && (S = Z['DesktopMgr'].Inst['player_effects'][V][game['EView']['hupai_effect']]),
                                                        Z['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                        Z['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                        Z['DesktopMgr'].Inst['ShowHuleEffect'](Z['DesktopMgr'].Inst['lastqipai'], Z['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], S, Z['DesktopMgr'].Inst['lastpai_seat'], Z['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                                }
                                                for (var G = 0; G < y['length']; G++) {
                                                    for (var s = [], u = 0; u < y[G].hand['length']; u++)
                                                        s.push(mjcore['MJPai']['Create'](y[G].hand[u]));
                                                    s = s.sort(mjcore['MJPai']['Distance']),
                                                        Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](y[G].seat)].Hule(s, mjcore['MJPai']['Create'](y[G]['hu_tile']), y[G].zimo),
                                                        y[G].seat == Z['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                                }
                                            }),
                                            G += o ? 2000 : 300;
                                    }
                                    for (var k = [], R = 0; R < S['delta_scores']['length']; R++) {
                                        var r = {
                                            title_id: 0,
                                            score: 0,
                                            delta: 0
                                        };
                                        if (S['delta_scores'][R] > 0) {
                                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_7', -1),
                                                Z['DesktopMgr'].Inst['onRoundEnd'](R, 1),
                                                r['delta'] = S['delta_scores'][R];
                                            for (var M = 0, g = y; M < g['length']; M++) {
                                                var K = g[M];
                                                if (K.seat == R) {
                                                    r['title_id'] = K['title_id'];
                                                    break;
                                                }
                                            }
                                        } else
                                            S['delta_scores'][R] < 0 && (r['delta'] = S['delta_scores'][R], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](R, 'emoji_8', -1), Z['DesktopMgr'].Inst['onRoundEnd'](R, 0));
                                        r['score'] = S['old_scores'][R],
                                            k.push(r);
                                    }
                                    Laya['timer'].once(G, V, function() {
                                            Laya['timer'].once(200, V, function() {
                                                    Z['DesktopMgr'].Inst['setScores'](S['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](k);
                                        }),
                                        G += 3000,
                                        Laya['timer'].once(G, V, function() {
                                            uiscript['UIMgr'].Inst['ShowWin'](S, !1),
                                                Z['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](S)),
                                Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice'](),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](S, !1);
                        },
                        V['record'] = function(Z) {
                            return this.play(Z),
                                100000;
                        },
                        V['fastrecord'] = function(S) {
                            Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['resetMindVoice'](),
                                Z['DesktopMgr'].Inst['gameing'] = !1,
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1),
                                Z['DesktopMgr'].Inst['setScores'](S['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](S, !1);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionHuleXueZhanEnd'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionNewCard play data:' + JSON['stringify'](S));
                            var V = uiscript['UI_FightBegin'].hide();
                            return Laya['timer'].once(V + 200, this, function() {
                                    uiscript['UI_DesktopInfo'].Inst['OnNewCard'](S, !0),
                                        Z['DesktopMgr'].Inst['ActionRunComplete']();
                                }),
                                V + 1000;
                        },
                        V['fastplay'] = function(S) {
                            return app.Log.log('ActionNewCard fastplay data:' + JSON['stringify'](S)),
                                uiscript['UI_FightBegin'].hide(),
                                uiscript['UI_DesktopInfo'].Inst['OnNewCard'](S, !1),
                                Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        V['record'] = function(S) {
                            app.Log.log('ActionNewCard record data:' + JSON['stringify'](S));
                            var V = uiscript['UI_FightBegin'].hide();
                            return Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] ? (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](S, !0), V += 1000) : uiscript['UI_DesktopInfo'].Inst['OnNewCard'](S, !1),
                                Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                V;
                        },
                        V['fastrecord'] = function(S) {
                            app.Log.log('ActionNewCard fastrecord data:' + JSON['stringify'](S));
                            uiscript['UI_FightBegin'].hide();
                            return uiscript['UI_DesktopInfo'].Inst['OnNewCard'](S, !1),
                                Z['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionNewCard'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            app.Log.log('ActionAnGangAddGang play data:' + JSON['stringify'](S));
                            var V = S.seat,
                                o = Z['DesktopMgr'].Inst['seat2LocalPosition'](V);
                            if (S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !1), S.type == mjcore['E_Ming']['gang_ming'])
                                Z['DesktopMgr'].Inst['players'][o]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                        Z['DesktopMgr'].Inst['players'][o]['AddGang'](mjcore['MJPai']['Create'](S['tiles'])),
                                        Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var y = new mjcore['MJMing']();
                                y.type = mjcore['E_Ming']['gang_an'],
                                    y.from = [V, V, V, V],
                                    y.pais = this['getAngangTile'](S['tiles'], V);
                                for (var G = [], e = 0; e < y.pais['length']; e++)
                                    G.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            Z['DesktopMgr'].Inst['players'][o]['AddMing'](y, G),
                                            Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    Z['DesktopMgr'].Inst['players'][o]['PlaySound']('act_kan');
                            }
                            S['operation'] && Laya['timer'].once(600, this, function() {
                                    Z['ActionOperation'].play(S['operation']);
                                }),
                                void 0 != S['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting']),
                                V == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !1),
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](V, 'emoji_5', 2000),
                                Z['DesktopMgr'].Inst['mainrole']['revertAllPais']();
                        },
                        V['fastplay'] = function(S, V) {
                            app.Log.log('ActionAnGangAddGang fastplay data:' + JSON['stringify'](S) + ' usetime:' + V);
                            var o = S.seat,
                                y = Z['DesktopMgr'].Inst['seat2LocalPosition'](o);
                            if (S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0), S.type == mjcore['E_Ming']['gang_ming'])
                                Z['DesktopMgr'].Inst['players'][y]['AddGang'](mjcore['MJPai']['Create'](S['tiles']), !1);
                            else {
                                var G = new mjcore['MJMing']();
                                G.type = mjcore['E_Ming']['gang_an'],
                                    G.from = [o, o, o, o],
                                    G.pais = this['getAngangTile'](S['tiles'], o);
                                for (var e = [], x = 0; x < G.pais['length']; x++)
                                    e.push(-1);
                                Z['DesktopMgr'].Inst['players'][y]['AddMing'](G, e, !1);
                            }
                            S['operation'] && -1 != V && Laya['timer'].once(500, this, function() {
                                    Z['ActionOperation'].play(S['operation'], V);
                                }),
                                void 0 != S['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](S['zhenting']),
                                o == Z['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](S, !0),
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        V['record'] = function(S, V) {
                            void 0 === V && (V = 0),
                                app.Log.log('ActionAnGangAddGang record data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = Z['DesktopMgr'].Inst['seat2LocalPosition'](o);
                            if (S.type == mjcore['E_Ming']['gang_ming'])
                                Z['DesktopMgr'].Inst['players'][y]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                        Z['DesktopMgr'].Inst['players'][y]['AddGang'](mjcore['MJPai']['Create'](S['tiles'])),
                                        Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var G = new mjcore['MJMing']();
                                G.type = mjcore['E_Ming']['gang_an'],
                                    G.from = [o, o, o, o],
                                    G.pais = this['getAngangTile'](S['tiles'], o);
                                for (var e = [], x = 0; x < G.pais['length']; x++)
                                    e.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0),
                                            Z['DesktopMgr'].Inst['players'][y]['AddMing'](G, e),
                                            Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    Z['DesktopMgr'].Inst['players'][y]['PlaySound']('act_kan');
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](o, 'emoji_5', 2000), Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            return 1700;
                        },
                        V['fastrecord'] = function(S, V) {
                            void 0 === V && (V = -1),
                                app.Log.log('ActionAnGangAddGang fastrecord data:' + JSON['stringify'](S)),
                                S['doras'] && Z['DesktopMgr'].Inst['WhenDoras'](S['doras'], !0);
                            var o = S.seat,
                                y = Z['DesktopMgr'].Inst['seat2LocalPosition'](o);
                            if (S.type == mjcore['E_Ming']['gang_ming'])
                                Z['DesktopMgr'].Inst['players'][y]['AddGang'](mjcore['MJPai']['Create'](S['tiles']), !1);
                            else {
                                var G = new mjcore['MJMing']();
                                G.type = mjcore['E_Ming']['gang_an'],
                                    G.from = [o, o, o, o],
                                    G.pais = this['getAngangTile'](S['tiles'], o);
                                for (var e = [], x = 0; x < G.pais['length']; x++)
                                    e.push(-1);
                                Z['DesktopMgr'].Inst['players'][y]['AddMing'](G, e, !1);
                            }
                            if (Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && V >= 0 && S['operations'])
                                for (var x = 0; x < S['operations']['length']; x++)
                                    Z['ActionOperation'].ob(S['operations'][x], V, 450);
                            Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1);
                        },
                        V['getAngangTile'] = function(S, V) {
                            var o = [];
                            if (Z['DesktopMgr'].Inst['is_chuanma_mode']() || Z['DesktopMgr'].Inst['is_tianming_mode']() || '0' != S['charAt'](0) && '5' != S['charAt'](0) || 'z' == S['charAt'](1))
                                if (Z['DesktopMgr'].Inst['is_tianming_mode']()) {
                                    var y = Z['DesktopMgr'].Inst['seat2LocalPosition'](V),
                                        G = Z['DesktopMgr'].Inst['players'][y],
                                        e = 0;
                                    if (('0' == S['charAt'](0) || '5' == S['charAt'](0)) && 'z' != S['charAt'](1) && (e = 1, Z['DesktopMgr'].Inst['game_config'])) {
                                        var x = Z['DesktopMgr'].Inst['game_config'].mode;
                                        if (x && x['extendinfo']) {
                                            var R = JSON['parse'](x['extendinfo']);
                                            if (R && null != R['dora_count'])
                                                switch (R['dora_count']) {
                                                    case 0:
                                                        e = 0;
                                                        break;
                                                    case 2:
                                                        e = 1;
                                                        break;
                                                    case 3:
                                                        e = 1;
                                                        break;
                                                    case 4:
                                                        e = 'p' == S['charAt'](1) ? 2 : 1;
                                                }
                                        }
                                        if (x && x['detail_rule'] && x['detail_rule'] && null != x['detail_rule']['dora_count'])
                                            switch (x['detail_rule']['dora_count']) {
                                                case 0:
                                                    e = 0;
                                                    break;
                                                case 2:
                                                    e = 1;
                                                    break;
                                                case 3:
                                                    e = 1;
                                                    break;
                                                case 4:
                                                    e = 'p' == S['charAt'](1) ? 2 : 1;
                                            }
                                    }
                                    var s = mjcore['MJPai']['Create'](S),
                                        u = 0,
                                        n = 0;
                                    if (0 == y)
                                        for (var k = 0, r = G.hand; k < r['length']; k++) {
                                            var M = r[k];
                                            M.val['numValue']() == s['numValue']() && M.val['touming'] && (M.val.dora ? (e--, n++) : u++);
                                        }
                                    else
                                        for (var g = 0, K = G.hand; g < K['length']; g++) {
                                            var M = K[g];
                                            M.val['numValue']() == s['numValue']() && M.val['touming'] && (M.val.dora ? (e--, n++) : u++);
                                        }
                                    for (var Y = 0; 4 > Y; Y++) {
                                        var j = mjcore['MJPai']['Create'](S);
                                        j.dora = !1,
                                            j['touming'] = !1,
                                            o.push(j);
                                    }
                                    for (var F = [1, 2, 0, 3], Y = 0; Y < Math.min(n + u + e, 4); Y++)
                                        n > Y ? (o[F[Y]].dora = !0, o[F[Y]]['touming'] = !0) : n + u > Y ? o[F[Y]]['touming'] = !0 : o[F[Y]].dora = !0;
                                } else
                                    for (var Y = 0; 4 > Y; Y++) {
                                        var s = mjcore['MJPai']['Create'](S);
                                        Z['DesktopMgr'].Inst['is_jiuchao_mode']() && (s['touming'] = 3 != Y),
                                            o.push(s);
                                    }
                            else {
                                var e = 1;
                                if (Z['DesktopMgr'].Inst['game_config']) {
                                    var x = Z['DesktopMgr'].Inst['game_config'].mode;
                                    if (x && x['extendinfo']) {
                                        var R = JSON['parse'](x['extendinfo']);
                                        if (R && null != R['dora_count'])
                                            switch (R['dora_count']) {
                                                case 0:
                                                    e = 0;
                                                    break;
                                                case 2:
                                                    e = 1;
                                                    break;
                                                case 3:
                                                    e = 1;
                                                    break;
                                                case 4:
                                                    e = 'p' == S['charAt'](1) ? 2 : 1;
                                            }
                                    }
                                    if (x && x['detail_rule'] && x['detail_rule'] && null != x['detail_rule']['dora_count'])
                                        switch (x['detail_rule']['dora_count']) {
                                            case 0:
                                                e = 0;
                                                break;
                                            case 2:
                                                e = 1;
                                                break;
                                            case 3:
                                                e = 1;
                                                break;
                                            case 4:
                                                e = 'p' == S['charAt'](1) ? 2 : 1;
                                        }
                                }
                                for (var Y = 0; 4 > Y; Y++) {
                                    var s = mjcore['MJPai']['Create'](S);
                                    Z['DesktopMgr'].Inst['is_jiuchao_mode']() && (s['touming'] = 3 != Y),
                                        s.dora = 0 == Y ? !1 : e >= Y,
                                        o.push(s);
                                }
                            }
                            return Z['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                o;
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionAnGangAddGang'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function() {
                    function S(Z) {
                        var S = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = Z,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                S['btn_up']['visible'] = S['scrollview'].rate > 0,
                                    S['btn_down']['visible'] = S['scrollview']['need_scroll'] && S['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return S['prototype'].show = function(S) {
                            var V = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = S;
                            for (var o = 0, y = 0; y < S['length']; y++) {
                                var G = this['caluH'](S[y]);
                                o += G,
                                    this['scrollview']['addItem'](1, G);
                            }
                            Z['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    V['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S.me['visible'] = !1;
                                }));
                        },
                        S['prototype']['caluH'] = function(Z) {
                            var S = Z['actions'][Z['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return o.Inst['isRoundEnd'](S.name) ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120;
                            if (view['DesktopMgr'].Inst['xuezhan']) {
                                if (!o.Inst['isRoundEnd'](S.name))
                                    return 120;
                                if (S.data['hules_history'] && S.data['hules_history']['length'] > 0)
                                    return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            }
                            if ('RecordNoTile' == S.name) {
                                for (var V = S.data, y = [], G = 0; G < view['DesktopMgr'].Inst['player_count']; G++)
                                    y.push({
                                        old_score: V['scores'][0]['old_scores'][G],
                                        delta: 0
                                    });
                                for (var G = 0; G < V['scores']['length']; G++)
                                    for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                        y[e]['delta'] += V['scores'][G]['delta_scores'][e];
                                for (var x = [], G = 0; G < y['length']; G++)
                                    y[G]['delta'] > 0 && x.push(G);
                                var R = 0 == x['length'] ? 120 : 80 + 40 * x['length'];
                                return R;
                            }
                            if ('RecordLiuJu' == S.name) {
                                if (view['DesktopMgr'].Inst['xuezhan']) {
                                    for (var s = 0, u = 0, n = S.data['delta_scores']; u < n['length']; u++) {
                                        var k = n[u];
                                        k && s++;
                                    }
                                    return s ? 100 + 40 * s : 120;
                                }
                                return 120;
                            }
                            return 'RecordHule' == S.name ? S.data['hules'][0].zimo ? 120 : 180 + 40 * (S.data['hules']['length'] - 1) : 120;
                        },
                        S['prototype']['renderInfo'] = function(Z) {
                            for (var S = this, V = Z['index'], y = Z['container'], G = this['rounds'][V], e = 0; e < G['actions']['length']; e++)
                                if ('RecordNewRound' == G['actions'][e].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        y['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            y['getChildByName']('container_title')['getChildByName']('ju').text = (G['actions'][e].data['ju_count'] + 1)['toString'](),
                                            y['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            y['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var x = 0, R = y['getChildByName']('container_title'), s = [3, 3, 0], u = 0; 3 > u; u++) {
                                            var n = R['getChildAt'](u);
                                            x += n['textField']['textWidth'] * n['scaleX'],
                                                x += s[u];
                                        }
                                        for (var k = R['width'] / 2 - x / 2, r = 0; 3 > r; r++) {
                                            var n = R['getChildAt'](r);
                                            n.x = k,
                                                k += n['textField']['textWidth'] * n['scaleX'] + s[r],
                                                n.y = 'haolong' == n.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var M = void 0;
                                    M = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        y['getChildByName']('container_title')['getChildByName']('chang').text = M[G['actions'][e].data['chang'] % 4],
                                        y['getChildByName']('container_title')['getChildByName']('ju').text = (G['actions'][e].data.ju + 1)['toString'](),
                                        y['getChildByName']('container_title')['getChildByName']('ben').text = G['actions'][e].data.ben['toString']();
                                    for (var x = 0, R = y['getChildByName']('container_title'), s = [3, 3, 50, 3, 0], g = 0; g < R['numChildren']; g++) {
                                        var n = R['getChildAt'](g);
                                        x += n['textField']['textWidth'] * n['scaleX'],
                                            x += s[g];
                                    }
                                    for (var k = R['width'] / 2 - x / 2, K = 0; K < R['numChildren']; K++) {
                                        var n = R['getChildAt'](K);
                                        n.x = k,
                                            k += n['textField']['textWidth'] * n['scaleX'] + s[K],
                                            n.y = 'haolong' == n.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var Y = G['actions'][G['actions']['length'] - 1],
                                j = Y.data,
                                F = y,
                                w = y['getChildByName']('line'),
                                T = y['getChildByName']('liuju'),
                                N = y['getChildByName']('win'),
                                O = y['getChildByName']('lose');
                            w['visible'] = !1,
                                T['visible'] = !1,
                                N['visible'] = !1,
                                O['visible'] = !1;
                            var J = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var H = [], e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                    H.push(0);
                                for (var f = !1, i = 0, z = G['actions']; i < z['length']; i++) {
                                    var d = z[i];
                                    if (('RecordHuleXueZhanEnd' == d.name || 'RecordNoTile' == d.name) && (f = d.data['hules_history'] && d.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == d.name || 'RecordHuleXueZhanEnd' == d.name)
                                        for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                            H[e] += d.data['delta_scores'][e];
                                    else if ('RecordNoTile' == d.name) {
                                        for (var e = 0; e < d.data['scores']['length']; e++)
                                            if (d.data['scores'][e]['delta_scores'] && d.data['scores'][e]['delta_scores']['length'] > 0)
                                                for (var B = 0; B < view['DesktopMgr'].Inst['player_count']; B++)
                                                    H[B] += d.data['scores'][e]['delta_scores'][B];
                                    } else if ('RecordGangResult' == d.name || 'RecordGangResultEnd' == d.name)
                                        for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                            H[e] += d.data['gang_infos']['delta_scores'][e];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (f = !0), o.Inst['isRoundEnd'](Y.name) || (J = !1), F['height'] = J ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, f) {
                                    J = !1,
                                        N['visible'] = !0;
                                    var p = N['getChildByName']('info');
                                    p['visible'] = 'RecordLiuJu' != Y.name,
                                        p.text = game['Tools']['strOfLocalization'](3257),
                                        p = O['getChildByName']('chong');
                                    for (var e = 0; e < view['DesktopMgr'].Inst['player_count']; e++) {
                                        var X = N['getChildByName']('player'),
                                            _ = X['getChildAt'](e);
                                        _['visible'] = !0,
                                            _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](e)['nickname'],
                                            _['getChildByName']('point').text = H[e] > 0 ? '+' + H[e]['toString']() : H[e]['toString']();
                                    }
                                    for (var P = N['getChildByName']('player'), e = view['DesktopMgr'].Inst['player_count']; e < P['numChildren']; e++)
                                        P['getChildAt'](e)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == Y.name) {
                                if (J) {
                                    for (var v = [], e = 0; e < view['DesktopMgr'].Inst['player_count']; e++)
                                        v.push({
                                            old_score: j['scores'][0]['old_scores'][e],
                                            delta: 0
                                        });
                                    for (var e = 0; e < j['scores']['length']; e++)
                                        for (var B = 0; B < view['DesktopMgr'].Inst['player_count']; B++)
                                            v[B]['delta'] += j['scores'][e]['delta_scores'][B];
                                    for (var I = [], e = 0; e < v['length']; e++)
                                        v[e]['delta'] > 0 && I.push(e);
                                    if (F['height'] = 120 + (0 == I['length'] ? 0 : 40 * (I['length'] - 1)), j['liujumanguan']) {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2170),
                                            p['color'] = '#8d8fac';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            e < I['length'] ? (_['visible'] = !0, _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](I[e])['nickname'], _['getChildByName']('point').text = (v[I[e]]['delta'] > 0 ? '+' : '') + v[I[e]]['delta']['toString']()) : _['visible'] = !1;
                                        }
                                    } else if (N['visible'] = !0, N['getChildByName']('info').text = '', T['visible'] = !0, T.text = game['Tools']['strOfLocalization'](2171), T['color'] = '#8d8fac', j['scores'])
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            e < I['length'] ? (_['visible'] = !0, _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](I[e])['nickname'], _['getChildByName']('point').text = (v[I[e]]['delta'] > 0 ? '+' : '') + v[I[e]]['delta']['toString']()) : _['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == Y.name) {
                                var W = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                T['visible'] = !0,
                                    T.text = W[j.type],
                                    T['color'] = '#8d8fac',
                                    J && (F['height'] = 120);
                            } else if ('RecordHule' == Y.name) {
                                if (!view['DesktopMgr'].Inst['xuezhan'])
                                    if (Y.data['hules'][0].zimo) {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2177),
                                            p['color'] = '#ea3694';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (0 == e) {
                                                _['visible'] = !0;
                                                var a = j['hules'][0].seat;
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = (m > 0 ? '+' : '') + m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        F['height'] = 120;
                                    } else {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2178),
                                            p['color'] = '#ef3538';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (e < j['hules']['length']) {
                                                _['visible'] = !0;
                                                var a = j['hules'][e].seat;
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = (m > 0 ? '+' : '') + m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        w['visible'] = !0,
                                            w.y = 80 + 40 * j['hules']['length'],
                                            O['visible'] = !0,
                                            O.y = 83 + 40 * j['hules']['length'];
                                        var p = O['getChildByName']('chong');
                                        p['visible'] = !0;
                                        for (var P = O['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (0 == e) {
                                                _['visible'] = !0;
                                                for (var a = 0, B = 0; B < j['delta_scores']['length']; B++)
                                                    if (j['delta_scores'][B] < j['delta_scores'][a])
                                                        a = B;
                                                    else if (j['delta_scores'][B] == j['delta_scores'][a])
                                                    if (j['baopai'] > 0 && j['baopai_seats'] && j['baopai_seats']['length'] > 0)
                                                        for (var b = 0, D = j['baopai_seats']; b < D['length']; b++) {
                                                            var t = D[b];
                                                            if (t == a) {
                                                                a = B;
                                                                break;
                                                            }
                                                        }
                                                    else
                                                        j['baopai'] > 0 && j['baopai'] - 1 == a && (a = B);
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        F['height'] = 180 + 40 * (Y.data['hules']['length'] - 1);
                                    }
                            } else if (o.Inst['isRoundEnd'](Y.name)) {
                                if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                    if (Y.data['hules'][0].zimo) {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2177),
                                            p['color'] = '#ea3694';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (0 == e) {
                                                _['visible'] = !0;
                                                var a = j['hules'][0].seat;
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = (m > 0 ? '+' : '') + m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        F['height'] = 120;
                                    } else {
                                        N['visible'] = !0;
                                        var p = N['getChildByName']('info');
                                        p.text = game['Tools']['strOfLocalization'](2178),
                                            p['color'] = '#ef3538';
                                        for (var P = N['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (e < j['hules']['length']) {
                                                _['visible'] = !0;
                                                var a = j['hules'][e].seat;
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = (m > 0 ? '+' : '') + m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        w['visible'] = !0,
                                            w.y = 80 + 40 * j['hules']['length'],
                                            O['visible'] = !0,
                                            O.y = 83 + 40 * j['hules']['length'];
                                        var p = O['getChildByName']('chong');
                                        p['visible'] = !0;
                                        for (var P = O['getChildByName']('player'), e = 0; e < P['numChildren']; e++) {
                                            var _ = P['getChildAt'](e);
                                            if (0 == e) {
                                                _['visible'] = !0;
                                                for (var a = 0, B = 0; B < j['delta_scores']['length']; B++)
                                                    if (j['delta_scores'][B] < j['delta_scores'][a])
                                                        a = B;
                                                    else if (j['delta_scores'][B] == j['delta_scores'][a])
                                                    if (j['baopai'] > 0 && j['baopai_seats'] && j['baopai_seats']['length'] > 0)
                                                        for (var C = 0, Q = j['baopai_seats']; C < Q['length']; C++) {
                                                            var t = Q[C];
                                                            if (t == a) {
                                                                a = B;
                                                                break;
                                                            }
                                                        }
                                                    else
                                                        j['baopai'] > 0 && j['baopai'] - 1 == a && (a = B);
                                                _['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](a)['nickname'];
                                                var m = j['delta_scores'][a];
                                                _['getChildByName']('point').text = m['toString']();
                                            } else
                                                _['visible'] = !1;
                                        }
                                        F['height'] = 180 + 40 * (Y.data['hules']['length'] - 1);
                                    }
                            } else
                                T['visible'] = !0, T.text = game['Tools']['strOfLocalization'](3036), T['color'] = '#8ADB97', F['height'] = 120;
                            F['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    S['locking'] || (o.Inst['jumpRound'](V), S['close']());
                                }, null, !1),
                                y['getChildByName']('bg')['height'] = y['height'] - 4;
                        },
                        S;
                }
                (),
                V = function() {
                    function S(Z) {
                        var S = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = Z,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                S['locking'] || S['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                S['btn_up']['visible'] = S['scrollview'].rate > 0,
                                    S['btn_down']['visible'] = S['scrollview']['need_scroll'] && S['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return S['prototype'].show = function(S, V) {
                            var o = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = V,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](S + (V ? 1 : 0)),
                                Z['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    o['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        S['prototype']['close'] = function() {
                            var S = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S.me['visible'] = !1;
                                }));
                        },
                        S['prototype']['renderInfo'] = function(Z) {
                            var S = this,
                                V = Z['index'],
                                y = Z['container'];
                            y['getChildByName']('num').text = (V + (this['have0'] ? 0 : 1))['toString'](),
                                y['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    S['locking'] || (o.Inst['jumpXun'](V + (S['have0'] ? 0 : 1)), S['close']());
                                }, null, !1);
                            var G = y,
                                e = [];
                            'en' == GameMgr['client_language'] ? (e.push(G['getChildByName']('xun')), e.push(G['getChildByName']('num'))) : (e.push(G['getChildByName']('num')), e.push(G['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](e, 115, [10]);
                            for (var x = 1; x < G['numChildren']; x++) {
                                var R = G['getChildAt'](x);
                                R.y = 'haolong' == R.font ? 42 : 39;
                            }
                        },
                        S;
                }
                (),
                o = function(o) {
                    function y() {
                        var Z = o.call(this, new ui.mj['ob_replayUI']()) || this;
                        return Z.root = null,
                            Z['label_chang'] = null,
                            Z['label_ju'] = null,
                            Z['label_xun'] = null,
                            Z['img_play'] = null,
                            Z['img_stop'] = null,
                            Z['btn_preround'] = null,
                            Z['btn_nextround'] = null,
                            Z['page_chang'] = null,
                            Z['page_xun'] = null,
                            Z['origin_actions'] = [],
                            Z['rounds'] = [],
                            Z['round_index'] = 0,
                            Z['action_index'] = 0,
                            Z['locking_time'] = 0,
                            Z['anim_time'] = 0,
                            Z['_auto_play'] = !1,
                            Z['locking'] = !1,
                            y.Inst = Z,
                            Z;
                    }
                    return __extends(y, o),
                        Object['defineProperty'](y['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(Z) {
                                this['_auto_play'] = Z,
                                    this['img_play']['visible'] = !Z,
                                    this['img_stop']['visible'] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        y['prototype']['onCreate'] = function() {
                            var Z = this;
                            this.root = this.me['getChildByName']('root');
                            var o = this.me['getChildByName']('root')['getChildByName']('round');
                            o['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['page_chang']['locking'] || (Z['locking'], Z['auto_play'] && (Z['auto_play'] = !1), Z['page_xun']['enable'] && Z['page_xun']['close'](), Z['page_chang']['enable'] ? Z['page_chang']['close']() : Z['page_chang'].show(Z['rounds']));
                                }, null, !1),
                                this['label_chang'] = o['getChildByName']('chang'),
                                this['label_ju'] = o['getChildByName']('ju');
                            var y = this.me['getChildByName']('root')['getChildByName']('turn');
                            this['label_xun'] = y['getChildByName']('xun'),
                                y['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['page_xun']['locking'] || (Z['auto_play'] && (Z['auto_play'] = !1), Z['page_chang']['enable'] && Z['page_chang']['close'](), Z['page_xun']['enable'] ? Z['page_xun']['close']() : Z['page_xun'].show(Z['rounds'][Z['round_index']].xun['length'], 0 != Z['rounds'][Z['round_index']].xun[0]));
                                }, null, !1),
                                this['page_chang'] = new S(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new V(this.me['getChildByName']('info_xun')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['auto_play'] = !Z['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return Z['locking'],
                                        Z['locking_time'] > Laya['timer']['currTimer'] ? (Z['auto_play'] && (Z['auto_play'] = !1), void 0) : (Z['nextStep'](), (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify({
                                                'record_click_action': "nextStep"
                                            }),
                                            onload: function(msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                    'record_click_action': "nextStep"
                                                }));
                                            }
                                        })), void 0);
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    Z['locking'],
                                        Z['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause');
                        },
                        y['prototype']['isRoundEnd'] = function(Z) {
                            return 'RecordNoTile' == Z || 'RecordLiuJu' == Z || 'RecordHule' == Z || 'RecordHuleXueZhanEnd' == Z || 'RecordGangResultEnd' == Z;
                        },
                        y['prototype'].show = function(S) {
                            var V = this;
                            this['enable'] = !0,
                                this['origin_actions'] = S,
                                this['auto_play'] = !1,
                                this['page_chang']['enable'] = !1,
                                this['page_chang'].me['visible'] = !1,
                                this['page_xun']['enable'] = !1,
                                this['page_xun'].me['visible'] = !1,
                                this['initData'](),
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_in'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    V['locking'] = !1,
                                        Z['UI_ReplayWheel'].Inst['enable'] = !0;
                                })),
                                this['round_index'] = this['rounds']['length'] - 1,
                                this['action_index'] = this['rounds'][this['round_index']]['actions']['length'] - 1,
                                this['_refreshBarshow']();
                        },
                        y['prototype']['close'] = function() {
                            var S = this;
                            this['reset'](),
                                this['locking'] = !0,
                                Z['UIBase']['anim_alpha_out'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1,
                                        S['enable'] = !1,
                                        Z['UI_ReplayWheel'].Inst['enable'] = !1;
                                }));
                        },
                        y['prototype']['initData'] = function() {
                            var Z = null;
                            this['rounds'] = [];
                            for (var S = this['origin_actions'], V = 0; V < S['length']; V++) {
                                var o = S[V];
                                null == Z && (Z = {
                                        xun: [],
                                        actions: []
                                    }),
                                    Z['actions'].push(o),
                                    this['isRoundEnd'](o.name) && (this['pengding_xun'](Z), this['rounds'].push(Z), Z = null);
                            }
                            null != Z && (this['pengding_xun'](Z), this['rounds'].push(Z)),
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var y = [];
                            'en' != GameMgr['client_language'] ? (y.push(this['label_xun']['parent']['getChildByName']('xun')), y.push(this['label_xun']['parent']['getChildByName']('turn'))) : (y.push(this['label_xun']['parent']['getChildByName']('turn')), y.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                this['btn_nextround']['visible'] = this['rounds']['length'] > 1,
                                this['btn_preround']['visible'] = this['rounds']['length'] > 1,
                                game['Tools']['sprite_align_center'](y, 80, [5]);
                        },
                        y['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close']();
                        },
                        y['prototype']['pengding_xun'] = function(Z) {
                            Z.xun = [];
                            for (var S = view['DesktopMgr'].Inst.seat, V = !1, o = 0; o < Z['actions']['length']; o++) {
                                var y = Z['actions'][o];
                                'RecordNewRound' == y.name ? y.data.ju == S && (V = !0, Z.xun.push(o)) : 'RecordDealTile' == y.name || 'RecordChiPengGang' == y.name || 'RecordHuleXueZhanMid' == y.name ? y.data.seat == S && (V || (V = !0, Z.xun.push(o))) : ('RecordDiscardTile' == y.name || 'RecordAnGangAddGang' == y.name || 'RecordBaBei' == y.name) && (V = !1);
                            }
                        },
                        y['prototype']['get_currentxun'] = function() {
                            var Z = this['rounds'][this['round_index']];
                            if (0 == Z.xun['length'])
                                return 1;
                            for (var S = Z.xun['length'], V = 0; V < Z.xun['length']; V++)
                                if (this['action_index'] < Z.xun[V]) {
                                    S = V;
                                    break;
                                }
                            return 0 > S && (S = 0),
                                S;
                        },
                        y['prototype']['nextStep'] = function(Z) {
                            if (void 0 === Z && (Z = !1), !(!Z && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= this['rounds']['length'])) {
                                if (this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1 ? (this['round_index']++, this['action_index'] = 0, this['round_index'] == this['rounds']['length'] && (this['round_index'] = 0)) : this['action_index']++, this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name) {
                                    var S = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    S != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](S)]['RecordLiPai'](0);
                                }
                                this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](this['rounds'][this['round_index']]['actions'][this['action_index']]),
                                    this['_refreshBarshow']();
                            }
                        },
                        y['prototype']['_refreshBarshow'] = function() {
                            var Z = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? Z = 'Round' : ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language']) && (Z += '第'), this['label_chang'].text = Z, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '东';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '東';
                                            break;
                                        case 1:
                                            Z += '南';
                                            break;
                                        case 2:
                                            Z += '西';
                                            break;
                                        case 3:
                                            Z += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += '동';
                                            break;
                                        case 1:
                                            Z += '남';
                                            break;
                                        case 2:
                                            Z += '서';
                                            break;
                                        case 3:
                                            Z += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            Z += 'East';
                                            break;
                                        case 1:
                                            Z += 'South';
                                            break;
                                        case 2:
                                            Z += 'West';
                                            break;
                                        case 3:
                                            Z += 'North';
                                    }
                                this['label_chang'].text = Z,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var S = function(Z, S) {
                                for (var V = 0, o = 1; o < Z['numChildren']; o++) {
                                    1 != o && (V += 3);
                                    var y = Z['getChildAt'](o);
                                    V += y['textField']['textWidth'] * y['scaleX'];
                                }
                                for (var G = Z['width'] / 2 - V / 2, o = 1; o < Z['numChildren']; o++) {
                                    var y = Z['getChildAt'](o);
                                    y.x = G,
                                        G += y['textField']['textWidth'] * y['scaleX'] + 3,
                                        y.y = 'haolong' == y.font ? S + 3 : S;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var V = [];
                            'en' != GameMgr['client_language'] ? (V.push(this['label_xun']['parent']['getChildByName']('xun')), V.push(this['label_xun']['parent']['getChildByName']('turn'))) : (V.push(this['label_xun']['parent']['getChildByName']('turn')), V.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](V, 80, [5]),
                                S(this['label_chang']['parent'], 40);
                        },
                        y['prototype']['doRecord'] = function(Z) {
                            try {
                                var S = 0;
                                switch (Z.name) {
                                    case 'RecordNewRound':
                                        this['anim_time'] = view['ActionNewRound']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordChangeTile':
                                        this['anim_time'] = view['ActionChangeTile']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordSelectGap':
                                        this['anim_time'] = view['ActionSelectGap']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordDiscardTile':
                                        this['anim_time'] = view['ActionDiscardTile']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordDealTile':
                                        this['anim_time'] = view['ActionDealTile']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordChiPengGang':
                                        this['anim_time'] = view['ActionChiPengGang']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        this['anim_time'] = view['ActionAnGangAddGang']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordBaBei':
                                        this['anim_time'] = view['ActionBabei']['record'](Z.data),
                                            S = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordHule':
                                        this['anim_time'] = view['ActionHule']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordLiuJu':
                                        this['anim_time'] = view['ActionLiuJu']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordNoTile':
                                        this['anim_time'] = view['ActionNoTile']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        this['anim_time'] = view['ActionHuleXueZhanMid']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        this['anim_time'] = view['ActionHuleXueZhanEnd']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordGangResult':
                                        this['anim_time'] = view['ActionGangResult']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordGangResultEnd':
                                        this['anim_time'] = view['ActionGangResultEnd']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordRevealTile':
                                        this['anim_time'] = view['ActionRevealTile']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordUnveilTile':
                                        this['anim_time'] = view['ActionUnveilTile']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordLockTile':
                                        this['anim_time'] = view['ActionLockTile']['record'](Z.data),
                                            S = this['anim_time'];
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        this['anim_time'] = view['ActionFillAwaitingTiles']['record'](Z.data),
                                            S = this['anim_time'];
                                }
                                return this['anim_time'] += Laya['timer']['currTimer'],
                                    S;
                            } catch (V) {
                                var o = {};
                                return o['error'] = V['message'],
                                    o['stack'] = V['stack'],
                                    o['method'] = 'UI_Ob_Replay doRecord',
                                    o.name = Z.name,
                                    o.data = Z.data,
                                    GameMgr.Inst['onFatalError'](o),
                                    1000000;
                            }
                        },
                        y['prototype']['doFastRecord'] = function(Z) {
                            if (Z) {
                                try {
                                    switch (Z.name) {
                                        case 'RecordNewRound':
                                            view['ActionNewRound']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordChangeTile':
                                            view['ActionChangeTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordSelectGap':
                                            view['ActionSelectGap']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordDiscardTile':
                                            view['ActionDiscardTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordDealTile':
                                            view['ActionDealTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordChiPengGang':
                                            view['ActionChiPengGang']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordAnGangAddGang':
                                            view['ActionAnGangAddGang']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordHule':
                                            view['ActionHule']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordLiuJu':
                                            view['ActionLiuJu']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordNoTile':
                                            view['ActionNoTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordBaBei':
                                            view['ActionBabei']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordHuleXueZhanMid':
                                            view['ActionHuleXueZhanMid']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordHuleXueZhanEnd':
                                            view['ActionHuleXueZhanEnd']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordGangResult':
                                            view['ActionGangResult']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordGangResultEnd':
                                            view['ActionGangResultEnd']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordRevealTile':
                                            view['ActionRevealTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordLockTile':
                                            view['ActionLockTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordUnveilTile':
                                            view['ActionUnveilTile']['fastrecord'](Z.data);
                                            break;
                                        case 'RecordFillAwaitingTiles':
                                            view['ActionFillAwaitingTiles']['fastrecord'](Z.data);
                                    }
                                } catch (S) {
                                    var V = {};
                                    return V['error'] = S['message'],
                                        V['stack'] = S['stack'],
                                        V['method'] = 'UI_Ob_Replay doRecord',
                                        V.name = Z.name,
                                        V.data = Z.data,
                                        GameMgr.Inst['onFatalError'](V),
                                        1000000;
                                }
                                return 0;
                            }
                        },
                        y['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](), (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'record_click_action': "update"
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'record_click_action': "update"
                                    }));
                                }
                            })));
                        },
                        y['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var Z = this['rounds'][this['round_index']],
                                S = Z['actions']['length'] - 3;
                            1 > S && (S = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': S - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': S - 1
                                        }));
                                    }
                                })),
                                this['_jumpStep'](this['round_index'], S);
                        },
                        y['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                if (this['action_index'] != Z['actions']['length'] - 1) {
                                    var S = 0;
                                    if (0 == Z.xun['length'])
                                        S = Z['actions']['length'] - 1;
                                    else if (Z.xun[0] > this['action_index'])
                                        S = Z.xun[0];
                                    else {
                                        var V = this['get_currentxun']();
                                        S = V == Z.xun['length'] ? Z['actions']['length'] - 1 : Z.xun[V];
                                    }
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': S - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': S - 1
                                            }));
                                        }
                                    }));
                                    this['_jumpStep'](this['round_index'], S);
                                }
                            }
                        },
                        y['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == Z['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var S = 0;
                                if (0 == Z.xun['length'])
                                    S = 0;
                                else if (Z.xun[0] > this['action_index'])
                                    S = 0;
                                else {
                                    var V = this['get_currentxun']() - 1;
                                    S = 0 == V ? 0 : Z.xun[V - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': S - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': S - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], S);
                            }
                        },
                        y['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var Z = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == Z['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : ((GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preStep",
                                        'fast_record_to': this.action_index - 2
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }));
                                    }
                                })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0);
                            }
                        },
                        y['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : ((GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextRound"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }));
                                    }
                                })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        y['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : ((GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preRound"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preRound"
                                        }));
                                    }
                                })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        y['prototype']['jumpRound'] = function(Z) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > Z || Z >= this['rounds']['length'] || (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpRound",
                                        'record_click_action_index': Z
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': Z
                                        }));
                                    }
                                })) || this['_jumpStep'](Z, 0), void 0);
                        },
                        y['prototype']['jumpXun'] = function(Z) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var S = this['rounds'][this['round_index']],
                                    V = 0;
                                V = 0 == S.xun['length'] ? 0 : 0 == Z ? 0 : S.xun[Z - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': V - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': V - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], V);
                            }
                        },
                        y['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : ((GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'record_click_action': "nextStep"
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }));
                                }
                            })), this['nextStep'](), void 0);
                        },
                        y['prototype']['_jumpStep'] = function(Z, S) {
                            var V = this['rounds'][Z];
                            this['round_index'] = Z,
                                S >= V['actions']['length'] && (S = V['actions']['length'] - 1),
                                V['actions'][S] && V['actions'][S + 1] && 'RecordNewCard' == V['actions'][S].name && S++;
                            for (var o = 0; S > o; o++) {
                                if (o > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][o - 1].name) {
                                    var y = this['rounds'][this['round_index']]['actions'][o - 1].data.seat;
                                    y != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](y)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](V['actions'][o]);
                            }
                            if (S == V['actions']['length'] - 1)
                                this['action_index'] = S - 1, this['nextStep']();
                            else {
                                if (S > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][S - 1].name) {
                                    var y = this['rounds'][this['round_index']]['actions'][S - 1].data.seat;
                                    y != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](y)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](V['actions'][S]),
                                    this['action_index'] = S,
                                    this['_refreshBarshow']();
                            }
                        },
                        y['prototype']['onChangeMainBody'] = function() {
                            var Z = this['round_index'],
                                S = this['action_index'];
                            this['initData'](),
                                this['reset'](),
                                Z >= this['rounds']['length'] || 0 > Z || this['_jumpStep'](Z, S);
                        },
                        y['prototype']['resetRounds'] = function() {
                            this['rounds'] = [];
                        },
                        y.Inst = null,
                        y;
                }
                (Z['UIBase']);
            Z['UI_Ob_Replay'] = o;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            for (var V = 0, o = S['gang_infos'], y = [], G = 0; G < o['delta_scores']['length']; G++) {
                                var e = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                o['delta_scores'][G] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](G, 'emoji_7', -1), e['delta'] = o['delta_scores'][G]) : o['delta_scores'][G] < 0 && (e['delta'] = o['delta_scores'][G], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](G, 'emoji_8', -1)),
                                    e['score'] = o['old_scores'][G],
                                    y.push(e);
                            }
                            if (Laya['timer'].once(200, this, function() {
                                    Z['DesktopMgr'].Inst['setScores'](o['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](y), V += 2000, o['hules_history'] && o['hules_history']['length'] > 0) {
                                for (var x = 0, R = o['hules_history']; x < R['length']; x++) {
                                    var s = R[x],
                                        u = Z['DesktopMgr'].Inst['seat2LocalPosition'](s.seat);
                                    Z['DesktopMgr'].Inst['players'][u]['onXuezhanEnd'](s.hand, !1);
                                }
                                Laya['timer'].once(V, this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](o, !1);
                                });
                            } else
                                Laya['timer'].once(V, this, function() {
                                    Z['DesktopMgr'].Inst.mode == Z['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                                });
                            Laya['timer'].once(V, this, function() {
                                Z['DesktopMgr'].Inst['ActionRunComplete']();
                            });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](S));
                            var V = S['gang_infos'];
                            V['hules_history'] && V['hules_history']['length'] > 0 ? uiscript['UIMgr'].Inst['ShowWin'](V, !1) : Z['DesktopMgr'].Inst.mode == Z['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                        },
                        V['record'] = function(Z) {
                            return this.play(Z),
                                5100;
                        },
                        V['fastrecord'] = function(S) {
                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                this['fastplay'](S, 1000);
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionGangResultEnd'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S = function(S) {
                    function V() {
                        return null !== S && S['apply'](this, arguments) || this;
                    }
                    return __extends(V, S),
                        V.play = function(S) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(S),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                }
                            }));
                            var V = this;
                            app.Log.log('ActionNotile play data:' + JSON['stringify'](S));
                            for (var o = 0, y = 1; 4 > y; y++) {
                                var G = Z['DesktopMgr'].Inst['players'][y]['discardcd'] - Laya['timer']['currTimer'];
                                G > o && (o = G);
                            }
                            o += 1000,
                                Laya['timer'].once(o, this, function() {
                                    Z['BgmListMgr']['stopBgm']();
                                    var o = S['players'];
                                    Z['DesktopMgr'].Inst['gameing'] = !1,
                                        uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                        uiscript['UI_TingPai'].Inst['reset'](),
                                        uiscript['UI_TingPai'].Inst['setZhengting'](!1),
                                        S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !0);
                                    for (var y = 0; y < o['length']; y++) {
                                        for (var G = Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](y)], e = [], x = 0; x < o[y].hand['length']; x++)
                                            e.push(mjcore['MJPai']['Create'](o[y].hand[x]));
                                        e = e.sort(mjcore['MJPai']['Distance']),
                                            Z['DesktopMgr'].Inst['is_chuanma_mode']() ? G['onChuanmaNoTile'](e, !1) : G['already_xuezhan_hule_state'] ? G['onXuezhanEnd'](e, !1) : G['Huangpai'](o[y]['tingpai'], e, !1);
                                    }
                                    Laya['timer'].once(1000, V, function() {
                                        var y,
                                            G = !1,
                                            e = !1;
                                        if (Z['DesktopMgr'].Inst['xuezhan'] || Z['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                            var x = !1;
                                            if (S['scores'] && S['scores']['length'] > 0) {
                                                for (var R = 0; R < S['scores']['length']; R++) {
                                                    if (S['scores'][R]['hasOwnProperty']('delta_scores'))
                                                        for (var s = 0; s < Z['DesktopMgr'].Inst['player_count'] && s < S['scores'][R]['delta_scores']['length']; s++)
                                                            0 != S['scores'][R]['delta_scores'][s] && (x = !0);
                                                    if (S['scores'][R]['hasOwnProperty']('taxes'))
                                                        for (var s = 0; s < Z['DesktopMgr'].Inst['player_count'] && s < S['scores'][R]['taxes']['length']; s++)
                                                            0 != S['scores'][R]['taxes'][s] && (e = !0);
                                                }
                                                y = S['scores'][0]['lines'];
                                            }
                                            var u = !1;
                                            S['liujumanguan'] && (u = !0),
                                                S['hules_history'] && S['hules_history']['length'] > 0 && (u = !0),
                                                G = !e && !x && !u;
                                        }
                                        uiscript['UI_Huleshow'].Inst['showLiuJu'](o, Laya['Handler']['create'](V, function() {
                                            if (Z['DesktopMgr'].Inst['xuezhan'] || Z['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                                var o = !1,
                                                    G = [],
                                                    x = [];
                                                if (S['scores'] && S['scores']['length'] > 0) {
                                                    for (var R = 0; R < Z['DesktopMgr'].Inst['player_count']; R++)
                                                        G.push({
                                                            score: Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](R)]['score'],
                                                            title_id: 0,
                                                            delta: 0
                                                        }), x.push({
                                                            score: 0,
                                                            title_id: 0,
                                                            delta: 0
                                                        });
                                                    for (var R = 0; R < S['scores']['length']; R++) {
                                                        if (S['liujumanguan'] && (G[S['scores'][R].seat]['title_id'] = -1), S['scores'][R]['hasOwnProperty']('delta_scores'))
                                                            for (var s = 0; s < Z['DesktopMgr'].Inst['player_count'] && s < S['scores'][R]['delta_scores']['length']; s++)
                                                                G[s]['delta'] += S['scores'][R]['delta_scores'][s];
                                                        if (S['scores'][R]['hasOwnProperty']('taxes'))
                                                            for (var s = 0; s < Z['DesktopMgr'].Inst['player_count'] && s < S['scores'][R]['taxes']['length']; s++)
                                                                x[s]['delta'] += S['scores'][R]['taxes'][s];
                                                    }
                                                    if (Z['DesktopMgr'].Inst['is_chuanma_mode']())
                                                        for (var R = 0; R < Z['DesktopMgr'].Inst['player_count']; R++)
                                                            0 != G[R]['delta'] && (o = !0), x[R]['score'] = G[R]['score'] + G[R]['delta'];
                                                    else
                                                        for (var R = 0; R < Z['DesktopMgr'].Inst['player_count']; R++)
                                                            0 != G[R]['delta'] && (o = !0);
                                                }
                                                if (Z['DesktopMgr'].Inst['is_chuanma_mode']() && e) {
                                                    var u = V,
                                                        n = function() {
                                                            var Z = !1;
                                                            S['liujumanguan'] && (Z = !0, uiscript['UIMgr'].Inst['ShowWin'](S['scores'], !0)),
                                                                S['hules_history'] && S['hules_history']['length'] > 0 && (Z = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](S)),
                                                                Z ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : u['onXuezhanNoWinNext']();
                                                        };
                                                    o ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](G, x, Laya['Handler']['create'](null, n))) : uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](null, x, Laya['Handler']['create'](null, n)),
                                                        Z['DesktopMgr'].Inst['ActionRunComplete']();
                                                } else {
                                                    var k = V,
                                                        n = function() {
                                                            var Z = !1;
                                                            S['liujumanguan'] && (Z = !0, uiscript['UIMgr'].Inst['ShowWin'](S['scores'], !0)),
                                                                S['hules_history'] && S['hules_history']['length'] > 0 && (Z = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](S)),
                                                                Z ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : k['onXuezhanNoWinNext']();
                                                        };
                                                    o ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](G, Laya['Handler']['create'](null, n), Z['DesktopMgr'].Inst['is_chuanma_mode'](), y)) : n(),
                                                        Z['DesktopMgr'].Inst['ActionRunComplete']();
                                                }
                                            } else {
                                                if (S['liujumanguan'])
                                                    uiscript['UIMgr'].Inst['ShowWin'](S['scores'], !0);
                                                else {
                                                    var r = [];
                                                    if (S['scores'] && S['scores']['length'] > 0) {
                                                        for (var R = 0; R < Z['DesktopMgr'].Inst['player_count']; R++)
                                                            r.push({
                                                                old_score: S['scores'][0]['old_scores'][R],
                                                                delta: 0
                                                            });
                                                        for (var R = 0; R < S['scores']['length']; R++)
                                                            if (S['scores'][R]['hasOwnProperty']('delta_scores'))
                                                                for (var s = 0; s < Z['DesktopMgr'].Inst['player_count'] && s < S['scores'][R]['delta_scores']['length']; s++)
                                                                    r[s]['delta'] += S['scores'][R]['delta_scores'][s];
                                                    } else
                                                        for (var R = 0; R < Z['DesktopMgr'].Inst['player_count']; R++)
                                                            r.push({
                                                                old_score: Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](R)]['score'],
                                                                delta: 0
                                                            });
                                                    uiscript['UI_ScoreChange'].Inst.show(r);
                                                }
                                                Z['DesktopMgr'].Inst['ActionRunComplete']();
                                            }
                                        }), G);
                                    });
                                });
                        },
                        V['fastplay'] = function(S) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](S));
                            Z['BgmListMgr']['stopBgm']();
                            var V = S['players'];
                            Z['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var o = [!1, !1, !1, !1];
                            uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_TingPai'].Inst['setZhengting'](!1);
                            for (var y = 0; y < Z['DesktopMgr'].Inst['player_count']; y++) {
                                for (var G = [], e = 0; e < V[y].hand['length']; e++)
                                    G.push(mjcore['MJPai']['Create'](V[y].hand[e]));
                                G = G.sort(mjcore['MJPai']['Distance']),
                                    Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](y)]['Huangpai'](V[y]['tingpai'], G, !0),
                                    o[Z['DesktopMgr'].Inst['seat2LocalPosition'](y)] = V[y]['tingpai'];
                            }
                            if (S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1), S['liujumanguan'])
                                uiscript['UIMgr'].Inst['ShowWin'](S['scores'], !0);
                            else {
                                var x = [];
                                if (S['scores'] && S['scores']['length'] > 0) {
                                    for (var y = 0; y < Z['DesktopMgr'].Inst['player_count']; y++)
                                        x.push({
                                            old_score: S['scores'][0]['old_scores'][y],
                                            delta: 0
                                        });
                                    for (var y = 0; y < S['scores']['length']; y++)
                                        if (S['scores'][y]['hasOwnProperty']('delta_scores'))
                                            for (var e = 0; e < Z['DesktopMgr'].Inst['player_count'] && e < S['scores'][y]['delta_scores']['length']; e++)
                                                x[e]['delta'] += S['scores'][y]['delta_scores'][e];
                                } else
                                    for (var y = 0; y < Z['DesktopMgr'].Inst['player_count']; y++)
                                        x.push({
                                            old_score: Z['DesktopMgr'].Inst['players'][Z['DesktopMgr'].Inst['seat2LocalPosition'](y)]['score'],
                                            delta: 0
                                        });
                                uiscript['UI_ScoreChange'].Inst.show(x);
                            }
                        },
                        V['record'] = function(Z) {
                            return app.Log.log('ActionNewRound record data:' + JSON['stringify'](Z)),
                                this.play(Z),
                                8000;
                        },
                        V['fastrecord'] = function(S) {
                            Z['BgmListMgr']['stopBgm'](),
                                Z['DesktopMgr'].Inst['gameing'] = !1;
                            for (var V = [], o = 0; o < S['players']['length']; o++)
                                V.push({
                                    seat: o
                                });
                            S.muyu && Z['DesktopMgr'].Inst['onMuyuChange'](S.muyu, !1),
                                uiscript['UI_Huleshow'].Inst['showLiuJu'](V, null);
                        },
                        V['onXuezhanNoWinNext'] = function() {
                            var S = this;
                            if (Z['DesktopMgr'].Inst.mode == Z['EMJMode'].play)
                                null != Z['DesktopMgr'].Inst['gameEndResult'] ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1, uiscript['UIMgr'].Inst['ShowGameEnd']()) : (Z['DesktopMgr'].Inst['Reset'](), Laya['timer'].once(200, this, function() {
                                    Z['DesktopMgr'].Inst['timestoped'] ? Z['DesktopMgr'].Inst['handles_after_timerun'].push(Laya['Handler']['create'](S, function() {
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                    })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                }));
                            else if (Z['DesktopMgr'].Inst.mode == Z['EMJMode']['paipu'])
                                uiscript['UI_Replay'].Inst['nextStep'](!0);
                            else if (Z['DesktopMgr'].Inst.mode == Z['EMJMode']['live_broadcast']) {
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                    uiscript['UI_Live_Broadcast'].Inst['onScoreChangeConfirm']();
                            }
                        },
                        V;
                }
                (Z['ActionBase']);
            Z['ActionNoTile'] = S;
        }
        (view || (view = {}));
        ! function(Z) {
            var S,
                V = function() {
                    function S(S) {
                        var V = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = S,
                            this._out = this.me['getChildByName']('out'),
                            this._in = this.me['getChildByName']('in'),
                            this['_btn_out'] = this._out['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['switch'](!0);
                            }, null, !1),
                            this['_btn_in'] = this._in['getChildByName']('btn_in'),
                            this['_btn_in']['clickHandler'] = new Laya['Handler'](this, function() {
                                V['switch']();
                            }),
                            this._in['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_show_hand'] = !V['_show_hand'],
                                    V['_choosed_show_hand']['visible'] = V['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](V['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this._in['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_show_paopai'] = !V['_show_paopai'],
                                    V['_choosed_show_paopai']['visible'] = V['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](V['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this._in['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                Z['UI_Ob_Replay'].Inst['locking'] || Z['UI_Ob_Replay'].Inst['anim_time'] > Laya['timer']['currTimer'] || 'RecordHuleXueZhanEnd' != o.Inst['last_action_name'] && 'RecordHule' != o.Inst['last_action_name'] && 'RecordLiuJu' != o.Inst['last_action_name'] && 'RecordNoTile' != o.Inst['last_action_name'] && ('RecordNewRound' == o.Inst['last_action_name'] && o.Inst['during_do_cd'] || (V['_show_replay'] = !V['_show_replay'], V['_choosed_show_replay']['visible'] = V['_show_replay'], V['_show_replay'] ? o.Inst['enterReplay']() : o.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this._in['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this._out['getChildByName']('label_word')['visible'] = !1,
                            this._out['getChildByName']('img_set')['visible'] = !0;
                    }
                    return S['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -253,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'],
                                this._out['visible'] = !0,
                                this._in['visible'] = !1;
                        },
                        S['prototype']['switch'] = function(Z) {
                            var S = this;
                            void 0 === Z && (Z = !1);
                            var V = Z ? 17 : -253;
                            this['_btn_out']['disabled'] = !0,
                                this['_btn_in']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: -333
                                }, Z ? 60 : 140, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    S._in['visible'] = Z,
                                        S._out['visible'] = !Z,
                                        Laya['Tween'].to(S.me, {
                                            x: V
                                        }, Z ? 140 : 60, Laya.Ease['strongOut'], Laya['Handler']['create'](S, function() {
                                            S['_btn_out']['disabled'] = !1,
                                                S['_btn_in']['disabled'] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        S;
                }
                ();
            ! function(Z) {
                Z[Z.none = 0] = 'none',
                    Z[Z['gameing'] = 1] = 'gameing',
                    Z[Z['replay'] = 2] = 'replay';
            }
            (S || (S = {}));
            var o = function(o) {
                    function y() {
                        var Z = o.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return Z['state'] = S.none,
                            Z['segments'] = [],
                            Z['_time0'] = 0,
                            Z['_time_start'] = 0,
                            Z['segment_index'] = 0,
                            Z['unit_index'] = 0,
                            Z['during_asknew'] = !1,
                            Z['retry_loadtime'] = 0,
                            Z['segment_end_millisecond'] = 0,
                            Z['guanzhanconfig'] = null,
                            Z['do_unit_cd'] = 0,
                            Z['time_stop_length'] = 0,
                            Z['time_stop_start_time'] = 0,
                            Z['_last_action_name'] = '',
                            Z['have_gameend'] = !1,
                            Z['is_realtime'] = !1,
                            Z['pending_units'] = [],
                            y.Inst = Z,
                            app['NetAgent']['AddListener2MJ']('NotifyObserveData', Laya['Handler']['create'](Z, function(S) {
                                Z['pending_units'].push(S);
                            })),
                            Z;
                    }
                    return __extends(y, o),
                        y['fetchInfo'] = function(S, V) {
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: S
                            }, function(o, y) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(y),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(y));
                                    }
                                }));
                                o || y['error'] ? (Z['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', o, y), V && V['runWith']({
                                    success: !1
                                })) : (app.Log.log('fetchGameLiveInfo res:' + JSON['stringify'](y)), y['left_start_seconds'] ? Z['UI_WaitOb'].Inst.show(S, y['left_start_seconds'], V) : V && V['runWith']({
                                    success: !0,
                                    data: y
                                }));
                            });
                        },
                        y['goToWatch'] = function(S, V, o) {
                            var G = this;
                            app.Log.log('goToWatch res:' + JSON['stringify'](V)),
                                Z['UI_Loading'].Inst.show('enter_mj'),
                                game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var e = V['live_head'], x = [null, null, null, null], R = 0; R < e['players']['length']; R++) {
                                for (var s = -1, u = 0; u < e['seat_list']['length']; u++)
                                    if (e['seat_list'][u] == e['players'][R]['account_id']) {
                                        s = u;
                                        break;
                                    } -
                                1 != s ? x[s] = e['players'][R] : app.Log['Error']('goToWatch ' + JSON['stringify'](e['players'][R]) + '未找到位置');
                            }
                            var n = game['Tools']['strOfLocalization'](2003),
                                k = e['game_config'].mode;
                            k['extendinfo'] && (n = game['Tools']['strOfLocalization'](2004)),
                                k['detail_rule'] && k['detail_rule']['ai_level'] && (1 === k['detail_rule']['ai_level'] && (n = game['Tools']['strOfLocalization'](2003)), 2 === k['detail_rule']['ai_level'] && (n = game['Tools']['strOfLocalization'](2004)));
                            for (var R = 0; R < x['length']; R++)
                                null == x[R] && (x[R] = {
                                    nickname: n,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: k
                            }, x, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](e['game_config'])), x, o, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](G, function() {
                                    Z['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, G, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                Z['UI_Loading'].Inst['setProgressVal'](0.8),
                                                y.Inst['startLive'](S);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(S) {
                                return Z['UI_Loading'].Inst['setProgressVal'](0.7 * S);
                            }, null, !1));
                        },
                        Object['defineProperty'](y['prototype'], 'during_do_cd', {
                            get: function() {
                                return this['enable'] ? Laya['timer']['currTimer'] < this['do_unit_cd'] : Z['UI_Live_Broadcast1'].Inst['during_do_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'during_play', {
                            get: function() {
                                return this['enable'] ? this['state'] == S['gameing'] : Z['UI_Live_Broadcast1'].Inst['during_play'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'last_action_name', {
                            get: function() {
                                return this['enable'] ? this['_last_action_name'] : Z['UI_Live_Broadcast1'].Inst['last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        y['prototype']['onCreate'] = function() {
                            this['guanzhanconfig'] = new V(this.me['getChildByName']('config'));
                        },
                        y['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['pending_units'] = [];
                        },
                        y['prototype']['_doRecord'] = function(Z, S, V) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = Z, Z) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](S, V);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](S, V);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](S, V);
                                case 'RecordDiscardTile':
                                    return view['ActionDiscardTile']['record'](S, V);
                                case 'RecordDealTile':
                                    return view['ActionDealTile']['record'](S, V);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](S, V);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](S, V);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](S);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](S);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](S);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](S);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](S);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](S);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](S);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](S);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](S);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](S);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](S);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](S);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](S);
                            }
                            return 0;
                        },
                        y['prototype']['_doFastRecord'] = function(Z, S, V) {
                            try {
                                switch (this['_last_action_name'] = Z, Z) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](S, V);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](S, V);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](S, V);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](S, V);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](S);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](S);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](S);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](S);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](S);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](S);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](S);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](S);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](S);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](S);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](S);
                                }
                            } catch (o) {
                                var y = {};
                                return y['error'] = o['message'],
                                    y['stack'] = o['stack'],
                                    y['method'] = 'ui_live_broadcast doFastRecord',
                                    y.name = Z,
                                    y.data = S,
                                    GameMgr.Inst['onFatalError'](y),
                                    1000000;
                            }
                        },
                        y['prototype']['_doUnit'] = function(S, V, o) {
                            if (V) {
                                if (1 == S['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': S
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': S
                                            }));
                                        }
                                    })), this['_doFastRecord'](S.name, S.data, o), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == S.name) {
                                    for (var y = 0; y < S.data['seat_states']['length']; y++)
                                        view['DesktopMgr']['player_link_state'][y] = S.data['seat_states'][y];
                                    Z['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == S.name ? (view['DesktopMgr'].Inst['gameEndResult'] = S.data['result'], this['enable'] = !1, Z['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == S.name ? Z['UI_DesktopInfo'].Inst['onPlayerConnectionState'](S.data) : 'GameEndAction' == S.name ? 3 == S.data['state'] && Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == S.name && (view['DesktopMgr'].Inst['setGameStop'](S.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += S['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? S['timestamp'] : -1);
                                return -1;
                            }
                            if (1 == S['category']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_action': S
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_action': S
                                        }));
                                    }
                                }));
                                var G = this['_doRecord'](S.name, S.data, o);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    G;
                            }
                            if ('GameNewRoundState' == S.name) {
                                for (var y = 0; y < S.data['seat_states']['length']; y++)
                                    view['DesktopMgr']['player_link_state'][y] = S.data['seat_states'][y];
                                Z['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == S.name ? (view['DesktopMgr'].Inst['gameEndResult'] = S.data['result'], this['enable'] = !1, Z['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == S.name ? Z['UI_DesktopInfo'].Inst['onGameBroadcast'](S.data) : 'NotifyPlayerConnectionState' == S.name ? Z['UI_DesktopInfo'].Inst['onPlayerConnectionState'](S.data) : 'GameEndAction' == S.name ? 3 == S.data['state'] && Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == S.name && (view['DesktopMgr'].Inst['setGameStop'](S.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += S['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? S['timestamp'] : -1);
                            return -1;
                        },
                        y['prototype']['_parseUnit'] = function(Z) {
                            var S = net['MessageWrapper']['decodeMessage'](Z['action_data']);
                            return {
                                timestamp: Z['timestamp'],
                                category: Z['action_category'],
                                name: S['$type'].name,
                                data: S
                            };
                        },
                        y['prototype']['_loadUnit'] = function(Z, S, V) {
                            var o = this,
                                y = new Laya['HttpRequest']();
                            y.once(Laya['Event']['COMPLETE'], this, function(y) {
                                    if (V)
                                        try {
                                            var G = new Laya.Byte();
                                            G['writeArrayBuffer'](y),
                                                o['last_success_segment_url'] = S;
                                            for (var e = net['MessageWrapper']['decodeMessage'](G['getUint8Array'](0, G['length'])), x = [], R = 0; R < e['actions']['length']; R++)
                                                x.push(o['_parseUnit'](e['actions'][R]));
                                            V['runWith']({
                                                success: !0,
                                                id: Z,
                                                units: x,
                                                url: S
                                            });
                                        } catch (s) {
                                            V['runWith']({
                                                success: !1,
                                                id: Z,
                                                type: 'parse_error',
                                                url: S
                                            });
                                        }
                                }),
                                y.once(Laya['Event']['ERROR'], this, function() {
                                    V && V['runWith']({
                                        success: !1,
                                        id: Z,
                                        url: S,
                                        type: 'download_timeout'
                                    });
                                });
                            var G = [];
                            y.send(S, '', 'get', 'arraybuffer', G);
                        },
                        y['prototype']['startLive'] = function(S) {
                            var V = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: S
                            }, function(o, y) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(y),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(y));
                                    }
                                }));
                                if (o || y['error'] || y['left_start_seconds'])
                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                        condition: 'loading',
                                        uuid: S,
                                        segment_name: '',
                                        last_success_segment_name: '',
                                        error_info: 'download_timeout',
                                        gametime_since_start: 0
                                    }), Z['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', o, y), V['_forceQuit']();
                                else {
                                    var G = y;
                                    V['segment_index'] = 0,
                                        V['segments'] = [],
                                        V['last_success_segment_url'] = '',
                                        V['_time0'] = G['now_millisecond'],
                                        V['_time_start'] = Laya['timer']['currTimer'];
                                    var e = 0,
                                        x = !1;
                                    V['game_uuid'] = S,
                                        V['enable'] = !0,
                                        V['guanzhanconfig']['reset'](),
                                        Z['UI_Ob_Replay'].Inst['enable'] = !1,
                                        V['do_unit_cd'] = 0,
                                        V['have_gameend'] = !1,
                                        V['is_realtime'] = !1,
                                        V.me['getChildByName']('f_realtime')['visible'] = !1;
                                    for (var R = function(o) {
                                            if (!x)
                                                if (app.Log.log('loadover0 ' + JSON['stringify'](o)), o['success']) {
                                                    for (var y = 0; y < V['segments']['length']; y++)
                                                        if (V['segments'][y]['segment_id'] == o.id) {
                                                            V['segments'][y]['units'] = o['units'],
                                                                V['segments'][y]['loaded'] = !0;
                                                            break;
                                                        }
                                                    app.Log.log('loadover1'),
                                                        e++,
                                                        Z['UI_Loading'].Inst['setProgressVal'](0.8 + 0.2 * (e / V['segments']['length'])),
                                                        e == V['segments']['length'] && V['_onFirstLoadOver']();
                                                } else
                                                    app.Log.log('loadover2'), x = !0, Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), V['_forceQuit'](), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'loading',
                                                        uuid: S,
                                                        segment_name: o.url,
                                                        last_success_segment_name: V['last_success_segment_url'],
                                                        error_info: o.type,
                                                        gametime_since_start: 0
                                                    });
                                        }, s = 0; s < G['segments']['length']; s++) {
                                        var u = G['segments'][s]['segment_id'],
                                            n = game['LobbyNetMgr'].Inst['ob_url'] + G['segments'][s]['segment_uri'];
                                        V['segments'].push({
                                                segment_id: u,
                                                uri: n,
                                                units: [],
                                                loaded: !1
                                            }),
                                            V['_loadUnit'](u, n, Laya['Handler']['create'](V, R));
                                    }
                                }
                            });
                        },
                        y['prototype']['clearPendingUnits'] = function() {
                            this['pending_units'] = [];
                        },
                        y['prototype']['startRealtimeLive'] = function(S, V) {
                            var o = this;
                            this['segment_index'] = 0,
                                this['segments'] = [],
                                this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                Z['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['is_realtime'] = !0,
                                this['_time0'] = 1000 * S,
                                this['_time_start'] = Laya['timer']['currTimer'];
                            var y = this.me['getChildByName']('f_realtime');
                            y['visible'] = !0,
                                Laya['timer']['clearAll'](this),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    var Z = (Laya['timer']['currTimer'] - o['_time_start']) / 1000;
                                    Z -= 4 * Math['floor'](Z / 4),
                                        y['alpha'] = 2 > Z ? Z / 2 * 0.7 + 0.3 : 0.7 * (1 - (Z - 2) / 2) + 0.3;
                                });
                            for (var G = [], e = 0; e < V['actions']['length']; e++)
                                G.push(this['_parseUnit'](V['actions'][e]));
                            for (var e = 0; e < this['pending_units']['length']; e++)
                                G.push(this['_parseUnit'](this['pending_units'][e].unit));
                            this['pending_units'] = [],
                                this['segments'].push({
                                    segment_id: 1,
                                    units: G,
                                    loaded: !0
                                }),
                                this['_onFirstLoadOver']();
                        },
                        y['prototype']['_onFirstLoadOver'] = function() {
                            var Z = this;
                            if (this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                    if (Z['is_realtime']) {
                                        for (var S = 0; S < Z['pending_units']['length']; S++)
                                            Z['segments'][0]['units'].push(Z['_parseUnit'](Z['pending_units'][S].unit));
                                        Z['pending_units'] = [];
                                    }
                                    Z['_timeDoAction'](!1);
                                }, null, !0), !this['is_realtime'])) {
                                var S = this['segments'][this['segments']['length'] - 1]['units'],
                                    V = S[S['length'] - 1]['timestamp'];
                                this['segment_end_millisecond'] = V,
                                    Laya['timer'].loop(3700, this, function() {
                                        Z['_askNewSegment']();
                                    }, null, !1);
                            }
                        },
                        y['prototype']['_unitIsTimeLast'] = function(Z, S) {
                            if (Z >= this['segments']['length'])
                                return !0;
                            var V = this['segments'][Z];
                            if (!V['loaded'])
                                return !0;
                            if (V['units']['length'] <= S)
                                return this['_unitIsTimeLast'](Z + 1, 0);
                            var o = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'],
                                y = V['units'][S];
                            return y['timestamp'] > o ? !0 : 2 == y['category'] ? this['_unitIsTimeLast'](Z, S + 1) : !1;
                        },
                        y['prototype']['_getTimeStop'] = function(Z, S, V) {
                            var o = 0;
                            if (V > 0 && (o = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'] - V), Z >= this['segments']['length'])
                                return o;
                            var y = this['segments'][Z];
                            if (!y['loaded'])
                                return o;
                            if (y['units']['length'] <= S)
                                return this['_getTimeStop'](Z + 1, 0, V);
                            var G = y['units'][S],
                                e = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (G['timestamp'] > e)
                                return o;
                            if (1 == G['category'])
                                return 0;
                            if ('NotifyGamePause' == G.name) {
                                var x = 0;
                                return V > 0 && (x += G['timestamp'] - V),
                                    V = G.data['paused'] ? G['timestamp'] : -1,
                                    x + this['_getTimeStop'](Z, S + 1, V);
                            }
                            return this['_getTimeStop'](Z, S + 1, V);
                        },
                        y['prototype']['_timeDoAction'] = function(V) {
                            if (this['state'] != S['gameing'])
                                return !1;
                            if (this['segment_index'] >= this['segments']['length'])
                                return !1;
                            var o = this['segments'][this['segment_index']];
                            if (!o['loaded'])
                                return !1;
                            if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= o['units']['length'])
                                return !1;
                            var y = o['units'][this['unit_index']],
                                G = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (y['timestamp'] > G && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == y.name)
                                return !0;
                            if (1 == y['category'] && this['during_do_cd'])
                                return !0;
                            var e = this['_unitIsTimeLast'](this['segment_index'], this['unit_index'] + 1);
                            e && (G -= this['_getTimeStop'](this['segment_index'], this['unit_index'] + 1, this['time_stop_start_time']));
                            var x = 0;
                            if (this['is_realtime'] ? (x = Laya['timer']['currTimer'] + GameMgr.Inst['server_time_delta'] - this['_time0'] - y['timestamp'], x = 0 > x ? 0 : x) : x = G - y['timestamp'], Z['UI_Loading'].Inst && Z['UI_Loading'].Inst['enable'] && Z['UI_Loading'].Inst['close'](), V)
                                e ? this['_doUnit'](y, !0, x) : this['_doUnit'](y, !0, -1);
                            else {
                                var R = this['_doUnit'](y, !1, x);
                                R > 0 && (this['do_unit_cd'] = Laya['timer']['currTimer'] + R);
                            }
                            return this['unit_index']++,
                                this['unit_index'] >= o['units']['length'] && !this['is_realtime'] && (this['unit_index'] = 0, this['segment_index']++),
                                this['_timeDoAction'](V);
                        },
                        y['prototype']['_askNewSegment'] = function() {
                            var S = this;
                            if (!this['have_gameend'] && !(this['during_asknew'] || this['retry_loadtime'] >= 3) && this['segments'][this['segments']['length'] - 1]['loaded']) {
                                var V = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                                V + 15000 < this['segment_end_millisecond'] || (this['during_asknew'] = !0, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveLeftSegment', {
                                    game_uuid: this['game_uuid'],
                                    last_segment_id: this['segments'][this['segments']['length'] - 1]['segment_id']
                                }, function(V, o) {
                                    if (S['during_asknew'] = !1, V || o['error'])
                                        S['retry_loadtime']++, S['retry_loadtime'] >= 3 && (Z['UIMgr'].Inst['showNetReqError']('fetchGameLiveLeftSegment', V, o), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                            condition: 'runtime',
                                            uuid: S['game_uuid'],
                                            segment_name: '',
                                            last_success_segment_name: S['segments'][S['segments']['length'] - 1].uri,
                                            error_info: 'server_timeout',
                                            gametime_since_start: S['_time_start']
                                        }));
                                    else {
                                        S['retry_loadtime'] = 0;
                                        var y = o['segments'];
                                        S['segment_end_millisecond'] = o['segment_end_millisecond'];
                                        for (var G = function(Z) {
                                                if (Z['success']) {
                                                    for (var V = 0; V < S['segments']['length']; V++)
                                                        if (S['segments'][V]['segment_id'] == Z.id) {
                                                            S['segments'][V]['units'] = Z['units'];
                                                            for (var o = 0; o < Z['units']['length']; o++)
                                                                if ('NotifyGameEndResult' == Z['units'][o].name) {
                                                                    S['have_gameend'] = !0;
                                                                    break;
                                                                }
                                                            S['segments'][V]['loaded'] = !0;
                                                            break;
                                                        }
                                                } else
                                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'runtime',
                                                        uuid: S['game_uuid'],
                                                        segment_name: Z.url,
                                                        last_success_segment_name: S['last_success_segment_url'],
                                                        error_info: Z.type,
                                                        gametime_since_start: S['_time_start']
                                                    });
                                            }, e = S['segments'][S['segments']['length'] - 1]['segment_id'], x = 0; x < y['length']; x++) {
                                            var R = y[x]['segment_id'],
                                                s = game['LobbyNetMgr'].Inst['ob_url'] + y[x]['segment_uri'];
                                            e >= R || (S['segments'].push({
                                                segment_id: R,
                                                uri: s,
                                                units: [],
                                                loaded: !1
                                            }), S['_loadUnit'](R, s, Laya['Handler']['create'](S, G, null, !1)));
                                        }
                                    }
                                }));
                            }
                        },
                        y['prototype']['_forceQuit'] = function() {
                            this['state'] = S.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        y['prototype']['_fastSync'] = function() {
                            var V = -1,
                                o = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var y = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            this['is_realtime'] && (y = Laya['timer']['currTimer']);
                            for (var G = 0; G < this['segments']['length']; G++)
                                for (var e = this['segments'][G], x = 0; x < e['units']['length']; x++)
                                    e['units'][x]['timestamp'] <= y && 'RecordNewRound' == e['units'][x].name && (V = G, o = x);
                            if (app.Log.log('_fastSync1: segment=' + V + ', unit=' + o), -1 == V) {
                                V = 0;
                                for (var e = this['segments'][0], x = 0; x < e['units']['length']; x++)
                                    if ('RecordNewRound' == e['units'][x].name) {
                                        V = 0,
                                            o = x,
                                            this['_time0'] = e['units'][x]['timestamp'] - 50;
                                        break;
                                    }
                            }
                            return app.Log.log('_fastSync2: segment=' + V + ', unit=' + o), -1 == o ? this['is_realtime'] ? (this['state'] = S['gameing'], this['segment_index'] = 0, this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = S['gameing'], this['segment_index'] = V, this['unit_index'] = o, this['_timeDoAction'](!0), !0);
                        },
                        y['prototype']['onChangeMainbody'] = function() {
                            this['state'] == S['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == S['replay'] && Z['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        y['prototype']['onScoreChangeConfirm'] = function() {
                            if (!this['enable'])
                                return Z['UI_Live_Broadcast1'].Inst['onScoreChangeConfirm'](), void 0;
                            if (this['state'] == S['gameing']) {
                                if (this['do_unit_cd'] = 0, this['segment_index'] >= this['segments']['length'])
                                    return !1;
                                var V = this['segments'][this['segment_index']];
                                if (!V['loaded'])
                                    return !1;
                                if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= V['units']['length'])
                                    return !1;
                                var o = V['units'][this['unit_index']];
                                'NotifyGameEndResult' == o.name && (Z['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](o, !1, 0));
                            } else
                                this['state'] == S['replay'] && (Z['UI_ScoreChange'].Inst['enable'] = !1, Z['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        y['prototype']['enterReplay'] = function() {
                            this['state'] = S['replay'];
                            for (var V = [], o = 0; o <= this['segment_index'] && o < this['segments']['length'] && this['segments'][o]['loaded']; o++)
                                for (var y = this['segments'][o]['units'], G = 0; G < y['length'] && !(o == this['segment_index'] && G >= this['unit_index']); G++) {
                                    var e = y[G];
                                    1 == e['category'] && V.push({
                                        name: e.name,
                                        data: e.data
                                    });
                                }
                            Z['UI_Ob_Replay'].Inst.show(V),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        y['prototype']['closeReplay'] = function() {
                            this['state'] = S['gameing'],
                                Z['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        y;
                }
                (Z['UIBase']);
            Z['UI_Live_Broadcast'] = o;
        }
        (uiscript || (uiscript = {}));
        ! function(Z) {
            var S,
                V = function() {
                    function S(S) {
                        var V = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = S,
                            this._out = this.me['getChildByName']('out'),
                            this._in = this.me['getChildByName']('in'),
                            this['_btn_out'] = this._out['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['switch'](!0);
                            }, null, !1),
                            this['_btn_in'] = this._in['getChildByName']('btn_in'),
                            this['_btn_in']['clickHandler'] = new Laya['Handler'](this, function() {
                                V['switch']();
                            }),
                            this._in['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_show_hand'] = !V['_show_hand'],
                                    V['_choosed_show_hand']['visible'] = V['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](V['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this._in['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                V['_show_paopai'] = !V['_show_paopai'],
                                    V['_choosed_show_paopai']['visible'] = V['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](V['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this._in['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this._in['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                Z['UI_Ob_Replay'].Inst['locking'] || Z['UI_Ob_Replay'].Inst['anim_time'] > Laya['timer']['currTimer'] || 'RecordHuleXueZhanEnd' != o.Inst['last_action_name'] && 'RecordHule' != o.Inst['last_action_name'] && 'RecordLiuJu' != o.Inst['last_action_name'] && 'RecordNoTile' != o.Inst['last_action_name'] && ('RecordNewRound' == o.Inst['last_action_name'] && o.Inst['during_do_cd'] || (V['_show_replay'] = !V['_show_replay'], V['_choosed_show_replay']['visible'] = V['_show_replay'], V['_show_replay'] ? o.Inst['enterReplay']() : o.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this._in['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this._out['getChildByName']('label_word')['visible'] = !1,
                            this._out['getChildByName']('img_set')['visible'] = !0;
                    }
                    return S['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -253,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'],
                                this._out['visible'] = !0,
                                this._in['visible'] = !1;
                        },
                        S['prototype']['switch'] = function(Z) {
                            var S = this;
                            void 0 === Z && (Z = !1);
                            var V = Z ? 17 : -253;
                            this['_btn_out']['disabled'] = !0,
                                this['_btn_in']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: -333
                                }, Z ? 60 : 140, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    S._in['visible'] = Z,
                                        S._out['visible'] = !Z,
                                        Laya['Tween'].to(S.me, {
                                            x: V
                                        }, Z ? 140 : 60, Laya.Ease['strongOut'], Laya['Handler']['create'](S, function() {
                                            S['_btn_out']['disabled'] = !1,
                                                S['_btn_in']['disabled'] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        S;
                }
                ();
            ! function(Z) {
                Z[Z.none = 0] = 'none',
                    Z[Z['gameing'] = 1] = 'gameing',
                    Z[Z['replay'] = 2] = 'replay';
            }
            (S || (S = {}));
            var o = function(o) {
                    function y() {
                        var Z = o.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return Z['state'] = S.none,
                            Z['pending_units'] = [],
                            Z['_time0'] = 0,
                            Z['_time_start'] = 0,
                            Z['unit_index'] = 0,
                            Z['guanzhanconfig'] = null,
                            Z['do_unit_cd'] = 0,
                            Z['time_stop_length'] = 0,
                            Z['time_stop_start_time'] = 0,
                            Z['_last_action_name'] = '',
                            Z['have_gameend'] = !1,
                            Z['is_realtime'] = !1,
                            Z['waiting_start'] = !1,
                            Z['sended_error_msg'] = !1,
                            y.Inst = Z,
                            game['LiveNetMgr'].Inst['setNotifyHandler'](new Laya['Handler'](Z, Z['onReceiveNotify'])),
                            Z;
                    }
                    return __extends(y, o),
                        y['fetchInfo'] = function(S, V) {
                            var o = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchOBToken', {
                                uuid: S
                            }, function(G, e) {
                                if (G || e['error'])
                                    Z['UIMgr'].Inst['showNetReqError']('fetchOBToken', G, e), V && V['runWith']({
                                        success: !1
                                    });
                                else {
                                    app.Log.log('fetchOBToken res:' + JSON['stringify'](e)),
                                        o['token'] = e['token'],
                                        o['game_uuid'] = S,
                                        o['create_time'] = e['create_time'],
                                        o['delay'] = e['delay'],
                                        o['start_time'] = e['start_time'];
                                    var x = Math['floor'](e['start_time'] + e['delay'] - game['Tools']['getServerTime']() / 1000);
                                    x > 0 ? Z['UI_WaitOb'].Inst.show(y['game_uuid'], x, V) : V && V['runWith']({
                                        success: !0,
                                        data: e
                                    });
                                }
                            });
                        },
                        y['goToWatch'] = function(S, V) {
                            var o = this;
                            Z['UI_Loading'].Inst['setProgressVal'](0.1),
                                Z['UI_Loading'].Inst.show('enter_mj'),
                                this['connect'](new Laya['Handler'](this, function(y) {
                                    y['success'] ? (Z['UI_Loading'].Inst['setProgressVal'](0.2), o['startLoadOb'](S, y.data, V)) : (Z['UI_Loading'].Inst['enable'] = !1, Z['UIMgr'].Inst['showLobby']());
                                }));
                        },
                        y['startLoadOb'] = function(S, V, o) {
                            var G = this;
                            app.Log.log('startLoadOb res:' + JSON['stringify'](V)),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var e = JSON['parse'](V.head), x = [null, null, null, null], R = 0; R < e['players']['length']; R++) {
                                for (var s = -1, u = 0; u < e['seat_list']['length']; u++)
                                    if (e['seat_list'][u] == e['players'][R]['account_id']) {
                                        s = u;
                                        break;
                                    } -
                                1 != s ? x[s] = e['players'][R] : app.Log['Error']('goToWatch ' + JSON['stringify'](e['players'][R]) + '未找到位置');
                            }
                            var n = game['Tools']['strOfLocalization'](2003),
                                k = e['game_config'].mode;
                            k['extendinfo'] && (n = game['Tools']['strOfLocalization'](2004)),
                                k['detail_rule'] && k['detail_rule']['ai_level'] && (1 === k['detail_rule']['ai_level'] && (n = game['Tools']['strOfLocalization'](2003)), 2 === k['detail_rule']['ai_level'] && (n = game['Tools']['strOfLocalization'](2004)));
                            for (var R = 0; R < x['length']; R++)
                                null == x[R] && (x[R] = {
                                    nickname: n,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: k
                            }, x, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](e['game_config'])), x, o, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](G, function() {
                                    Z['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, G, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                Z['UI_Loading'].Inst['setProgressVal'](0.8),
                                                y.Inst['time0'] = game['Tools']['getServerTime']() - (1000 * V['start_time'] + 1000 * V['delay']),
                                                y.Inst['startLive'](S);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(S) {
                                return Z['UI_Loading'].Inst['setProgressVal'](0.5 * S + 0.2);
                            }, null, !1));
                        },
                        y['connect'] = function(Z) {
                            this['connect_func'] = Z,
                                game['LiveNetMgr'].Inst['connect'](new Laya['Handler'](this, this['onConnect']), new Laya['Handler'](this, this['onFetchSequence']), new Laya['Handler'](this, this['onDisconnect']));
                        },
                        y['onConnect'] = function(S) {
                            var V = this;
                            if (S.open)
                                app['Log_OB'].log('Auth Sended'), game['LiveNetMgr'].Inst['sendReq']('Auth', {
                                    token: this['token']
                                }, function(S, o) {
                                    S || o['error'] ? (V['connect_func'] && (V['connect_func']['runWith']({
                                        success: !1,
                                        data: o
                                    }), V['connect_func'] = null), y.Inst && y.Inst['_forceQuit'](), o['error'] ? Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](o['error'])) : Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), Z['UI_Loading'].Inst['enable'] = !1) : (y.Inst && y.Inst['enable'] ? y.Inst['sendStartObRequest']() : V['connect_func'] && (V['connect_func']['runWith']({
                                        success: !0,
                                        data: o
                                    }), V['connect_func'] = null), app['Log_OB'].log('Auth Success'));
                                }), game['LiveNetMgr'].Inst['clearTimer'](), game['LiveNetMgr'].Inst['sendFetchSequence']();
                            else if (this['connect_func'] && (this['connect_func']['runWith']({
                                    success: !1
                                }), this['connect_func'] = null), game['LiveNetMgr'].Inst['close'](), 'connect failed' == S.info)
                                Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), y.Inst ? y.Inst['_forceQuit']() : Z['UI_Loading'].Inst['enable'] = !1;
                            else if ('disconnect' == S.info) {
                                if (!y.Inst || !y.Inst['enable'])
                                    return;
                                Z['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3529), Laya['Handler']['create'](this, function() {
                                    game['LiveNetMgr'].Inst['force_reconnect']();
                                }), Laya['Handler']['create'](this, function() {
                                    y.Inst && y.Inst['_forceQuit']();
                                }));
                            } else
                                y.Inst && y.Inst['_forceQuit']();
                        },
                        y['onFetchSequence'] = function(Z) {
                            var V = this;
                            Z['success'] && (y.Inst && y.Inst['max_seq'] < Z.seq ? Laya['timer'].once(5000, this, function() {
                                y.Inst && y.Inst['max_seq'] < Z.seq && y.Inst['state'] != S.none ? game['LiveNetMgr'].Inst['on_seq_error'](Z.seq, y.Inst['max_seq']) : Laya['timer'].once(1000, V, function() {
                                    game['LiveNetMgr'].Inst['sendFetchSequence']();
                                });
                            }) : Laya['timer'].once(1000, this, function() {
                                game['LiveNetMgr'].Inst['sendFetchSequence']();
                            }));
                        },
                        y['onDisconnect'] = function() {
                            y.Inst && (app['Log_OB'].info('clear unit timeout disconnect'), y.Inst['removeTimer']());
                        },
                        Object['defineProperty'](y['prototype'], 'max_seq', {
                            get: function() {
                                return 0 == this['pending_units']['length'] ? 0 : this['pending_units'][this['pending_units']['length'] - 1].seq;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'time0', {
                            set: function(Z) {
                                this['_time0'] = Z;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'during_do_cd', {
                            get: function() {
                                return game['Tools']['getServerTime']() < this['do_unit_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'during_play', {
                            get: function() {
                                return this['state'] == S['gameing'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](y['prototype'], 'last_action_name', {
                            get: function() {
                                return this['_last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        y['prototype']['onCreate'] = function() {
                            var Z = this;
                            this['guanzhanconfig'] = new V(this.me['getChildByName']('config')),
                                Laya['stage'].on(Laya['Event']['VISIBILITY_CHANGE'], this, function() {
                                    Z['enable'] && app['Log_OB'].info('stage visible ' + Laya['stage']['isVisibility']);
                                });
                        },
                        y['prototype']['startLive'] = function() {
                            var S = this;
                            if (game['LiveNetMgr'].Inst['connect_state'] != game['EConnectState']['connecting'])
                                return Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), y.Inst && y.Inst['_forceQuit'](), void 0;
                            this['sended_error_msg'] = !1,
                                this['pending_units'] = [];
                            var V = this.me['getChildByName']('f_realtime');
                            V['visible'] = !1,
                                this['_time_start'] = game['Tools']['getServerTime']();
                            this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                Z['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['waiting_start'] = !0,
                                game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(V, o) {
                                    V || o['error'] ? (o['error'] ? Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](o['error'])) : Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), S['_forceQuit']()) : (app['Log_OB'].log('StartOb'), S['start_seq'] = o.seq ? o.seq : 0);
                                });
                        },
                        y['prototype']['sendStartObRequest'] = function() {
                            var S = this;
                            game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(V, o) {
                                V || o['error'] ? (o['error'] ? Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](o['error'])) : Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), S['_forceQuit']()) : app['Log_OB'].log('StartOb');
                            });
                        },
                        y['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                game['LiveNetMgr'].Inst['close'](),
                                this['pending_units'] = [];
                        },
                        y['prototype']['onReceiveNotify'] = function(Z, S) {
                            var V = this;
                            void 0 === S && (S = !1);
                            for (var o = 0, G = this['pending_units']; o < G['length']; o++) {
                                var e = G[o];
                                if (e.seq == Z.seq)
                                    return;
                            }
                            if ('GameEndAction' == Z.name && game['LiveNetMgr'].Inst['close'](), app['Log_OB'].log('receive seq:' + Z.seq + '  name:' + Z.name), S) {
                                for (var x = !1, R = -1, s = 0, u = this['pending_units']; s < u['length']; s++) {
                                    var e = u[s];
                                    if (x || (R++, e.seq == Z.seq - 1 && (x = !0)), e.seq == Z.seq)
                                        return;
                                }
                                if (0 > R)
                                    this['pending_units'].push(Z);
                                else if (this['pending_units']['splice'](R + 1, 0, Z), this['pending_units'][R + 2] && this['pending_units'][R + 2].seq != Z.seq + 1) {
                                    var n = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: Z.seq + 1
                                    }, function(S, V) {
                                        (S || V['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: y['game_uuid'],
                                            token: y['token'],
                                            missing_seq: Z.seq + 1,
                                            error: S || V['error']
                                        }), !S && V && n['onReceiveNotify'](n['_handleMsg'](V['segments']), !0);
                                    });
                                }
                            } else {
                                if (this['pending_units']['length'] > 0 && Z.seq != this['pending_units'][this['pending_units']['length'] - 1].seq + 1) {
                                    this['sended_error_msg'] || (GameMgr.Inst['postInfo2Server']('livebroad', {
                                        uuid: y['game_uuid'],
                                        last_seq: this['pending_units'][this['pending_units']['length'] - 1].seq,
                                        recent_seq: Z.seq,
                                        token: y['token']
                                    }), this['sended_error_msg'] = !0);
                                    var k = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: this['pending_units'][this['pending_units']['length'] - 1].seq + 1
                                    }, function(Z, S) {
                                        (Z || S['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: y['game_uuid'],
                                            token: y['token'],
                                            missing_seq: V['pending_units'][V['pending_units']['length'] - 1].seq + 1,
                                            error: Z || S['error']
                                        }), !Z && S && k['onReceiveNotify'](k['_handleMsg'](S['segments']), !0);
                                    });
                                }
                                this['pending_units'].push(Z);
                            }
                            this['waiting_start'] && (Z.seq >= this['start_seq'] && this['start_seq'] > 0 || Z['offsetTime'] > this['_time0'] - 3000 || 'GameEndAction' == Z.name) && (this['_onFirstLoadOver'](), this['waiting_start'] = !1);
                        },
                        y['prototype']['_onFirstLoadOver'] = function() {
                            var Z = this;
                            this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                Z['_timeDoAction'](!1);
                            }, null, !0));
                        },
                        y['prototype']['_fastSync'] = function() {
                            var V = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var o = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            this['is_realtime'] && (o = game['Tools']['getServerTime']());
                            for (var y = 0; y < this['pending_units']['length']; y++) {
                                var G = this['pending_units'][y];
                                G['offsetTime'] <= o && ('RecordNewRound' == G.name || 'RecordNewCard' == G.name) && (V = y);
                            }
                            if (app.Log.log('_fastSync1: unit=' + V), -1 == V && (V = 0, this['pending_units']['length'] > 0)) {
                                var G = this['pending_units'][0];
                                ('RecordNewRound' == G.name || 'RecordNewCard' == G.name) && (V = 0, this['_time0'] = G['offsetTime'] - 50);
                            }
                            return app.Log.log('_fastSync2: unit=' + V), -1 == V ? this['is_realtime'] ? (this['state'] = S['gameing'], this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = S['gameing'], this['unit_index'] = V, this['pending_units'][V] && 'RecordNewCard' == this['pending_units'][V].name && !this['pending_units'][V + 1] ? this['_timeDoAction'](!1) : this['_timeDoAction'](!0), !0);
                        },
                        y['prototype']['_forceQuit'] = function() {
                            app.Log['Error']('_forceQuit'),
                                this['state'] = S.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        y['prototype']['_getTimeStop'] = function(Z, S) {
                            var V = 0;
                            if (S > 0 && (V = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'] - S), this['pending_units']['length'] <= Z)
                                return V;
                            var o = this['pending_units'][Z],
                                y = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (o['offsetTime'] > y)
                                return V;
                            if (1 == o['category'])
                                return 0;
                            if ('NotifyGamePause' == o.name) {
                                var G = 0;
                                return S > 0 && (G += o['offsetTime'] - S),
                                    S = o.data['paused'] ? o['offsetTime'] : -1,
                                    G + this['_getTimeStop'](Z + 1, S);
                            }
                            return this['_getTimeStop'](Z + 1, S);
                        },
                        y['prototype']['_unitIsTimeLast'] = function(Z) {
                            if (Z >= this['pending_units']['length'])
                                return !0;
                            var S = this['pending_units'][Z],
                                V = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            return S['offsetTime'] > V ? !0 : 2 == S['category'] ? this['_unitIsTimeLast'](Z + 1) : !1;
                        },
                        y['prototype']['_timeDoAction'] = function(V) {
                            if (this['state'] != S['gameing'])
                                return !1;
                            if (this['unit_index'] >= this['pending_units']['length'])
                                return !1;
                            var o = this['pending_units'][this['unit_index']],
                                y = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (o['offsetTime'] > y && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == o.name)
                                return !0;
                            if (1 == o['category'] && this['during_do_cd'])
                                return !0;
                            var G = this['_unitIsTimeLast'](this['unit_index'] + 1);
                            G && (y -= this['_getTimeStop'](this['unit_index'] + 1, this['time_stop_start_time']));
                            var e = 0;
                            if (this['is_realtime'] ? (e = game['Tools']['getServerTime']() - this['_time0'] - o['offsetTime'], e = 0 > e ? 0 : e) : e = y - o['offsetTime'], Z['UI_Loading'].Inst && Z['UI_Loading'].Inst['enable'] && (app['Log_OB'].log('loading_close'), Z['UI_Loading'].Inst['close']()), V)
                                G ? this['_doUnit'](o, !0, e) : this['_doUnit'](o, !0, -1);
                            else {
                                var x = this['_doUnit'](o, !1, e);
                                x > 0 && (this['do_unit_cd'] = game['Tools']['getServerTime']() + x);
                            }
                            return this['unit_index']++,
                                this['_timeDoAction'](V);
                        },
                        y['prototype']['onScoreChangeConfirm'] = function() {
                            if (this['state'] == S['gameing']) {
                                if (this['do_unit_cd'] = 0, this['unit_index'] >= this['pending_units']['length'])
                                    return !1;
                                var V = this['pending_units'][this['unit_index']];
                                'NotifyGameEndResult' == V.name && (Z['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](V, !1, 0));
                            } else
                                this['state'] == S['replay'] && (Z['UI_ScoreChange'].Inst['enable'] = !1, Z['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        y['prototype']['_doRecord'] = function(S, V, o) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = S, S) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](V, o);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](V, o);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](V, o);
                                case 'RecordDiscardTile':
                                    if (view['DesktopMgr'].Inst.mode == view['EMJMode']['live_broadcast'] && Z['UI_Live_Broadcast'].Inst['during_play'] && V['operations'] && V['operations']['length'] > 0) {
                                        for (var y = 0, G = 0, e = 0, x = V['operations']; e < x['length']; e++) {
                                            var R = x[e];
                                            y = Math.max(R['time_fixed'], y),
                                                G = Math.max(R['time_add'], G);
                                        }
                                        if (y + G - o > 0) {
                                            var s = y + G - o + 7000;
                                            app['Log_OB'].info('RecordDiscardTile time' + s),
                                                Laya['timer'].once(y + G - o + 7000, this, this['onUnitTimeOut']);
                                        }
                                    }
                                    return view['ActionDiscardTile']['record'](V, o);
                                case 'RecordDealTile':
                                    if (view['DesktopMgr'].Inst.mode == view['EMJMode']['live_broadcast'] && Z['UI_Live_Broadcast'].Inst['during_play'] && V['operation']) {
                                        var y = V['operation']['time_fixed'],
                                            G = V['operation']['time_add'];
                                        if (y + G - o > 0) {
                                            var s = y + G - o + 7000;
                                            app['Log_OB'].info('RecordDealTile time' + s),
                                                Laya['timer'].once(y + G - o + 7000, this, this['onUnitTimeOut']);
                                        }
                                    }
                                    return view['ActionDealTile']['record'](V, o);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](V, o);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](V, o);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](V);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](V);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](V);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](V);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](V);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](V);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](V);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](V);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](V);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](V);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](V);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](V);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](V);
                            }
                            return 0;
                        },
                        y['prototype']['_doFastRecord'] = function(Z, S, V) {
                            try {
                                switch (this['_last_action_name'] = Z, Z) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](S, V);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](S, V);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](S, V);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](S, V);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](S, V);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](S);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](S);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](S);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](S);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](S);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](S);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](S);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](S);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](S);
                                        break;
                                    case 'RecordNewCard':
                                        return view['ActionNewCard']['fastrecord'](S);
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](S);
                                }
                            } catch (o) {
                                var y = {};
                                return y['error'] = o['message'],
                                    y['stack'] = o['stack'],
                                    y['method'] = 'ui_live_broadcast doFastRecord',
                                    y.name = Z,
                                    y.data = S,
                                    GameMgr.Inst['onFatalError'](y),
                                    1000000;
                            }
                        },
                        y['prototype']['_doUnit'] = function(S, V, o) {
                            if (app['Log_OB'].info('clear unit timeout dounit ' + S.seq), this['removeTimer'](), V) {
                                if (1 == S['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': S
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': S
                                            }));
                                        }
                                    })), this['_doFastRecord'](S.name, S.data, o), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == S.name) {
                                    for (var y = 0; y < S.data['seat_states']['length']; y++)
                                        view['DesktopMgr']['player_link_state'][y] = S.data['seat_states'][y];
                                    Z['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == S.name ? (view['DesktopMgr'].Inst['gameEndResult'] = S.data['result'], this['enable'] = !1, Z['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == S.name ? Z['UI_DesktopInfo'].Inst['onPlayerConnectionState'](S.data) : 'GameEndAction' == S.name ? 3 == S.data['state'] && Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == S.name && (view['DesktopMgr'].Inst['setGameStop'](S.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += S['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? S['offsetTime'] : -1);
                                return -1;
                            }
                            if (1 == S['category']) {
                                app['Log_OB'].info('_timeDoAction name:' + S.name + '  seq:' + S.seq);
                                var G = this['_doRecord'](S.name, S.data, o);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    G;
                            }
                            if ('GameNewRoundState' == S.name) {
                                for (var y = 0; y < S.data['seat_states']['length']; y++)
                                    view['DesktopMgr']['player_link_state'][y] = S.data['seat_states'][y];
                                Z['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == S.name ? (view['DesktopMgr'].Inst['gameEndResult'] = S.data['result'], this['enable'] = !1, Z['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == S.name ? Z['UI_DesktopInfo'].Inst['onGameBroadcast'](S.data) : 'NotifyPlayerConnectionState' == S.name ? Z['UI_DesktopInfo'].Inst['onPlayerConnectionState'](S.data) : 'GameEndAction' == S.name ? 3 == S.data['state'] && Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == S.name && (view['DesktopMgr'].Inst['setGameStop'](S.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += S['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? S['offsetTime'] : -1);
                            return -1;
                        },
                        y['prototype']['enterReplay'] = function() {
                            app['Log_OB'].info('clear unit timeout enterreplay'),
                                this['removeTimer'](),
                                this['state'] = S['replay'];
                            for (var V = [], o = 0; o <= this['unit_index'] && o < this['pending_units']['length']; o++) {
                                var y = this['pending_units'][o];
                                1 == y['category'] && V.push({
                                    name: y.name,
                                    data: y.data
                                });
                            }
                            Z['UI_Ob_Replay'].Inst.show(V),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        y['prototype']['closeReplay'] = function() {
                            this['state'] = S['gameing'],
                                Z['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        y['prototype']['onChangeMainbody'] = function() {
                            app['Log_OB'].info('clear unit timeout onChangeMainbody'),
                                this['removeTimer'](),
                                this['state'] == S['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == S['replay'] && Z['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        y['prototype']['_handleMsg'] = function(Z) {
                            for (var S = window.atob(Z), V = S['length'], o = new Uint8Array(V), y = 0; V > y; y++)
                                o[y] = S['charCodeAt'](y);
                            var G = {};
                            G.seq = o[0] + (o[1] << 8),
                                G['offsetTime'] = o[2] + (o[3] << 8) + (o[4] << 16) + (o[5] << 24),
                                G.end = o[6] + (o[7] << 8),
                                G['category'] = o[8] + (o[9] << 8),
                                G['length'] = o[10] + (o[11] << 8) + (o[12] << 16) + (o[13] << 24),
                                o = o['slice'](14);
                            var e = net['MessageWrapper']['decodeMessage'](o);
                            return G.data = e,
                                G.name = e['$type'].name,
                                G;
                        },
                        y['prototype']['onUnitTimeOut'] = function() {
                            GameMgr.Inst['onGuanzhanError']('Unit超时');
                        },
                        y['prototype']['removeTimer'] = function() {
                            Laya['timer']['clear'](this, this['onUnitTimeOut']);
                        },
                        y;
                }
                (Z['UIBase']);
            Z['UI_Live_Broadcast1'] = o;
        }
        (uiscript || (uiscript = {}));
        if (typeof MMP == 'undefined') {
            ! function(Z) {
                var S = function() {
                        function S() {
                            var S = this;
                            this.urls = [],
                                this['link_index'] = -1,
                                this['connect_state'] = Z['EConnectState'].none,
                                this['reconnect_count'] = 0,
                                this['reconnect_span'] = [500, 1000, 3000, 6000, 10000, 15000],
                                this['playerreconnect'] = !1,
                                this['lasterrortime'] = 0,
                                this['load_over'] = !1,
                                this['loaded_player_count'] = 0,
                                this['real_player_count'] = 0,
                                this['is_ob'] = !1,
                                this['ob_token'] = '',
                                this['lb_index'] = 0,
                                this['_report_reconnect_count'] = 0,
                                this['_connect_start_time'] = 0,
                                app['NetAgent']['AddListener2MJ']('NotifyPlayerLoadGameReady', Laya['Handler']['create'](this, function(Z) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(Z),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(Z));
                                        }
                                    }));
                                    app.Log.log('NotifyPlayerLoadGameReady: ' + JSON['stringify'](Z)),
                                        S['loaded_player_count'] = Z['ready_id_list']['length'],
                                        S['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](S['loaded_player_count'], S['real_player_count']);
                                }));
                        }
                        return Object['defineProperty'](S, 'Inst', {
                                get: function() {
                                    return null == this['_Inst'] ? this['_Inst'] = new S() : this['_Inst'];
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            S['prototype']['OpenConnect'] = function(S, V, o, y) {
                                var G = this;
                                uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    Z['Scene_Lobby'].Inst && Z['Scene_Lobby'].Inst['active'] && (Z['Scene_Lobby'].Inst['active'] = !1),
                                    Z['Scene_Huiye'].Inst && Z['Scene_Huiye'].Inst['active'] && (Z['Scene_Huiye'].Inst['active'] = !1),
                                    this['Close'](),
                                    view['BgmListMgr']['stopBgm'](),
                                    this['is_ob'] = !1,
                                    Laya['timer'].once(500, this, function() {
                                        G.url = '',
                                            G['token'] = S,
                                            G['game_uuid'] = V,
                                            G['server_location'] = o,
                                            GameMgr.Inst['ingame'] = !0,
                                            GameMgr.Inst['mj_server_location'] = o,
                                            GameMgr.Inst['mj_game_token'] = S,
                                            GameMgr.Inst['mj_game_uuid'] = V,
                                            G['playerreconnect'] = y,
                                            G['_setState'](Z['EConnectState']['tryconnect']),
                                            G['load_over'] = !1,
                                            G['loaded_player_count'] = 0,
                                            G['real_player_count'] = 0,
                                            G['lb_index'] = 0,
                                            G['_fetch_gateway'](0);
                                    }),
                                    Laya['timer'].loop(300000, this, this['reportInfo']);
                            },
                            S['prototype']['reportInfo'] = function() {
                                this['connect_state'] == Z['EConnectState']['connecting'] && GameMgr.Inst['postNewInfo2Server']('network_route', {
                                    client_type: 'web',
                                    route_type: 'game',
                                    route_index: Z['LobbyNetMgr']['root_id_lst'][Z['LobbyNetMgr'].Inst['choosed_index']],
                                    route_delay: Math.min(10000, Math['round'](app['NetAgent']['mj_network_delay'])),
                                    connection_time: Math['round'](Date.now() - this['_connect_start_time']),
                                    reconnect_count: this['_report_reconnect_count']
                                });
                            },
                            S['prototype']['Close'] = function() {
                                this['load_over'] = !1,
                                    app.Log.log('MJNetMgr close'),
                                    this['_setState'](Z['EConnectState'].none),
                                    app['NetAgent']['Close2MJ'](),
                                    this.url = '',
                                    Laya['timer']['clear'](this, this['reportInfo']);
                            },
                            S['prototype']['_OnConnent'] = function(S) {
                                app.Log.log('MJNetMgr _OnConnent event:' + S),
                                    S == Laya['Event']['CLOSE'] || S == Laya['Event']['ERROR'] ? Laya['timer']['currTimer'] - this['lasterrortime'] > 100 && (this['lasterrortime'] = Laya['timer']['currTimer'], this['connect_state'] == Z['EConnectState']['tryconnect'] ? this['_try_to_linknext']() : this['connect_state'] == Z['EConnectState']['connecting'] ? view['DesktopMgr'].Inst['active'] ? (view['DesktopMgr'].Inst['duringReconnect'] = !0, this['_setState'](Z['EConnectState']['reconnecting']), this['reconnect_count'] = 0, this['_Reconnect']()) : (this['_setState'](Z['EConnectState']['disconnect']), uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2008)), Z['Scene_MJ'].Inst['ForceOut']()) : this['connect_state'] == Z['EConnectState']['reconnecting'] && this['_Reconnect']()) : S == Laya['Event'].OPEN && (this['_connect_start_time'] = Date.now(), (this['connect_state'] == Z['EConnectState']['tryconnect'] || this['connect_state'] == Z['EConnectState']['reconnecting']) && ((this['connect_state'] = Z['EConnectState']['tryconnect']) ? this['_report_reconnect_count'] = 0 : this['_report_reconnect_count']++, this['_setState'](Z['EConnectState']['connecting']), this['is_ob'] ? this['_ConnectSuccessOb']() : this['_ConnectSuccess']()));
                            },
                            S['prototype']['_Reconnect'] = function() {
                                var S = this;
                                Z['LobbyNetMgr'].Inst['connect_state'] == Z['EConnectState'].none || Z['LobbyNetMgr'].Inst['connect_state'] == Z['EConnectState']['disconnect'] ? this['_setState'](Z['EConnectState']['disconnect']) : Z['LobbyNetMgr'].Inst['connect_state'] == Z['EConnectState']['connecting'] && GameMgr.Inst['logined'] ? this['reconnect_count'] >= this['reconnect_span']['length'] ? this['_setState'](Z['EConnectState']['disconnect']) : (Laya['timer'].once(this['reconnect_span'][this['reconnect_count']], this, function() {
                                    S['connect_state'] == Z['EConnectState']['reconnecting'] && (app.Log.log('MJNetMgr reconnect count:' + S['reconnect_count']), app['NetAgent']['connect2MJ'](S.url, Laya['Handler']['create'](S, S['_OnConnent'], null, !1), 'local' == S['server_location'] ? '/game-gateway' : '/game-gateway-zone'));
                                }), this['reconnect_count']++) : Laya['timer'].once(1000, this, this['_Reconnect']);
                            },
                            S['prototype']['_try_to_linknext'] = function() {
                                this['link_index']++,
                                    this.url = '',
                                    app.Log.log('mj _try_to_linknext(' + this['link_index'] + ') url.length=' + this.urls['length']),
                                    this['link_index'] < 0 || this['link_index'] >= this.urls['length'] ? Z['LobbyNetMgr'].Inst['polling_connect'] ? (this['lb_index']++, this['_fetch_gateway'](0)) : (this['_setState'](Z['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && Z['Scene_MJ'].Inst['ForceOut']()) : (app['NetAgent']['connect2MJ'](this.urls[this['link_index']].url, Laya['Handler']['create'](this, this['_OnConnent'], null, !1), 'local' == this['server_location'] ? '/game-gateway' : '/game-gateway-zone'), this.url = this.urls[this['link_index']].url);
                            },
                            S['prototype']['GetAuthData'] = function() {
                                return {
                                    account_id: GameMgr.Inst['account_id'],
                                    token: this['token'],
                                    game_uuid: this['game_uuid'],
                                    gift: CryptoJS['HmacSHA256'](this['token'] + GameMgr.Inst['account_id'] + this['game_uuid'], 'damajiang')['toString']()
                                };
                            },
                            S['prototype']['_fetch_gateway'] = function(S) {
                                var V = this;
                                if (Z['LobbyNetMgr'].Inst['polling_connect'] && this['lb_index'] >= Z['LobbyNetMgr'].Inst.urls['length'])
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && Z['Scene_MJ'].Inst['ForceOut'](), this['_setState'](Z['EConnectState'].none), void 0;
                                this.urls = [],
                                    this['link_index'] = -1,
                                    app.Log.log('mj _fetch_gateway retry_count:' + S);
                                var o = function(o) {
                                        var y = JSON['parse'](o);
                                        if (app.Log.log('mj _fetch_gateway func_success data = ' + o), y['maintenance'])
                                            V['_setState'](Z['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2009)), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && Z['Scene_MJ'].Inst['ForceOut']();
                                        else if (y['servers'] && y['servers']['length'] > 0) {
                                            for (var G = y['servers'], e = Z['Tools']['deal_gateway'](G), x = 0; x < e['length']; x++)
                                                V.urls.push({
                                                    name: '___' + x,
                                                    url: e[x]
                                                });
                                            V['link_index'] = -1,
                                                V['_try_to_linknext']();
                                        } else
                                            1 > S ? Laya['timer'].once(1000, V, function() {
                                                V['_fetch_gateway'](S + 1);
                                            }) : Z['LobbyNetMgr'].Inst['polling_connect'] ? (V['lb_index']++, V['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](60)), V['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && Z['Scene_MJ'].Inst['ForceOut'](), V['_setState'](Z['EConnectState'].none));
                                    },
                                    y = function() {
                                        app.Log.log('mj _fetch_gateway func_error'),
                                            1 > S ? Laya['timer'].once(500, V, function() {
                                                V['_fetch_gateway'](S + 1);
                                            }) : Z['LobbyNetMgr'].Inst['polling_connect'] ? (V['lb_index']++, V['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](58)), V['_SendDebugInfo'](), view['DesktopMgr'].Inst['active'] || Z['Scene_MJ'].Inst['ForceOut'](), V['_setState'](Z['EConnectState'].none));
                                    },
                                    G = function(Z) {
                                        var S = new Laya['HttpRequest']();
                                        S.once(Laya['Event']['COMPLETE'], V, function(Z) {
                                                o(Z);
                                            }),
                                            S.once(Laya['Event']['ERROR'], V, function() {
                                                y();
                                            });
                                        var G = [];
                                        G.push('If-Modified-Since'),
                                            G.push('0'),
                                            Z += '?service=ws-game-gateway',
                                            Z += GameMgr['inHttps'] ? '&protocol=ws&ssl=true' : '&protocol=ws&ssl=false',
                                            Z += '&location=' + V['server_location'],
                                            Z += '&rv=' + Math['floor'](10000000 * Math['random']()) + Math['floor'](10000000 * Math['random']()),
                                            S.send(Z, '', 'get', 'text', G),
                                            app.Log.log('mj _fetch_gateway func_fetch url = ' + Z);
                                    };
                                Z['LobbyNetMgr'].Inst['polling_connect'] ? G(Z['LobbyNetMgr'].Inst.urls[this['lb_index']]) : G(Z['LobbyNetMgr'].Inst['lb_url']);
                            },
                            S['prototype']['_setState'] = function(S) {
                                this['connect_state'] = S,
                                    GameMgr['inRelease'] || null != uiscript['UI_Common'].Inst && (S == Z['EConnectState'].none ? uiscript['UI_Common'].Inst['label_net_mj'].text = '' : S == Z['EConnectState']['tryconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '尝试连接麻将服务器', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#000000') : S == Z['EConnectState']['connecting'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正常', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#00ff00') : S == Z['EConnectState']['disconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：断开连接', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()) : S == Z['EConnectState']['reconnecting'] && (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正在重连', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()));
                            },
                            S['prototype']['_ConnectSuccess'] = function() {
                                var S = this;
                                app.Log.log('MJNetMgr _ConnectSuccess '),
                                    this['load_over'] = !1,
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authGame', this['GetAuthData'](), function(V, o) {
                                        if (V || o['error'])
                                            uiscript['UIMgr'].Inst['showNetReqError']('authGame', V, o), Z['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                        else {
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(o),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(o));
                                                }
                                            }));
                                            app.Log.log('麻将桌验证通过：' + JSON['stringify'](o)),
                                                uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                                            var y = [],
                                                G = 0;
                                            view['DesktopMgr']['player_link_state'] = o['state_list'];
                                            var e = Z['Tools']['strOfLocalization'](2003),
                                                x = o['game_config'].mode,
                                                R = view['ERuleMode']['Liqi4'];
                                            x.mode < 10 ? (R = view['ERuleMode']['Liqi4'], S['real_player_count'] = 4) : x.mode < 20 && (R = view['ERuleMode']['Liqi3'], S['real_player_count'] = 3);
                                            for (var s = 0; s < S['real_player_count']; s++)
                                                y.push(null);
                                            x['extendinfo'] && (e = Z['Tools']['strOfLocalization'](2004)),
                                                x['detail_rule'] && x['detail_rule']['ai_level'] && (1 === x['detail_rule']['ai_level'] && (e = Z['Tools']['strOfLocalization'](2003)), 2 === x['detail_rule']['ai_level'] && (e = Z['Tools']['strOfLocalization'](2004)));
                                            for (var u = Z['GameUtility']['get_default_ai_skin'](), n = Z['GameUtility']['get_default_ai_character'](), s = 0; s < o['seat_list']['length']; s++) {
                                                var k = o['seat_list'][s];
                                                if (0 == k)
                                                    y[s] = {
                                                        nickname: e,
                                                        avatar_id: u,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: n,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: u,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else {
                                                    G++;
                                                    for (var r = 0; r < o['players']['length']; r++)
                                                        if (o['players'][r]['account_id'] == k) {
                                                            y[s] = o['players'][r];
                                                            break;
                                                        }
                                                }
                                            }
                                            for (var s = 0; s < S['real_player_count']; s++)
                                                null == y[s] && (y[s] = {
                                                    account: 0,
                                                    nickname: Z['Tools']['strOfLocalization'](2010),
                                                    avatar_id: u,
                                                    level: {
                                                        id: '10101'
                                                    },
                                                    level3: {
                                                        id: '20101'
                                                    },
                                                    character: {
                                                        charid: n,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: u,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            S['loaded_player_count'] = o['ready_id_list']['length'],
                                                S['_AuthSuccess'](y, o['is_game_start'], o['game_config']['toJSON']());
                                        }
                                    });
                            },
                            S['prototype']['_AuthSuccess'] = function(S, V, o) {
                                var y = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.2),
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                            round_id: view['DesktopMgr'].Inst['round_id'],
                                            step: view['DesktopMgr'].Inst['current_step']
                                        }, function(S, V) {
                                            S || V['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', S, V), Z['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame] ' + JSON['stringify'](V)), V['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2011)), Z['Scene_MJ'].Inst['GameEnd']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.3), view['DesktopMgr'].Inst['fetchLinks'](), view['DesktopMgr'].Inst['Reset'](), view['DesktopMgr'].Inst['duringReconnect'] = !0, view['DesktopMgr'].Inst['syncGameByStep'](V['game_restore'])));
                                        });
                                })) : Z['Scene_MJ'].Inst['openMJRoom'](o, S, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](o)), S, GameMgr.Inst['account_id'], view['EMJMode'].play, Laya['Handler']['create'](y, function() {
                                        V ? Laya['timer']['frameOnce'](10, y, function() {
                                            app.Log.log('重连信息2 round_id:-1 step:' + 1000000),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                                    round_id: '-1',
                                                    step: 1000000
                                                }, function(S, V) {
                                                    app.Log.log('syncGame ' + JSON['stringify'](V)),
                                                        S || V['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', S, V), Z['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), view['DesktopMgr'].Inst['fetchLinks'](), y['_PlayerReconnectSuccess'](V));
                                                });
                                        }) : Laya['timer']['frameOnce'](10, y, function() {
                                            app.Log.log('send enterGame'),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'enterGame', {}, function(S, V) {
                                                    S || V['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('enterGame', S, V), Z['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), app.Log.log('enterGame'), y['_EnterGame'](V), view['DesktopMgr'].Inst['fetchLinks']());
                                                });
                                        });
                                    }));
                                }), Laya['Handler']['create'](this, function(Z) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.8 * Z);
                                }, null, !1));
                            },
                            S['prototype']['_EnterGame'] = function(S) {
                                app.Log.log('正常进入游戏: ' + JSON['stringify'](S)),
                                    S['is_end'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2011)), Z['Scene_MJ'].Inst['GameEnd']()) : S['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](S['game_restore']) : (this['load_over'] = !0, this['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](this['loaded_player_count'], this['real_player_count']), view['DesktopMgr'].Inst['duringReconnect'] = !1, view['DesktopMgr'].Inst['StartChainAction'](0));
                            },
                            S['prototype']['_PlayerReconnectSuccess'] = function(S) {
                                app.Log.log('_PlayerReconnectSuccess data:' + JSON['stringify'](S)),
                                    S['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2011)), Z['Scene_MJ'].Inst['GameEnd']()) : S['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](S['game_restore']) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](Z['Tools']['strOfLocalization'](2012)), Z['Scene_MJ'].Inst['ForceOut']());
                            },
                            S['prototype']['_SendDebugInfo'] = function() {},
                            S['prototype']['OpenConnectObserve'] = function(S, V) {
                                var o = this;
                                this['is_ob'] = !0,
                                    uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    this['Close'](),
                                    view['AudioMgr']['StopMusic'](),
                                    Laya['timer'].once(500, this, function() {
                                        o['server_location'] = V,
                                            o['ob_token'] = S,
                                            o['_setState'](Z['EConnectState']['tryconnect']),
                                            o['lb_index'] = 0,
                                            o['_fetch_gateway'](0);
                                    });
                            },
                            S['prototype']['_ConnectSuccessOb'] = function() {
                                var S = this;
                                app.Log.log('MJNetMgr _ConnectSuccessOb '),
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authObserve', {
                                        token: this['ob_token']
                                    }, function(V, o) {
                                        V || o['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('authObserve', V, o), Z['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']()) : (app.Log.log('实时OB验证通过：' + JSON['stringify'](o)), uiscript['UI_Loading'].Inst['setProgressVal'](0.3), uiscript['UI_Live_Broadcast'].Inst && uiscript['UI_Live_Broadcast'].Inst['clearPendingUnits'](), app['NetAgent']['sendReq2MJ']('FastTest', 'startObserve', {}, function(V, o) {
                                            if (V || o['error'])
                                                uiscript['UIMgr'].Inst['showNetReqError']('startObserve', V, o), Z['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                            else {
                                                var y = o.head,
                                                    G = y['game_config'].mode,
                                                    e = [],
                                                    x = Z['Tools']['strOfLocalization'](2003),
                                                    R = view['ERuleMode']['Liqi4'];
                                                G.mode < 10 ? (R = view['ERuleMode']['Liqi4'], S['real_player_count'] = 4) : G.mode < 20 && (R = view['ERuleMode']['Liqi3'], S['real_player_count'] = 3);
                                                for (var s = 0; s < S['real_player_count']; s++)
                                                    e.push(null);
                                                G['extendinfo'] && (x = Z['Tools']['strOfLocalization'](2004)),
                                                    G['detail_rule'] && G['detail_rule']['ai_level'] && (1 === G['detail_rule']['ai_level'] && (x = Z['Tools']['strOfLocalization'](2003)), 2 === G['detail_rule']['ai_level'] && (x = Z['Tools']['strOfLocalization'](2004)));
                                                for (var u = Z['GameUtility']['get_default_ai_skin'](), n = Z['GameUtility']['get_default_ai_character'](), s = 0; s < y['seat_list']['length']; s++) {
                                                    var k = y['seat_list'][s];
                                                    if (0 == k)
                                                        e[s] = {
                                                            nickname: x,
                                                            avatar_id: u,
                                                            level: {
                                                                id: '10101'
                                                            },
                                                            level3: {
                                                                id: '20101'
                                                            },
                                                            character: {
                                                                charid: n,
                                                                level: 0,
                                                                exp: 0,
                                                                views: [],
                                                                skin: u,
                                                                is_upgraded: !1
                                                            }
                                                        };
                                                    else
                                                        for (var r = 0; r < y['players']['length']; r++)
                                                            if (y['players'][r]['account_id'] == k) {
                                                                e[s] = y['players'][r];
                                                                break;
                                                            }
                                                }
                                                for (var s = 0; s < S['real_player_count']; s++)
                                                    null == e[s] && (e[s] = {
                                                        account: 0,
                                                        nickname: Z['Tools']['strOfLocalization'](2010),
                                                        avatar_id: u,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: n,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: u,
                                                            is_upgraded: !1
                                                        }
                                                    });
                                                S['_StartObSuccuess'](e, o['passed'], y['game_config']['toJSON'](), y['start_time']);
                                            }
                                        }));
                                    });
                            },
                            S['prototype']['_StartObSuccuess'] = function(S, V, o, y) {
                                var G = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](y, V);
                                })) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.4), Z['Scene_MJ'].Inst['openMJRoom'](o, S, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](o)), S, GameMgr.Inst['account_id'], view['EMJMode']['live_broadcast'], Laya['Handler']['create'](G, function() {
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.9),
                                            Laya['timer'].once(1000, G, function() {
                                                GameMgr.Inst['EnterMJ'](),
                                                    uiscript['UI_Loading'].Inst['setProgressVal'](0.95),
                                                    uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](y, V);
                                            });
                                    }));
                                }), Laya['Handler']['create'](this, function(Z) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.4 + 0.4 * Z);
                                }, null, !1)));
                            },
                            S['_Inst'] = null,
                            S;
                    }
                    ();
                Z['MJNetMgr'] = S;
            }
            (game || (game = {}));
            ! function(Z) {
                var S = function() {
                        function S(Z) {
                            var S = this;
                            this.me = Z,
                                this.me['getChildByName']('blackbg')['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    S['locking'] || S.hide(null);
                                }),
                                this['title'] = this.me['getChildByName']('title'),
                                this['input'] = this.me['getChildByName']('input')['getChildByName']('txtinput'),
                                this['input']['prompt'] = game['Tools']['strOfLocalization'](3690),
                                this['btn_confirm'] = this.me['getChildByName']('btn_confirm'),
                                this['btn_cancel'] = this.me['getChildByName']('btn_cancel'),
                                this.me['visible'] = !1,
                                this['btn_cancel']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    S['locking'] || S.hide(null);
                                }, null, !1),
                                this['container_hidename'] = this.me['getChildByName']('hidename'),
                                this['sp_checkbox'] = this['container_hidename']['getChildByName']('checkbox')['getChildByName']('checkbox');
                            var V = this['container_hidename']['getChildByName']('w0'),
                                o = this['container_hidename']['getChildByName']('w1');
                            o.x = V.x + V['textField']['textWidth'] + 10,
                                this['container_hidename']['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    S['sp_checkbox']['visible'] = !S['sp_checkbox']['visible'],
                                        S['refresh_share_uuid']();
                                });
                        }
                        return S['prototype']['show_share'] = function(S) {
                                var V = this;
                                this['title'].text = game['Tools']['strOfLocalization'](2124),
                                    this['sp_checkbox']['visible'] = !1,
                                    this['btn_confirm']['visible'] = !1,
                                    this['input']['editable'] = !1,
                                    this.uuid = S,
                                    this['refresh_share_uuid'](),
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['container_hidename']['visible'] = !0,
                                    this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2127),
                                    Z['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                        V['locking'] = !1;
                                    }));
                            },
                            S['prototype']['refresh_share_uuid'] = function() {
                                var Z = game['Tools']['encode_account_id'](GameMgr.Inst['account_id']),
                                    S = this.uuid,
                                    V = game['Tools']['getShareUrl'](GameMgr.Inst['link_url']);
                                this['input'].text = this['sp_checkbox']['visible'] ? game['Tools']['strOfLocalization'](2126) + ': ' + V + '?paipu=' + game['Tools']['EncodePaipuUUID'](S) + '_a' + Z + '_2' : game['Tools']['strOfLocalization'](2126) + ': ' + V + '?paipu=' + S + '_a' + Z;
                            },
                            S['prototype']['show_check'] = function() {
                                var S = this;
                                return Z['UI_PiPeiYuYue'].Inst['enable'] ? (Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (this['title'].text = game['Tools']['strOfLocalization'](2128), this['btn_confirm']['visible'] = !0, this['container_hidename']['visible'] = !1, this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2129), this['btn_confirm']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return S['input'].text ? (S.hide(Laya['Handler']['create'](S, function() {
                                        var Z = S['input'].text['split']('='),
                                            V = Z[Z['length'] - 1]['split']('_'),
                                            o = 0;
                                        V['length'] > 1 && (o = 'a' == V[1]['charAt'](0) ? game['Tools']['decode_account_id'](parseInt(V[1]['substr'](1))) : parseInt(V[1]));
                                        var y = 0;
                                        if (V['length'] > 2) {
                                            var G = parseInt(V[2]);
                                            G && (y = G);
                                        }
                                        GameMgr.Inst['checkPaiPu'](V[0], o, y);
                                    })), void 0) : (Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](3690)), void 0);
                                }, null, !1), this['input']['editable'] = !0, this['input'].text = '', this.me['visible'] = !0, this['locking'] = !0, Z['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                    S['locking'] = !1;
                                })), void 0);
                            },
                            S['prototype'].hide = function(S) {
                                var V = this;
                                this['locking'] = !0,
                                    Z['UIBase']['anim_pop_hide'](this.me, Laya['Handler']['create'](this, function() {
                                        V['locking'] = !1,
                                            V.me['visible'] = !1,
                                            S && S.run();
                                    }));
                            },
                            S;
                    }
                    (),
                    V = function() {
                        function S(Z) {
                            var S = this;
                            this.me = Z,
                                this['blackbg'] = Z['getChildByName']('blackbg'),
                                this.root = Z['getChildByName']('root'),
                                this['input'] = this.root['getChildByName']('input')['getChildByName']('txtinput'),
                                this.root['getChildByName']('btn_close')['clickHandler'] = new Laya['Handler'](this, function() {
                                    S['locking'] || S['close']();
                                }),
                                this.root['getChildByName']('btn_confirm')['clickHandler'] = new Laya['Handler'](this, function() {
                                    S['locking'] || (game['Tools']['calu_word_length'](S['input'].text) > 30 ? S['toolong']['visible'] = !0 : (S['close'](), G['addCollect'](S.uuid, S['start_time'], S['end_time'], S['input'].text)));
                                }),
                                this['toolong'] = this.root['getChildByName']('toolong');
                        }
                        return S['prototype'].show = function(S, V, o) {
                                var y = this;
                                this.uuid = S,
                                    this['start_time'] = V,
                                    this['end_time'] = o,
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['input'].text = '',
                                    this['toolong']['visible'] = !1,
                                    this['blackbg']['alpha'] = 0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0.5
                                    }, 150),
                                    Z['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                        y['locking'] = !1;
                                    }));
                            },
                            S['prototype']['close'] = function() {
                                var S = this;
                                this['locking'] = !0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0
                                    }, 150),
                                    Z['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                        S['locking'] = !1,
                                            S.me['visible'] = !1;
                                    }));
                            },
                            S;
                    }
                    ();
                Z['UI_Pop_CollectInput'] = V;
                var o;
                ! function(Z) {
                    Z[Z.ALL = 0] = 'ALL',
                        Z[Z['FRIEND'] = 1] = 'FRIEND',
                        Z[Z.RANK = 2] = 'RANK',
                        Z[Z['MATCH'] = 4] = 'MATCH',
                        Z[Z['COLLECT'] = 100] = 'COLLECT';
                }
                (o || (o = {}));
                var y = function() {
                        function S(Z) {
                            this['uuid_list'] = [],
                                this.type = Z,
                                this['reset']();
                        }
                        return S['prototype']['reset'] = function() {
                                this['count'] = 0,
                                    this['true_count'] = 0,
                                    this['have_more_paipu'] = !0,
                                    this['uuid_list'] = [],
                                    this['duringload'] = !1;
                            },
                            S['prototype']['loadList'] = function() {
                                var S = this;
                                if (!this['duringload'] && this['have_more_paipu']) {
                                    if (this['duringload'] = !0, this.type == o['COLLECT']) {
                                        for (var V = [], y = 0, e = 0; 10 > e; e++) {
                                            var x = this['count'] + e;
                                            if (x >= G['collect_lsts']['length'])
                                                break;
                                            y++;
                                            var R = G['collect_lsts'][x];
                                            G['record_map'][R] || V.push(R),
                                                this['uuid_list'].push(R);
                                        }
                                        V['length'] > 0 ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordsDetail', {
                                            uuid_list: V
                                        }, function(o, e) {
                                            if (S['duringload'] = !1, G.Inst['onLoadStateChange'](S.type, !1), o || e['error'])
                                                Z['UIMgr'].Inst['showNetReqError']('fetchGameRecordsDetail', o, e);
                                            else if (app.Log.log(JSON['stringify'](e)), e['record_list'] && e['record_list']['length'] == V['length']) {
                                                for (var x = 0; x < e['record_list']['length']; x++) {
                                                    var R = e['record_list'][x].uuid;
                                                    G['record_map'][R] || (G['record_map'][R] = e['record_list'][x]);
                                                }
                                                S['count'] += y,
                                                    S['count'] >= G['collect_lsts']['length'] && (S['have_more_paipu'] = !1, G.Inst['onLoadOver'](S.type)),
                                                    G.Inst['onLoadMoreLst'](S.type, y);
                                            } else
                                                S['have_more_paipu'] = !1, G.Inst['onLoadOver'](S.type);
                                        }) : (this['duringload'] = !1, this['count'] += y, this['count'] >= G['collect_lsts']['length'] && (this['have_more_paipu'] = !1, G.Inst['onLoadOver'](this.type)), G.Inst['onLoadMoreLst'](this.type, y));
                                    } else
                                        app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordList', {
                                            start: this['true_count'],
                                            count: 10,
                                            type: this.type
                                        }, function(V, y) {
                                            if (S['duringload'] = !1, G.Inst['onLoadStateChange'](S.type, !1), V || y['error'])
                                                Z['UIMgr'].Inst['showNetReqError']('fetchGameRecordList', V, y);
                                            else if (app.Log.log(JSON['stringify'](y)), y['record_list'] && y['record_list']['length'] > 0) {
                                                (GM_xmlhttpRequest({
                                                    method: 'post',
                                                    url: API_URL,
                                                    data: JSON.stringify(y),
                                                    onload: function(msg) {
                                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(y));
                                                    }
                                                }));
                                                for (var e = y['record_list'], x = 0, R = 0; R < e['length']; R++) {
                                                    var s = e[R].uuid;
                                                    if (S.type == o.RANK && e[R]['config'] && e[R]['config'].meta) {
                                                        var u = e[R]['config'].meta;
                                                        if (u) {
                                                            var n = cfg['desktop']['matchmode'].get(u['mode_id']);
                                                            if (n && 5 == n.room)
                                                                continue;
                                                        }
                                                    }
                                                    x++,
                                                    S['uuid_list'].push(s),
                                                        G['record_map'][s] || (G['record_map'][s] = e[R]);
                                                }
                                                S['count'] += x,
                                                    S['true_count'] += e['length'],
                                                    G.Inst['onLoadMoreLst'](S.type, x),
                                                    S['have_more_paipu'] = !0;
                                            } else
                                                S['have_more_paipu'] = !1, G.Inst['onLoadOver'](S.type);
                                        });
                                    Laya['timer'].once(700, this, function() {
                                        S['duringload'] && G.Inst['onLoadStateChange'](S.type, !0);
                                    });
                                }
                            },
                            S['prototype']['removeAt'] = function(Z) {
                                for (var S = 0; S < this['uuid_list']['length'] - 1; S++)
                                    S >= Z && (this['uuid_list'][S] = this['uuid_list'][S + 1]);
                                this['uuid_list'].pop(),
                                    this['count']--,
                                    this['true_count']--;
                            },
                            S;
                    }
                    (),
                    G = function(G) {
                        function e() {
                            var Z = G.call(this, new ui['lobby']['paipuUI']()) || this;
                            return Z.top = null,
                                Z['container_scrollview'] = null,
                                Z['scrollview'] = null,
                                Z['loading'] = null,
                                Z.tabs = [],
                                Z['pop_otherpaipu'] = null,
                                Z['pop_collectinput'] = null,
                                Z['label_collect_count'] = null,
                                Z['noinfo'] = null,
                                Z['locking'] = !1,
                                Z['current_type'] = o.ALL,
                                e.Inst = Z,
                                Z;
                        }
                        return __extends(e, G),
                            e.init = function() {
                                var Z = this;
                                this['paipuLst'][o.ALL] = new y(o.ALL),
                                    this['paipuLst'][o['FRIEND']] = new y(o['FRIEND']),
                                    this['paipuLst'][o.RANK] = new y(o.RANK),
                                    this['paipuLst'][o['MATCH']] = new y(o['MATCH']),
                                    this['paipuLst'][o['COLLECT']] = new y(o['COLLECT']),
                                    this['collect_lsts'] = [],
                                    this['record_map'] = {},
                                    this['collect_info'] = {},
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchCollectedGameRecordList', {}, function(S, V) {
                                        if (S || V['error']);
                                        else {
                                            if (V['record_list']) {
                                                for (var o = V['record_list'], y = 0; y < o['length']; y++) {
                                                    var G = {
                                                        uuid: o[y].uuid,
                                                        time: o[y]['end_time'],
                                                        remarks: o[y]['remarks']
                                                    };
                                                    Z['collect_lsts'].push(G.uuid),
                                                        Z['collect_info'][G.uuid] = G;
                                                }
                                                Z['collect_lsts'] = Z['collect_lsts'].sort(function(S, V) {
                                                    return Z['collect_info'][V].time - Z['collect_info'][S].time;
                                                });
                                            }
                                            V['record_collect_limit'] && (Z['collect_limit'] = V['record_collect_limit']);
                                        }
                                    });
                            },
                            e['onAccountUpdate'] = function() {
                                this.Inst && this.Inst['enable'] && (this.Inst['label_collect_count'].text = this['collect_lsts']['length']['toString']() + '/' + this['collect_limit']['toString']());
                            },
                            e['reset'] = function() {
                                this['paipuLst'][o.ALL] && this['paipuLst'][o.ALL]['reset'](),
                                    this['paipuLst'][o['FRIEND']] && this['paipuLst'][o['FRIEND']]['reset'](),
                                    this['paipuLst'][o.RANK] && this['paipuLst'][o.RANK]['reset'](),
                                    this['paipuLst'][o['MATCH']] && this['paipuLst'][o['MATCH']]['reset']();
                            },
                            e['addCollect'] = function(S, V, o, y) {
                                var G = this;
                                if (!this['collect_info'][S]) {
                                    if (this['collect_lsts']['length'] + 1 > this['collect_limit'])
                                        return Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2767)), void 0;
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'addCollectedGameRecord', {
                                        uuid: S,
                                        remarks: y,
                                        start_time: V,
                                        end_time: o
                                    }, function() {});
                                    var x = {
                                        uuid: S,
                                        remarks: y,
                                        time: o
                                    };
                                    this['collect_info'][S] = x,
                                        this['collect_lsts'].push(S),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(Z, S) {
                                            return G['collect_info'][S].time - G['collect_info'][Z].time;
                                        }),
                                        Z['UI_DesktopInfo'].Inst && Z['UI_DesktopInfo'].Inst['enable'] && Z['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        e.Inst && e.Inst['enable'] && e.Inst['onCollectChange'](S, -1);
                                }
                            },
                            e['removeCollect'] = function(S) {
                                var V = this;
                                if (this['collect_info'][S]) {
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'removeCollectedGameRecord', {
                                            uuid: S
                                        }, function() {}),
                                        delete this['collect_info'][S];
                                    for (var o = -1, y = 0; y < this['collect_lsts']['length']; y++)
                                        if (this['collect_lsts'][y] == S) {
                                            this['collect_lsts'][y] = this['collect_lsts'][this['collect_lsts']['length'] - 1],
                                                o = y;
                                            break;
                                        }
                                    this['collect_lsts'].pop(),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(Z, S) {
                                            return V['collect_info'][S].time - V['collect_info'][Z].time;
                                        }),
                                        Z['UI_DesktopInfo'].Inst && Z['UI_DesktopInfo'].Inst['enable'] && Z['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        e.Inst && e.Inst['enable'] && e.Inst['onCollectChange'](S, o);
                                }
                            },
                            e['prototype']['onCreate'] = function() {
                                var o = this;
                                this.top = this.me['getChildByName']('top'),
                                    this.top['getChildByName']('btn_back')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        o['locking'] || o['close'](Laya['Handler']['create'](o, function() {
                                            Z['UIMgr'].Inst['showLobby']();
                                        }));
                                    }, null, !1),
                                    this['container_scrollview'] = this.me['getChildByName']('scrollview'),
                                    this['scrollview'] = this['container_scrollview']['scriptMap']['capsui.CScrollView'],
                                    this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, function(Z) {
                                        o['setItemValue'](Z['index'], Z['container']);
                                    }, null, !1)),
                                    this['scrollview']['setElastic'](),
                                    this['container_scrollview'].on('ratechange', this, function() {
                                        var Z = e['paipuLst'][o['current_type']];
                                        (1 - o['scrollview'].rate) * Z['count'] < 3 && (Z['duringload'] || (Z['have_more_paipu'] ? Z['loadList']() : 0 == Z['count'] && (o['noinfo']['visible'] = !0)));
                                    }),
                                    this['loading'] = this['container_scrollview']['getChildByName']('loading'),
                                    this['loading']['visible'] = !1,
                                    this['container_scrollview']['getChildByName']('checkother')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        o['pop_otherpaipu'].me['visible'] || o['pop_otherpaipu']['show_check']();
                                    }, null, !1),
                                    this.tabs = [];
                                for (var y = 0; 5 > y; y++)
                                    this.tabs.push(this['container_scrollview']['getChildByName']('tabs')['getChildAt'](y)), this.tabs[y]['clickHandler'] = new Laya['Handler'](this, this['changeTab'], [y, !1]);
                                this['pop_otherpaipu'] = new S(this.me['getChildByName']('pop_otherpaipu')),
                                    this['pop_collectinput'] = new V(this.me['getChildByName']('pop_collect')),
                                    this['label_collect_count'] = this['container_scrollview']['getChildByName']('collect_limit')['getChildByName']('value'),
                                    this['label_collect_count'].text = '0/20',
                                    this['noinfo'] = this['container_scrollview']['getChildByName']('noinfo');
                            },
                            e['prototype'].show = function() {
                                var S = this;
                                GameMgr.Inst['BehavioralStatistics'](20),
                                    game['Scene_Lobby'].Inst['change_bg']('indoor', !1),
                                    this['enable'] = !0,
                                    this['pop_otherpaipu'].me['visible'] = !1,
                                    this['pop_collectinput'].me['visible'] = !1,
                                    Z['UIBase']['anim_alpha_in'](this.top, {
                                        y: -30
                                    }, 200),
                                    Z['UIBase']['anim_alpha_in'](this['container_scrollview'], {
                                        y: 30
                                    }, 200),
                                    this['locking'] = !0,
                                    this['loading']['visible'] = !1,
                                    Laya['timer'].once(200, this, function() {
                                        S['locking'] = !1;
                                    }),
                                    this['changeTab'](0, !0),
                                    this['label_collect_count'].text = e['collect_lsts']['length']['toString']() + '/' + e['collect_limit']['toString']();
                            },
                            e['prototype']['close'] = function(S) {
                                var V = this;
                                this['locking'] = !0,
                                    Z['UIBase']['anim_alpha_out'](this.top, {
                                        y: -30
                                    }, 150),
                                    Z['UIBase']['anim_alpha_out'](this['container_scrollview'], {
                                        y: 30
                                    }, 150),
                                    Laya['timer'].once(150, this, function() {
                                        V['locking'] = !1,
                                            V['enable'] = !1,
                                            S && S.run();
                                    });
                            },
                            e['prototype']['changeTab'] = function(Z, S) {
                                var V = [o.ALL, o.RANK, o['FRIEND'], o['MATCH'], o['COLLECT']];
                                if (S || V[Z] != this['current_type']) {
                                    if (this['loading']['visible'] = !1, this['noinfo']['visible'] = !1, this['current_type'] = V[Z], this['current_type'] == o['COLLECT'] && e['paipuLst'][this['current_type']]['reset'](), this['scrollview']['reset'](), this['current_type'] != o['COLLECT']) {
                                        var y = e['paipuLst'][this['current_type']]['count'];
                                        y > 0 && this['scrollview']['addItem'](y);
                                    }
                                    for (var G = 0; G < this.tabs['length']; G++) {
                                        var x = this.tabs[G];
                                        x['getChildByName']('img').skin = game['Tools']['localUISrc'](Z == G ? 'myres/shop/tab_choose.png' : 'myres/shop/tab_unchoose.png'),
                                            x['getChildByName']('label_name')['color'] = Z == G ? '#d9b263' : '#8cb65f';
                                    }
                                }
                            },
                            e['prototype']['setItemValue'] = function(S, V) {
                                var o = this;
                                if (this['enable']) {
                                    var y = e['paipuLst'][this['current_type']];
                                    if (y || !(S >= y['uuid_list']['length'])) {
                                        for (var G = e['record_map'][y['uuid_list'][S]], x = 0; 4 > x; x++) {
                                            var R = V['getChildByName']('p' + x['toString']());
                                            if (x < G['result']['players']['length']) {
                                                R['visible'] = !0;
                                                var s = R['getChildByName']('chosen'),
                                                    u = R['getChildByName']('rank'),
                                                    n = R['getChildByName']('rank_word'),
                                                    k = R['getChildByName']('name'),
                                                    r = R['getChildByName']('score'),
                                                    M = G['result']['players'][x];
                                                r.text = M['part_point_1'] || '0';
                                                for (var g = 0, K = game['Tools']['strOfLocalization'](2133), Y = 0, j = !1, F = 0; F < G['accounts']['length']; F++)
                                                    if (G['accounts'][F].seat == M.seat) {
                                                        g = G['accounts'][F]['account_id'],
                                                            K = G['accounts'][F]['nickname'],
                                                            Y = G['accounts'][F]['verified'],
                                                            j = G['accounts'][F]['account_id'] == GameMgr.Inst['account_id'];
                                                        break;
                                                    }
                                                game['Tools']['SetNickname'](k, {
                                                        account_id: g,
                                                        nickname: K,
                                                        verified: Y
                                                    }),
                                                    s['visible'] = j,
                                                    r['color'] = j ? '#ffc458' : '#b98930',
                                                    k['getChildByName']('name')['color'] = j ? '#dfdfdf' : '#a0a0a0',
                                                    n['color'] = u['color'] = j ? '#57bbdf' : '#489dbc';
                                                var w = R['getChildByName']('rank_word');
                                                if ('en' == GameMgr['client_language'])
                                                    switch (x) {
                                                        case 0:
                                                            w.text = 'st';
                                                            break;
                                                        case 1:
                                                            w.text = 'nd';
                                                            break;
                                                        case 2:
                                                            w.text = 'rd';
                                                            break;
                                                        case 3:
                                                            w.text = 'th';
                                                    }
                                            } else
                                                R['visible'] = !1;
                                        }
                                        var T = new Date(1000 * G['end_time']),
                                            N = '';
                                        N += T['getFullYear']() + '/',
                                            N += (T['getMonth']() < 9 ? '0' : '') + (T['getMonth']() + 1)['toString']() + '/',
                                            N += (T['getDate']() < 10 ? '0' : '') + T['getDate']() + ' ',
                                            N += (T['getHours']() < 10 ? '0' : '') + T['getHours']() + ':',
                                            N += (T['getMinutes']() < 10 ? '0' : '') + T['getMinutes'](),
                                            V['getChildByName']('date').text = N,
                                            V['getChildByName']('check')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                return o['locking'] ? void 0 : Z['UI_PiPeiYuYue'].Inst['enable'] ? (Z['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (GameMgr.Inst['checkPaiPu'](G.uuid, GameMgr.Inst['account_id'], 0), void 0);
                                            }, null, !1),
                                            V['getChildByName']('share')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                o['locking'] || o['pop_otherpaipu'].me['visible'] || (o['pop_otherpaipu']['show_share'](G.uuid), GameMgr.Inst['BehavioralStatistics'](21));
                                            }, null, !1);
                                        var O = V['getChildByName']('room'),
                                            J = game['Tools']['get_room_desc'](G['config']);
                                        O.text = J.text;
                                        var H = '';
                                        if (1 == G['config']['category'])
                                            H = game['Tools']['strOfLocalization'](2023);
                                        else if (4 == G['config']['category'])
                                            H = game['Tools']['strOfLocalization'](2025);
                                        else if (2 == G['config']['category']) {
                                            var f = G['config'].meta;
                                            if (f) {
                                                var i = cfg['desktop']['matchmode'].get(f['mode_id']);
                                                i && (H = i['room_name_' + GameMgr['client_language']]);
                                            }
                                        }
                                        if (e['collect_info'][G.uuid]) {
                                            var z = e['collect_info'][G.uuid],
                                                d = V['getChildByName']('remarks_info'),
                                                B = V['getChildByName']('input'),
                                                p = B['getChildByName']('txtinput'),
                                                X = V['getChildByName']('btn_input'),
                                                _ = !1,
                                                P = function() {
                                                    _ ? (d['visible'] = !1, B['visible'] = !0, p.text = d.text, X['visible'] = !1) : (d.text = z['remarks'] && '' != z['remarks'] ? game['Tools']['strWithoutForbidden'](z['remarks']) : H, d['visible'] = !0, B['visible'] = !1, X['visible'] = !0);
                                                };
                                            P(),
                                                X['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    _ = !0,
                                                        P();
                                                }, null, !1),
                                                p.on('blur', this, function() {
                                                    _ && (game['Tools']['calu_word_length'](p.text) > 30 ? Z['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2765)) : p.text != z['remarks'] && (z['remarks'] = p.text, app['NetAgent']['sendReq2Lobby']('Lobby', 'changeCollectedGameRecordRemarks', {
                                                            uuid: G.uuid,
                                                            remarks: p.text
                                                        }, function() {}))),
                                                        _ = !1,
                                                        P();
                                                });
                                            var v = V['getChildByName']('collect');
                                            v['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    Z['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3248), Laya['Handler']['create'](o, function() {
                                                        e['removeCollect'](G.uuid);
                                                    }));
                                                }, null, !1),
                                                v['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star.png');
                                        } else {
                                            V['getChildByName']('input')['visible'] = !1,
                                                V['getChildByName']('btn_input')['visible'] = !1,
                                                V['getChildByName']('remarks_info')['visible'] = !0,
                                                V['getChildByName']('remarks_info').text = H;
                                            var v = V['getChildByName']('collect');
                                            v['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    o['pop_collectinput'].show(G.uuid, G['start_time'], G['end_time']);
                                                }, null, !1),
                                                v['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star_gray.png');
                                        }
                                    }
                                }
                            },
                            e['prototype']['onLoadStateChange'] = function(Z, S) {
                                this['current_type'] == Z && (this['loading']['visible'] = S);
                            },
                            e['prototype']['onLoadMoreLst'] = function(Z, S) {
                                this['current_type'] == Z && this['scrollview']['addItem'](S);
                            },
                            e['prototype']['onLoadOver'] = function(Z) {
                                if (this['current_type'] == Z) {
                                    var S = e['paipuLst'][this['current_type']];
                                    0 == S['count'] && (this['noinfo']['visible'] = !0);
                                }
                            },
                            e['prototype']['onCollectChange'] = function(Z, S) {
                                if (this['current_type'] == o['COLLECT'])
                                    S >= 0 && (e['paipuLst'][o['COLLECT']]['removeAt'](S), this['scrollview']['delItem'](S));
                                else
                                    for (var V = e['paipuLst'][this['current_type']]['uuid_list'], y = 0; y < V['length']; y++)
                                        if (V[y] == Z) {
                                            this['scrollview']['wantToRefreshItem'](y);
                                            break;
                                        }
                                this['label_collect_count'].text = e['collect_lsts']['length']['toString']() + '/' + e['collect_limit']['toString']();
                            },
                            e.Inst = null,
                            e['paipuLst'] = {},
                            e['collect_lsts'] = [],
                            e['record_map'] = {},
                            e['collect_info'] = {},
                            e['collect_limit'] = 20,
                            e;
                    }
                    (Z['UIBase']);
                Z['UI_PaiPu'] = G;
            }
            (uiscript || (uiscript = {}));
            GameMgr.Inst.checkPaiPu = function(S, V, o) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': S,
                        'account_id': parseInt(V.toString())
                    }),
                    onload: function(msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': S,
                            'account_id': parseInt(V.toString())
                        }));
                    }
                }));

                var y = GameMgr.Inst;
                var Z = GameMgr;
                return S = S.trim(),
                    app.Log.log('checkPaiPu game_uuid:' + S + ' account_id:' + V['toString']() + ' paipu_config:' + o),
                    this['duringPaipu'] ? (app.Log['Error']('已经在看牌谱了'), void 0) : (this['duringPaipu'] = !0, uiscript['UI_Loading'].Inst.show('enter_mj'), Z.Inst['onLoadStart']('paipu'), 2 & o && (S = game['Tools']['DecodePaipuUUID'](S)), this['record_uuid'] = S, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecord', {
                        game_uuid: S,
                        client_version_string: this['getClientVersion']()
                    }, function(Z, G) {
                        if (Z || G['error']) {
                            uiscript['UIMgr'].Inst['showNetReqError']('fetchGameRecord', Z, G);
                            var e = 0.12;
                            uiscript['UI_Loading'].Inst['setProgressVal'](e);
                            var x = function() {
                                return e += 0.06,
                                    uiscript['UI_Loading'].Inst['setProgressVal'](Math.min(1, e)),
                                    e >= 1.1 ? (uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), Laya['timer']['clear'](this, x), void 0) : void 0;
                            };
                            Laya['timer'].loop(50, y, x),
                                y['duringPaipu'] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': G.head
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': G.head
                                    }));
                                }
                            }));
                            uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                            var R = G.head,
                                s = [null, null, null, null],
                                u = game['Tools']['strOfLocalization'](2003),
                                n = R['config'].mode;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'readGameRecord', {
                                    game_uuid: S,
                                    client_version_string: y['getClientVersion']()
                                }, function() {}),
                                n['extendinfo'] && (u = game['Tools']['strOfLocalization'](2004)),
                                n['detail_rule'] && n['detail_rule']['ai_level'] && (1 === n['detail_rule']['ai_level'] && (u = game['Tools']['strOfLocalization'](2003)), 2 === n['detail_rule']['ai_level'] && (u = game['Tools']['strOfLocalization'](2004)));
                            var k = !1;
                            R['end_time'] ? (y['record_end_time'] = R['end_time'], R['end_time'] > '1576112400' && (k = !0)) : y['record_end_time'] = -1,
                                y['record_start_time'] = R['start_time'] ? R['start_time'] : -1;
                            for (var r = 0; r < R['accounts']['length']; r++) {
                                var M = R['accounts'][r];
                                if (M['character']) {
                                    var g = M['character'],
                                        K = {};
                                    if (k) {
                                        var Y = M['views'];
                                        if (Y)
                                            for (var j = 0; j < Y['length']; j++)
                                                K[Y[j].slot] = Y[j]['item_id'];
                                    } else {
                                        var F = g['views'];
                                        if (F)
                                            for (var j = 0; j < F['length']; j++) {
                                                var w = F[j].slot,
                                                    T = F[j]['item_id'],
                                                    N = w - 1;
                                                K[N] = T;
                                            }
                                    }
                                    var O = [];
                                    for (var J in K)
                                        O.push({
                                            slot: parseInt(J),
                                            item_id: K[J]
                                        });
                                    M['views'] = O,
                                        s[M.seat] = M;
                                } else
                                    M['character'] = {
                                        charid: M['avatar_id'],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg['item_definition']['character'].get(M['avatar_id'])['init_skin'],
                                        is_upgraded: !1
                                    },
                                    M['avatar_id'] = M['character'].skin,
                                    M['views'] = [],
                                    s[M.seat] = M;
                            }
                            for (var H = game['GameUtility']['get_default_ai_skin'](), f = game['GameUtility']['get_default_ai_character'](), r = 0; r < s['length']; r++)
                                null == s[r] && (s[r] = {
                                    nickname: u,
                                    avatar_id: H,
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: f,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: H,
                                        is_upgraded: !1
                                    }
                                });
                            var i = Laya['Handler']['create'](y, function(Z) {
                                    game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                        game['Scene_MJ'].Inst['openMJRoom'](R['config'], s, Laya['Handler']['create'](y, function() {
                                            y['duringPaipu'] = !1,
                                                view['DesktopMgr'].Inst['paipu_config'] = o,
                                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](R['config'])), s, V, view['EMJMode']['paipu'], Laya['Handler']['create'](y, function() {
                                                    uiscript['UI_Replay'].Inst['initData'](Z),
                                                        uiscript['UI_Replay'].Inst['enable'] = !0,
                                                        Laya['timer'].once(1000, y, function() {
                                                            y['EnterMJ']();
                                                        }),
                                                        Laya['timer'].once(1500, y, function() {
                                                            view['DesktopMgr']['player_link_state'] = [view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY']],
                                                                uiscript['UI_DesktopInfo'].Inst['refreshLinks'](),
                                                                uiscript['UI_Loading'].Inst['close']();
                                                        }),
                                                        Laya['timer'].once(1000, y, function() {
                                                            uiscript['UI_Replay'].Inst['nextStep'](!0);
                                                        });
                                                }));
                                        }), Laya['Handler']['create'](y, function(Z) {
                                            return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.9 * Z);
                                        }, null, !1));
                                }),
                                z = {};
                            if (z['record'] = R, G.data && G.data['length'])
                                z.game = net['MessageWrapper']['decodeMessage'](G.data), i['runWith'](z);
                            else {
                                var d = G['data_url'];
                                game['LoadMgr']['httpload'](d, 'arraybuffer', !1, Laya['Handler']['create'](y, function(Z) {
                                    if (Z['success']) {
                                        var S = new Laya.Byte();
                                        S['writeArrayBuffer'](Z.data);
                                        var V = net['MessageWrapper']['decodeMessage'](S['getUint8Array'](0, S['length']));
                                        z.game = V,
                                            i['runWith'](z);
                                    } else
                                        uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2005) + G['data_url']), uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), y['duringPaipu'] = !1;
                                }));
                            }
                        }
                    }), void 0);
            }
        }
        Date.prototype.format = function(fmt) {
            var o = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S": this.getMilliseconds()
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